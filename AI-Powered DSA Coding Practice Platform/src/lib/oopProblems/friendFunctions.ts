import { Problem } from '../../types/problem';

export const FRIEND_FUNCTIONS_PROBLEMS: Problem[] = [
  {
    "id": "00000000-0000-4000-8007-000000000001",
    "book": "friendfunctions",
    "order_index": 1,
    "title": "#001 Global Friend Function Accessing Private Members",
    "slug": "friendfunctions-001-global-friend-function-accessing-private-members",
    "description": "Define a standalone global function as a friend of a Box class to access private dimensions.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Box(3, 4, 5)",
        "output": "Friend function calculated Volume: 60",
        "explanation": "Executes logic for Global Friend Function Accessing Private Members."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Global Friend Function Accessing Private Members\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Global Friend Function Accessing Private Members\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Global Friend Function Accessing Private Members\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:01Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000002",
    "book": "friendfunctions",
    "order_index": 2,
    "title": "#002 Friend Function Bridging Two Unrelated Classes",
    "slug": "friendfunctions-002-friend-function-bridging-two-unrelated-classes",
    "description": "Implement a friend function `findMax(ClassA, ClassB)` comparing private values across both classes.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "A(45) B(60)",
        "output": "Max value: 60 (From Class B)",
        "explanation": "Executes logic for Friend Function Bridging Two Unrelated Classes."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Bridging Two Unrelated Classes\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Bridging Two Unrelated Classes\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Bridging Two Unrelated Classes\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:02Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000003",
    "book": "friendfunctions",
    "order_index": 3,
    "title": "#003 Friend Class Full Private Member Access",
    "slug": "friendfunctions-003-friend-class-full-private-member-access",
    "description": "Declare class `EngineInspector` as friend of class `Engine` to access private diagnostics.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Engine(Temp: 95C, RPM: 3200)",
        "output": "Inspector: Temp=95C, RPM=3200 (Engine Healthy)",
        "explanation": "Executes logic for Friend Class Full Private Member Access."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Class Full Private Member Access\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Class Full Private Member Access\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Class Full Private Member Access\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:03Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000004",
    "book": "friendfunctions",
    "order_index": 4,
    "title": "#004 Overloading Stream Insertion Operator (operator<<) via Friend",
    "slug": "friendfunctions-004-overloading-stream-insertion-operator-operator-via",
    "description": "Overload `friend ostream& operator<<(ostream& os, const Point& p)` for custom stream printing.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Point(7, 12)",
        "output": "Output: Point(7, 12)",
        "explanation": "Executes logic for Overloading Stream Insertion Operator (operator<<) via Friend."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Overloading Stream Insertion Operator (operator<<) via Friend\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Overloading Stream Insertion Operator (operator<<) via Friend\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Overloading Stream Insertion Operator (operator<<) via Friend\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:04Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000005",
    "book": "friendfunctions",
    "order_index": 5,
    "title": "#005 Overloading Stream Extraction Operator (operator>>) via Friend",
    "slug": "friendfunctions-005-overloading-stream-extraction-operator-operator-vi",
    "description": "Overload `friend istream& operator>>(istream& is, Complex& c)` to parse formatted input stream.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Input '3.5 4.2'",
        "output": "Parsed Complex: 3.5 + 4.2i",
        "explanation": "Executes logic for Overloading Stream Extraction Operator (operator>>) via Friend."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Overloading Stream Extraction Operator (operator>>) via Friend\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Overloading Stream Extraction Operator (operator>>) via Friend\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Overloading Stream Extraction Operator (operator>>) via Friend\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:05Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000006",
    "book": "friendfunctions",
    "order_index": 6,
    "title": "#006 Overloading Binary Addition Operator (+) via Friend Function",
    "slug": "friendfunctions-006-overloading-binary-addition-operator-via-friend-fu",
    "description": "Implement `friend Complex operator+(const Complex& a, const Complex& b)` for symmetric addition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "(2+3i) + (4+5i)",
        "output": "Result: 6 + 8i",
        "explanation": "Executes logic for Overloading Binary Addition Operator (+) via Friend Function."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Overloading Binary Addition Operator (+) via Friend Function\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Overloading Binary Addition Operator (+) via Friend Function\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Overloading Binary Addition Operator (+) via Friend Function\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:06Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000007",
    "book": "friendfunctions",
    "order_index": 7,
    "title": "#007 Symmetric Binary Arithmetic with Primitives via Friend Function",
    "slug": "friendfunctions-007-symmetric-binary-arithmetic-with-primitives-via-fr",
    "description": "Allow `double + Complex` and `Complex + double` symmetrically using friend functions.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "5.0 + Complex(2, 3)",
        "output": "Result: 7 + 3i",
        "explanation": "Executes logic for Symmetric Binary Arithmetic with Primitives via Friend Function."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Symmetric Binary Arithmetic with Primitives via Friend Function\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Symmetric Binary Arithmetic with Primitives via Friend Function\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Symmetric Binary Arithmetic with Primitives via Friend Function\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:07Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000008",
    "book": "friendfunctions",
    "order_index": 8,
    "title": "#008 Member Function of Another Class as Friend",
    "slug": "friendfunctions-008-member-function-of-another-class-as-friend",
    "description": "Declare `void BankManager::audit(const Account& acc)` as friend of Account class.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Account #101 Balance $5000",
        "output": "BankManager audited Account #101: Balance $5000",
        "explanation": "Executes logic for Member Function of Another Class as Friend."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Member Function of Another Class as Friend\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Member Function of Another Class as Friend\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Member Function of Another Class as Friend\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:08Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000009",
    "book": "friendfunctions",
    "order_index": 9,
    "title": "#009 Friend Function with Forward Class Declaration",
    "slug": "friendfunctions-009-friend-function-with-forward-class-declaration",
    "description": "Use forward declaration `class ClassB;` before defining friend function in ClassA.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ClassA and ClassB",
        "output": "Forward declaration resolved friend relationship",
        "explanation": "Executes logic for Friend Function with Forward Class Declaration."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function with Forward Class Declaration\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function with Forward Class Declaration\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function with Forward Class Declaration\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:09Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000010",
    "book": "friendfunctions",
    "order_index": 10,
    "title": "#010 Mutual Friend Functions Between Two Classes",
    "slug": "friendfunctions-010-mutual-friend-functions-between-two-classes",
    "description": "Two classes `Vector3D` and `Matrix3x3` declare a shared transformation function as friend.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Transform Vector by Matrix",
        "output": "Transformed Vector: (10, 20, 30)",
        "explanation": "Executes logic for Mutual Friend Functions Between Two Classes."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Mutual Friend Functions Between Two Classes\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Mutual Friend Functions Between Two Classes\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Mutual Friend Functions Between Two Classes\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:10Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000011",
    "book": "friendfunctions",
    "order_index": 11,
    "title": "#011 Friend Function for Vector Dot Product",
    "slug": "friendfunctions-011-friend-function-for-vector-dot-product",
    "description": "Implement `friend double dotProduct(const Vector& u, const Vector& v)` accessing private arrays.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "u=(1,2,3) v=(4,5,6)",
        "output": "Dot Product: 32",
        "explanation": "Executes logic for Friend Function for Vector Dot Product."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function for Vector Dot Product\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function for Vector Dot Product\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function for Vector Dot Product\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:11Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000012",
    "book": "friendfunctions",
    "order_index": 12,
    "title": "#012 Friend Function for Distance Between Two Points",
    "slug": "friendfunctions-012-friend-function-for-distance-between-two-points",
    "description": "Compute Euclidean distance between two private Point objects using friend function.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "P1(0,0) P2(3,4)",
        "output": "Distance: 5.0",
        "explanation": "Executes logic for Friend Function for Distance Between Two Points."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function for Distance Between Two Points\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function for Distance Between Two Points\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function for Distance Between Two Points\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:12Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000013",
    "book": "friendfunctions",
    "order_index": 13,
    "title": "#013 Friend Function for Matrix Multiplication",
    "slug": "friendfunctions-013-friend-function-for-matrix-multiplication",
    "description": "Multiply two private Matrix storage classes via friend `multiply(const Matrix&, const Matrix&)`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "A(2x2) * B(2x2)",
        "output": "Matrix product computed via friend function",
        "explanation": "Executes logic for Friend Function for Matrix Multiplication."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function for Matrix Multiplication\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function for Matrix Multiplication\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function for Matrix Multiplication\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:13Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000014",
    "book": "friendfunctions",
    "order_index": 14,
    "title": "#014 Friendship is Not Inherited (Rule Verification)",
    "slug": "friendfunctions-014-friendship-is-not-inherited-rule-verification",
    "description": "Demonstrate that derived class does not automatically inherit friend access of base class.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Derived access",
        "output": "Base friend cannot access derived private members (Not inherited)",
        "explanation": "Executes logic for Friendship is Not Inherited (Rule Verification)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friendship is Not Inherited (Rule Verification)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friendship is Not Inherited (Rule Verification)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friendship is Not Inherited (Rule Verification)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:14Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000015",
    "book": "friendfunctions",
    "order_index": 15,
    "title": "#015 Friendship is Not Transitive (Rule Verification)",
    "slug": "friendfunctions-015-friendship-is-not-transitive-rule-verification",
    "description": "Demonstrate that friend of a friend does not have access (If A friends B, and B friends C, C is not friend of A).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "A -> B -> C",
        "output": "Non-transitive rule verified: C cannot access A",
        "explanation": "Executes logic for Friendship is Not Transitive (Rule Verification)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friendship is Not Transitive (Rule Verification)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friendship is Not Transitive (Rule Verification)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friendship is Not Transitive (Rule Verification)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:15Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000016",
    "book": "friendfunctions",
    "order_index": 16,
    "title": "#016 Friendship is Not Symmetric (Rule Verification)",
    "slug": "friendfunctions-016-friendship-is-not-symmetric-rule-verification",
    "description": "Demonstrate that class A granting friendship to class B does not mean B grants friendship to A.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "A friends B",
        "output": "B can access A, but A cannot access B",
        "explanation": "Executes logic for Friendship is Not Symmetric (Rule Verification)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friendship is Not Symmetric (Rule Verification)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friendship is Not Symmetric (Rule Verification)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friendship is Not Symmetric (Rule Verification)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:16Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000017",
    "book": "friendfunctions",
    "order_index": 17,
    "title": "#017 Friend Factory Function for Complex Construction",
    "slug": "friendfunctions-017-friend-factory-function-for-complex-construction",
    "description": "Implement a standalone friend factory function constructing specialized internal states.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Build Secure Object",
        "output": "Secure Object constructed with private keys via friend factory",
        "explanation": "Executes logic for Friend Factory Function for Complex Construction."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Factory Function for Complex Construction\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Factory Function for Complex Construction\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Factory Function for Complex Construction\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:17Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000018",
    "book": "friendfunctions",
    "order_index": 18,
    "title": "#018 Friend Function for Deep Equality Check",
    "slug": "friendfunctions-018-friend-function-for-deep-equality-check",
    "description": "Implement `friend bool areIdentical(const Tree&, const Tree&)` comparing private root nodes.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Tree1 Tree2",
        "output": "Trees identical: true",
        "explanation": "Executes logic for Friend Function for Deep Equality Check."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function for Deep Equality Check\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function for Deep Equality Check\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function for Deep Equality Check\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:18Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000019",
    "book": "friendfunctions",
    "order_index": 19,
    "title": "#019 Friend Function for Polynomial Addition",
    "slug": "friendfunctions-019-friend-function-for-polynomial-addition",
    "description": "Add two Polynomial objects accessing private coefficient arrays via friend function.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "(3x^2 + 2x) + (x^2 + 4)",
        "output": "Result: 4x^2 + 2x + 4",
        "explanation": "Executes logic for Friend Function for Polynomial Addition."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function for Polynomial Addition\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function for Polynomial Addition\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function for Polynomial Addition\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:19Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000020",
    "book": "friendfunctions",
    "order_index": 20,
    "title": "#020 Friend Function for Swap Operation",
    "slug": "friendfunctions-020-friend-function-for-swap-operation",
    "description": "Implement `friend void swap(MyString& a, MyString& b) noexcept` swapping private pointers.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Swap 'Hello' and 'World'",
        "output": "Swapped: a='World', b='Hello'",
        "explanation": "Executes logic for Friend Function for Swap Operation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function for Swap Operation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function for Swap Operation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function for Swap Operation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:20Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000021",
    "book": "friendfunctions",
    "order_index": 21,
    "title": "#021 Friend Class as Iterator for Custom Container",
    "slug": "friendfunctions-021-friend-class-as-iterator-for-custom-container",
    "description": "Implement `LinkedListIterator` as friend class of `LinkedList` accessing private node pointers.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Traverse list [10, 20, 30]",
        "output": "Iterator traversed: 10 -> 20 -> 30",
        "explanation": "Executes logic for Friend Class as Iterator for Custom Container."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Class as Iterator for Custom Container\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Class as Iterator for Custom Container\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Class as Iterator for Custom Container\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:21Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000022",
    "book": "friendfunctions",
    "order_index": 22,
    "title": "#022 Friend Class as Builder for Complex Object",
    "slug": "friendfunctions-022-friend-class-as-builder-for-complex-object",
    "description": "Implement `ComputerBuilder` as friend class constructing private `Computer` component fields.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Build PC (i7, 32GB, RTX4080)",
        "output": "Computer built: CPU=i7, RAM=32GB, GPU=RTX4080",
        "explanation": "Executes logic for Friend Class as Builder for Complex Object."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Class as Builder for Complex Object\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Class as Builder for Complex Object\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Class as Builder for Complex Object\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:22Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000023",
    "book": "friendfunctions",
    "order_index": 23,
    "title": "#023 Friend Function Accessing Protected Members",
    "slug": "friendfunctions-023-friend-function-accessing-protected-members",
    "description": "Show that friend function has access to both private and protected members of the class.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Read protected field",
        "output": "Friend function accessed protected member: OK",
        "explanation": "Executes logic for Friend Function Accessing Protected Members."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Accessing Protected Members\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Accessing Protected Members\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Accessing Protected Members\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:23Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000024",
    "book": "friendfunctions",
    "order_index": 24,
    "title": "#024 Templated Friend Function Inside Non-Template Class",
    "slug": "friendfunctions-024-templated-friend-function-inside-non-template-clas",
    "description": "Declare a templated friend function `template<typename T> friend void inspect(const T&)`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Inspect custom object",
        "output": "Templated friend inspected object state",
        "explanation": "Executes logic for Templated Friend Function Inside Non-Template Class."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Templated Friend Function Inside Non-Template Class\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Templated Friend Function Inside Non-Template Class\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Templated Friend Function Inside Non-Template Class\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:24Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000025",
    "book": "friendfunctions",
    "order_index": 25,
    "title": "#025 Templated Friend Function Inside Class Template",
    "slug": "friendfunctions-025-templated-friend-function-inside-class-template",
    "description": "Define friend function inside class template `template<typename T> class Container` with matching template parameter.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Container<int> printing",
        "output": "Stream printed Container<int>: [1, 2, 3]",
        "explanation": "Executes logic for Templated Friend Function Inside Class Template."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Templated Friend Function Inside Class Template\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Templated Friend Function Inside Class Template\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Templated Friend Function Inside Class Template\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:25Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000026",
    "book": "friendfunctions",
    "order_index": 26,
    "title": "#026 Friend Function Overloading Relational Operators",
    "slug": "friendfunctions-026-friend-function-overloading-relational-operators",
    "description": "Implement `friend bool operator==(const Date&, const Date&)` comparing day, month, year.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "2026-03-15 == 2026-03-15",
        "output": "Dates equal: true",
        "explanation": "Executes logic for Friend Function Overloading Relational Operators."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Overloading Relational Operators\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Overloading Relational Operators\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Overloading Relational Operators\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:26Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000027",
    "book": "friendfunctions",
    "order_index": 27,
    "title": "#027 Friend Function Overloading Less Than Operator (<)",
    "slug": "friendfunctions-027-friend-function-overloading-less-than-operator",
    "description": "Implement `friend bool operator<(const Person& a, const Person& b)` for sorting in std::sort.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Alice(25) < Bob(30)",
        "output": "True: Alice is younger than Bob",
        "explanation": "Executes logic for Friend Function Overloading Less Than Operator (<)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Overloading Less Than Operator (<)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Overloading Less Than Operator (<)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Overloading Less Than Operator (<)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:27Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000028",
    "book": "friendfunctions",
    "order_index": 28,
    "title": "#028 Friend Function for Complex Conjugate",
    "slug": "friendfunctions-028-friend-function-for-complex-conjugate",
    "description": "Implement `friend Complex conjugate(const Complex& c)` returning complex conjugate.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "3 + 4i",
        "output": "Conjugate: 3 - 4i",
        "explanation": "Executes logic for Friend Function for Complex Conjugate."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function for Complex Conjugate\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function for Complex Conjugate\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function for Complex Conjugate\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:28Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000029",
    "book": "friendfunctions",
    "order_index": 29,
    "title": "#029 Friend Function for BigInt Addition",
    "slug": "friendfunctions-029-friend-function-for-bigint-addition",
    "description": "Implement `friend BigInt operator+(const BigInt&, const BigInt&)` adding large numeric digit vectors.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "999999999 + 1",
        "output": "BigInt Sum: 1000000000",
        "explanation": "Executes logic for Friend Function for BigInt Addition."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function for BigInt Addition\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function for BigInt Addition\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function for BigInt Addition\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:29Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000030",
    "book": "friendfunctions",
    "order_index": 30,
    "title": "#030 Friend Unit Test Suite (White-Box Testing)",
    "slug": "friendfunctions-030-friend-unit-test-suite-white-box-testing",
    "description": "Declare a test fixture class as friend to test private internal state invariants directly.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Run Unit Tests",
        "output": "White-box tests passed: All 5 private invariants verified",
        "explanation": "Executes logic for Friend Unit Test Suite (White-Box Testing)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Unit Test Suite (White-Box Testing)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Unit Test Suite (White-Box Testing)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Unit Test Suite (White-Box Testing)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:30Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000031",
    "book": "friendfunctions",
    "order_index": 31,
    "title": "#031 Friend Function for Merging Two Encapsulated Sets",
    "slug": "friendfunctions-031-friend-function-for-merging-two-encapsulated-sets",
    "description": "Merge private elements of two CustomSet objects into a new CustomSet.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SetA{1,2} SetB{2,3}",
        "output": "Merged Set: {1, 2, 3}",
        "explanation": "Executes logic for Friend Function for Merging Two Encapsulated Sets."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function for Merging Two Encapsulated Sets\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function for Merging Two Encapsulated Sets\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function for Merging Two Encapsulated Sets\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:31Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000032",
    "book": "friendfunctions",
    "order_index": 32,
    "title": "#032 Friend Function for Interpolating Color Gradients",
    "slug": "friendfunctions-032-friend-function-for-interpolating-color-gradients",
    "description": "Compute lerp(Color a, Color b, double t) accessing private RGB values.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Color1(Red) Color2(Blue) t=0.5",
        "output": "Interpolated Color: Purple (128, 0, 128)",
        "explanation": "Executes logic for Friend Function for Interpolating Color Gradients."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function for Interpolating Color Gradients\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function for Interpolating Color Gradients\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function for Interpolating Color Gradients\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:32Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000033",
    "book": "friendfunctions",
    "order_index": 33,
    "title": "#033 Friend Function for Custom Hash Generation",
    "slug": "friendfunctions-033-friend-function-for-custom-hash-generation",
    "description": "Implement `friend size_t hash_value(const Key& k)` for injecting into hash tables.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Key('session_123')",
        "output": "Hash computed: 0xA789C14B",
        "explanation": "Executes logic for Friend Function for Custom Hash Generation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function for Custom Hash Generation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function for Custom Hash Generation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function for Custom Hash Generation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:33Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000034",
    "book": "friendfunctions",
    "order_index": 34,
    "title": "#034 Friend Function for Serializing Object to Binary Stream",
    "slug": "friendfunctions-034-friend-function-for-serializing-object-to-binary-s",
    "description": "Implement `friend void serialize(const DataObject&, ostream&)` writing private bytes.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DataObject(42, 'Alice')",
        "output": "Serialized 24 bytes to binary stream",
        "explanation": "Executes logic for Friend Function for Serializing Object to Binary Stream."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function for Serializing Object to Binary Stream\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function for Serializing Object to Binary Stream\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function for Serializing Object to Binary Stream\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:34Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000035",
    "book": "friendfunctions",
    "order_index": 35,
    "title": "#035 Friend Function for Deserializing Object from Binary Stream",
    "slug": "friendfunctions-035-friend-function-for-deserializing-object-from-bina",
    "description": "Implement `friend void deserialize(DataObject&, istream&)` reconstructing private fields.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Binary stream data",
        "output": "Deserialized DataObject: (42, 'Alice')",
        "explanation": "Executes logic for Friend Function for Deserializing Object from Binary Stream."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function for Deserializing Object from Binary Stream\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function for Deserializing Object from Binary Stream\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function for Deserializing Object from Binary Stream\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:35Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000036",
    "book": "friendfunctions",
    "order_index": 36,
    "title": "#036 Friend Class as Memento Caretaker",
    "slug": "friendfunctions-036-friend-class-as-memento-caretaker",
    "description": "Memento class grants friend access solely to Originator class.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Save and restore state",
        "output": "Originator state saved and restored via private Memento",
        "explanation": "Executes logic for Friend Class as Memento Caretaker."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Class as Memento Caretaker\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Class as Memento Caretaker\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Class as Memento Caretaker\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:36Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000037",
    "book": "friendfunctions",
    "order_index": 37,
    "title": "#037 Friend Function for Rational Number Division",
    "slug": "friendfunctions-037-friend-function-for-rational-number-division",
    "description": "Implement `friend Rational operator/(const Rational&, const Rational&)` with reciprocal multiplication.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "(3/4) / (2/3)",
        "output": "Result: 9/8",
        "explanation": "Executes logic for Friend Function for Rational Number Division."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function for Rational Number Division\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function for Rational Number Division\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function for Rational Number Division\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:37Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000038",
    "book": "friendfunctions",
    "order_index": 38,
    "title": "#038 Friend Function for Matrix Determinant",
    "slug": "friendfunctions-038-friend-function-for-matrix-determinant",
    "description": "Compute determinant of private matrix buffer via friend function `det(const Matrix&)`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Matrix 2x2 [[4,2],[3,1]]",
        "output": "Determinant: -2",
        "explanation": "Executes logic for Friend Function for Matrix Determinant."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function for Matrix Determinant\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function for Matrix Determinant\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function for Matrix Determinant\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:38Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000039",
    "book": "friendfunctions",
    "order_index": 39,
    "title": "#039 Friend Function for Bezier Curve Evaluation",
    "slug": "friendfunctions-039-friend-function-for-bezier-curve-evaluation",
    "description": "Evaluate quadratic Bezier curve point given 3 private Point control points.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "P0(0,0), P1(5,10), P2(10,0), t=0.5",
        "output": "Bezier Point: (5, 5)",
        "explanation": "Executes logic for Friend Function for Bezier Curve Evaluation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function for Bezier Curve Evaluation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function for Bezier Curve Evaluation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function for Bezier Curve Evaluation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:39Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000040",
    "book": "friendfunctions",
    "order_index": 40,
    "title": "#040 Friend Function for Safe Memory Buffer Copy",
    "slug": "friendfunctions-040-friend-function-for-safe-memory-buffer-copy",
    "description": "Copy private raw buffer bytes between two CustomBuffer objects.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "BufferA -> BufferB",
        "output": "Copied 1024 bytes safely via friend function",
        "explanation": "Executes logic for Friend Function for Safe Memory Buffer Copy."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function for Safe Memory Buffer Copy\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function for Safe Memory Buffer Copy\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function for Safe Memory Buffer Copy\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:40Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000041",
    "book": "friendfunctions",
    "order_index": 41,
    "title": "#041 Friend Function for Cryptographic Signature Verification",
    "slug": "friendfunctions-041-friend-function-for-cryptographic-signature-verifi",
    "description": "Verify RSA digital signature against private hash digest using friend function.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Message + Sig + PublicKey",
        "output": "Signature Verified: Valid",
        "explanation": "Executes logic for Friend Function for Cryptographic Signature Verification."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function for Cryptographic Signature Verification\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function for Cryptographic Signature Verification\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function for Cryptographic Signature Verification\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:41Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000042",
    "book": "friendfunctions",
    "order_index": 42,
    "title": "#042 Friend Function for Quaternion Multiplication",
    "slug": "friendfunctions-042-friend-function-for-quaternion-multiplication",
    "description": "Multiply two private Quaternion objects via `friend Quaternion operator*(const Quaternion&, const Quaternion&)`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Q1 * Q2",
        "output": "Quaternion product computed",
        "explanation": "Executes logic for Friend Function for Quaternion Multiplication."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function for Quaternion Multiplication\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function for Quaternion Multiplication\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function for Quaternion Multiplication\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:42Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000043",
    "book": "friendfunctions",
    "order_index": 43,
    "title": "#043 Friend Function for Angle Between Vectors",
    "slug": "friendfunctions-043-friend-function-for-angle-between-vectors",
    "description": "Compute angle in radians between two private 2D vectors via dot product and magnitudes.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "V1(1,0) V2(0,1)",
        "output": "Angle: 1.5708 rad (90 deg)",
        "explanation": "Executes logic for Friend Function for Angle Between Vectors."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function for Angle Between Vectors\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function for Angle Between Vectors\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function for Angle Between Vectors\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:43Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000044",
    "book": "friendfunctions",
    "order_index": 44,
    "title": "#044 Friend Function for Interval Overlap Check",
    "slug": "friendfunctions-044-friend-function-for-interval-overlap-check",
    "description": "Check if two private Interval objects [a, b] and [c, d] overlap.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 5] and [3, 7]",
        "output": "Intervals overlap: true",
        "explanation": "Executes logic for Friend Function for Interval Overlap Check."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function for Interval Overlap Check\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function for Interval Overlap Check\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function for Interval Overlap Check\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:44Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000045",
    "book": "friendfunctions",
    "order_index": 45,
    "title": "#045 Friend Function for Bounding Box Collision (AABB)",
    "slug": "friendfunctions-045-friend-function-for-bounding-box-collision-aabb",
    "description": "Check if two private 2D Axis-Aligned Bounding Boxes collide.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Box1(0,0,4,4) Box2(2,2,6,6)",
        "output": "Collision detected: true",
        "explanation": "Executes logic for Friend Function for Bounding Box Collision (AABB)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function for Bounding Box Collision (AABB)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function for Bounding Box Collision (AABB)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function for Bounding Box Collision (AABB)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:45Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000046",
    "book": "friendfunctions",
    "order_index": 46,
    "title": "#046 Friend Function for Graph Edge Weight Access",
    "slug": "friendfunctions-046-friend-function-for-graph-edge-weight-access",
    "description": "Graph class declares PathFinder as friend to inspect private edge weights.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Find Shortest Path A to C",
        "output": "Shortest Path: A -> B -> C (Cost: 15)",
        "explanation": "Executes logic for Friend Function for Graph Edge Weight Access."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function for Graph Edge Weight Access\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function for Graph Edge Weight Access\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function for Graph Edge Weight Access\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:46Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000047",
    "book": "friendfunctions",
    "order_index": 47,
    "title": "#047 Friend Function for Sound Sample Mixing",
    "slug": "friendfunctions-047-friend-function-for-sound-sample-mixing",
    "description": "Mix two private AudioTrack audio buffers via `friend AudioTrack mix(const AudioTrack&, const AudioTrack&)`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Track1 + Track2",
        "output": "Audio tracks mixed into composite track",
        "explanation": "Executes logic for Friend Function for Sound Sample Mixing."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function for Sound Sample Mixing\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function for Sound Sample Mixing\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function for Sound Sample Mixing\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:47Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000048",
    "book": "friendfunctions",
    "order_index": 48,
    "title": "#048 Friend Function for Physics Collision Impulse",
    "slug": "friendfunctions-048-friend-function-for-physics-collision-impulse",
    "description": "Calculate impulse response between two private RigidBody objects on collision.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "BodyA(1kg, 5m/s) BodyB(2kg, 0m/s)",
        "output": "Collision resolved: BodyA(-1.67m/s), BodyB(3.33m/s)",
        "explanation": "Executes logic for Friend Function for Physics Collision Impulse."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function for Physics Collision Impulse\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function for Physics Collision Impulse\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function for Physics Collision Impulse\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:48Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000049",
    "book": "friendfunctions",
    "order_index": 49,
    "title": "#049 Friend Function for Polygon Centroid Calculation",
    "slug": "friendfunctions-049-friend-function-for-polygon-centroid-calculation",
    "description": "Compute centroid coordinates of a Polygon accessing private vertices vector.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Triangle (0,0), (6,0), (0,6)",
        "output": "Centroid: (2, 2)",
        "explanation": "Executes logic for Friend Function for Polygon Centroid Calculation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function for Polygon Centroid Calculation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function for Polygon Centroid Calculation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function for Polygon Centroid Calculation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:49Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000050",
    "book": "friendfunctions",
    "order_index": 50,
    "title": "#050 Friend Function for Currency Exchange Fee Deduction",
    "slug": "friendfunctions-050-friend-function-for-currency-exchange-fee-deductio",
    "description": "Calculate transaction fee and deduct from private balances of two Wallet objects.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Transfer $100 with $2 fee",
        "output": "Sender: -$102, Receiver: +$100, Fee collected: $2",
        "explanation": "Executes logic for Friend Function for Currency Exchange Fee Deduction."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function for Currency Exchange Fee Deduction\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function for Currency Exchange Fee Deduction\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function for Currency Exchange Fee Deduction\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:50Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000051",
    "book": "friendfunctions",
    "order_index": 51,
    "title": "#051 Friend Function Problem 51",
    "slug": "friendfunctions-051-friend-function-problem-51",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #51.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 51 10",
        "output": "Friend operation #51 executed across private boundaries (Code: 510)",
        "explanation": "Executes logic for Friend Function Problem 51."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 51\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 51\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 51\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:51Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000052",
    "book": "friendfunctions",
    "order_index": 52,
    "title": "#052 Friend Function Problem 52",
    "slug": "friendfunctions-052-friend-function-problem-52",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #52.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 52 10",
        "output": "Friend operation #52 executed across private boundaries (Code: 520)",
        "explanation": "Executes logic for Friend Function Problem 52."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 52\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 52\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 52\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:52Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000053",
    "book": "friendfunctions",
    "order_index": 53,
    "title": "#053 Friend Function Problem 53",
    "slug": "friendfunctions-053-friend-function-problem-53",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #53.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 53 10",
        "output": "Friend operation #53 executed across private boundaries (Code: 530)",
        "explanation": "Executes logic for Friend Function Problem 53."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 53\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 53\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 53\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:53Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000054",
    "book": "friendfunctions",
    "order_index": 54,
    "title": "#054 Friend Function Problem 54",
    "slug": "friendfunctions-054-friend-function-problem-54",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #54.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 54 10",
        "output": "Friend operation #54 executed across private boundaries (Code: 540)",
        "explanation": "Executes logic for Friend Function Problem 54."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 54\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 54\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 54\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:54Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000055",
    "book": "friendfunctions",
    "order_index": 55,
    "title": "#055 Friend Function Problem 55",
    "slug": "friendfunctions-055-friend-function-problem-55",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #55.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 55 10",
        "output": "Friend operation #55 executed across private boundaries (Code: 550)",
        "explanation": "Executes logic for Friend Function Problem 55."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 55\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 55\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 55\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:55Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000056",
    "book": "friendfunctions",
    "order_index": 56,
    "title": "#056 Friend Function Problem 56",
    "slug": "friendfunctions-056-friend-function-problem-56",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #56.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 56 10",
        "output": "Friend operation #56 executed across private boundaries (Code: 560)",
        "explanation": "Executes logic for Friend Function Problem 56."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 56\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 56\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 56\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:56Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000057",
    "book": "friendfunctions",
    "order_index": 57,
    "title": "#057 Friend Function Problem 57",
    "slug": "friendfunctions-057-friend-function-problem-57",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #57.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 57 10",
        "output": "Friend operation #57 executed across private boundaries (Code: 570)",
        "explanation": "Executes logic for Friend Function Problem 57."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 57\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 57\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 57\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:57Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000058",
    "book": "friendfunctions",
    "order_index": 58,
    "title": "#058 Friend Function Problem 58",
    "slug": "friendfunctions-058-friend-function-problem-58",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #58.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 58 10",
        "output": "Friend operation #58 executed across private boundaries (Code: 580)",
        "explanation": "Executes logic for Friend Function Problem 58."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 58\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 58\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 58\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:58Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000059",
    "book": "friendfunctions",
    "order_index": 59,
    "title": "#059 Friend Function Problem 59",
    "slug": "friendfunctions-059-friend-function-problem-59",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #59.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 59 10",
        "output": "Friend operation #59 executed across private boundaries (Code: 590)",
        "explanation": "Executes logic for Friend Function Problem 59."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 59\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 59\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 59\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:59Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000060",
    "book": "friendfunctions",
    "order_index": 60,
    "title": "#060 Friend Function Problem 60",
    "slug": "friendfunctions-060-friend-function-problem-60",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #60.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 60 10",
        "output": "Friend operation #60 executed across private boundaries (Code: 600)",
        "explanation": "Executes logic for Friend Function Problem 60."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 60\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 60\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 60\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:00Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000061",
    "book": "friendfunctions",
    "order_index": 61,
    "title": "#061 Friend Function Problem 61",
    "slug": "friendfunctions-061-friend-function-problem-61",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #61.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 61 10",
        "output": "Friend operation #61 executed across private boundaries (Code: 610)",
        "explanation": "Executes logic for Friend Function Problem 61."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 61\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 61\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 61\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:01Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000062",
    "book": "friendfunctions",
    "order_index": 62,
    "title": "#062 Friend Function Problem 62",
    "slug": "friendfunctions-062-friend-function-problem-62",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #62.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 62 10",
        "output": "Friend operation #62 executed across private boundaries (Code: 620)",
        "explanation": "Executes logic for Friend Function Problem 62."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 62\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 62\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 62\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:02Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000063",
    "book": "friendfunctions",
    "order_index": 63,
    "title": "#063 Friend Function Problem 63",
    "slug": "friendfunctions-063-friend-function-problem-63",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #63.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 63 10",
        "output": "Friend operation #63 executed across private boundaries (Code: 630)",
        "explanation": "Executes logic for Friend Function Problem 63."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 63\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 63\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 63\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:03Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000064",
    "book": "friendfunctions",
    "order_index": 64,
    "title": "#064 Friend Function Problem 64",
    "slug": "friendfunctions-064-friend-function-problem-64",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #64.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 64 10",
        "output": "Friend operation #64 executed across private boundaries (Code: 640)",
        "explanation": "Executes logic for Friend Function Problem 64."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 64\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 64\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 64\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:04Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000065",
    "book": "friendfunctions",
    "order_index": 65,
    "title": "#065 Friend Function Problem 65",
    "slug": "friendfunctions-065-friend-function-problem-65",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #65.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 65 10",
        "output": "Friend operation #65 executed across private boundaries (Code: 650)",
        "explanation": "Executes logic for Friend Function Problem 65."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 65\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 65\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 65\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:05Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000066",
    "book": "friendfunctions",
    "order_index": 66,
    "title": "#066 Friend Function Problem 66",
    "slug": "friendfunctions-066-friend-function-problem-66",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #66.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 66 10",
        "output": "Friend operation #66 executed across private boundaries (Code: 660)",
        "explanation": "Executes logic for Friend Function Problem 66."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 66\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 66\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 66\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:06Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000067",
    "book": "friendfunctions",
    "order_index": 67,
    "title": "#067 Friend Function Problem 67",
    "slug": "friendfunctions-067-friend-function-problem-67",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #67.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 67 10",
        "output": "Friend operation #67 executed across private boundaries (Code: 670)",
        "explanation": "Executes logic for Friend Function Problem 67."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 67\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 67\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 67\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:07Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000068",
    "book": "friendfunctions",
    "order_index": 68,
    "title": "#068 Friend Function Problem 68",
    "slug": "friendfunctions-068-friend-function-problem-68",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #68.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 68 10",
        "output": "Friend operation #68 executed across private boundaries (Code: 680)",
        "explanation": "Executes logic for Friend Function Problem 68."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 68\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 68\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 68\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:08Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000069",
    "book": "friendfunctions",
    "order_index": 69,
    "title": "#069 Friend Function Problem 69",
    "slug": "friendfunctions-069-friend-function-problem-69",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #69.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 69 10",
        "output": "Friend operation #69 executed across private boundaries (Code: 690)",
        "explanation": "Executes logic for Friend Function Problem 69."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 69\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 69\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 69\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:09Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000070",
    "book": "friendfunctions",
    "order_index": 70,
    "title": "#070 Friend Function Problem 70",
    "slug": "friendfunctions-070-friend-function-problem-70",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #70.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 70 10",
        "output": "Friend operation #70 executed across private boundaries (Code: 700)",
        "explanation": "Executes logic for Friend Function Problem 70."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 70\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 70\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 70\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:10Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000071",
    "book": "friendfunctions",
    "order_index": 71,
    "title": "#071 Friend Function Problem 71",
    "slug": "friendfunctions-071-friend-function-problem-71",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #71.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 71 10",
        "output": "Friend operation #71 executed across private boundaries (Code: 710)",
        "explanation": "Executes logic for Friend Function Problem 71."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 71\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 71\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 71\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:11Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000072",
    "book": "friendfunctions",
    "order_index": 72,
    "title": "#072 Friend Function Problem 72",
    "slug": "friendfunctions-072-friend-function-problem-72",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #72.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 72 10",
        "output": "Friend operation #72 executed across private boundaries (Code: 720)",
        "explanation": "Executes logic for Friend Function Problem 72."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 72\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 72\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 72\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:12Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000073",
    "book": "friendfunctions",
    "order_index": 73,
    "title": "#073 Friend Function Problem 73",
    "slug": "friendfunctions-073-friend-function-problem-73",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #73.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 73 10",
        "output": "Friend operation #73 executed across private boundaries (Code: 730)",
        "explanation": "Executes logic for Friend Function Problem 73."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 73\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 73\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 73\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:13Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000074",
    "book": "friendfunctions",
    "order_index": 74,
    "title": "#074 Friend Function Problem 74",
    "slug": "friendfunctions-074-friend-function-problem-74",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #74.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 74 10",
        "output": "Friend operation #74 executed across private boundaries (Code: 740)",
        "explanation": "Executes logic for Friend Function Problem 74."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 74\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 74\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 74\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:14Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000075",
    "book": "friendfunctions",
    "order_index": 75,
    "title": "#075 Friend Function Problem 75",
    "slug": "friendfunctions-075-friend-function-problem-75",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #75.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 75 10",
        "output": "Friend operation #75 executed across private boundaries (Code: 750)",
        "explanation": "Executes logic for Friend Function Problem 75."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 75\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 75\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 75\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:15Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000076",
    "book": "friendfunctions",
    "order_index": 76,
    "title": "#076 Friend Function Problem 76",
    "slug": "friendfunctions-076-friend-function-problem-76",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #76.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 76 10",
        "output": "Friend operation #76 executed across private boundaries (Code: 760)",
        "explanation": "Executes logic for Friend Function Problem 76."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 76\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 76\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 76\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:16Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000077",
    "book": "friendfunctions",
    "order_index": 77,
    "title": "#077 Friend Function Problem 77",
    "slug": "friendfunctions-077-friend-function-problem-77",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #77.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 77 10",
        "output": "Friend operation #77 executed across private boundaries (Code: 770)",
        "explanation": "Executes logic for Friend Function Problem 77."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 77\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 77\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 77\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:17Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000078",
    "book": "friendfunctions",
    "order_index": 78,
    "title": "#078 Friend Function Problem 78",
    "slug": "friendfunctions-078-friend-function-problem-78",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #78.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 78 10",
        "output": "Friend operation #78 executed across private boundaries (Code: 780)",
        "explanation": "Executes logic for Friend Function Problem 78."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 78\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 78\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 78\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:18Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000079",
    "book": "friendfunctions",
    "order_index": 79,
    "title": "#079 Friend Function Problem 79",
    "slug": "friendfunctions-079-friend-function-problem-79",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #79.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 79 10",
        "output": "Friend operation #79 executed across private boundaries (Code: 790)",
        "explanation": "Executes logic for Friend Function Problem 79."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 79\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 79\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 79\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:19Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000080",
    "book": "friendfunctions",
    "order_index": 80,
    "title": "#080 Friend Function Problem 80",
    "slug": "friendfunctions-080-friend-function-problem-80",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #80.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 80 10",
        "output": "Friend operation #80 executed across private boundaries (Code: 800)",
        "explanation": "Executes logic for Friend Function Problem 80."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 80\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 80\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 80\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:20Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000081",
    "book": "friendfunctions",
    "order_index": 81,
    "title": "#081 Friend Function Problem 81",
    "slug": "friendfunctions-081-friend-function-problem-81",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #81.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 81 10",
        "output": "Friend operation #81 executed across private boundaries (Code: 810)",
        "explanation": "Executes logic for Friend Function Problem 81."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 81\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 81\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 81\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:21Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000082",
    "book": "friendfunctions",
    "order_index": 82,
    "title": "#082 Friend Function Problem 82",
    "slug": "friendfunctions-082-friend-function-problem-82",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #82.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 82 10",
        "output": "Friend operation #82 executed across private boundaries (Code: 820)",
        "explanation": "Executes logic for Friend Function Problem 82."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 82\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 82\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 82\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:22Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000083",
    "book": "friendfunctions",
    "order_index": 83,
    "title": "#083 Friend Function Problem 83",
    "slug": "friendfunctions-083-friend-function-problem-83",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #83.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 83 10",
        "output": "Friend operation #83 executed across private boundaries (Code: 830)",
        "explanation": "Executes logic for Friend Function Problem 83."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 83\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 83\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 83\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:23Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000084",
    "book": "friendfunctions",
    "order_index": 84,
    "title": "#084 Friend Function Problem 84",
    "slug": "friendfunctions-084-friend-function-problem-84",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #84.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 84 10",
        "output": "Friend operation #84 executed across private boundaries (Code: 840)",
        "explanation": "Executes logic for Friend Function Problem 84."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 84\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 84\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 84\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:24Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000085",
    "book": "friendfunctions",
    "order_index": 85,
    "title": "#085 Friend Function Problem 85",
    "slug": "friendfunctions-085-friend-function-problem-85",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #85.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 85 10",
        "output": "Friend operation #85 executed across private boundaries (Code: 850)",
        "explanation": "Executes logic for Friend Function Problem 85."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 85\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 85\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 85\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:25Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000086",
    "book": "friendfunctions",
    "order_index": 86,
    "title": "#086 Friend Function Problem 86",
    "slug": "friendfunctions-086-friend-function-problem-86",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #86.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 86 10",
        "output": "Friend operation #86 executed across private boundaries (Code: 860)",
        "explanation": "Executes logic for Friend Function Problem 86."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 86\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 86\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 86\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:26Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000087",
    "book": "friendfunctions",
    "order_index": 87,
    "title": "#087 Friend Function Problem 87",
    "slug": "friendfunctions-087-friend-function-problem-87",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #87.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 87 10",
        "output": "Friend operation #87 executed across private boundaries (Code: 870)",
        "explanation": "Executes logic for Friend Function Problem 87."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 87\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 87\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 87\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:27Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000088",
    "book": "friendfunctions",
    "order_index": 88,
    "title": "#088 Friend Function Problem 88",
    "slug": "friendfunctions-088-friend-function-problem-88",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #88.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 88 10",
        "output": "Friend operation #88 executed across private boundaries (Code: 880)",
        "explanation": "Executes logic for Friend Function Problem 88."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 88\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 88\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 88\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:28Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000089",
    "book": "friendfunctions",
    "order_index": 89,
    "title": "#089 Friend Function Problem 89",
    "slug": "friendfunctions-089-friend-function-problem-89",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #89.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 89 10",
        "output": "Friend operation #89 executed across private boundaries (Code: 890)",
        "explanation": "Executes logic for Friend Function Problem 89."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 89\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 89\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 89\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:29Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000090",
    "book": "friendfunctions",
    "order_index": 90,
    "title": "#090 Friend Function Problem 90",
    "slug": "friendfunctions-090-friend-function-problem-90",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #90.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 90 10",
        "output": "Friend operation #90 executed across private boundaries (Code: 900)",
        "explanation": "Executes logic for Friend Function Problem 90."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 90\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 90\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 90\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:30Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000091",
    "book": "friendfunctions",
    "order_index": 91,
    "title": "#091 Friend Function Problem 91",
    "slug": "friendfunctions-091-friend-function-problem-91",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #91.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 91 10",
        "output": "Friend operation #91 executed across private boundaries (Code: 910)",
        "explanation": "Executes logic for Friend Function Problem 91."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 91\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 91\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 91\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:31Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000092",
    "book": "friendfunctions",
    "order_index": 92,
    "title": "#092 Friend Function Problem 92",
    "slug": "friendfunctions-092-friend-function-problem-92",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #92.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 92 10",
        "output": "Friend operation #92 executed across private boundaries (Code: 920)",
        "explanation": "Executes logic for Friend Function Problem 92."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 92\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 92\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 92\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:32Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000093",
    "book": "friendfunctions",
    "order_index": 93,
    "title": "#093 Friend Function Problem 93",
    "slug": "friendfunctions-093-friend-function-problem-93",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #93.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 93 10",
        "output": "Friend operation #93 executed across private boundaries (Code: 930)",
        "explanation": "Executes logic for Friend Function Problem 93."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 93\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 93\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 93\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:33Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000094",
    "book": "friendfunctions",
    "order_index": 94,
    "title": "#094 Friend Function Problem 94",
    "slug": "friendfunctions-094-friend-function-problem-94",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #94.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 94 10",
        "output": "Friend operation #94 executed across private boundaries (Code: 940)",
        "explanation": "Executes logic for Friend Function Problem 94."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 94\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 94\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 94\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:34Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000095",
    "book": "friendfunctions",
    "order_index": 95,
    "title": "#095 Friend Function Problem 95",
    "slug": "friendfunctions-095-friend-function-problem-95",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #95.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 95 10",
        "output": "Friend operation #95 executed across private boundaries (Code: 950)",
        "explanation": "Executes logic for Friend Function Problem 95."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 95\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 95\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 95\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:35Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000096",
    "book": "friendfunctions",
    "order_index": 96,
    "title": "#096 Friend Function Problem 96",
    "slug": "friendfunctions-096-friend-function-problem-96",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #96.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 96 10",
        "output": "Friend operation #96 executed across private boundaries (Code: 960)",
        "explanation": "Executes logic for Friend Function Problem 96."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 96\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 96\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 96\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:36Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000097",
    "book": "friendfunctions",
    "order_index": 97,
    "title": "#097 Friend Function Problem 97",
    "slug": "friendfunctions-097-friend-function-problem-97",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #97.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 97 10",
        "output": "Friend operation #97 executed across private boundaries (Code: 970)",
        "explanation": "Executes logic for Friend Function Problem 97."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 97\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 97\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 97\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:37Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000098",
    "book": "friendfunctions",
    "order_index": 98,
    "title": "#098 Friend Function Problem 98",
    "slug": "friendfunctions-098-friend-function-problem-98",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #98.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 98 10",
        "output": "Friend operation #98 executed across private boundaries (Code: 980)",
        "explanation": "Executes logic for Friend Function Problem 98."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 98\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 98\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 98\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:38Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000099",
    "book": "friendfunctions",
    "order_index": 99,
    "title": "#099 Friend Function Problem 99",
    "slug": "friendfunctions-099-friend-function-problem-99",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #99.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 99 10",
        "output": "Friend operation #99 executed across private boundaries (Code: 990)",
        "explanation": "Executes logic for Friend Function Problem 99."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 99\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 99\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 99\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:39Z"
  },
  {
    "id": "00000000-0000-4000-8007-000000000100",
    "book": "friendfunctions",
    "order_index": 100,
    "title": "#100 Friend Function Problem 100",
    "slug": "friendfunctions-100-friend-function-problem-100",
    "description": "Utilize friend functions or friend classes for cross-class operations, operator overloading, or subsystem coordination in scenario #100.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Friend Functions & Classes",
    "tags": [
      "Friend Functions",
      "Friend Classes",
      "Operator Overloading",
      "Encapsulation Bridge"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FRIEND_TEST 100 10",
        "output": "Friend operation #100 executed across private boundaries (Code: 1000)",
        "explanation": "Executes logic for Friend Function Problem 100."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Problem 100\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Problem 100\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Problem 100\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:40Z"
  }
];
