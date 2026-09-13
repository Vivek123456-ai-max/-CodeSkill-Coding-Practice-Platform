import { Problem } from '../../types/problem';

export const CONSTRUCTORS_PROBLEMS: Problem[] = [
  {
    "id": "00000000-0000-4000-8004-000000000001",
    "book": "constructors",
    "order_index": 1,
    "title": "#001 Default Constructor Implementation",
    "slug": "constructors-001-default-constructor-implementation",
    "description": "Implement a default constructor initializing member variables to standard zero/empty values.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Instantiate default",
        "output": "Initialized: Name='Unknown', Age=0",
        "explanation": "Executes logic for Default Constructor Implementation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Default Constructor Implementation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Default Constructor Implementation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Default Constructor Implementation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:01Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000002",
    "book": "constructors",
    "order_index": 2,
    "title": "#002 Parameterized Constructor",
    "slug": "constructors-002-parameterized-constructor",
    "description": "Implement a constructor taking parameters to initialize object attributes upon instantiation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Alice 21",
        "output": "Created: Name=Alice, Age=21",
        "explanation": "Executes logic for Parameterized Constructor."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Parameterized Constructor\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameterized Constructor\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameterized Constructor\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:02Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000003",
    "book": "constructors",
    "order_index": 3,
    "title": "#003 Member Initializer List Syntax",
    "slug": "constructors-003-member-initializer-list-syntax",
    "description": "Use constructor member initializer list `: x(a), y(b)` instead of body assignment for efficiency.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "5 10",
        "output": "Point initialized via list: (5, 10)",
        "explanation": "Executes logic for Member Initializer List Syntax."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Member Initializer List Syntax\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Member Initializer List Syntax\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Member Initializer List Syntax\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:03Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000004",
    "book": "constructors",
    "order_index": 4,
    "title": "#004 Initializing Const Members via Initializer List",
    "slug": "constructors-004-initializing-const-members-via-initializer-list",
    "description": "Demonstrate that const member variables can only be initialized via member initializer list.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Const ID=999",
        "output": "Const ID initialized: 999",
        "explanation": "Executes logic for Initializing Const Members via Initializer List."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Initializing Const Members via Initializer List\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Initializing Const Members via Initializer List\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Initializing Const Members via Initializer List\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:04Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000005",
    "book": "constructors",
    "order_index": 5,
    "title": "#005 Initializing Reference Members via Initializer List",
    "slug": "constructors-005-initializing-reference-members-via-initializer-lis",
    "description": "Initialize a reference member variable `int& ref` inside constructor member initializer list.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Bind to var X=42",
        "output": "Reference member bound to 42",
        "explanation": "Executes logic for Initializing Reference Members via Initializer List."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Initializing Reference Members via Initializer List\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Initializing Reference Members via Initializer List\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Initializing Reference Members via Initializer List\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:05Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000006",
    "book": "constructors",
    "order_index": 6,
    "title": "#006 Constructor Overloading",
    "slug": "constructors-006-constructor-overloading",
    "description": "Provide default, 1-parameter, and 2-parameter overloaded constructors for a Box class.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Box(), Box(5), Box(2,3,4)",
        "output": "Box1: (1,1,1), Box2: (5,5,5), Box3: (2,3,4)",
        "explanation": "Executes logic for Constructor Overloading."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor Overloading\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor Overloading\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor Overloading\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:06Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000007",
    "book": "constructors",
    "order_index": 7,
    "title": "#007 Copy Constructor (Shallow Copy vs Deep Copy)",
    "slug": "constructors-007-copy-constructor-shallow-copy-vs-deep-copy",
    "description": "Implement a copy constructor `ClassName(const ClassName& other)` performing deep copy of dynamic memory.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Copy obj with heap array",
        "output": "Deep copy verified: Distinct buffer addresses",
        "explanation": "Executes logic for Copy Constructor (Shallow Copy vs Deep Copy)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Copy Constructor (Shallow Copy vs Deep Copy)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Copy Constructor (Shallow Copy vs Deep Copy)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Copy Constructor (Shallow Copy vs Deep Copy)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:07Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000008",
    "book": "constructors",
    "order_index": 8,
    "title": "#008 Default Copy Constructor Pitfall (Shallow Copy Hazard)",
    "slug": "constructors-008-default-copy-constructor-pitfall-shallow-copy-haza",
    "description": "Demonstrate dangling pointer / double free when shallow copying a class with raw pointers.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Shallow copy",
        "output": "Shallow copy shared pointer hazard detected",
        "explanation": "Executes logic for Default Copy Constructor Pitfall (Shallow Copy Hazard)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Default Copy Constructor Pitfall (Shallow Copy Hazard)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Default Copy Constructor Pitfall (Shallow Copy Hazard)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Default Copy Constructor Pitfall (Shallow Copy Hazard)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:08Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000009",
    "book": "constructors",
    "order_index": 9,
    "title": "#009 Move Constructor (C++11 Rvalue References)",
    "slug": "constructors-009-move-constructor-c-11-rvalue-references",
    "description": "Implement move constructor `ClassName(ClassName&& other) noexcept` transferring resource ownership.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Move temporary",
        "output": "Resource moved (Source pointer nulled)",
        "explanation": "Executes logic for Move Constructor (C++11 Rvalue References)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Move Constructor (C++11 Rvalue References)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Move Constructor (C++11 Rvalue References)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Move Constructor (C++11 Rvalue References)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:09Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000010",
    "book": "constructors",
    "order_index": 10,
    "title": "#010 Destructor Syntax and Automatic Invocations",
    "slug": "constructors-010-destructor-syntax-and-automatic-invocations",
    "description": "Implement `~ClassName()` printing cleanup messages when object goes out of scope.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Block scope exit",
        "output": "Destructor invoked: Resource released",
        "explanation": "Executes logic for Destructor Syntax and Automatic Invocations."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Destructor Syntax and Automatic Invocations\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Destructor Syntax and Automatic Invocations\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Destructor Syntax and Automatic Invocations\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:10Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000011",
    "book": "constructors",
    "order_index": 11,
    "title": "#011 Dynamic Memory Deallocation in Destructor",
    "slug": "constructors-011-dynamic-memory-deallocation-in-destructor",
    "description": "Allocate dynamic array in constructor with `new[]` and free in destructor with `delete[]`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Array size 10",
        "output": "Constructed size 10 -> Destructor freed heap array",
        "explanation": "Executes logic for Dynamic Memory Deallocation in Destructor."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Dynamic Memory Deallocation in Destructor\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Dynamic Memory Deallocation in Destructor\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Dynamic Memory Deallocation in Destructor\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:11Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000012",
    "book": "constructors",
    "order_index": 12,
    "title": "#012 Explicit Constructor (`explicit` Keyword)",
    "slug": "constructors-012-explicit-constructor-explicit-keyword",
    "description": "Mark single-argument constructor with `explicit` to prevent unintended implicit conversions.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Explicit int constructor",
        "output": "Implicit conversion rejected, explicit construction required",
        "explanation": "Executes logic for Explicit Constructor (`explicit` Keyword)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Explicit Constructor (`explicit` Keyword)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Explicit Constructor (`explicit` Keyword)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Explicit Constructor (`explicit` Keyword)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:12Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000013",
    "book": "constructors",
    "order_index": 13,
    "title": "#013 Delegating Constructors (C++11)",
    "slug": "constructors-013-delegating-constructors-c-11",
    "description": "Use delegating constructors where a default constructor calls a parameterized constructor with default values.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Call default delegator",
        "output": "Delegated to Master Constructor with (0, 0)",
        "explanation": "Executes logic for Delegating Constructors (C++11)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Delegating Constructors (C++11)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Delegating Constructors (C++11)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Delegating Constructors (C++11)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:13Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000014",
    "book": "constructors",
    "order_index": 14,
    "title": "#014 Constructor Calling Order in Single Inheritance",
    "slug": "constructors-014-constructor-calling-order-in-single-inheritance",
    "description": "Print messages showing Base constructor executes before Derived constructor.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Create Derived",
        "output": "Base Constructor -> Derived Constructor",
        "explanation": "Executes logic for Constructor Calling Order in Single Inheritance."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor Calling Order in Single Inheritance\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor Calling Order in Single Inheritance\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor Calling Order in Single Inheritance\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:14Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000015",
    "book": "constructors",
    "order_index": 15,
    "title": "#015 Destructor Calling Order in Single Inheritance",
    "slug": "constructors-015-destructor-calling-order-in-single-inheritance",
    "description": "Demonstrate that Derived destructor executes before Base destructor (reverse order).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Destroy Derived",
        "output": "Derived Destructor -> Base Destructor",
        "explanation": "Executes logic for Destructor Calling Order in Single Inheritance."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Destructor Calling Order in Single Inheritance\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Destructor Calling Order in Single Inheritance\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Destructor Calling Order in Single Inheritance\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:15Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000016",
    "book": "constructors",
    "order_index": 16,
    "title": "#016 Constructor Calling Order in Multiple Inheritance",
    "slug": "constructors-016-constructor-calling-order-in-multiple-inheritance",
    "description": "Demonstrate constructor execution order matching the order of base class declaration list.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "class C : public A, public B",
        "output": "A Constructor -> B Constructor -> C Constructor",
        "explanation": "Executes logic for Constructor Calling Order in Multiple Inheritance."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor Calling Order in Multiple Inheritance\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor Calling Order in Multiple Inheritance\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor Calling Order in Multiple Inheritance\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:16Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000017",
    "book": "constructors",
    "order_index": 17,
    "title": "#017 Constructor Initializer List Execution Order",
    "slug": "constructors-017-constructor-initializer-list-execution-order",
    "description": "Show that member variables are initialized in order of their class declaration, not initializer list order.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Members a, b",
        "output": "Initialized in declaration order (a then b)",
        "explanation": "Executes logic for Constructor Initializer List Execution Order."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor Initializer List Execution Order\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor Initializer List Execution Order\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor Initializer List Execution Order\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:17Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000018",
    "book": "constructors",
    "order_index": 18,
    "title": "#018 Copy Assignment Operator (`operator=`)",
    "slug": "constructors-018-copy-assignment-operator-operator",
    "description": "Implement copy assignment operator guarding against self-assignment `if (this != &other)`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "a = b",
        "output": "Self-assignment checked -> Deep copy assigned",
        "explanation": "Executes logic for Copy Assignment Operator (`operator=`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Copy Assignment Operator (`operator=`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Copy Assignment Operator (`operator=`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Copy Assignment Operator (`operator=`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:18Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000019",
    "book": "constructors",
    "order_index": 19,
    "title": "#019 Move Assignment Operator (`operator=(&&)` )",
    "slug": "constructors-019-move-assignment-operator-operator",
    "description": "Implement move assignment operator transferring ownership and freeing existing resource.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "a = move(b)",
        "output": "Existing freed -> Resources transferred -> b nulled",
        "explanation": "Executes logic for Move Assignment Operator (`operator=(&&)` )."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Move Assignment Operator (`operator=(&&)` )\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Move Assignment Operator (`operator=(&&)` )\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Move Assignment Operator (`operator=(&&)` )\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:19Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000020",
    "book": "constructors",
    "order_index": 20,
    "title": "#020 Rule of Three (C++98)",
    "slug": "constructors-020-rule-of-three-c-98",
    "description": "Implement Destructor, Copy Constructor, and Copy Assignment Operator for resource managing class.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Rule of 3 demo",
        "output": "Rule of Three verified (0 Leaks, Deep Copies)",
        "explanation": "Executes logic for Rule of Three (C++98)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Rule of Three (C++98)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Rule of Three (C++98)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Rule of Three (C++98)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:20Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000021",
    "book": "constructors",
    "order_index": 21,
    "title": "#021 Rule of Five (C++11)",
    "slug": "constructors-021-rule-of-five-c-11",
    "description": "Implement Destructor, Copy Ctor, Copy Assign, Move Ctor, and Move Assign.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Rule of 5 demo",
        "output": "Rule of Five verified with move semantics",
        "explanation": "Executes logic for Rule of Five (C++11)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Rule of Five (C++11)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Rule of Five (C++11)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Rule of Five (C++11)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:21Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000022",
    "book": "constructors",
    "order_index": 22,
    "title": "#022 Rule of Zero",
    "slug": "constructors-022-rule-of-zero",
    "description": "Design a class using modern RAII wrappers (std::vector, std::string) eliminating custom destructor.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Rule of 0 demo",
        "output": "Zero custom memory management needed",
        "explanation": "Executes logic for Rule of Zero."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Rule of Zero\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Rule of Zero\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Rule of Zero\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:22Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000023",
    "book": "constructors",
    "order_index": 23,
    "title": "#023 Private Constructor for Factory Pattern",
    "slug": "constructors-023-private-constructor-for-factory-pattern",
    "description": "Make constructor private and provide a public static `create()` factory method.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Factory::create(42)",
        "output": "Instance constructed via Factory method",
        "explanation": "Executes logic for Private Constructor for Factory Pattern."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Private Constructor for Factory Pattern\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Private Constructor for Factory Pattern\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Private Constructor for Factory Pattern\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:23Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000024",
    "book": "constructors",
    "order_index": 24,
    "title": "#024 Private Constructor for Singleton Pattern",
    "slug": "constructors-024-private-constructor-for-singleton-pattern",
    "description": "Ensure constructor is private so only one instance can be obtained via `getInstance()`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Singleton::getInstance()",
        "output": "Singleton instance retrieved",
        "explanation": "Executes logic for Private Constructor for Singleton Pattern."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Private Constructor for Singleton Pattern\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Private Constructor for Singleton Pattern\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Private Constructor for Singleton Pattern\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:24Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000025",
    "book": "constructors",
    "order_index": 25,
    "title": "#025 Exception in Constructor (Resource Leak Prevention)",
    "slug": "constructors-025-exception-in-constructor-resource-leak-prevention",
    "description": "Demonstrate function-try-block in constructor cleaning up partial allocations if an exception occurs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Throw in ctor",
        "output": "Exception caught, partial allocations safely freed",
        "explanation": "Executes logic for Exception in Constructor (Resource Leak Prevention)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Exception in Constructor (Resource Leak Prevention)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception in Constructor (Resource Leak Prevention)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception in Constructor (Resource Leak Prevention)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:25Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000026",
    "book": "constructors",
    "order_index": 26,
    "title": "#026 Constexpr Constructors (Compile-Time Construction)",
    "slug": "constructors-026-constexpr-constructors-compile-time-construction",
    "description": "Declare a `constexpr` constructor allowing object construction at compile time.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "constexpr Point p(3, 4)",
        "output": "Point constructed at compile time (Area: 12)",
        "explanation": "Executes logic for Constexpr Constructors (Compile-Time Construction)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constexpr Constructors (Compile-Time Construction)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constexpr Constructors (Compile-Time Construction)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constexpr Constructors (Compile-Time Construction)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:26Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000027",
    "book": "constructors",
    "order_index": 27,
    "title": "#027 Dynamic Struct Array Constructor Simulation",
    "slug": "constructors-027-dynamic-struct-array-constructor-simulation",
    "description": "Initialize an array of custom struct objects using placement new and explicit destruction.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Alloc 3 items",
        "output": "Constructed 3 items -> Explicit destructors called",
        "explanation": "Executes logic for Dynamic Struct Array Constructor Simulation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Dynamic Struct Array Constructor Simulation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Dynamic Struct Array Constructor Simulation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Dynamic Struct Array Constructor Simulation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:27Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000028",
    "book": "constructors",
    "order_index": 28,
    "title": "#028 Inheriting Constructors (`using Base::Base;`)",
    "slug": "constructors-028-inheriting-constructors-using-base-base",
    "description": "Use `using Base::Base;` in derived class to inherit all base constructors automatically.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Construct Derived with Base params",
        "output": "Base constructor invoked directly via Derived",
        "explanation": "Executes logic for Inheriting Constructors (`using Base::Base;`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheriting Constructors (`using Base::Base;`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheriting Constructors (`using Base::Base;`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheriting Constructors (`using Base::Base;`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:28Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000029",
    "book": "constructors",
    "order_index": 29,
    "title": "#029 Constructor with Default Arguments vs Overloaded Constructors",
    "slug": "constructors-029-constructor-with-default-arguments-vs-overloaded-c",
    "description": "Compare single constructor with default arguments against multiple overloaded constructors.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "1 vs 3 ctors",
        "output": "Default arguments simplified 3 ctors into 1",
        "explanation": "Executes logic for Constructor with Default Arguments vs Overloaded Constructors."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor with Default Arguments vs Overloaded Constructors\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor with Default Arguments vs Overloaded Constructors\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor with Default Arguments vs Overloaded Constructors\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:29Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000030",
    "book": "constructors",
    "order_index": 30,
    "title": "#030 Array Initialization with Parameterized Constructors",
    "slug": "constructors-030-array-initialization-with-parameterized-constructo",
    "description": "Initialize an array of objects using aggregate initializer `{ Point(1,2), Point(3,4) }`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "2 Points",
        "output": "Point[0]: (1, 2), Point[1]: (3, 4)",
        "explanation": "Executes logic for Array Initialization with Parameterized Constructors."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Array Initialization with Parameterized Constructors\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Array Initialization with Parameterized Constructors\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Array Initialization with Parameterized Constructors\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:30Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000031",
    "book": "constructors",
    "order_index": 31,
    "title": "#031 RAII File Handle Wrapper in Constructor/Destructor",
    "slug": "constructors-031-raii-file-handle-wrapper-in-constructor-destructor",
    "description": "Open file in constructor and automatically close file in destructor.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Open 'data.txt'",
        "output": "File opened in ctor -> Automatically closed in dtor",
        "explanation": "Executes logic for RAII File Handle Wrapper in Constructor/Destructor."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// RAII File Handle Wrapper in Constructor/Destructor\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# RAII File Handle Wrapper in Constructor/Destructor\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// RAII File Handle Wrapper in Constructor/Destructor\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:31Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000032",
    "book": "constructors",
    "order_index": 32,
    "title": "#032 RAII Mutex Lock Wrapper (Lock Guard Simulation)",
    "slug": "constructors-032-raii-mutex-lock-wrapper-lock-guard-simulation",
    "description": "Acquire lock in constructor and release lock in destructor.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Thread enters scope",
        "output": "Lock acquired -> Protected critical section -> Lock released",
        "explanation": "Executes logic for RAII Mutex Lock Wrapper (Lock Guard Simulation)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// RAII Mutex Lock Wrapper (Lock Guard Simulation)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# RAII Mutex Lock Wrapper (Lock Guard Simulation)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// RAII Mutex Lock Wrapper (Lock Guard Simulation)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:32Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000033",
    "book": "constructors",
    "order_index": 33,
    "title": "#033 Constructor Benchmarking Object Creation Speed",
    "slug": "constructors-033-constructor-benchmarking-object-creation-speed",
    "description": "Benchmark constructing 1,000,000 objects on stack vs heap.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "1M objects",
        "output": "Stack construction: Fast, Heap: Allocation overhead measured",
        "explanation": "Executes logic for Constructor Benchmarking Object Creation Speed."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor Benchmarking Object Creation Speed\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor Benchmarking Object Creation Speed\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor Benchmarking Object Creation Speed\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:33Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000034",
    "book": "constructors",
    "order_index": 34,
    "title": "#034 Virtual Destructor Necessity Proof",
    "slug": "constructors-034-virtual-destructor-necessity-proof",
    "description": "Demonstrate memory leak when deleting derived object through base pointer lacking virtual destructor.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Base* ptr = new Derived()",
        "output": "Virtual destructor ensured complete cleanup",
        "explanation": "Executes logic for Virtual Destructor Necessity Proof."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Virtual Destructor Necessity Proof\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Virtual Destructor Necessity Proof\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Virtual Destructor Necessity Proof\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:34Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000035",
    "book": "constructors",
    "order_index": 35,
    "title": "#035 Copy Elision and Return Value Optimization (RVO)",
    "slug": "constructors-035-copy-elision-and-return-value-optimization-rvo",
    "description": "Demonstrate compiler eliding copy constructor call when returning object by value.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Return obj",
        "output": "RVO: Zero copy constructor calls invoked",
        "explanation": "Executes logic for Copy Elision and Return Value Optimization (RVO)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Copy Elision and Return Value Optimization (RVO)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Copy Elision and Return Value Optimization (RVO)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Copy Elision and Return Value Optimization (RVO)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:35Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000036",
    "book": "constructors",
    "order_index": 36,
    "title": "#036 Named Constructor Idiom",
    "slug": "constructors-036-named-constructor-idiom",
    "description": "Implement named static factory methods like `Complex::fromPolar(r, theta)`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Polar(5, 0.927)",
        "output": "Complex: 3 + 4i (Constructed via named factory)",
        "explanation": "Executes logic for Named Constructor Idiom."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Named Constructor Idiom\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Named Constructor Idiom\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Named Constructor Idiom\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:36Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000037",
    "book": "constructors",
    "order_index": 37,
    "title": "#037 Constructor with std::initializer_list",
    "slug": "constructors-037-constructor-with-std-initializer-list",
    "description": "Implement constructor accepting `std::initializer_list<int>` allowing `MyVector v = {1, 2, 3, 4};`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "{10, 20, 30, 40}",
        "output": "Initialized with 4 elements from initializer_list",
        "explanation": "Executes logic for Constructor with std::initializer_list."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor with std::initializer_list\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor with std::initializer_list\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor with std::initializer_list\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:37Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000038",
    "book": "constructors",
    "order_index": 38,
    "title": "#038 Static Member Initialization Before Main",
    "slug": "constructors-038-static-member-initialization-before-main",
    "description": "Demonstrate static class member constructed before main() starts execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Program start",
        "output": "Static member initialized before main()",
        "explanation": "Executes logic for Static Member Initialization Before Main."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Static Member Initialization Before Main\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Static Member Initialization Before Main\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Static Member Initialization Before Main\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:38Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000039",
    "book": "constructors",
    "order_index": 39,
    "title": "#039 Nesting Destructor Calls in Composite Objects",
    "slug": "constructors-039-nesting-destructor-calls-in-composite-objects",
    "description": "Demonstrate inner member object destructors running before outer object destructor completes.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Outer containing Inner",
        "output": "Outer dtor started -> Inner dtor ran -> Outer dtor finished",
        "explanation": "Executes logic for Nesting Destructor Calls in Composite Objects."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Nesting Destructor Calls in Composite Objects\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Nesting Destructor Calls in Composite Objects\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Nesting Destructor Calls in Composite Objects\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:39Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000040",
    "book": "constructors",
    "order_index": 40,
    "title": "#040 Constructor Parameter Validation with Custom Error",
    "slug": "constructors-040-constructor-parameter-validation-with-custom-error",
    "description": "Validate input in constructor and initialize to safe fallback if invalid.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Age -10",
        "output": "Invalid age caught in ctor: Defaulted to 0",
        "explanation": "Executes logic for Constructor Parameter Validation with Custom Error."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor Parameter Validation with Custom Error\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor Parameter Validation with Custom Error\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor Parameter Validation with Custom Error\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:40Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000041",
    "book": "constructors",
    "order_index": 41,
    "title": "#041 Deep Copy of Linked List in Copy Constructor",
    "slug": "constructors-041-deep-copy-of-linked-list-in-copy-constructor",
    "description": "Implement copy constructor for LinkedList class cloning every dynamic node.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "List [1, 2, 3]",
        "output": "Cloned List [1, 2, 3] with unique node pointers",
        "explanation": "Executes logic for Deep Copy of Linked List in Copy Constructor."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Deep Copy of Linked List in Copy Constructor\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deep Copy of Linked List in Copy Constructor\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deep Copy of Linked List in Copy Constructor\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:41Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000042",
    "book": "constructors",
    "order_index": 42,
    "title": "#042 Deep Copy of Binary Tree in Copy Constructor",
    "slug": "constructors-042-deep-copy-of-binary-tree-in-copy-constructor",
    "description": "Implement copy constructor recursively cloning an entire binary search tree.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "BST with 5 nodes",
        "output": "Cloned BST with independent node allocations",
        "explanation": "Executes logic for Deep Copy of Binary Tree in Copy Constructor."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Deep Copy of Binary Tree in Copy Constructor\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deep Copy of Binary Tree in Copy Constructor\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deep Copy of Binary Tree in Copy Constructor\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:42Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000043",
    "book": "constructors",
    "order_index": 43,
    "title": "#043 Move Semantics on Dynamic Matrix Class",
    "slug": "constructors-043-move-semantics-on-dynamic-matrix-class",
    "description": "Implement move constructor on Matrix class transferring row pointers in O(1) time.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Matrix 1000x1000",
        "output": "Matrix moved in O(1) time (Pointers swapped)",
        "explanation": "Executes logic for Move Semantics on Dynamic Matrix Class."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Move Semantics on Dynamic Matrix Class\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Move Semantics on Dynamic Matrix Class\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Move Semantics on Dynamic Matrix Class\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:43Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000044",
    "book": "constructors",
    "order_index": 44,
    "title": "#044 Tracking Object Lifetimes with Instance ID Counter",
    "slug": "constructors-044-tracking-object-lifetimes-with-instance-id-counter",
    "description": "Print constructor ID and destructor ID for every instantiated object.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "3 objects",
        "output": "Created #1, #2, #3 -> Destroyed #3, #2, #1",
        "explanation": "Executes logic for Tracking Object Lifetimes with Instance ID Counter."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Tracking Object Lifetimes with Instance ID Counter\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Tracking Object Lifetimes with Instance ID Counter\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Tracking Object Lifetimes with Instance ID Counter\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:44Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000045",
    "book": "constructors",
    "order_index": 45,
    "title": "#045 Safe Buffer Class with Null Pointer Guarantee",
    "slug": "constructors-045-safe-buffer-class-with-null-pointer-guarantee",
    "description": "Constructor initializes buffer to nullptr if size is 0 to avoid invalid memory ops.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Size 0",
        "output": "Buffer safely initialized to nullptr",
        "explanation": "Executes logic for Safe Buffer Class with Null Pointer Guarantee."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Safe Buffer Class with Null Pointer Guarantee\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Safe Buffer Class with Null Pointer Guarantee\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Safe Buffer Class with Null Pointer Guarantee\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:45Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000046",
    "book": "constructors",
    "order_index": 46,
    "title": "#046 Constructor Initializer with Ternary Operator",
    "slug": "constructors-046-constructor-initializer-with-ternary-operator",
    "description": "Use ternary operator inside member initializer list for conditional configuration.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Flag=true",
        "output": "Mode set to 'FAST' via ternary in initializer list",
        "explanation": "Executes logic for Constructor Initializer with Ternary Operator."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor Initializer with Ternary Operator\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor Initializer with Ternary Operator\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor Initializer with Ternary Operator\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:46Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000047",
    "book": "constructors",
    "order_index": 47,
    "title": "#047 Preventing Heap Allocation with Private `operator new`",
    "slug": "constructors-047-preventing-heap-allocation-with-private-operator-n",
    "description": "Make `operator new` private in class to restrict object instantiation to stack only.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Stack vs Heap",
        "output": "Stack allowed, Heap allocation prevented by compiler",
        "explanation": "Executes logic for Preventing Heap Allocation with Private `operator new`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Preventing Heap Allocation with Private `operator new`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Preventing Heap Allocation with Private `operator new`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Preventing Heap Allocation with Private `operator new`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:47Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000048",
    "book": "constructors",
    "order_index": 48,
    "title": "#048 Preventing Stack Allocation with Private Destructor",
    "slug": "constructors-048-preventing-stack-allocation-with-private-destructo",
    "description": "Make destructor private and provide explicit `destroy()` method to force heap allocation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Heap only",
        "output": "Object created on heap and deleted via destroy()",
        "explanation": "Executes logic for Preventing Stack Allocation with Private Destructor."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Preventing Stack Allocation with Private Destructor\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Preventing Stack Allocation with Private Destructor\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Preventing Stack Allocation with Private Destructor\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:48Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000049",
    "book": "constructors",
    "order_index": 49,
    "title": "#049 Constructor Overloading for Multiple Coordinates (Cartesian vs Polar)",
    "slug": "constructors-049-constructor-overloading-for-multiple-coordinates-c",
    "description": "Differentiate Cartesian(x,y) from Polar(r, angle) constructors using tag types.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Cartesian(3,4)",
        "output": "Cartesian Point initialized: (3, 4)",
        "explanation": "Executes logic for Constructor Overloading for Multiple Coordinates (Cartesian vs Polar)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor Overloading for Multiple Coordinates (Cartesian vs Polar)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor Overloading for Multiple Coordinates (Cartesian vs Polar)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor Overloading for Multiple Coordinates (Cartesian vs Polar)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:49Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000050",
    "book": "constructors",
    "order_index": 50,
    "title": "#050 Destructor Never Throws (`noexcept` Guarantee)",
    "slug": "constructors-050-destructor-never-throws-noexcept-guarantee",
    "description": "Demonstrate that destructors are implicitly `noexcept(true)` in C++11 and must never throw.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Dtor execution",
        "output": "Destructor completed safely without throwing",
        "explanation": "Executes logic for Destructor Never Throws (`noexcept` Guarantee)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Destructor Never Throws (`noexcept` Guarantee)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Destructor Never Throws (`noexcept` Guarantee)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Destructor Never Throws (`noexcept` Guarantee)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:50Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000051",
    "book": "constructors",
    "order_index": 51,
    "title": "#051 Constructor & Destructor Problem 51",
    "slug": "constructors-051-constructor-destructor-problem-51",
    "description": "Implement constructor/destructor specification #51 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 51 1",
        "output": "Instance #51 constructed and cleanly destructed (Param: 51)",
        "explanation": "Executes logic for Constructor & Destructor Problem 51."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 51\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 51\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 51\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:51Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000052",
    "book": "constructors",
    "order_index": 52,
    "title": "#052 Constructor & Destructor Problem 52",
    "slug": "constructors-052-constructor-destructor-problem-52",
    "description": "Implement constructor/destructor specification #52 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 52 1",
        "output": "Instance #52 constructed and cleanly destructed (Param: 52)",
        "explanation": "Executes logic for Constructor & Destructor Problem 52."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 52\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 52\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 52\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:52Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000053",
    "book": "constructors",
    "order_index": 53,
    "title": "#053 Constructor & Destructor Problem 53",
    "slug": "constructors-053-constructor-destructor-problem-53",
    "description": "Implement constructor/destructor specification #53 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 53 1",
        "output": "Instance #53 constructed and cleanly destructed (Param: 53)",
        "explanation": "Executes logic for Constructor & Destructor Problem 53."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 53\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 53\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 53\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:53Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000054",
    "book": "constructors",
    "order_index": 54,
    "title": "#054 Constructor & Destructor Problem 54",
    "slug": "constructors-054-constructor-destructor-problem-54",
    "description": "Implement constructor/destructor specification #54 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 54 1",
        "output": "Instance #54 constructed and cleanly destructed (Param: 54)",
        "explanation": "Executes logic for Constructor & Destructor Problem 54."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 54\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 54\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 54\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:54Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000055",
    "book": "constructors",
    "order_index": 55,
    "title": "#055 Constructor & Destructor Problem 55",
    "slug": "constructors-055-constructor-destructor-problem-55",
    "description": "Implement constructor/destructor specification #55 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 55 1",
        "output": "Instance #55 constructed and cleanly destructed (Param: 55)",
        "explanation": "Executes logic for Constructor & Destructor Problem 55."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 55\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 55\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 55\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:55Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000056",
    "book": "constructors",
    "order_index": 56,
    "title": "#056 Constructor & Destructor Problem 56",
    "slug": "constructors-056-constructor-destructor-problem-56",
    "description": "Implement constructor/destructor specification #56 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 56 1",
        "output": "Instance #56 constructed and cleanly destructed (Param: 56)",
        "explanation": "Executes logic for Constructor & Destructor Problem 56."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 56\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 56\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 56\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:56Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000057",
    "book": "constructors",
    "order_index": 57,
    "title": "#057 Constructor & Destructor Problem 57",
    "slug": "constructors-057-constructor-destructor-problem-57",
    "description": "Implement constructor/destructor specification #57 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 57 1",
        "output": "Instance #57 constructed and cleanly destructed (Param: 57)",
        "explanation": "Executes logic for Constructor & Destructor Problem 57."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 57\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 57\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 57\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:57Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000058",
    "book": "constructors",
    "order_index": 58,
    "title": "#058 Constructor & Destructor Problem 58",
    "slug": "constructors-058-constructor-destructor-problem-58",
    "description": "Implement constructor/destructor specification #58 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 58 1",
        "output": "Instance #58 constructed and cleanly destructed (Param: 58)",
        "explanation": "Executes logic for Constructor & Destructor Problem 58."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 58\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 58\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 58\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:58Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000059",
    "book": "constructors",
    "order_index": 59,
    "title": "#059 Constructor & Destructor Problem 59",
    "slug": "constructors-059-constructor-destructor-problem-59",
    "description": "Implement constructor/destructor specification #59 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 59 1",
        "output": "Instance #59 constructed and cleanly destructed (Param: 59)",
        "explanation": "Executes logic for Constructor & Destructor Problem 59."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 59\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 59\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 59\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:59Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000060",
    "book": "constructors",
    "order_index": 60,
    "title": "#060 Constructor & Destructor Problem 60",
    "slug": "constructors-060-constructor-destructor-problem-60",
    "description": "Implement constructor/destructor specification #60 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 60 1",
        "output": "Instance #60 constructed and cleanly destructed (Param: 60)",
        "explanation": "Executes logic for Constructor & Destructor Problem 60."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 60\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 60\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 60\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:00Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000061",
    "book": "constructors",
    "order_index": 61,
    "title": "#061 Constructor & Destructor Problem 61",
    "slug": "constructors-061-constructor-destructor-problem-61",
    "description": "Implement constructor/destructor specification #61 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 61 1",
        "output": "Instance #61 constructed and cleanly destructed (Param: 61)",
        "explanation": "Executes logic for Constructor & Destructor Problem 61."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 61\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 61\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 61\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:01Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000062",
    "book": "constructors",
    "order_index": 62,
    "title": "#062 Constructor & Destructor Problem 62",
    "slug": "constructors-062-constructor-destructor-problem-62",
    "description": "Implement constructor/destructor specification #62 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 62 1",
        "output": "Instance #62 constructed and cleanly destructed (Param: 62)",
        "explanation": "Executes logic for Constructor & Destructor Problem 62."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 62\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 62\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 62\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:02Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000063",
    "book": "constructors",
    "order_index": 63,
    "title": "#063 Constructor & Destructor Problem 63",
    "slug": "constructors-063-constructor-destructor-problem-63",
    "description": "Implement constructor/destructor specification #63 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 63 1",
        "output": "Instance #63 constructed and cleanly destructed (Param: 63)",
        "explanation": "Executes logic for Constructor & Destructor Problem 63."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 63\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 63\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 63\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:03Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000064",
    "book": "constructors",
    "order_index": 64,
    "title": "#064 Constructor & Destructor Problem 64",
    "slug": "constructors-064-constructor-destructor-problem-64",
    "description": "Implement constructor/destructor specification #64 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 64 1",
        "output": "Instance #64 constructed and cleanly destructed (Param: 64)",
        "explanation": "Executes logic for Constructor & Destructor Problem 64."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 64\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 64\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 64\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:04Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000065",
    "book": "constructors",
    "order_index": 65,
    "title": "#065 Constructor & Destructor Problem 65",
    "slug": "constructors-065-constructor-destructor-problem-65",
    "description": "Implement constructor/destructor specification #65 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 65 1",
        "output": "Instance #65 constructed and cleanly destructed (Param: 65)",
        "explanation": "Executes logic for Constructor & Destructor Problem 65."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 65\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 65\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 65\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:05Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000066",
    "book": "constructors",
    "order_index": 66,
    "title": "#066 Constructor & Destructor Problem 66",
    "slug": "constructors-066-constructor-destructor-problem-66",
    "description": "Implement constructor/destructor specification #66 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 66 1",
        "output": "Instance #66 constructed and cleanly destructed (Param: 66)",
        "explanation": "Executes logic for Constructor & Destructor Problem 66."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 66\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 66\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 66\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:06Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000067",
    "book": "constructors",
    "order_index": 67,
    "title": "#067 Constructor & Destructor Problem 67",
    "slug": "constructors-067-constructor-destructor-problem-67",
    "description": "Implement constructor/destructor specification #67 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 67 1",
        "output": "Instance #67 constructed and cleanly destructed (Param: 67)",
        "explanation": "Executes logic for Constructor & Destructor Problem 67."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 67\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 67\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 67\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:07Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000068",
    "book": "constructors",
    "order_index": 68,
    "title": "#068 Constructor & Destructor Problem 68",
    "slug": "constructors-068-constructor-destructor-problem-68",
    "description": "Implement constructor/destructor specification #68 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 68 1",
        "output": "Instance #68 constructed and cleanly destructed (Param: 68)",
        "explanation": "Executes logic for Constructor & Destructor Problem 68."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 68\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 68\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 68\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:08Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000069",
    "book": "constructors",
    "order_index": 69,
    "title": "#069 Constructor & Destructor Problem 69",
    "slug": "constructors-069-constructor-destructor-problem-69",
    "description": "Implement constructor/destructor specification #69 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 69 1",
        "output": "Instance #69 constructed and cleanly destructed (Param: 69)",
        "explanation": "Executes logic for Constructor & Destructor Problem 69."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 69\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 69\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 69\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:09Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000070",
    "book": "constructors",
    "order_index": 70,
    "title": "#070 Constructor & Destructor Problem 70",
    "slug": "constructors-070-constructor-destructor-problem-70",
    "description": "Implement constructor/destructor specification #70 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 70 1",
        "output": "Instance #70 constructed and cleanly destructed (Param: 70)",
        "explanation": "Executes logic for Constructor & Destructor Problem 70."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 70\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 70\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 70\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:10Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000071",
    "book": "constructors",
    "order_index": 71,
    "title": "#071 Constructor & Destructor Problem 71",
    "slug": "constructors-071-constructor-destructor-problem-71",
    "description": "Implement constructor/destructor specification #71 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 71 1",
        "output": "Instance #71 constructed and cleanly destructed (Param: 71)",
        "explanation": "Executes logic for Constructor & Destructor Problem 71."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 71\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 71\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 71\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:11Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000072",
    "book": "constructors",
    "order_index": 72,
    "title": "#072 Constructor & Destructor Problem 72",
    "slug": "constructors-072-constructor-destructor-problem-72",
    "description": "Implement constructor/destructor specification #72 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 72 1",
        "output": "Instance #72 constructed and cleanly destructed (Param: 72)",
        "explanation": "Executes logic for Constructor & Destructor Problem 72."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 72\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 72\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 72\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:12Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000073",
    "book": "constructors",
    "order_index": 73,
    "title": "#073 Constructor & Destructor Problem 73",
    "slug": "constructors-073-constructor-destructor-problem-73",
    "description": "Implement constructor/destructor specification #73 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 73 1",
        "output": "Instance #73 constructed and cleanly destructed (Param: 73)",
        "explanation": "Executes logic for Constructor & Destructor Problem 73."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 73\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 73\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 73\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:13Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000074",
    "book": "constructors",
    "order_index": 74,
    "title": "#074 Constructor & Destructor Problem 74",
    "slug": "constructors-074-constructor-destructor-problem-74",
    "description": "Implement constructor/destructor specification #74 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 74 1",
        "output": "Instance #74 constructed and cleanly destructed (Param: 74)",
        "explanation": "Executes logic for Constructor & Destructor Problem 74."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 74\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 74\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 74\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:14Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000075",
    "book": "constructors",
    "order_index": 75,
    "title": "#075 Constructor & Destructor Problem 75",
    "slug": "constructors-075-constructor-destructor-problem-75",
    "description": "Implement constructor/destructor specification #75 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 75 1",
        "output": "Instance #75 constructed and cleanly destructed (Param: 75)",
        "explanation": "Executes logic for Constructor & Destructor Problem 75."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 75\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 75\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 75\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:15Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000076",
    "book": "constructors",
    "order_index": 76,
    "title": "#076 Constructor & Destructor Problem 76",
    "slug": "constructors-076-constructor-destructor-problem-76",
    "description": "Implement constructor/destructor specification #76 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 76 1",
        "output": "Instance #76 constructed and cleanly destructed (Param: 76)",
        "explanation": "Executes logic for Constructor & Destructor Problem 76."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 76\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 76\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 76\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:16Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000077",
    "book": "constructors",
    "order_index": 77,
    "title": "#077 Constructor & Destructor Problem 77",
    "slug": "constructors-077-constructor-destructor-problem-77",
    "description": "Implement constructor/destructor specification #77 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 77 1",
        "output": "Instance #77 constructed and cleanly destructed (Param: 77)",
        "explanation": "Executes logic for Constructor & Destructor Problem 77."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 77\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 77\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 77\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:17Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000078",
    "book": "constructors",
    "order_index": 78,
    "title": "#078 Constructor & Destructor Problem 78",
    "slug": "constructors-078-constructor-destructor-problem-78",
    "description": "Implement constructor/destructor specification #78 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 78 1",
        "output": "Instance #78 constructed and cleanly destructed (Param: 78)",
        "explanation": "Executes logic for Constructor & Destructor Problem 78."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 78\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 78\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 78\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:18Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000079",
    "book": "constructors",
    "order_index": 79,
    "title": "#079 Constructor & Destructor Problem 79",
    "slug": "constructors-079-constructor-destructor-problem-79",
    "description": "Implement constructor/destructor specification #79 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 79 1",
        "output": "Instance #79 constructed and cleanly destructed (Param: 79)",
        "explanation": "Executes logic for Constructor & Destructor Problem 79."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 79\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 79\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 79\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:19Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000080",
    "book": "constructors",
    "order_index": 80,
    "title": "#080 Constructor & Destructor Problem 80",
    "slug": "constructors-080-constructor-destructor-problem-80",
    "description": "Implement constructor/destructor specification #80 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 80 1",
        "output": "Instance #80 constructed and cleanly destructed (Param: 80)",
        "explanation": "Executes logic for Constructor & Destructor Problem 80."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 80\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 80\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 80\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:20Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000081",
    "book": "constructors",
    "order_index": 81,
    "title": "#081 Constructor & Destructor Problem 81",
    "slug": "constructors-081-constructor-destructor-problem-81",
    "description": "Implement constructor/destructor specification #81 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 81 1",
        "output": "Instance #81 constructed and cleanly destructed (Param: 81)",
        "explanation": "Executes logic for Constructor & Destructor Problem 81."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 81\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 81\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 81\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:21Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000082",
    "book": "constructors",
    "order_index": 82,
    "title": "#082 Constructor & Destructor Problem 82",
    "slug": "constructors-082-constructor-destructor-problem-82",
    "description": "Implement constructor/destructor specification #82 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 82 1",
        "output": "Instance #82 constructed and cleanly destructed (Param: 82)",
        "explanation": "Executes logic for Constructor & Destructor Problem 82."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 82\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 82\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 82\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:22Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000083",
    "book": "constructors",
    "order_index": 83,
    "title": "#083 Constructor & Destructor Problem 83",
    "slug": "constructors-083-constructor-destructor-problem-83",
    "description": "Implement constructor/destructor specification #83 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 83 1",
        "output": "Instance #83 constructed and cleanly destructed (Param: 83)",
        "explanation": "Executes logic for Constructor & Destructor Problem 83."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 83\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 83\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 83\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:23Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000084",
    "book": "constructors",
    "order_index": 84,
    "title": "#084 Constructor & Destructor Problem 84",
    "slug": "constructors-084-constructor-destructor-problem-84",
    "description": "Implement constructor/destructor specification #84 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 84 1",
        "output": "Instance #84 constructed and cleanly destructed (Param: 84)",
        "explanation": "Executes logic for Constructor & Destructor Problem 84."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 84\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 84\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 84\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:24Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000085",
    "book": "constructors",
    "order_index": 85,
    "title": "#085 Constructor & Destructor Problem 85",
    "slug": "constructors-085-constructor-destructor-problem-85",
    "description": "Implement constructor/destructor specification #85 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 85 1",
        "output": "Instance #85 constructed and cleanly destructed (Param: 85)",
        "explanation": "Executes logic for Constructor & Destructor Problem 85."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 85\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 85\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 85\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:25Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000086",
    "book": "constructors",
    "order_index": 86,
    "title": "#086 Constructor & Destructor Problem 86",
    "slug": "constructors-086-constructor-destructor-problem-86",
    "description": "Implement constructor/destructor specification #86 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 86 1",
        "output": "Instance #86 constructed and cleanly destructed (Param: 86)",
        "explanation": "Executes logic for Constructor & Destructor Problem 86."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 86\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 86\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 86\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:26Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000087",
    "book": "constructors",
    "order_index": 87,
    "title": "#087 Constructor & Destructor Problem 87",
    "slug": "constructors-087-constructor-destructor-problem-87",
    "description": "Implement constructor/destructor specification #87 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 87 1",
        "output": "Instance #87 constructed and cleanly destructed (Param: 87)",
        "explanation": "Executes logic for Constructor & Destructor Problem 87."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 87\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 87\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 87\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:27Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000088",
    "book": "constructors",
    "order_index": 88,
    "title": "#088 Constructor & Destructor Problem 88",
    "slug": "constructors-088-constructor-destructor-problem-88",
    "description": "Implement constructor/destructor specification #88 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 88 1",
        "output": "Instance #88 constructed and cleanly destructed (Param: 88)",
        "explanation": "Executes logic for Constructor & Destructor Problem 88."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 88\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 88\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 88\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:28Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000089",
    "book": "constructors",
    "order_index": 89,
    "title": "#089 Constructor & Destructor Problem 89",
    "slug": "constructors-089-constructor-destructor-problem-89",
    "description": "Implement constructor/destructor specification #89 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 89 1",
        "output": "Instance #89 constructed and cleanly destructed (Param: 89)",
        "explanation": "Executes logic for Constructor & Destructor Problem 89."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 89\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 89\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 89\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:29Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000090",
    "book": "constructors",
    "order_index": 90,
    "title": "#090 Constructor & Destructor Problem 90",
    "slug": "constructors-090-constructor-destructor-problem-90",
    "description": "Implement constructor/destructor specification #90 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 90 1",
        "output": "Instance #90 constructed and cleanly destructed (Param: 90)",
        "explanation": "Executes logic for Constructor & Destructor Problem 90."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 90\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 90\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 90\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:30Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000091",
    "book": "constructors",
    "order_index": 91,
    "title": "#091 Constructor & Destructor Problem 91",
    "slug": "constructors-091-constructor-destructor-problem-91",
    "description": "Implement constructor/destructor specification #91 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 91 1",
        "output": "Instance #91 constructed and cleanly destructed (Param: 91)",
        "explanation": "Executes logic for Constructor & Destructor Problem 91."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 91\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 91\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 91\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:31Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000092",
    "book": "constructors",
    "order_index": 92,
    "title": "#092 Constructor & Destructor Problem 92",
    "slug": "constructors-092-constructor-destructor-problem-92",
    "description": "Implement constructor/destructor specification #92 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 92 1",
        "output": "Instance #92 constructed and cleanly destructed (Param: 92)",
        "explanation": "Executes logic for Constructor & Destructor Problem 92."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 92\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 92\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 92\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:32Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000093",
    "book": "constructors",
    "order_index": 93,
    "title": "#093 Constructor & Destructor Problem 93",
    "slug": "constructors-093-constructor-destructor-problem-93",
    "description": "Implement constructor/destructor specification #93 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 93 1",
        "output": "Instance #93 constructed and cleanly destructed (Param: 93)",
        "explanation": "Executes logic for Constructor & Destructor Problem 93."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 93\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 93\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 93\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:33Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000094",
    "book": "constructors",
    "order_index": 94,
    "title": "#094 Constructor & Destructor Problem 94",
    "slug": "constructors-094-constructor-destructor-problem-94",
    "description": "Implement constructor/destructor specification #94 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 94 1",
        "output": "Instance #94 constructed and cleanly destructed (Param: 94)",
        "explanation": "Executes logic for Constructor & Destructor Problem 94."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 94\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 94\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 94\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:34Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000095",
    "book": "constructors",
    "order_index": 95,
    "title": "#095 Constructor & Destructor Problem 95",
    "slug": "constructors-095-constructor-destructor-problem-95",
    "description": "Implement constructor/destructor specification #95 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 95 1",
        "output": "Instance #95 constructed and cleanly destructed (Param: 95)",
        "explanation": "Executes logic for Constructor & Destructor Problem 95."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 95\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 95\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 95\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:35Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000096",
    "book": "constructors",
    "order_index": 96,
    "title": "#096 Constructor & Destructor Problem 96",
    "slug": "constructors-096-constructor-destructor-problem-96",
    "description": "Implement constructor/destructor specification #96 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 96 1",
        "output": "Instance #96 constructed and cleanly destructed (Param: 96)",
        "explanation": "Executes logic for Constructor & Destructor Problem 96."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 96\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 96\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 96\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:36Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000097",
    "book": "constructors",
    "order_index": 97,
    "title": "#097 Constructor & Destructor Problem 97",
    "slug": "constructors-097-constructor-destructor-problem-97",
    "description": "Implement constructor/destructor specification #97 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 97 1",
        "output": "Instance #97 constructed and cleanly destructed (Param: 97)",
        "explanation": "Executes logic for Constructor & Destructor Problem 97."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 97\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 97\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 97\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:37Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000098",
    "book": "constructors",
    "order_index": 98,
    "title": "#098 Constructor & Destructor Problem 98",
    "slug": "constructors-098-constructor-destructor-problem-98",
    "description": "Implement constructor/destructor specification #98 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 98 1",
        "output": "Instance #98 constructed and cleanly destructed (Param: 98)",
        "explanation": "Executes logic for Constructor & Destructor Problem 98."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 98\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 98\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 98\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:38Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000099",
    "book": "constructors",
    "order_index": 99,
    "title": "#099 Constructor & Destructor Problem 99",
    "slug": "constructors-099-constructor-destructor-problem-99",
    "description": "Implement constructor/destructor specification #99 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 99 1",
        "output": "Instance #99 constructed and cleanly destructed (Param: 99)",
        "explanation": "Executes logic for Constructor & Destructor Problem 99."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 99\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 99\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 99\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:39Z"
  },
  {
    "id": "00000000-0000-4000-8004-000000000100",
    "book": "constructors",
    "order_index": 100,
    "title": "#100 Constructor & Destructor Problem 100",
    "slug": "constructors-100-constructor-destructor-problem-100",
    "description": "Implement constructor/destructor specification #100 managing initialization, memory invariants, or cleanup lifecycle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Constructors & Destructors",
    "tags": [
      "Constructors",
      "Destructors",
      "RAII",
      "Copy Constructor",
      "Move Constructor"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CTOR_PARAM 100 1",
        "output": "Instance #100 constructed and cleanly destructed (Param: 100)",
        "explanation": "Executes logic for Constructor & Destructor Problem 100."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor & Destructor Problem 100\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor & Destructor Problem 100\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor & Destructor Problem 100\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:40Z"
  }
];
