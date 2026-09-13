import { Problem } from '../../types/problem';

export const SCOPE_PROBLEMS: Problem[] = [
  {
    "id": "00000000-0000-4000-7005-000000000001",
    "book": "scope",
    "order_index": 1,
    "title": "#001 Local vs Global Variable Scope",
    "slug": "scope-001-local-vs-global-variable-scope",
    "description": "Demonstrate local variable shadowing global variable with same name and access global via :: operator.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "10 20",
        "output": "Local x: 20, Global ::x: 10",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Local vs Global Variable Scope."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Local vs Global Variable Scope\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Local vs Global Variable Scope\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Local vs Global Variable Scope\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:01Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000002",
    "book": "scope",
    "order_index": 2,
    "title": "#002 Block Scope Inside If-Else Blocks",
    "slug": "scope-002-block-scope-inside-if-else-blocks",
    "description": "Demonstrate variables declared inside if or else blocks go out of scope upon block termination.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "5",
        "output": "Inside block: 10, Outside block: 5",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Block Scope Inside If-Else Blocks."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Block Scope Inside If-Else Blocks\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Block Scope Inside If-Else Blocks\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Block Scope Inside If-Else Blocks\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:02Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000003",
    "book": "scope",
    "order_index": 3,
    "title": "#003 Static Local Variable Counter",
    "slug": "scope-003-static-local-variable-counter",
    "description": "Demonstrate static local variable retaining its value between successive function calls.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "3",
        "output": "Call 1: 1, Call 2: 2, Call 3: 3",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Static Local Variable Counter."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Static Local Variable Counter\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Static Local Variable Counter\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Static Local Variable Counter\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:03Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000004",
    "book": "scope",
    "order_index": 4,
    "title": "#004 Loop Variable Scope in For Loop",
    "slug": "scope-004-loop-variable-scope-in-for-loop",
    "description": "Demonstrate variable declared in for loop header (for(int i=0;...)) is not accessible outside loop.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "None",
        "output": "Loop index i scoped strictly to for-loop body",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Loop Variable Scope in For Loop."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Variable Scope in For Loop\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Loop Variable Scope in For Loop\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Loop Variable Scope in For Loop\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:04Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000005",
    "book": "scope",
    "order_index": 5,
    "title": "#005 Namespace Scope and Scope Resolution",
    "slug": "scope-005-namespace-scope-and-scope-resolution",
    "description": "Define custom namespace MyMath and access functions using scope resolution operator (MyMath::add).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "12 8",
        "output": "MyMath::add(12, 8) = 20",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Namespace Scope and Scope Resolution."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Namespace Scope and Scope Resolution\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Namespace Scope and Scope Resolution\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Namespace Scope and Scope Resolution\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:05Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000006",
    "book": "scope",
    "order_index": 6,
    "title": "#006 Nested Namespaces Scope (C++17)",
    "slug": "scope-006-nested-namespaces-scope-c-17",
    "description": "Demonstrate nested namespace syntax A::B::C and accessing nested functions.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "15",
        "output": "A::B::C::compute(15) = 30",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Nested Namespaces Scope (C++17)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Nested Namespaces Scope (C++17)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Nested Namespaces Scope (C++17)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Nested Namespaces Scope (C++17)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:06Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000007",
    "book": "scope",
    "order_index": 7,
    "title": "#007 Anonymous (Unnamed) Namespace Scope",
    "slug": "scope-007-anonymous-unnamed-namespace-scope",
    "description": "Demonstrate anonymous namespace restricting symbol linkage strictly to current translation unit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "None",
        "output": "Symbol scoped internally to translation unit",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Anonymous (Unnamed) Namespace Scope."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Anonymous (Unnamed) Namespace Scope\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Anonymous (Unnamed) Namespace Scope\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Anonymous (Unnamed) Namespace Scope\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:07Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000008",
    "book": "scope",
    "order_index": 8,
    "title": "#008 Variable Shadowing in Nested Blocks",
    "slug": "scope-008-variable-shadowing-in-nested-blocks",
    "description": "Demonstrate multiple levels of nested blocks shadowing variable names.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "1",
        "output": "Level 1: 10, Level 2: 20, Level 3: 30",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Variable Shadowing in Nested Blocks."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Shadowing in Nested Blocks\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Variable Shadowing in Nested Blocks\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Variable Shadowing in Nested Blocks\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:08Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000009",
    "book": "scope",
    "order_index": 9,
    "title": "#009 Lifetime of Temporaries in Expressions",
    "slug": "scope-009-lifetime-of-temporaries-in-expressions",
    "description": "Demonstrate lifetime of temporary object ending at the end of the full expression statement.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "None",
        "output": "Temporary constructed and destructed at semicolon",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Lifetime of Temporaries in Expressions."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lifetime of Temporaries in Expressions\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lifetime of Temporaries in Expressions\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lifetime of Temporaries in Expressions\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:09Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000010",
    "book": "scope",
    "order_index": 10,
    "title": "#010 Static Member Variable Scope in Class",
    "slug": "scope-010-static-member-variable-scope-in-class",
    "description": "Declare static member variable in class, define it in file scope, and access via ClassName::staticVar.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "50",
        "output": "ClassName::count = 50",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Static Member Variable Scope in Class."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Static Member Variable Scope in Class\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Static Member Variable Scope in Class\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Static Member Variable Scope in Class\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:10Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000011",
    "book": "scope",
    "order_index": 11,
    "title": "#011 Enum Class Scope Resolution",
    "slug": "scope-011-enum-class-scope-resolution",
    "description": "Demonstrate enum class requiring explicit scope qualification (Color::Red).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Color::Blue",
        "output": "Color::Blue (Scoped safely)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Enum Class Scope Resolution."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Enum Class Scope Resolution\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Enum Class Scope Resolution\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Enum Class Scope Resolution\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:11Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000012",
    "book": "scope",
    "order_index": 12,
    "title": "#012 Function Scope and Goto Labels",
    "slug": "scope-012-function-scope-and-goto-labels",
    "description": "Demonstrate goto labels have function scope and can only be jumped to within same function.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "None",
        "output": "Label reached within function scope",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Function Scope and Goto Labels."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Function Scope and Goto Labels\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Function Scope and Goto Labels\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Function Scope and Goto Labels\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:12Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000013",
    "book": "scope",
    "order_index": 13,
    "title": "#013 Extern Global Variable Declaration",
    "slug": "scope-013-extern-global-variable-declaration",
    "description": "Demonstrate extern keyword sharing a global variable across multiple files.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "100",
        "output": "Extern variable value: 100",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Extern Global Variable Declaration."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Extern Global Variable Declaration\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Extern Global Variable Declaration\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Extern Global Variable Declaration\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:13Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000014",
    "book": "scope",
    "order_index": 14,
    "title": "#014 Scope of Struct / Class Definitions",
    "slug": "scope-014-scope-of-struct-class-definitions",
    "description": "Demonstrate defining local struct inside a function versus file-level global struct scope.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Alice 90",
        "output": "Local struct instantiated within function scope",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope of Struct / Class Definitions."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope of Struct / Class Definitions\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope of Struct / Class Definitions\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope of Struct / Class Definitions\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:14Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000015",
    "book": "scope",
    "order_index": 15,
    "title": "#015 Static Function in File Scope",
    "slug": "scope-015-static-function-in-file-scope",
    "description": "Demonstrate declaring static function limiting its visibility strictly to source file.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "None",
        "output": "Static internal function executed",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Static Function in File Scope."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Static Function in File Scope\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Static Function in File Scope\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Static Function in File Scope\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:15Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000016",
    "book": "scope",
    "order_index": 16,
    "title": "#016 Destructor Invocation on Block Exit",
    "slug": "scope-016-destructor-invocation-on-block-exit",
    "description": "Demonstrate object destructor getting invoked immediately when execution exits enclosing block {}.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "None",
        "output": "Object Created -> Object Destroyed at '}'",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Destructor Invocation on Block Exit."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Destructor Invocation on Block Exit\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Destructor Invocation on Block Exit\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Destructor Invocation on Block Exit\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:16Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000017",
    "book": "scope",
    "order_index": 17,
    "title": "#017 Constexpr Variable Scope in Header",
    "slug": "scope-017-constexpr-variable-scope-in-header",
    "description": "Demonstrate inline constexpr variable sharing constant value across scopes safely.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "None",
        "output": "Constants evaluated at compile time across scopes",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Constexpr Variable Scope in Header."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Constexpr Variable Scope in Header\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constexpr Variable Scope in Header\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constexpr Variable Scope in Header\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:17Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000018",
    "book": "scope",
    "order_index": 18,
    "title": "#018 Scope of Default Arguments",
    "slug": "scope-018-scope-of-default-arguments",
    "description": "Demonstrate default arguments are bound in the scope of function declaration.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "None",
        "output": "Default argument evaluated in declaration scope",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope of Default Arguments."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope of Default Arguments\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope of Default Arguments\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope of Default Arguments\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:18Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000019",
    "book": "scope",
    "order_index": 19,
    "title": "#019 Lambda Capture Scope Rules",
    "slug": "scope-019-lambda-capture-scope-rules",
    "description": "Demonstrate lambda capturing local variable by value [x] vs by reference [&x].\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "10",
        "output": "Captured by value: 10, Captured by ref: modified to 20",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Lambda Capture Scope Rules."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Capture Scope Rules\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Capture Scope Rules\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Capture Scope Rules\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:19Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000020",
    "book": "scope",
    "order_index": 20,
    "title": "#020 Thread Local Storage (thread_local) Scope",
    "slug": "scope-020-thread-local-storage-thread-local-scope",
    "description": "Demonstrate thread_local variable maintaining independent state per thread.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "None",
        "output": "thread_local variable maintains thread-isolated state",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Thread Local Storage (thread_local) Scope."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Thread Local Storage (thread_local) Scope\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Thread Local Storage (thread_local) Scope\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Thread Local Storage (thread_local) Scope\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:20Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000021",
    "book": "scope",
    "order_index": 21,
    "title": "#021 Scope & Lifetime Challenge #21",
    "slug": "scope-021-scope-lifetime-challenge-21",
    "description": "Analyze variable lifetime and scope rule #21: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "21",
        "output": "Scope Test #21 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #21."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #21\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #21\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #21\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:21Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000022",
    "book": "scope",
    "order_index": 22,
    "title": "#022 Scope & Lifetime Challenge #22",
    "slug": "scope-022-scope-lifetime-challenge-22",
    "description": "Analyze variable lifetime and scope rule #22: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "22",
        "output": "Scope Test #22 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #22."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #22\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #22\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #22\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:22Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000023",
    "book": "scope",
    "order_index": 23,
    "title": "#023 Scope & Lifetime Challenge #23",
    "slug": "scope-023-scope-lifetime-challenge-23",
    "description": "Analyze variable lifetime and scope rule #23: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "23",
        "output": "Scope Test #23 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #23."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #23\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #23\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #23\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:23Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000024",
    "book": "scope",
    "order_index": 24,
    "title": "#024 Scope & Lifetime Challenge #24",
    "slug": "scope-024-scope-lifetime-challenge-24",
    "description": "Analyze variable lifetime and scope rule #24: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "24",
        "output": "Scope Test #24 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #24."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #24\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #24\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #24\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:24Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000025",
    "book": "scope",
    "order_index": 25,
    "title": "#025 Scope & Lifetime Challenge #25",
    "slug": "scope-025-scope-lifetime-challenge-25",
    "description": "Analyze variable lifetime and scope rule #25: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "25",
        "output": "Scope Test #25 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #25."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #25\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #25\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #25\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:25Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000026",
    "book": "scope",
    "order_index": 26,
    "title": "#026 Scope & Lifetime Challenge #26",
    "slug": "scope-026-scope-lifetime-challenge-26",
    "description": "Analyze variable lifetime and scope rule #26: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "26",
        "output": "Scope Test #26 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #26."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #26\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #26\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #26\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:26Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000027",
    "book": "scope",
    "order_index": 27,
    "title": "#027 Scope & Lifetime Challenge #27",
    "slug": "scope-027-scope-lifetime-challenge-27",
    "description": "Analyze variable lifetime and scope rule #27: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "27",
        "output": "Scope Test #27 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #27."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #27\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #27\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #27\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:27Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000028",
    "book": "scope",
    "order_index": 28,
    "title": "#028 Scope & Lifetime Challenge #28",
    "slug": "scope-028-scope-lifetime-challenge-28",
    "description": "Analyze variable lifetime and scope rule #28: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "28",
        "output": "Scope Test #28 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #28."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #28\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #28\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #28\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:28Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000029",
    "book": "scope",
    "order_index": 29,
    "title": "#029 Scope & Lifetime Challenge #29",
    "slug": "scope-029-scope-lifetime-challenge-29",
    "description": "Analyze variable lifetime and scope rule #29: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "29",
        "output": "Scope Test #29 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #29."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #29\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #29\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #29\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:29Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000030",
    "book": "scope",
    "order_index": 30,
    "title": "#030 Scope & Lifetime Challenge #30",
    "slug": "scope-030-scope-lifetime-challenge-30",
    "description": "Analyze variable lifetime and scope rule #30: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "30",
        "output": "Scope Test #30 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #30."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #30\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #30\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #30\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:30Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000031",
    "book": "scope",
    "order_index": 31,
    "title": "#031 Scope & Lifetime Challenge #31",
    "slug": "scope-031-scope-lifetime-challenge-31",
    "description": "Analyze variable lifetime and scope rule #31: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "31",
        "output": "Scope Test #31 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #31."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #31\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #31\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #31\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:31Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000032",
    "book": "scope",
    "order_index": 32,
    "title": "#032 Scope & Lifetime Challenge #32",
    "slug": "scope-032-scope-lifetime-challenge-32",
    "description": "Analyze variable lifetime and scope rule #32: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "32",
        "output": "Scope Test #32 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #32."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #32\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #32\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #32\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:32Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000033",
    "book": "scope",
    "order_index": 33,
    "title": "#033 Scope & Lifetime Challenge #33",
    "slug": "scope-033-scope-lifetime-challenge-33",
    "description": "Analyze variable lifetime and scope rule #33: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "33",
        "output": "Scope Test #33 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #33."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #33\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #33\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #33\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:33Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000034",
    "book": "scope",
    "order_index": 34,
    "title": "#034 Scope & Lifetime Challenge #34",
    "slug": "scope-034-scope-lifetime-challenge-34",
    "description": "Analyze variable lifetime and scope rule #34: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "34",
        "output": "Scope Test #34 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #34."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #34\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #34\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #34\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:34Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000035",
    "book": "scope",
    "order_index": 35,
    "title": "#035 Scope & Lifetime Challenge #35",
    "slug": "scope-035-scope-lifetime-challenge-35",
    "description": "Analyze variable lifetime and scope rule #35: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "35",
        "output": "Scope Test #35 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #35."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #35\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #35\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #35\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:35Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000036",
    "book": "scope",
    "order_index": 36,
    "title": "#036 Scope & Lifetime Challenge #36",
    "slug": "scope-036-scope-lifetime-challenge-36",
    "description": "Analyze variable lifetime and scope rule #36: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "36",
        "output": "Scope Test #36 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #36."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #36\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #36\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #36\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:36Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000037",
    "book": "scope",
    "order_index": 37,
    "title": "#037 Scope & Lifetime Challenge #37",
    "slug": "scope-037-scope-lifetime-challenge-37",
    "description": "Analyze variable lifetime and scope rule #37: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "37",
        "output": "Scope Test #37 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #37."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #37\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #37\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #37\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:37Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000038",
    "book": "scope",
    "order_index": 38,
    "title": "#038 Scope & Lifetime Challenge #38",
    "slug": "scope-038-scope-lifetime-challenge-38",
    "description": "Analyze variable lifetime and scope rule #38: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "38",
        "output": "Scope Test #38 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #38."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #38\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #38\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #38\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:38Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000039",
    "book": "scope",
    "order_index": 39,
    "title": "#039 Scope & Lifetime Challenge #39",
    "slug": "scope-039-scope-lifetime-challenge-39",
    "description": "Analyze variable lifetime and scope rule #39: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "39",
        "output": "Scope Test #39 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #39."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #39\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #39\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #39\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:39Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000040",
    "book": "scope",
    "order_index": 40,
    "title": "#040 Scope & Lifetime Challenge #40",
    "slug": "scope-040-scope-lifetime-challenge-40",
    "description": "Analyze variable lifetime and scope rule #40: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "40",
        "output": "Scope Test #40 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #40."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #40\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #40\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #40\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:40Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000041",
    "book": "scope",
    "order_index": 41,
    "title": "#041 Scope & Lifetime Challenge #41",
    "slug": "scope-041-scope-lifetime-challenge-41",
    "description": "Analyze variable lifetime and scope rule #41: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "41",
        "output": "Scope Test #41 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #41."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #41\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #41\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #41\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:41Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000042",
    "book": "scope",
    "order_index": 42,
    "title": "#042 Scope & Lifetime Challenge #42",
    "slug": "scope-042-scope-lifetime-challenge-42",
    "description": "Analyze variable lifetime and scope rule #42: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "42",
        "output": "Scope Test #42 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #42."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #42\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #42\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #42\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:42Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000043",
    "book": "scope",
    "order_index": 43,
    "title": "#043 Scope & Lifetime Challenge #43",
    "slug": "scope-043-scope-lifetime-challenge-43",
    "description": "Analyze variable lifetime and scope rule #43: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "43",
        "output": "Scope Test #43 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #43."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #43\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #43\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #43\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:43Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000044",
    "book": "scope",
    "order_index": 44,
    "title": "#044 Scope & Lifetime Challenge #44",
    "slug": "scope-044-scope-lifetime-challenge-44",
    "description": "Analyze variable lifetime and scope rule #44: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "44",
        "output": "Scope Test #44 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #44."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #44\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #44\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #44\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:44Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000045",
    "book": "scope",
    "order_index": 45,
    "title": "#045 Scope & Lifetime Challenge #45",
    "slug": "scope-045-scope-lifetime-challenge-45",
    "description": "Analyze variable lifetime and scope rule #45: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "45",
        "output": "Scope Test #45 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #45."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #45\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #45\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #45\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:45Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000046",
    "book": "scope",
    "order_index": 46,
    "title": "#046 Scope & Lifetime Challenge #46",
    "slug": "scope-046-scope-lifetime-challenge-46",
    "description": "Analyze variable lifetime and scope rule #46: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "46",
        "output": "Scope Test #46 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #46."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #46\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #46\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #46\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:46Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000047",
    "book": "scope",
    "order_index": 47,
    "title": "#047 Scope & Lifetime Challenge #47",
    "slug": "scope-047-scope-lifetime-challenge-47",
    "description": "Analyze variable lifetime and scope rule #47: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "47",
        "output": "Scope Test #47 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #47."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #47\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #47\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #47\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:47Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000048",
    "book": "scope",
    "order_index": 48,
    "title": "#048 Scope & Lifetime Challenge #48",
    "slug": "scope-048-scope-lifetime-challenge-48",
    "description": "Analyze variable lifetime and scope rule #48: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "48",
        "output": "Scope Test #48 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #48."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #48\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #48\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #48\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:48Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000049",
    "book": "scope",
    "order_index": 49,
    "title": "#049 Scope & Lifetime Challenge #49",
    "slug": "scope-049-scope-lifetime-challenge-49",
    "description": "Analyze variable lifetime and scope rule #49: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "49",
        "output": "Scope Test #49 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #49."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #49\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #49\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #49\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:49Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000050",
    "book": "scope",
    "order_index": 50,
    "title": "#050 Scope & Lifetime Challenge #50",
    "slug": "scope-050-scope-lifetime-challenge-50",
    "description": "Analyze variable lifetime and scope rule #50: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "50",
        "output": "Scope Test #50 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #50."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #50\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #50\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #50\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:50Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000051",
    "book": "scope",
    "order_index": 51,
    "title": "#051 Scope & Lifetime Challenge #51",
    "slug": "scope-051-scope-lifetime-challenge-51",
    "description": "Analyze variable lifetime and scope rule #51: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "51",
        "output": "Scope Test #51 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #51."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #51\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #51\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #51\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:51Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000052",
    "book": "scope",
    "order_index": 52,
    "title": "#052 Scope & Lifetime Challenge #52",
    "slug": "scope-052-scope-lifetime-challenge-52",
    "description": "Analyze variable lifetime and scope rule #52: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "52",
        "output": "Scope Test #52 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #52."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #52\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #52\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #52\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:52Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000053",
    "book": "scope",
    "order_index": 53,
    "title": "#053 Scope & Lifetime Challenge #53",
    "slug": "scope-053-scope-lifetime-challenge-53",
    "description": "Analyze variable lifetime and scope rule #53: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "53",
        "output": "Scope Test #53 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #53."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #53\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #53\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #53\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:53Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000054",
    "book": "scope",
    "order_index": 54,
    "title": "#054 Scope & Lifetime Challenge #54",
    "slug": "scope-054-scope-lifetime-challenge-54",
    "description": "Analyze variable lifetime and scope rule #54: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "54",
        "output": "Scope Test #54 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #54."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #54\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #54\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #54\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:54Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000055",
    "book": "scope",
    "order_index": 55,
    "title": "#055 Scope & Lifetime Challenge #55",
    "slug": "scope-055-scope-lifetime-challenge-55",
    "description": "Analyze variable lifetime and scope rule #55: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "55",
        "output": "Scope Test #55 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #55."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #55\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #55\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #55\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:55Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000056",
    "book": "scope",
    "order_index": 56,
    "title": "#056 Scope & Lifetime Challenge #56",
    "slug": "scope-056-scope-lifetime-challenge-56",
    "description": "Analyze variable lifetime and scope rule #56: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "56",
        "output": "Scope Test #56 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #56."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #56\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #56\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #56\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:56Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000057",
    "book": "scope",
    "order_index": 57,
    "title": "#057 Scope & Lifetime Challenge #57",
    "slug": "scope-057-scope-lifetime-challenge-57",
    "description": "Analyze variable lifetime and scope rule #57: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "57",
        "output": "Scope Test #57 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #57."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #57\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #57\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #57\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:57Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000058",
    "book": "scope",
    "order_index": 58,
    "title": "#058 Scope & Lifetime Challenge #58",
    "slug": "scope-058-scope-lifetime-challenge-58",
    "description": "Analyze variable lifetime and scope rule #58: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "58",
        "output": "Scope Test #58 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #58."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #58\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #58\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #58\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:58Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000059",
    "book": "scope",
    "order_index": 59,
    "title": "#059 Scope & Lifetime Challenge #59",
    "slug": "scope-059-scope-lifetime-challenge-59",
    "description": "Analyze variable lifetime and scope rule #59: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "59",
        "output": "Scope Test #59 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #59."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #59\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #59\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #59\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:59Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000060",
    "book": "scope",
    "order_index": 60,
    "title": "#060 Scope & Lifetime Challenge #60",
    "slug": "scope-060-scope-lifetime-challenge-60",
    "description": "Analyze variable lifetime and scope rule #60: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "60",
        "output": "Scope Test #60 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #60."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #60\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #60\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #60\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:00Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000061",
    "book": "scope",
    "order_index": 61,
    "title": "#061 Scope & Lifetime Challenge #61",
    "slug": "scope-061-scope-lifetime-challenge-61",
    "description": "Analyze variable lifetime and scope rule #61: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "61",
        "output": "Scope Test #61 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #61."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #61\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #61\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #61\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:01Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000062",
    "book": "scope",
    "order_index": 62,
    "title": "#062 Scope & Lifetime Challenge #62",
    "slug": "scope-062-scope-lifetime-challenge-62",
    "description": "Analyze variable lifetime and scope rule #62: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "62",
        "output": "Scope Test #62 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #62."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #62\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #62\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #62\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:02Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000063",
    "book": "scope",
    "order_index": 63,
    "title": "#063 Scope & Lifetime Challenge #63",
    "slug": "scope-063-scope-lifetime-challenge-63",
    "description": "Analyze variable lifetime and scope rule #63: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "63",
        "output": "Scope Test #63 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #63."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #63\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #63\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #63\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:03Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000064",
    "book": "scope",
    "order_index": 64,
    "title": "#064 Scope & Lifetime Challenge #64",
    "slug": "scope-064-scope-lifetime-challenge-64",
    "description": "Analyze variable lifetime and scope rule #64: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "64",
        "output": "Scope Test #64 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #64."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #64\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #64\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #64\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:04Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000065",
    "book": "scope",
    "order_index": 65,
    "title": "#065 Scope & Lifetime Challenge #65",
    "slug": "scope-065-scope-lifetime-challenge-65",
    "description": "Analyze variable lifetime and scope rule #65: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "65",
        "output": "Scope Test #65 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #65."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #65\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #65\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #65\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:05Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000066",
    "book": "scope",
    "order_index": 66,
    "title": "#066 Scope & Lifetime Challenge #66",
    "slug": "scope-066-scope-lifetime-challenge-66",
    "description": "Analyze variable lifetime and scope rule #66: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "66",
        "output": "Scope Test #66 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #66."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #66\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #66\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #66\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:06Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000067",
    "book": "scope",
    "order_index": 67,
    "title": "#067 Scope & Lifetime Challenge #67",
    "slug": "scope-067-scope-lifetime-challenge-67",
    "description": "Analyze variable lifetime and scope rule #67: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "67",
        "output": "Scope Test #67 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #67."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #67\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #67\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #67\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:07Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000068",
    "book": "scope",
    "order_index": 68,
    "title": "#068 Scope & Lifetime Challenge #68",
    "slug": "scope-068-scope-lifetime-challenge-68",
    "description": "Analyze variable lifetime and scope rule #68: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "68",
        "output": "Scope Test #68 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #68."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #68\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #68\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #68\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:08Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000069",
    "book": "scope",
    "order_index": 69,
    "title": "#069 Scope & Lifetime Challenge #69",
    "slug": "scope-069-scope-lifetime-challenge-69",
    "description": "Analyze variable lifetime and scope rule #69: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "69",
        "output": "Scope Test #69 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #69."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #69\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #69\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #69\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:09Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000070",
    "book": "scope",
    "order_index": 70,
    "title": "#070 Scope & Lifetime Challenge #70",
    "slug": "scope-070-scope-lifetime-challenge-70",
    "description": "Analyze variable lifetime and scope rule #70: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "70",
        "output": "Scope Test #70 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #70."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #70\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #70\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #70\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:10Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000071",
    "book": "scope",
    "order_index": 71,
    "title": "#071 Scope & Lifetime Challenge #71",
    "slug": "scope-071-scope-lifetime-challenge-71",
    "description": "Analyze variable lifetime and scope rule #71: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "71",
        "output": "Scope Test #71 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #71."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #71\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #71\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #71\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:11Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000072",
    "book": "scope",
    "order_index": 72,
    "title": "#072 Scope & Lifetime Challenge #72",
    "slug": "scope-072-scope-lifetime-challenge-72",
    "description": "Analyze variable lifetime and scope rule #72: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "72",
        "output": "Scope Test #72 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #72."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #72\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #72\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #72\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:12Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000073",
    "book": "scope",
    "order_index": 73,
    "title": "#073 Scope & Lifetime Challenge #73",
    "slug": "scope-073-scope-lifetime-challenge-73",
    "description": "Analyze variable lifetime and scope rule #73: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "73",
        "output": "Scope Test #73 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #73."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #73\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #73\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #73\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:13Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000074",
    "book": "scope",
    "order_index": 74,
    "title": "#074 Scope & Lifetime Challenge #74",
    "slug": "scope-074-scope-lifetime-challenge-74",
    "description": "Analyze variable lifetime and scope rule #74: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "74",
        "output": "Scope Test #74 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #74."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #74\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #74\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #74\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:14Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000075",
    "book": "scope",
    "order_index": 75,
    "title": "#075 Scope & Lifetime Challenge #75",
    "slug": "scope-075-scope-lifetime-challenge-75",
    "description": "Analyze variable lifetime and scope rule #75: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "75",
        "output": "Scope Test #75 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #75."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #75\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #75\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #75\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:15Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000076",
    "book": "scope",
    "order_index": 76,
    "title": "#076 Scope & Lifetime Challenge #76",
    "slug": "scope-076-scope-lifetime-challenge-76",
    "description": "Analyze variable lifetime and scope rule #76: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "76",
        "output": "Scope Test #76 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #76."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #76\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #76\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #76\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:16Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000077",
    "book": "scope",
    "order_index": 77,
    "title": "#077 Scope & Lifetime Challenge #77",
    "slug": "scope-077-scope-lifetime-challenge-77",
    "description": "Analyze variable lifetime and scope rule #77: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "77",
        "output": "Scope Test #77 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #77."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #77\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #77\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #77\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:17Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000078",
    "book": "scope",
    "order_index": 78,
    "title": "#078 Scope & Lifetime Challenge #78",
    "slug": "scope-078-scope-lifetime-challenge-78",
    "description": "Analyze variable lifetime and scope rule #78: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "78",
        "output": "Scope Test #78 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #78."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #78\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #78\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #78\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:18Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000079",
    "book": "scope",
    "order_index": 79,
    "title": "#079 Scope & Lifetime Challenge #79",
    "slug": "scope-079-scope-lifetime-challenge-79",
    "description": "Analyze variable lifetime and scope rule #79: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "79",
        "output": "Scope Test #79 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #79."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #79\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #79\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #79\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:19Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000080",
    "book": "scope",
    "order_index": 80,
    "title": "#080 Scope & Lifetime Challenge #80",
    "slug": "scope-080-scope-lifetime-challenge-80",
    "description": "Analyze variable lifetime and scope rule #80: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "80",
        "output": "Scope Test #80 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #80."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #80\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #80\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #80\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:20Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000081",
    "book": "scope",
    "order_index": 81,
    "title": "#081 Scope & Lifetime Challenge #81",
    "slug": "scope-081-scope-lifetime-challenge-81",
    "description": "Analyze variable lifetime and scope rule #81: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "81",
        "output": "Scope Test #81 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #81."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #81\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #81\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #81\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:21Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000082",
    "book": "scope",
    "order_index": 82,
    "title": "#082 Scope & Lifetime Challenge #82",
    "slug": "scope-082-scope-lifetime-challenge-82",
    "description": "Analyze variable lifetime and scope rule #82: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "82",
        "output": "Scope Test #82 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #82."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #82\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #82\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #82\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:22Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000083",
    "book": "scope",
    "order_index": 83,
    "title": "#083 Scope & Lifetime Challenge #83",
    "slug": "scope-083-scope-lifetime-challenge-83",
    "description": "Analyze variable lifetime and scope rule #83: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "83",
        "output": "Scope Test #83 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #83."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #83\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #83\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #83\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:23Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000084",
    "book": "scope",
    "order_index": 84,
    "title": "#084 Scope & Lifetime Challenge #84",
    "slug": "scope-084-scope-lifetime-challenge-84",
    "description": "Analyze variable lifetime and scope rule #84: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "84",
        "output": "Scope Test #84 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #84."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #84\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #84\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #84\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:24Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000085",
    "book": "scope",
    "order_index": 85,
    "title": "#085 Scope & Lifetime Challenge #85",
    "slug": "scope-085-scope-lifetime-challenge-85",
    "description": "Analyze variable lifetime and scope rule #85: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "85",
        "output": "Scope Test #85 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #85."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #85\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #85\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #85\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:25Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000086",
    "book": "scope",
    "order_index": 86,
    "title": "#086 Scope & Lifetime Challenge #86",
    "slug": "scope-086-scope-lifetime-challenge-86",
    "description": "Analyze variable lifetime and scope rule #86: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "86",
        "output": "Scope Test #86 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #86."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #86\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #86\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #86\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:26Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000087",
    "book": "scope",
    "order_index": 87,
    "title": "#087 Scope & Lifetime Challenge #87",
    "slug": "scope-087-scope-lifetime-challenge-87",
    "description": "Analyze variable lifetime and scope rule #87: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "87",
        "output": "Scope Test #87 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #87."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #87\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #87\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #87\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:27Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000088",
    "book": "scope",
    "order_index": 88,
    "title": "#088 Scope & Lifetime Challenge #88",
    "slug": "scope-088-scope-lifetime-challenge-88",
    "description": "Analyze variable lifetime and scope rule #88: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "88",
        "output": "Scope Test #88 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #88."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #88\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #88\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #88\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:28Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000089",
    "book": "scope",
    "order_index": 89,
    "title": "#089 Scope & Lifetime Challenge #89",
    "slug": "scope-089-scope-lifetime-challenge-89",
    "description": "Analyze variable lifetime and scope rule #89: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "89",
        "output": "Scope Test #89 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #89."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #89\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #89\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #89\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:29Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000090",
    "book": "scope",
    "order_index": 90,
    "title": "#090 Scope & Lifetime Challenge #90",
    "slug": "scope-090-scope-lifetime-challenge-90",
    "description": "Analyze variable lifetime and scope rule #90: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "90",
        "output": "Scope Test #90 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #90."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #90\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #90\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #90\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:30Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000091",
    "book": "scope",
    "order_index": 91,
    "title": "#091 Scope & Lifetime Challenge #91",
    "slug": "scope-091-scope-lifetime-challenge-91",
    "description": "Analyze variable lifetime and scope rule #91: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "91",
        "output": "Scope Test #91 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #91."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #91\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #91\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #91\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:31Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000092",
    "book": "scope",
    "order_index": 92,
    "title": "#092 Scope & Lifetime Challenge #92",
    "slug": "scope-092-scope-lifetime-challenge-92",
    "description": "Analyze variable lifetime and scope rule #92: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "92",
        "output": "Scope Test #92 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #92."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #92\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #92\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #92\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:32Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000093",
    "book": "scope",
    "order_index": 93,
    "title": "#093 Scope & Lifetime Challenge #93",
    "slug": "scope-093-scope-lifetime-challenge-93",
    "description": "Analyze variable lifetime and scope rule #93: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "93",
        "output": "Scope Test #93 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #93."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #93\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #93\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #93\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:33Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000094",
    "book": "scope",
    "order_index": 94,
    "title": "#094 Scope & Lifetime Challenge #94",
    "slug": "scope-094-scope-lifetime-challenge-94",
    "description": "Analyze variable lifetime and scope rule #94: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "94",
        "output": "Scope Test #94 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #94."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #94\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #94\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #94\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:34Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000095",
    "book": "scope",
    "order_index": 95,
    "title": "#095 Scope & Lifetime Challenge #95",
    "slug": "scope-095-scope-lifetime-challenge-95",
    "description": "Analyze variable lifetime and scope rule #95: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "95",
        "output": "Scope Test #95 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #95."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #95\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #95\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #95\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:35Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000096",
    "book": "scope",
    "order_index": 96,
    "title": "#096 Scope & Lifetime Challenge #96",
    "slug": "scope-096-scope-lifetime-challenge-96",
    "description": "Analyze variable lifetime and scope rule #96: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "96",
        "output": "Scope Test #96 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #96."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #96\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #96\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #96\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:36Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000097",
    "book": "scope",
    "order_index": 97,
    "title": "#097 Scope & Lifetime Challenge #97",
    "slug": "scope-097-scope-lifetime-challenge-97",
    "description": "Analyze variable lifetime and scope rule #97: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "97",
        "output": "Scope Test #97 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #97."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #97\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #97\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #97\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:37Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000098",
    "book": "scope",
    "order_index": 98,
    "title": "#098 Scope & Lifetime Challenge #98",
    "slug": "scope-098-scope-lifetime-challenge-98",
    "description": "Analyze variable lifetime and scope rule #98: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "98",
        "output": "Scope Test #98 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #98."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #98\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #98\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #98\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:38Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000099",
    "book": "scope",
    "order_index": 99,
    "title": "#099 Scope & Lifetime Challenge #99",
    "slug": "scope-099-scope-lifetime-challenge-99",
    "description": "Analyze variable lifetime and scope rule #99: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "99",
        "output": "Scope Test #99 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #99."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #99\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #99\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #99\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:39Z"
  },
  {
    "id": "00000000-0000-4000-7005-000000000100",
    "book": "scope",
    "order_index": 100,
    "title": "#100 Scope & Lifetime Challenge #100",
    "slug": "scope-100-scope-lifetime-challenge-100",
    "description": "Analyze variable lifetime and scope rule #100: manage symbol visibility, encapsulation, and resource destruction on scope exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Scope, Namespaces & Variable Lifetime",
    "tags": [
      "Scope",
      "Lifetime",
      "Namespaces"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "100",
        "output": "Scope Test #100 Passed (Valid Lifetimes)",
        "explanation": "Demonstrates C++ variable scope and lifetime rules for Scope & Lifetime Challenge #100."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Scope & Lifetime Challenge #100\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Scope & Lifetime Challenge #100\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Scope & Lifetime Challenge #100\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:40Z"
  }
];
