import { Problem } from '../../types/problem';

export const ACCESS_SPECIFIERS_PROBLEMS: Problem[] = [
  {
    "id": "00000000-0000-4000-8005-000000000001",
    "book": "accessspecifiers",
    "order_index": 1,
    "title": "#001 Public Access Specifier Demonstration",
    "slug": "accessspecifiers-001-public-access-specifier-demonstration",
    "description": "Demonstrate public member variables and functions accessible directly from main().\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Set public x=10",
        "output": "Public member x: 10",
        "explanation": "Executes logic for Public Access Specifier Demonstration."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Public Access Specifier Demonstration\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Public Access Specifier Demonstration\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Public Access Specifier Demonstration\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:01Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000002",
    "book": "accessspecifiers",
    "order_index": 2,
    "title": "#002 Private Member Data Hiding",
    "slug": "accessspecifiers-002-private-member-data-hiding",
    "description": "Demonstrate private variables accessible only through public member functions.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Set private balance via deposit()",
        "output": "Private balance safely updated: 500",
        "explanation": "Executes logic for Private Member Data Hiding."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Private Member Data Hiding\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Private Member Data Hiding\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Private Member Data Hiding\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:02Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000003",
    "book": "accessspecifiers",
    "order_index": 3,
    "title": "#003 Protected Member Variable in Inheritance",
    "slug": "accessspecifiers-003-protected-member-variable-in-inheritance",
    "description": "Demonstrate protected variables accessible by derived classes but hidden from outside functions.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Derived accessing protected speed",
        "output": "Derived class read protected speed: 80 km/h",
        "explanation": "Executes logic for Protected Member Variable in Inheritance."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Protected Member Variable in Inheritance\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Protected Member Variable in Inheritance\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Protected Member Variable in Inheritance\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:03Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000004",
    "book": "accessspecifiers",
    "order_index": 4,
    "title": "#004 Struct vs Class Default Access Level",
    "slug": "accessspecifiers-004-struct-vs-class-default-access-level",
    "description": "Demonstrate that struct members default to public while class members default to private.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Struct vs Class",
        "output": "Struct: public by default, Class: private by default",
        "explanation": "Executes logic for Struct vs Class Default Access Level."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Struct vs Class Default Access Level\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Struct vs Class Default Access Level\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Struct vs Class Default Access Level\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:04Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000005",
    "book": "accessspecifiers",
    "order_index": 5,
    "title": "#005 Private Method as Internal Helper",
    "slug": "accessspecifiers-005-private-method-as-internal-helper",
    "description": "Implement a private helper function `sanitizeInput()` called internally by a public method.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Input '   raw text   '",
        "output": "Sanitized output: 'raw text'",
        "explanation": "Executes logic for Private Method as Internal Helper."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Private Method as Internal Helper\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Private Method as Internal Helper\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Private Method as Internal Helper\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:05Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000006",
    "book": "accessspecifiers",
    "order_index": 6,
    "title": "#006 Protected Method Inherited by Subclass",
    "slug": "accessspecifiers-006-protected-method-inherited-by-subclass",
    "description": "Define a protected method `calculateBaseBonus()` callable only from derived Employee types.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Manager bonus",
        "output": "Calculated manager bonus using protected base method: 1500",
        "explanation": "Executes logic for Protected Method Inherited by Subclass."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Protected Method Inherited by Subclass\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Protected Method Inherited by Subclass\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Protected Method Inherited by Subclass\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:06Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000007",
    "book": "accessspecifiers",
    "order_index": 7,
    "title": "#007 Public Inheritance Member Visibility Rules",
    "slug": "accessspecifiers-007-public-inheritance-member-visibility-rules",
    "description": "Demonstrate public inheritance where public remains public and protected remains protected.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Derived obj",
        "output": "Public method called, Protected member accessed internally",
        "explanation": "Executes logic for Public Inheritance Member Visibility Rules."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Public Inheritance Member Visibility Rules\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Public Inheritance Member Visibility Rules\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Public Inheritance Member Visibility Rules\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:07Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000008",
    "book": "accessspecifiers",
    "order_index": 8,
    "title": "#008 Protected Inheritance Visibility Changes",
    "slug": "accessspecifiers-008-protected-inheritance-visibility-changes",
    "description": "Demonstrate protected inheritance turning base public and protected members into protected.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Subclass access",
        "output": "Base public method becomes protected in derived",
        "explanation": "Executes logic for Protected Inheritance Visibility Changes."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Protected Inheritance Visibility Changes\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Protected Inheritance Visibility Changes\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Protected Inheritance Visibility Changes\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:08Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000009",
    "book": "accessspecifiers",
    "order_index": 9,
    "title": "#009 Private Inheritance Visibility Changes",
    "slug": "accessspecifiers-009-private-inheritance-visibility-changes",
    "description": "Demonstrate private inheritance turning all inherited base members into private in derived.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Private inherit",
        "output": "All inherited members are private in derived class",
        "explanation": "Executes logic for Private Inheritance Visibility Changes."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Private Inheritance Visibility Changes\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Private Inheritance Visibility Changes\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Private Inheritance Visibility Changes\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:09Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000010",
    "book": "accessspecifiers",
    "order_index": 10,
    "title": "#010 Overriding Access Control in Derived Classes",
    "slug": "accessspecifiers-010-overriding-access-control-in-derived-classes",
    "description": "Show that a derived class can change visibility of an inherited virtual method (e.g. public to private).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Override visibility",
        "output": "Visibility modified in derived class",
        "explanation": "Executes logic for Overriding Access Control in Derived Classes."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Overriding Access Control in Derived Classes\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Overriding Access Control in Derived Classes\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Overriding Access Control in Derived Classes\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:10Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000011",
    "book": "accessspecifiers",
    "order_index": 11,
    "title": "#011 Friend Function Bypassing Access Specifiers",
    "slug": "accessspecifiers-011-friend-function-bypassing-access-specifiers",
    "description": "Demonstrate a friend function accessing private and protected members of a class.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Friend reading private key",
        "output": "Friend function read private key: 0xDEADBEEF",
        "explanation": "Executes logic for Friend Function Bypassing Access Specifiers."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function Bypassing Access Specifiers\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function Bypassing Access Specifiers\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function Bypassing Access Specifiers\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:11Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000012",
    "book": "accessspecifiers",
    "order_index": 12,
    "title": "#012 Friend Class Full Private Member Access",
    "slug": "accessspecifiers-012-friend-class-full-private-member-access",
    "description": "Demonstrate a friend class having full access to all private members of the host class.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Friend class Inspector",
        "output": "Inspector inspected private state: [ID=101, Status=ACTIVE]",
        "explanation": "Executes logic for Friend Class Full Private Member Access."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Class Full Private Member Access\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Class Full Private Member Access\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Class Full Private Member Access\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:12Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000013",
    "book": "accessspecifiers",
    "order_index": 13,
    "title": "#013 Read-Only Property via Public Getter & Private Setter",
    "slug": "accessspecifiers-013-read-only-property-via-public-getter-private-sette",
    "description": "Provide public getter and private setter so only internal methods can modify the field.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Read property",
        "output": "Value: 42 (Read-only for external callers)",
        "explanation": "Executes logic for Read-Only Property via Public Getter & Private Setter."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Read-Only Property via Public Getter & Private Setter\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Read-Only Property via Public Getter & Private Setter\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Read-Only Property via Public Getter & Private Setter\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:13Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000014",
    "book": "accessspecifiers",
    "order_index": 14,
    "title": "#014 Write-Only Property via Public Setter & Private Variable",
    "slug": "accessspecifiers-014-write-only-property-via-public-setter-private-vari",
    "description": "Provide public setter for password hashing without providing a plain-text getter.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Set password 'Secret'",
        "output": "Password hash stored (Plaintext getter not provided)",
        "explanation": "Executes logic for Write-Only Property via Public Setter & Private Variable."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Write-Only Property via Public Setter & Private Variable\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Write-Only Property via Public Setter & Private Variable\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Write-Only Property via Public Setter & Private Variable\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:14Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000015",
    "book": "accessspecifiers",
    "order_index": 15,
    "title": "#015 Data Invariant Enforcement in Private State",
    "slug": "accessspecifiers-015-data-invariant-enforcement-in-private-state",
    "description": "Enforce that private percentage variable is strictly clamped between 0 and 100.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Set 150%",
        "output": "Clamped to valid range: 100%",
        "explanation": "Executes logic for Data Invariant Enforcement in Private State."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Data Invariant Enforcement in Private State\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Data Invariant Enforcement in Private State\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Data Invariant Enforcement in Private State\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:15Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000016",
    "book": "accessspecifiers",
    "order_index": 16,
    "title": "#016 Access Specifier Separation in Large Classes",
    "slug": "accessspecifiers-016-access-specifier-separation-in-large-classes",
    "description": "Organize class into clearly demarcated private state, protected hooks, and public API sections.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Class architecture",
        "output": "Clean separation of public, protected, and private sections",
        "explanation": "Executes logic for Access Specifier Separation in Large Classes."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Separation in Large Classes\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Separation in Large Classes\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Separation in Large Classes\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:16Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000017",
    "book": "accessspecifiers",
    "order_index": 17,
    "title": "#017 Preventing Subclass Modification with Private Members",
    "slug": "accessspecifiers-017-preventing-subclass-modification-with-private-memb",
    "description": "Show that derived class cannot directly access or corrupt base private members.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Subclass mutation attempt",
        "output": "Base private member protected from direct subclass mutation",
        "explanation": "Executes logic for Preventing Subclass Modification with Private Members."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Preventing Subclass Modification with Private Members\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Preventing Subclass Modification with Private Members\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Preventing Subclass Modification with Private Members\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:17Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000018",
    "book": "accessspecifiers",
    "order_index": 18,
    "title": "#018 Using Protected Constructor for Abstract Base Classes",
    "slug": "accessspecifiers-018-using-protected-constructor-for-abstract-base-clas",
    "description": "Make base class constructor protected so only derived classes can instantiate it.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Instantiate Derived",
        "output": "Derived instantiated, direct Base instantiation blocked",
        "explanation": "Executes logic for Using Protected Constructor for Abstract Base Classes."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Using Protected Constructor for Abstract Base Classes\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Using Protected Constructor for Abstract Base Classes\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Using Protected Constructor for Abstract Base Classes\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:18Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000019",
    "book": "accessspecifiers",
    "order_index": 19,
    "title": "#019 Private Destructor Enforcing Dynamic Allocation",
    "slug": "accessspecifiers-019-private-destructor-enforcing-dynamic-allocation",
    "description": "Make destructor private and provide public `release()` to mandate heap management.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Heap object release",
        "output": "Resource deleted cleanly via public release()",
        "explanation": "Executes logic for Private Destructor Enforcing Dynamic Allocation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Private Destructor Enforcing Dynamic Allocation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Private Destructor Enforcing Dynamic Allocation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Private Destructor Enforcing Dynamic Allocation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:19Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000020",
    "book": "accessspecifiers",
    "order_index": 20,
    "title": "#020 Protected Virtual Method Template Method Pattern",
    "slug": "accessspecifiers-020-protected-virtual-method-template-method-pattern",
    "description": "Implement protected virtual `stepA()` and `stepB()` called by public `execute()` template method.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Execute algorithm",
        "output": "Template method executed: StepA -> StepB",
        "explanation": "Executes logic for Protected Virtual Method Template Method Pattern."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Protected Virtual Method Template Method Pattern\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Protected Virtual Method Template Method Pattern\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Protected Virtual Method Template Method Pattern\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:20Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000021",
    "book": "accessspecifiers",
    "order_index": 21,
    "title": "#021 Restoring Access Level with Using Declaration",
    "slug": "accessspecifiers-021-restoring-access-level-with-using-declaration",
    "description": "Use `using Base::member;` to restore public visibility in private inheritance.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Using Base::print",
        "output": "Restored public visibility for print()",
        "explanation": "Executes logic for Restoring Access Level with Using Declaration."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Restoring Access Level with Using Declaration\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Restoring Access Level with Using Declaration\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Restoring Access Level with Using Declaration\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:21Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000022",
    "book": "accessspecifiers",
    "order_index": 22,
    "title": "#022 Private Static Member Variable Management",
    "slug": "accessspecifiers-022-private-static-member-variable-management",
    "description": "Ensure static configuration variables are private and accessed solely via static methods.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Get config",
        "output": "Private static config retrieved: MAX_CONNS=100",
        "explanation": "Executes logic for Private Static Member Variable Management."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Private Static Member Variable Management\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Private Static Member Variable Management\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Private Static Member Variable Management\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:22Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000023",
    "book": "accessspecifiers",
    "order_index": 23,
    "title": "#023 Accessing Private Members from Same-Class Instances",
    "slug": "accessspecifiers-023-accessing-private-members-from-same-class-instance",
    "description": "Demonstrate that an object method can access private members of another instance of the same class.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Obj1 compare Obj2",
        "output": "Obj1 accessed Obj2's private data: Equal",
        "explanation": "Executes logic for Accessing Private Members from Same-Class Instances."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Accessing Private Members from Same-Class Instances\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Accessing Private Members from Same-Class Instances\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Accessing Private Members from Same-Class Instances\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:23Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000024",
    "book": "accessspecifiers",
    "order_index": 24,
    "title": "#024 Nested Class Accessing Enclosing Class Private Members",
    "slug": "accessspecifiers-024-nested-class-accessing-enclosing-class-private-mem",
    "description": "In C++11, demonstrate nested inner class accessing private members of enclosing outer class.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Inner class worker",
        "output": "Inner class accessed outer private secret: 42",
        "explanation": "Executes logic for Nested Class Accessing Enclosing Class Private Members."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Nested Class Accessing Enclosing Class Private Members\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Nested Class Accessing Enclosing Class Private Members\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Nested Class Accessing Enclosing Class Private Members\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:24Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000025",
    "book": "accessspecifiers",
    "order_index": 25,
    "title": "#025 Enclosing Class Accessing Nested Class Private Members",
    "slug": "accessspecifiers-025-enclosing-class-accessing-nested-class-private-mem",
    "description": "Demonstrate outer class accessing private members of its nested inner class.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Outer accessing Inner",
        "output": "Outer inspected inner private state",
        "explanation": "Executes logic for Enclosing Class Accessing Nested Class Private Members."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Enclosing Class Accessing Nested Class Private Members\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Enclosing Class Accessing Nested Class Private Members\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Enclosing Class Accessing Nested Class Private Members\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:25Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000026",
    "book": "accessspecifiers",
    "order_index": 26,
    "title": "#026 Bank Pin Verification Guarding Account Balance",
    "slug": "accessspecifiers-026-bank-pin-verification-guarding-account-balance",
    "description": "Require PIN verification before allowing access to private balance.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "PIN 4321 Balance",
        "output": "PIN verified: Balance = 2500",
        "explanation": "Executes logic for Bank Pin Verification Guarding Account Balance."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Bank Pin Verification Guarding Account Balance\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Bank Pin Verification Guarding Account Balance\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Bank Pin Verification Guarding Account Balance\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:26Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000027",
    "book": "accessspecifiers",
    "order_index": 27,
    "title": "#027 Temperature Scale Invariant with Private Kelvin Storage",
    "slug": "accessspecifiers-027-temperature-scale-invariant-with-private-kelvin-st",
    "description": "Store temperature privately in Kelvin, exposing Celsius and Fahrenheit getters/setters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Set 25 C",
        "output": "Stored: 298.15K, Output: 25 C / 77 F",
        "explanation": "Executes logic for Temperature Scale Invariant with Private Kelvin Storage."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Temperature Scale Invariant with Private Kelvin Storage\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Temperature Scale Invariant with Private Kelvin Storage\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Temperature Scale Invariant with Private Kelvin Storage\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:27Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000028",
    "book": "accessspecifiers",
    "order_index": 28,
    "title": "#028 Protected State for Game Entities",
    "slug": "accessspecifiers-028-protected-state-for-game-entities",
    "description": "Base Entity has protected `health`, `armor`; derived Player and Monster calculate damage differently.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Player takes 30 dmg",
        "output": "Damage reduced by armor: Health = 80",
        "explanation": "Executes logic for Protected State for Game Entities."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Protected State for Game Entities\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Protected State for Game Entities\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Protected State for Game Entities\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:28Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000029",
    "book": "accessspecifiers",
    "order_index": 29,
    "title": "#029 Private Audit Log in Secure Vault",
    "slug": "accessspecifiers-029-private-audit-log-in-secure-vault",
    "description": "SecureVault appends transaction records to private internal log array.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Vault Deposit 500",
        "output": "Audit Log Entry: [DEPOSIT, 500, SUCCESS]",
        "explanation": "Executes logic for Private Audit Log in Secure Vault."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Private Audit Log in Secure Vault\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Private Audit Log in Secure Vault\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Private Audit Log in Secure Vault\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:29Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000030",
    "book": "accessspecifiers",
    "order_index": 30,
    "title": "#030 Rate Limiter with Private Request Counter",
    "slug": "accessspecifiers-030-rate-limiter-with-private-request-counter",
    "description": "Private timestamp array tracks request counts to reject calls exceeding threshold.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "10 rapid requests",
        "output": "Requests 1-5 allowed, 6-10 rate-limited",
        "explanation": "Executes logic for Rate Limiter with Private Request Counter."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Rate Limiter with Private Request Counter\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Rate Limiter with Private Request Counter\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Rate Limiter with Private Request Counter\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:30Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000031",
    "book": "accessspecifiers",
    "order_index": 31,
    "title": "#031 Encapsulated State Machine Invariants",
    "slug": "accessspecifiers-031-encapsulated-state-machine-invariants",
    "description": "Prevent direct state changes by making current state private and validating transitions.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Draft -> Published",
        "output": "Transition Draft to Published: VALID",
        "explanation": "Executes logic for Encapsulated State Machine Invariants."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated State Machine Invariants\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated State Machine Invariants\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated State Machine Invariants\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:31Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000032",
    "book": "accessspecifiers",
    "order_index": 32,
    "title": "#032 Protected Factory Method in Framework Base",
    "slug": "accessspecifiers-032-protected-factory-method-in-framework-base",
    "description": "Framework provides protected factory method for creating customizable component instances.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Create Component",
        "output": "Component created via protected framework factory",
        "explanation": "Executes logic for Protected Factory Method in Framework Base."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Protected Factory Method in Framework Base\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Protected Factory Method in Framework Base\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Protected Factory Method in Framework Base\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:32Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000033",
    "book": "accessspecifiers",
    "order_index": 33,
    "title": "#033 Private Copy Constructor in NonCopyable Idiom (Pre-C++11)",
    "slug": "accessspecifiers-033-private-copy-constructor-in-noncopyable-idiom-pre",
    "description": "Make copy constructor and copy assignment operator private to disallow copying.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Disallow copy",
        "output": "Copying disallowed via private declaration",
        "explanation": "Executes logic for Private Copy Constructor in NonCopyable Idiom (Pre-C++11)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Private Copy Constructor in NonCopyable Idiom (Pre-C++11)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Private Copy Constructor in NonCopyable Idiom (Pre-C++11)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Private Copy Constructor in NonCopyable Idiom (Pre-C++11)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:33Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000034",
    "book": "accessspecifiers",
    "order_index": 34,
    "title": "#034 Protected Pure Virtual Interface for Subsystems",
    "slug": "accessspecifiers-034-protected-pure-virtual-interface-for-subsystems",
    "description": "Subsystem exposes public interface while delegating to protected pure virtual implementations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Subsystem operation",
        "output": "Public facade routed to protected implementation",
        "explanation": "Executes logic for Protected Pure Virtual Interface for Subsystems."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Protected Pure Virtual Interface for Subsystems\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Protected Pure Virtual Interface for Subsystems\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Protected Pure Virtual Interface for Subsystems\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:34Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000035",
    "book": "accessspecifiers",
    "order_index": 35,
    "title": "#035 Public Constant vs Private Mutable Variable",
    "slug": "accessspecifiers-035-public-constant-vs-private-mutable-variable",
    "description": "Expose public `const int ID` alongside private modifiable state.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Inspect ID and state",
        "output": "ID: 101 (Const public), State: 42 (Private modifiable)",
        "explanation": "Executes logic for Public Constant vs Private Mutable Variable."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Public Constant vs Private Mutable Variable\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Public Constant vs Private Mutable Variable\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Public Constant vs Private Mutable Variable\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:35Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000036",
    "book": "accessspecifiers",
    "order_index": 36,
    "title": "#036 Smart Pointer Encapsulating Raw Pointer",
    "slug": "accessspecifiers-036-smart-pointer-encapsulating-raw-pointer",
    "description": "Custom SmartPointer class holds private raw pointer and exposes public `operator*` and `operator->`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Deref smart ptr",
        "output": "SmartPointer managed raw heap memory safely",
        "explanation": "Executes logic for Smart Pointer Encapsulating Raw Pointer."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Smart Pointer Encapsulating Raw Pointer\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Smart Pointer Encapsulating Raw Pointer\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Smart Pointer Encapsulating Raw Pointer\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:36Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000037",
    "book": "accessspecifiers",
    "order_index": 37,
    "title": "#037 Private Enumeration Inside Class",
    "slug": "accessspecifiers-037-private-enumeration-inside-class",
    "description": "Define private `enum class State { IDLE, RUNNING, STOPPED }` used internally by worker class.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Start worker",
        "output": "State transitioned to RUNNING internally",
        "explanation": "Executes logic for Private Enumeration Inside Class."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Private Enumeration Inside Class\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Private Enumeration Inside Class\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Private Enumeration Inside Class\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:37Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000038",
    "book": "accessspecifiers",
    "order_index": 38,
    "title": "#038 Protected Event Handlers in UI Component",
    "slug": "accessspecifiers-038-protected-event-handlers-in-ui-component",
    "description": "UI base class provides protected `onClick()` and `onHover()` virtual handlers for widgets.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Button Click",
        "output": "Button widget executed protected onClick handler",
        "explanation": "Executes logic for Protected Event Handlers in UI Component."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Protected Event Handlers in UI Component\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Protected Event Handlers in UI Component\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Protected Event Handlers in UI Component\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:38Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000039",
    "book": "accessspecifiers",
    "order_index": 39,
    "title": "#039 Private Vector Storage in Custom Stack",
    "slug": "accessspecifiers-039-private-vector-storage-in-custom-stack",
    "description": "Implement Stack hiding underlying `std::vector` to prevent arbitrary index insertions.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Push 1,2, Pop",
        "output": "Stack invariants preserved (No random access allowed)",
        "explanation": "Executes logic for Private Vector Storage in Custom Stack."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Private Vector Storage in Custom Stack\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Private Vector Storage in Custom Stack\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Private Vector Storage in Custom Stack\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:39Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000040",
    "book": "accessspecifiers",
    "order_index": 40,
    "title": "#040 Singleton with Private Constructor and Destructor",
    "slug": "accessspecifiers-040-singleton-with-private-constructor-and-destructor",
    "description": "Enforce strictly single instance with private constructor, destructor, and copy methods.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Get Singleton",
        "output": "Single global instance maintained across calls",
        "explanation": "Executes logic for Singleton with Private Constructor and Destructor."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Singleton with Private Constructor and Destructor\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Singleton with Private Constructor and Destructor\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Singleton with Private Constructor and Destructor\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:40Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000041",
    "book": "accessspecifiers",
    "order_index": 41,
    "title": "#041 Access Control in Multiple Inheritance",
    "slug": "accessspecifiers-041-access-control-in-multiple-inheritance",
    "description": "Demonstrate derived class inheriting from one public base and one private base class.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Multiple inherit",
        "output": "Public base interface exposed, Private base utility hidden",
        "explanation": "Executes logic for Access Control in Multiple Inheritance."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Control in Multiple Inheritance\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Control in Multiple Inheritance\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Control in Multiple Inheritance\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:41Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000042",
    "book": "accessspecifiers",
    "order_index": 42,
    "title": "#042 Protected Internal Cache for Computations",
    "slug": "accessspecifiers-042-protected-internal-cache-for-computations",
    "description": "Base math class maintains protected cache map for derived algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Compute Fib(10)",
        "output": "Fib(10) computed and cached in protected map: 55",
        "explanation": "Executes logic for Protected Internal Cache for Computations."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Protected Internal Cache for Computations\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Protected Internal Cache for Computations\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Protected Internal Cache for Computations\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:42Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000043",
    "book": "accessspecifiers",
    "order_index": 43,
    "title": "#043 Private Lock Guard in Thread-Safe Class",
    "slug": "accessspecifiers-043-private-lock-guard-in-thread-safe-class",
    "description": "Private mutex member locked and unlocked within public methods.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Thread-safe push",
        "output": "Mutex locked during mutation -> Thread safety guaranteed",
        "explanation": "Executes logic for Private Lock Guard in Thread-Safe Class."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Private Lock Guard in Thread-Safe Class\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Private Lock Guard in Thread-Safe Class\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Private Lock Guard in Thread-Safe Class\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:43Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000044",
    "book": "accessspecifiers",
    "order_index": 44,
    "title": "#044 Token-Based Access Control Member Function",
    "slug": "accessspecifiers-044-token-based-access-control-member-function",
    "description": "Public method requires valid security token object before delegating to private service.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Token Valid -> Exec",
        "output": "Token authenticated: Private service executed",
        "explanation": "Executes logic for Token-Based Access Control Member Function."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Token-Based Access Control Member Function\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Token-Based Access Control Member Function\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Token-Based Access Control Member Function\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:44Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000045",
    "book": "accessspecifiers",
    "order_index": 45,
    "title": "#045 Protected Hook Methods in Framework Lifecycle",
    "slug": "accessspecifiers-045-protected-hook-methods-in-framework-lifecycle",
    "description": "Base framework class defines protected `beforeSave()` and `afterSave()` lifecycle hooks.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Save entity",
        "output": "Hooks executed: beforeSave() -> Save() -> afterSave()",
        "explanation": "Executes logic for Protected Hook Methods in Framework Lifecycle."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Protected Hook Methods in Framework Lifecycle\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Protected Hook Methods in Framework Lifecycle\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Protected Hook Methods in Framework Lifecycle\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:45Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000046",
    "book": "accessspecifiers",
    "order_index": 46,
    "title": "#046 Private Memory Arena in Custom Allocator",
    "slug": "accessspecifiers-046-private-memory-arena-in-custom-allocator",
    "description": "MemoryAllocator manages private byte buffer, exposing public `allocate()` and `deallocate()`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Alloc 64 bytes",
        "output": "Allocated 64 bytes from private arena",
        "explanation": "Executes logic for Private Memory Arena in Custom Allocator."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Private Memory Arena in Custom Allocator\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Private Memory Arena in Custom Allocator\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Private Memory Arena in Custom Allocator\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:46Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000047",
    "book": "accessspecifiers",
    "order_index": 47,
    "title": "#047 Validation Error Collector in Form Class",
    "slug": "accessspecifiers-047-validation-error-collector-in-form-class",
    "description": "Form class stores validation errors in private list, exposed via read-only `getErrors()`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Validate form",
        "output": "Validation errors: ['Email invalid', 'Password too short']",
        "explanation": "Executes logic for Validation Error Collector in Form Class."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Validation Error Collector in Form Class\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Validation Error Collector in Form Class\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Validation Error Collector in Form Class\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:47Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000048",
    "book": "accessspecifiers",
    "order_index": 48,
    "title": "#048 Protected Subsystem Registration in Game Engine",
    "slug": "accessspecifiers-048-protected-subsystem-registration-in-game-engine",
    "description": "Game Engine base allows derived systems to register themselves via protected method.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Register Physics",
        "output": "Physics subsystem registered in engine",
        "explanation": "Executes logic for Protected Subsystem Registration in Game Engine."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Protected Subsystem Registration in Game Engine\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Protected Subsystem Registration in Game Engine\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Protected Subsystem Registration in Game Engine\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:48Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000049",
    "book": "accessspecifiers",
    "order_index": 49,
    "title": "#049 Private Implementation Idiom (PIMPL) Preparation",
    "slug": "accessspecifiers-049-private-implementation-idiom-pimpl-preparation",
    "description": "Demonstrate hiding implementation details behind private pointer member.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "PIMPL wrapper",
        "output": "Internal struct completely hidden from header",
        "explanation": "Executes logic for Private Implementation Idiom (PIMPL) Preparation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Private Implementation Idiom (PIMPL) Preparation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Private Implementation Idiom (PIMPL) Preparation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Private Implementation Idiom (PIMPL) Preparation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:49Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000050",
    "book": "accessspecifiers",
    "order_index": 50,
    "title": "#050 Security Access Control List (ACL) Class",
    "slug": "accessspecifiers-050-security-access-control-list-acl-class",
    "description": "Model an ACL class with private permissions matrix and public `checkPermission(user, role)`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Check Alice READ",
        "output": "Permission Granted: Alice has READ access",
        "explanation": "Executes logic for Security Access Control List (ACL) Class."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Security Access Control List (ACL) Class\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Security Access Control List (ACL) Class\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Security Access Control List (ACL) Class\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:50Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000051",
    "book": "accessspecifiers",
    "order_index": 51,
    "title": "#051 Access Specifier Problem 51",
    "slug": "accessspecifiers-051-access-specifier-problem-51",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #51.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 51 1",
        "output": "Access rules #51 verified and access boundaries enforced (Code: 51)",
        "explanation": "Executes logic for Access Specifier Problem 51."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 51\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 51\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 51\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:51Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000052",
    "book": "accessspecifiers",
    "order_index": 52,
    "title": "#052 Access Specifier Problem 52",
    "slug": "accessspecifiers-052-access-specifier-problem-52",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #52.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 52 1",
        "output": "Access rules #52 verified and access boundaries enforced (Code: 52)",
        "explanation": "Executes logic for Access Specifier Problem 52."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 52\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 52\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 52\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:52Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000053",
    "book": "accessspecifiers",
    "order_index": 53,
    "title": "#053 Access Specifier Problem 53",
    "slug": "accessspecifiers-053-access-specifier-problem-53",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #53.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 53 1",
        "output": "Access rules #53 verified and access boundaries enforced (Code: 53)",
        "explanation": "Executes logic for Access Specifier Problem 53."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 53\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 53\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 53\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:53Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000054",
    "book": "accessspecifiers",
    "order_index": 54,
    "title": "#054 Access Specifier Problem 54",
    "slug": "accessspecifiers-054-access-specifier-problem-54",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #54.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 54 1",
        "output": "Access rules #54 verified and access boundaries enforced (Code: 54)",
        "explanation": "Executes logic for Access Specifier Problem 54."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 54\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 54\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 54\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:54Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000055",
    "book": "accessspecifiers",
    "order_index": 55,
    "title": "#055 Access Specifier Problem 55",
    "slug": "accessspecifiers-055-access-specifier-problem-55",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #55.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 55 1",
        "output": "Access rules #55 verified and access boundaries enforced (Code: 55)",
        "explanation": "Executes logic for Access Specifier Problem 55."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 55\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 55\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 55\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:55Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000056",
    "book": "accessspecifiers",
    "order_index": 56,
    "title": "#056 Access Specifier Problem 56",
    "slug": "accessspecifiers-056-access-specifier-problem-56",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #56.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 56 1",
        "output": "Access rules #56 verified and access boundaries enforced (Code: 56)",
        "explanation": "Executes logic for Access Specifier Problem 56."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 56\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 56\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 56\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:56Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000057",
    "book": "accessspecifiers",
    "order_index": 57,
    "title": "#057 Access Specifier Problem 57",
    "slug": "accessspecifiers-057-access-specifier-problem-57",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #57.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 57 1",
        "output": "Access rules #57 verified and access boundaries enforced (Code: 57)",
        "explanation": "Executes logic for Access Specifier Problem 57."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 57\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 57\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 57\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:57Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000058",
    "book": "accessspecifiers",
    "order_index": 58,
    "title": "#058 Access Specifier Problem 58",
    "slug": "accessspecifiers-058-access-specifier-problem-58",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #58.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 58 1",
        "output": "Access rules #58 verified and access boundaries enforced (Code: 58)",
        "explanation": "Executes logic for Access Specifier Problem 58."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 58\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 58\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 58\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:58Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000059",
    "book": "accessspecifiers",
    "order_index": 59,
    "title": "#059 Access Specifier Problem 59",
    "slug": "accessspecifiers-059-access-specifier-problem-59",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #59.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 59 1",
        "output": "Access rules #59 verified and access boundaries enforced (Code: 59)",
        "explanation": "Executes logic for Access Specifier Problem 59."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 59\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 59\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 59\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:59Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000060",
    "book": "accessspecifiers",
    "order_index": 60,
    "title": "#060 Access Specifier Problem 60",
    "slug": "accessspecifiers-060-access-specifier-problem-60",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #60.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 60 1",
        "output": "Access rules #60 verified and access boundaries enforced (Code: 60)",
        "explanation": "Executes logic for Access Specifier Problem 60."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 60\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 60\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 60\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:00Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000061",
    "book": "accessspecifiers",
    "order_index": 61,
    "title": "#061 Access Specifier Problem 61",
    "slug": "accessspecifiers-061-access-specifier-problem-61",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #61.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 61 1",
        "output": "Access rules #61 verified and access boundaries enforced (Code: 61)",
        "explanation": "Executes logic for Access Specifier Problem 61."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 61\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 61\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 61\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:01Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000062",
    "book": "accessspecifiers",
    "order_index": 62,
    "title": "#062 Access Specifier Problem 62",
    "slug": "accessspecifiers-062-access-specifier-problem-62",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #62.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 62 1",
        "output": "Access rules #62 verified and access boundaries enforced (Code: 62)",
        "explanation": "Executes logic for Access Specifier Problem 62."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 62\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 62\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 62\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:02Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000063",
    "book": "accessspecifiers",
    "order_index": 63,
    "title": "#063 Access Specifier Problem 63",
    "slug": "accessspecifiers-063-access-specifier-problem-63",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #63.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 63 1",
        "output": "Access rules #63 verified and access boundaries enforced (Code: 63)",
        "explanation": "Executes logic for Access Specifier Problem 63."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 63\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 63\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 63\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:03Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000064",
    "book": "accessspecifiers",
    "order_index": 64,
    "title": "#064 Access Specifier Problem 64",
    "slug": "accessspecifiers-064-access-specifier-problem-64",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #64.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 64 1",
        "output": "Access rules #64 verified and access boundaries enforced (Code: 64)",
        "explanation": "Executes logic for Access Specifier Problem 64."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 64\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 64\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 64\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:04Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000065",
    "book": "accessspecifiers",
    "order_index": 65,
    "title": "#065 Access Specifier Problem 65",
    "slug": "accessspecifiers-065-access-specifier-problem-65",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #65.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 65 1",
        "output": "Access rules #65 verified and access boundaries enforced (Code: 65)",
        "explanation": "Executes logic for Access Specifier Problem 65."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 65\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 65\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 65\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:05Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000066",
    "book": "accessspecifiers",
    "order_index": 66,
    "title": "#066 Access Specifier Problem 66",
    "slug": "accessspecifiers-066-access-specifier-problem-66",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #66.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 66 1",
        "output": "Access rules #66 verified and access boundaries enforced (Code: 66)",
        "explanation": "Executes logic for Access Specifier Problem 66."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 66\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 66\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 66\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:06Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000067",
    "book": "accessspecifiers",
    "order_index": 67,
    "title": "#067 Access Specifier Problem 67",
    "slug": "accessspecifiers-067-access-specifier-problem-67",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #67.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 67 1",
        "output": "Access rules #67 verified and access boundaries enforced (Code: 67)",
        "explanation": "Executes logic for Access Specifier Problem 67."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 67\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 67\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 67\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:07Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000068",
    "book": "accessspecifiers",
    "order_index": 68,
    "title": "#068 Access Specifier Problem 68",
    "slug": "accessspecifiers-068-access-specifier-problem-68",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #68.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 68 1",
        "output": "Access rules #68 verified and access boundaries enforced (Code: 68)",
        "explanation": "Executes logic for Access Specifier Problem 68."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 68\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 68\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 68\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:08Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000069",
    "book": "accessspecifiers",
    "order_index": 69,
    "title": "#069 Access Specifier Problem 69",
    "slug": "accessspecifiers-069-access-specifier-problem-69",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #69.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 69 1",
        "output": "Access rules #69 verified and access boundaries enforced (Code: 69)",
        "explanation": "Executes logic for Access Specifier Problem 69."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 69\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 69\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 69\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:09Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000070",
    "book": "accessspecifiers",
    "order_index": 70,
    "title": "#070 Access Specifier Problem 70",
    "slug": "accessspecifiers-070-access-specifier-problem-70",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #70.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 70 1",
        "output": "Access rules #70 verified and access boundaries enforced (Code: 70)",
        "explanation": "Executes logic for Access Specifier Problem 70."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 70\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 70\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 70\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:10Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000071",
    "book": "accessspecifiers",
    "order_index": 71,
    "title": "#071 Access Specifier Problem 71",
    "slug": "accessspecifiers-071-access-specifier-problem-71",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #71.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 71 1",
        "output": "Access rules #71 verified and access boundaries enforced (Code: 71)",
        "explanation": "Executes logic for Access Specifier Problem 71."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 71\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 71\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 71\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:11Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000072",
    "book": "accessspecifiers",
    "order_index": 72,
    "title": "#072 Access Specifier Problem 72",
    "slug": "accessspecifiers-072-access-specifier-problem-72",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #72.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 72 1",
        "output": "Access rules #72 verified and access boundaries enforced (Code: 72)",
        "explanation": "Executes logic for Access Specifier Problem 72."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 72\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 72\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 72\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:12Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000073",
    "book": "accessspecifiers",
    "order_index": 73,
    "title": "#073 Access Specifier Problem 73",
    "slug": "accessspecifiers-073-access-specifier-problem-73",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #73.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 73 1",
        "output": "Access rules #73 verified and access boundaries enforced (Code: 73)",
        "explanation": "Executes logic for Access Specifier Problem 73."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 73\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 73\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 73\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:13Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000074",
    "book": "accessspecifiers",
    "order_index": 74,
    "title": "#074 Access Specifier Problem 74",
    "slug": "accessspecifiers-074-access-specifier-problem-74",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #74.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 74 1",
        "output": "Access rules #74 verified and access boundaries enforced (Code: 74)",
        "explanation": "Executes logic for Access Specifier Problem 74."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 74\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 74\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 74\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:14Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000075",
    "book": "accessspecifiers",
    "order_index": 75,
    "title": "#075 Access Specifier Problem 75",
    "slug": "accessspecifiers-075-access-specifier-problem-75",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #75.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 75 1",
        "output": "Access rules #75 verified and access boundaries enforced (Code: 75)",
        "explanation": "Executes logic for Access Specifier Problem 75."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 75\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 75\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 75\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:15Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000076",
    "book": "accessspecifiers",
    "order_index": 76,
    "title": "#076 Access Specifier Problem 76",
    "slug": "accessspecifiers-076-access-specifier-problem-76",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #76.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 76 1",
        "output": "Access rules #76 verified and access boundaries enforced (Code: 76)",
        "explanation": "Executes logic for Access Specifier Problem 76."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 76\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 76\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 76\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:16Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000077",
    "book": "accessspecifiers",
    "order_index": 77,
    "title": "#077 Access Specifier Problem 77",
    "slug": "accessspecifiers-077-access-specifier-problem-77",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #77.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 77 1",
        "output": "Access rules #77 verified and access boundaries enforced (Code: 77)",
        "explanation": "Executes logic for Access Specifier Problem 77."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 77\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 77\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 77\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:17Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000078",
    "book": "accessspecifiers",
    "order_index": 78,
    "title": "#078 Access Specifier Problem 78",
    "slug": "accessspecifiers-078-access-specifier-problem-78",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #78.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 78 1",
        "output": "Access rules #78 verified and access boundaries enforced (Code: 78)",
        "explanation": "Executes logic for Access Specifier Problem 78."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 78\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 78\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 78\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:18Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000079",
    "book": "accessspecifiers",
    "order_index": 79,
    "title": "#079 Access Specifier Problem 79",
    "slug": "accessspecifiers-079-access-specifier-problem-79",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #79.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 79 1",
        "output": "Access rules #79 verified and access boundaries enforced (Code: 79)",
        "explanation": "Executes logic for Access Specifier Problem 79."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 79\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 79\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 79\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:19Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000080",
    "book": "accessspecifiers",
    "order_index": 80,
    "title": "#080 Access Specifier Problem 80",
    "slug": "accessspecifiers-080-access-specifier-problem-80",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #80.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 80 1",
        "output": "Access rules #80 verified and access boundaries enforced (Code: 80)",
        "explanation": "Executes logic for Access Specifier Problem 80."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 80\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 80\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 80\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:20Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000081",
    "book": "accessspecifiers",
    "order_index": 81,
    "title": "#081 Access Specifier Problem 81",
    "slug": "accessspecifiers-081-access-specifier-problem-81",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #81.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 81 1",
        "output": "Access rules #81 verified and access boundaries enforced (Code: 81)",
        "explanation": "Executes logic for Access Specifier Problem 81."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 81\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 81\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 81\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:21Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000082",
    "book": "accessspecifiers",
    "order_index": 82,
    "title": "#082 Access Specifier Problem 82",
    "slug": "accessspecifiers-082-access-specifier-problem-82",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #82.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 82 1",
        "output": "Access rules #82 verified and access boundaries enforced (Code: 82)",
        "explanation": "Executes logic for Access Specifier Problem 82."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 82\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 82\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 82\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:22Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000083",
    "book": "accessspecifiers",
    "order_index": 83,
    "title": "#083 Access Specifier Problem 83",
    "slug": "accessspecifiers-083-access-specifier-problem-83",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #83.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 83 1",
        "output": "Access rules #83 verified and access boundaries enforced (Code: 83)",
        "explanation": "Executes logic for Access Specifier Problem 83."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 83\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 83\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 83\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:23Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000084",
    "book": "accessspecifiers",
    "order_index": 84,
    "title": "#084 Access Specifier Problem 84",
    "slug": "accessspecifiers-084-access-specifier-problem-84",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #84.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 84 1",
        "output": "Access rules #84 verified and access boundaries enforced (Code: 84)",
        "explanation": "Executes logic for Access Specifier Problem 84."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 84\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 84\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 84\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:24Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000085",
    "book": "accessspecifiers",
    "order_index": 85,
    "title": "#085 Access Specifier Problem 85",
    "slug": "accessspecifiers-085-access-specifier-problem-85",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #85.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 85 1",
        "output": "Access rules #85 verified and access boundaries enforced (Code: 85)",
        "explanation": "Executes logic for Access Specifier Problem 85."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 85\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 85\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 85\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:25Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000086",
    "book": "accessspecifiers",
    "order_index": 86,
    "title": "#086 Access Specifier Problem 86",
    "slug": "accessspecifiers-086-access-specifier-problem-86",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #86.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 86 1",
        "output": "Access rules #86 verified and access boundaries enforced (Code: 86)",
        "explanation": "Executes logic for Access Specifier Problem 86."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 86\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 86\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 86\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:26Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000087",
    "book": "accessspecifiers",
    "order_index": 87,
    "title": "#087 Access Specifier Problem 87",
    "slug": "accessspecifiers-087-access-specifier-problem-87",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #87.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 87 1",
        "output": "Access rules #87 verified and access boundaries enforced (Code: 87)",
        "explanation": "Executes logic for Access Specifier Problem 87."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 87\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 87\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 87\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:27Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000088",
    "book": "accessspecifiers",
    "order_index": 88,
    "title": "#088 Access Specifier Problem 88",
    "slug": "accessspecifiers-088-access-specifier-problem-88",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #88.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 88 1",
        "output": "Access rules #88 verified and access boundaries enforced (Code: 88)",
        "explanation": "Executes logic for Access Specifier Problem 88."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 88\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 88\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 88\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:28Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000089",
    "book": "accessspecifiers",
    "order_index": 89,
    "title": "#089 Access Specifier Problem 89",
    "slug": "accessspecifiers-089-access-specifier-problem-89",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #89.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 89 1",
        "output": "Access rules #89 verified and access boundaries enforced (Code: 89)",
        "explanation": "Executes logic for Access Specifier Problem 89."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 89\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 89\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 89\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:29Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000090",
    "book": "accessspecifiers",
    "order_index": 90,
    "title": "#090 Access Specifier Problem 90",
    "slug": "accessspecifiers-090-access-specifier-problem-90",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #90.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 90 1",
        "output": "Access rules #90 verified and access boundaries enforced (Code: 90)",
        "explanation": "Executes logic for Access Specifier Problem 90."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 90\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 90\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 90\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:30Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000091",
    "book": "accessspecifiers",
    "order_index": 91,
    "title": "#091 Access Specifier Problem 91",
    "slug": "accessspecifiers-091-access-specifier-problem-91",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #91.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 91 1",
        "output": "Access rules #91 verified and access boundaries enforced (Code: 91)",
        "explanation": "Executes logic for Access Specifier Problem 91."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 91\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 91\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 91\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:31Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000092",
    "book": "accessspecifiers",
    "order_index": 92,
    "title": "#092 Access Specifier Problem 92",
    "slug": "accessspecifiers-092-access-specifier-problem-92",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #92.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 92 1",
        "output": "Access rules #92 verified and access boundaries enforced (Code: 92)",
        "explanation": "Executes logic for Access Specifier Problem 92."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 92\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 92\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 92\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:32Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000093",
    "book": "accessspecifiers",
    "order_index": 93,
    "title": "#093 Access Specifier Problem 93",
    "slug": "accessspecifiers-093-access-specifier-problem-93",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #93.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 93 1",
        "output": "Access rules #93 verified and access boundaries enforced (Code: 93)",
        "explanation": "Executes logic for Access Specifier Problem 93."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 93\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 93\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 93\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:33Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000094",
    "book": "accessspecifiers",
    "order_index": 94,
    "title": "#094 Access Specifier Problem 94",
    "slug": "accessspecifiers-094-access-specifier-problem-94",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #94.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 94 1",
        "output": "Access rules #94 verified and access boundaries enforced (Code: 94)",
        "explanation": "Executes logic for Access Specifier Problem 94."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 94\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 94\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 94\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:34Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000095",
    "book": "accessspecifiers",
    "order_index": 95,
    "title": "#095 Access Specifier Problem 95",
    "slug": "accessspecifiers-095-access-specifier-problem-95",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #95.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 95 1",
        "output": "Access rules #95 verified and access boundaries enforced (Code: 95)",
        "explanation": "Executes logic for Access Specifier Problem 95."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 95\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 95\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 95\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:35Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000096",
    "book": "accessspecifiers",
    "order_index": 96,
    "title": "#096 Access Specifier Problem 96",
    "slug": "accessspecifiers-096-access-specifier-problem-96",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #96.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 96 1",
        "output": "Access rules #96 verified and access boundaries enforced (Code: 96)",
        "explanation": "Executes logic for Access Specifier Problem 96."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 96\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 96\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 96\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:36Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000097",
    "book": "accessspecifiers",
    "order_index": 97,
    "title": "#097 Access Specifier Problem 97",
    "slug": "accessspecifiers-097-access-specifier-problem-97",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #97.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 97 1",
        "output": "Access rules #97 verified and access boundaries enforced (Code: 97)",
        "explanation": "Executes logic for Access Specifier Problem 97."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 97\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 97\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 97\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:37Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000098",
    "book": "accessspecifiers",
    "order_index": 98,
    "title": "#098 Access Specifier Problem 98",
    "slug": "accessspecifiers-098-access-specifier-problem-98",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #98.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 98 1",
        "output": "Access rules #98 verified and access boundaries enforced (Code: 98)",
        "explanation": "Executes logic for Access Specifier Problem 98."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 98\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 98\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 98\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:38Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000099",
    "book": "accessspecifiers",
    "order_index": 99,
    "title": "#099 Access Specifier Problem 99",
    "slug": "accessspecifiers-099-access-specifier-problem-99",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #99.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 99 1",
        "output": "Access rules #99 verified and access boundaries enforced (Code: 99)",
        "explanation": "Executes logic for Access Specifier Problem 99."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 99\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 99\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 99\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:39Z"
  },
  {
    "id": "00000000-0000-4000-8005-000000000100",
    "book": "accessspecifiers",
    "order_index": 100,
    "title": "#100 Access Specifier Problem 100",
    "slug": "accessspecifiers-100-access-specifier-problem-100",
    "description": "Apply access specifiers (public, private, protected) to enforce data hiding and encapsulation boundaries for scenario #100.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Access Specifiers",
    "tags": [
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Data Hiding"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACCESS_TEST 100 1",
        "output": "Access rules #100 verified and access boundaries enforced (Code: 100)",
        "explanation": "Executes logic for Access Specifier Problem 100."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Access Specifier Problem 100\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Access Specifier Problem 100\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Access Specifier Problem 100\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:40Z"
  }
];
