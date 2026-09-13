import { Problem } from '../../types/problem';

export const CPP_EXCEPTIONS_PROBLEMS: Problem[] = [
  {
    "id": "00000000-0000-4000-6003-000000000001",
    "book": "cppexceptions",
    "order_index": 1,
    "title": "#001 Basic Try, Catch, and Throw Mechanism",
    "slug": "cppexceptions-001-basic-try-catch-and-throw-mechanism",
    "description": "Demonstrate throwing an exception on invalid input and catching it in a `try-catch` block.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Throw error 'Invalid value'",
        "output": "Caught exception: Invalid value",
        "explanation": "Executes logic for Basic Try, Catch, and Throw Mechanism."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Basic Try, Catch, and Throw Mechanism\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Basic Try, Catch, and Throw Mechanism\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Basic Try, Catch, and Throw Mechanism\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:01Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000002",
    "book": "cppexceptions",
    "order_index": 2,
    "title": "#002 Standard Exception `std::runtime_error`",
    "slug": "cppexceptions-002-standard-exception-std-runtime-error",
    "description": "Throw and catch standard `std::runtime_error`, displaying message with `e.what()`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Throw runtime_error",
        "output": "Caught std::runtime_error: File not found",
        "explanation": "Executes logic for Standard Exception `std::runtime_error`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Standard Exception `std::runtime_error`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Standard Exception `std::runtime_error`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Standard Exception `std::runtime_error`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:02Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000003",
    "book": "cppexceptions",
    "order_index": 3,
    "title": "#003 Standard Exception `std::invalid_argument`",
    "slug": "cppexceptions-003-standard-exception-std-invalid-argument",
    "description": "Throw `std::invalid_argument` when function receives out-of-spec parameters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Pass negative age -5",
        "output": "Caught std::invalid_argument: Age cannot be negative",
        "explanation": "Executes logic for Standard Exception `std::invalid_argument`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Standard Exception `std::invalid_argument`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Standard Exception `std::invalid_argument`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Standard Exception `std::invalid_argument`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:03Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000004",
    "book": "cppexceptions",
    "order_index": 4,
    "title": "#004 Standard Exception `std::out_of_range`",
    "slug": "cppexceptions-004-standard-exception-std-out-of-range",
    "description": "Throw `std::out_of_range` when accessing invalid index in custom collection.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Access index 50 (Size: 10)",
        "output": "Caught std::out_of_range: Index 50 exceeds collection size 10",
        "explanation": "Executes logic for Standard Exception `std::out_of_range`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Standard Exception `std::out_of_range`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Standard Exception `std::out_of_range`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Standard Exception `std::out_of_range`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:04Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000005",
    "book": "cppexceptions",
    "order_index": 5,
    "title": "#005 Standard Exception `std::logic_error`",
    "slug": "cppexceptions-005-standard-exception-std-logic-error",
    "description": "Throw `std::logic_error` when an operation violates business domain logic.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Withdraw from frozen account",
        "output": "Caught std::logic_error: Account is frozen",
        "explanation": "Executes logic for Standard Exception `std::logic_error`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Standard Exception `std::logic_error`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Standard Exception `std::logic_error`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Standard Exception `std::logic_error`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:05Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000006",
    "book": "cppexceptions",
    "order_index": 6,
    "title": "#006 Standard Exception `std::bad_alloc`",
    "slug": "cppexceptions-006-standard-exception-std-bad-alloc",
    "description": "Handle memory allocation failure exception `std::bad_alloc`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Simulate heap exhaustion",
        "output": "Caught std::bad_alloc: Out of memory",
        "explanation": "Executes logic for Standard Exception `std::bad_alloc`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Standard Exception `std::bad_alloc`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Standard Exception `std::bad_alloc`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Standard Exception `std::bad_alloc`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:06Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000007",
    "book": "cppexceptions",
    "order_index": 7,
    "title": "#007 Standard Exception `std::overflow_error` and `underflow_error`",
    "slug": "cppexceptions-007-standard-exception-std-overflow-error-and-underflo",
    "description": "Throw `std::overflow_error` when arithmetic operation exceeds integer limits.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Compute 2^100 in 32-bit",
        "output": "Caught std::overflow_error: Numeric overflow occurred",
        "explanation": "Executes logic for Standard Exception `std::overflow_error` and `underflow_error`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Standard Exception `std::overflow_error` and `underflow_error`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Standard Exception `std::overflow_error` and `underflow_error`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Standard Exception `std::overflow_error` and `underflow_error`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:07Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000008",
    "book": "cppexceptions",
    "order_index": 8,
    "title": "#008 Multiple Catch Blocks (Specific to Generic Hierarchy)",
    "slug": "cppexceptions-008-multiple-catch-blocks-specific-to-generic-hierarch",
    "description": "Order catch blocks from derived exception types to base `std::exception`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Throw std::invalid_argument",
        "output": "Caught in specific handler: std::invalid_argument",
        "explanation": "Executes logic for Multiple Catch Blocks (Specific to Generic Hierarchy)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Multiple Catch Blocks (Specific to Generic Hierarchy)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Multiple Catch Blocks (Specific to Generic Hierarchy)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Multiple Catch Blocks (Specific to Generic Hierarchy)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:08Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000009",
    "book": "cppexceptions",
    "order_index": 9,
    "title": "#009 Catch-All Handler (`catch(...)`)",
    "slug": "cppexceptions-009-catch-all-handler-catch",
    "description": "Implement a catch-all handler as a fallback safety net for non-standard exception types.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Throw int 404",
        "output": "Caught in catch(...): Unknown exception caught safely",
        "explanation": "Executes logic for Catch-All Handler (`catch(...)`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Catch-All Handler (`catch(...)`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Catch-All Handler (`catch(...)`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Catch-All Handler (`catch(...)`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:09Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000010",
    "book": "cppexceptions",
    "order_index": 10,
    "title": "#010 Custom Exception Class Inheriting `std::exception`",
    "slug": "cppexceptions-010-custom-exception-class-inheriting-std-exception",
    "description": "Create a custom exception class `DatabaseException` overriding `const char* what() const noexcept`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Throw DatabaseException",
        "output": "Caught custom DatabaseException: Connection timeout on port 5432",
        "explanation": "Executes logic for Custom Exception Class Inheriting `std::exception`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Custom Exception Class Inheriting `std::exception`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Custom Exception Class Inheriting `std::exception`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Custom Exception Class Inheriting `std::exception`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:10Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000011",
    "book": "cppexceptions",
    "order_index": 11,
    "title": "#011 Exception with Error Code and Context Metadata",
    "slug": "cppexceptions-011-exception-with-error-code-and-context-metadata",
    "description": "Custom exception stores integer HTTP/DB error code and string message.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Throw HttpException(404, 'Not Found')",
        "output": "Caught HttpException: Error 404 - Not Found",
        "explanation": "Executes logic for Exception with Error Code and Context Metadata."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception with Error Code and Context Metadata\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception with Error Code and Context Metadata\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception with Error Code and Context Metadata\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:11Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000012",
    "book": "cppexceptions",
    "order_index": 12,
    "title": "#012 Re-Throwing Exceptions (`throw;`)",
    "slug": "cppexceptions-012-re-throwing-exceptions-throw",
    "description": "Catch exception in middle layer, log error message, and re-throw using bare `throw;`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Catch and re-throw",
        "output": "Logged in middle layer -> Caught in top layer: Database timeout",
        "explanation": "Executes logic for Re-Throwing Exceptions (`throw;`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Re-Throwing Exceptions (`throw;`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Re-Throwing Exceptions (`throw;`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Re-Throwing Exceptions (`throw;`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:12Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000013",
    "book": "cppexceptions",
    "order_index": 13,
    "title": "#013 Nested Exception Handling (Throwing Inside Catch Block)",
    "slug": "cppexceptions-013-nested-exception-handling-throwing-inside-catch-bl",
    "description": "Catch a low-level socket exception and wrap/throw a high-level `PaymentException`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Socket error -> PaymentException",
        "output": "Caught high-level PaymentException: Payment failed due to network error",
        "explanation": "Executes logic for Nested Exception Handling (Throwing Inside Catch Block)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Nested Exception Handling (Throwing Inside Catch Block)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Nested Exception Handling (Throwing Inside Catch Block)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Nested Exception Handling (Throwing Inside Catch Block)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:13Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000014",
    "book": "cppexceptions",
    "order_index": 14,
    "title": "#014 Exception in Constructor (Resource Cleanup)",
    "slug": "cppexceptions-014-exception-in-constructor-resource-cleanup",
    "description": "Throw exception inside constructor and verify that destructor of partially constructed object does not run.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Throw in ctor",
        "output": "Exception thrown in constructor: Cleaned up partial allocations",
        "explanation": "Executes logic for Exception in Constructor (Resource Cleanup)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception in Constructor (Resource Cleanup)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception in Constructor (Resource Cleanup)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception in Constructor (Resource Cleanup)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:14Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000015",
    "book": "cppexceptions",
    "order_index": 15,
    "title": "#015 Function-Try-Block for Constructors",
    "slug": "cppexceptions-015-function-try-block-for-constructors",
    "description": "Use function-try-block syntax `ClassName() try : member() {} catch(...) {}` to handle initializer list errors.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Initializer list throw",
        "output": "Function-try-block caught initializer list exception",
        "explanation": "Executes logic for Function-Try-Block for Constructors."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Function-Try-Block for Constructors\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Function-Try-Block for Constructors\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Function-Try-Block for Constructors\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:15Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000016",
    "book": "cppexceptions",
    "order_index": 16,
    "title": "#016 Destructors Must Not Throw (`noexcept` in C++11)",
    "slug": "cppexceptions-016-destructors-must-not-throw-noexcept-in-c-11",
    "description": "Demonstrate that throwing from a destructor terminates program via `std::terminate` if an exception is active.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Destructor safety",
        "output": "Destructor swallowed internal error: No exception leaked",
        "explanation": "Executes logic for Destructors Must Not Throw (`noexcept` in C++11)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Destructors Must Not Throw (`noexcept` in C++11)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Destructors Must Not Throw (`noexcept` in C++11)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Destructors Must Not Throw (`noexcept` in C++11)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:16Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000017",
    "book": "cppexceptions",
    "order_index": 17,
    "title": "#017 The `noexcept` Specifier and Operator",
    "slug": "cppexceptions-017-the-noexcept-specifier-and-operator",
    "description": "Mark performance-critical move constructors with `noexcept` and test with `noexcept(expr)`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "noexcept move ctor",
        "output": "noexcept(MoveCtor): true (Enables vector move optimization)",
        "explanation": "Executes logic for The `noexcept` Specifier and Operator."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// The `noexcept` Specifier and Operator\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# The `noexcept` Specifier and Operator\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// The `noexcept` Specifier and Operator\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:17Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000018",
    "book": "cppexceptions",
    "order_index": 18,
    "title": "#018 Stack Unwinding and Automatic RAII Cleanup",
    "slug": "cppexceptions-018-stack-unwinding-and-automatic-raii-cleanup",
    "description": "Show that all local objects on the stack are properly destructed during exception propagation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Throw at depth 3",
        "output": "Stack unwound: Frame 3 cleaned -> Frame 2 cleaned -> Caught at Frame 1",
        "explanation": "Executes logic for Stack Unwinding and Automatic RAII Cleanup."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Unwinding and Automatic RAII Cleanup\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Unwinding and Automatic RAII Cleanup\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Unwinding and Automatic RAII Cleanup\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:18Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000019",
    "book": "cppexceptions",
    "order_index": 19,
    "title": "#019 Exception-Safe Memory Management with `std::unique_ptr`",
    "slug": "cppexceptions-019-exception-safe-memory-management-with-std-unique-p",
    "description": "Demonstrate zero memory leaks during exception unwinding when using smart pointers.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Throw after allocating unique_ptr",
        "output": "Exception caught: unique_ptr automatically freed heap buffer (0 leaks)",
        "explanation": "Executes logic for Exception-Safe Memory Management with `std::unique_ptr`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception-Safe Memory Management with `std::unique_ptr`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception-Safe Memory Management with `std::unique_ptr`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception-Safe Memory Management with `std::unique_ptr`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:19Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000020",
    "book": "cppexceptions",
    "order_index": 20,
    "title": "#020 Exception Safety: Basic Guarantee",
    "slug": "cppexceptions-020-exception-safety-basic-guarantee",
    "description": "Ensure that invariants are preserved and no resources are leaked when an operation fails.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Operation throws mid-way",
        "output": "Basic Guarantee: Invariants intact, 0 memory leaked",
        "explanation": "Executes logic for Exception Safety: Basic Guarantee."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Safety: Basic Guarantee\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Safety: Basic Guarantee\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Safety: Basic Guarantee\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:20Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000021",
    "book": "cppexceptions",
    "order_index": 21,
    "title": "#021 Exception Safety: Strong Guarantee (Copy-and-Swap)",
    "slug": "cppexceptions-021-exception-safety-strong-guarantee-copy-and-swap",
    "description": "Implement strong exception safety using copy-and-swap idiom (all-or-nothing semantics).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Copy-and-swap mutation",
        "output": "Strong Guarantee: Operation succeeded atomically or state left unmodified",
        "explanation": "Executes logic for Exception Safety: Strong Guarantee (Copy-and-Swap)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Safety: Strong Guarantee (Copy-and-Swap)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Safety: Strong Guarantee (Copy-and-Swap)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Safety: Strong Guarantee (Copy-and-Swap)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:21Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000022",
    "book": "cppexceptions",
    "order_index": 22,
    "title": "#022 Exception Safety: Nothrow Guarantee (`noexcept`)",
    "slug": "cppexceptions-022-exception-safety-nothrow-guarantee-noexcept",
    "description": "Implement swap and move operations with nothrow guarantee.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Execute nothrow swap",
        "output": "Nothrow guarantee: Swap executed with 0 chance of exception",
        "explanation": "Executes logic for Exception Safety: Nothrow Guarantee (`noexcept`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Safety: Nothrow Guarantee (`noexcept`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Safety: Nothrow Guarantee (`noexcept`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Safety: Nothrow Guarantee (`noexcept`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:22Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000023",
    "book": "cppexceptions",
    "order_index": 23,
    "title": "#023 Standard Exception `std::nested_exception` (C++11)",
    "slug": "cppexceptions-023-standard-exception-std-nested-exception-c-11",
    "description": "Nest exceptions using `std::throw_with_nested` and inspect full causal chain with `std::rethrow_if_nested`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Nested exception chain",
        "output": "Causal Chain: HighLevelError -> Caused by: LowLevelIOError",
        "explanation": "Executes logic for Standard Exception `std::nested_exception` (C++11)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Standard Exception `std::nested_exception` (C++11)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Standard Exception `std::nested_exception` (C++11)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Standard Exception `std::nested_exception` (C++11)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:23Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000024",
    "book": "cppexceptions",
    "order_index": 24,
    "title": "#024 Custom Exception Hierarchy: AppException Base with Specific Subclasses",
    "slug": "cppexceptions-024-custom-exception-hierarchy-appexception-base-with",
    "description": "Design `AuthException`, `ValidationException`, `NetworkException` deriving from `AppException`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Throw ValidationException",
        "output": "Caught AppException subclass: Validation error on field 'email'",
        "explanation": "Executes logic for Custom Exception Hierarchy: AppException Base with Specific Subclasses."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Custom Exception Hierarchy: AppException Base with Specific Subclasses\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Custom Exception Hierarchy: AppException Base with Specific Subclasses\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Custom Exception Hierarchy: AppException Base with Specific Subclasses\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:24Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000025",
    "book": "cppexceptions",
    "order_index": 25,
    "title": "#025 Handling Exceptions Across Thread Boundaries (`std::exception_ptr`)",
    "slug": "cppexceptions-025-handling-exceptions-across-thread-boundaries-std-e",
    "description": "Capture exception in worker thread using `std::current_exception()` and re-throw in main thread.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Thread exception",
        "output": "Worker thread exception transported and re-thrown in main thread",
        "explanation": "Executes logic for Handling Exceptions Across Thread Boundaries (`std::exception_ptr`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Handling Exceptions Across Thread Boundaries (`std::exception_ptr`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Handling Exceptions Across Thread Boundaries (`std::exception_ptr`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Handling Exceptions Across Thread Boundaries (`std::exception_ptr`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:25Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000026",
    "book": "cppexceptions",
    "order_index": 26,
    "title": "#026 Validating Math Function Inputs with Exceptions",
    "slug": "cppexceptions-026-validating-math-function-inputs-with-exceptions",
    "description": "Square root function throws `std::domain_error` if input is negative.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "sqrt(-4.0)",
        "output": "Caught std::domain_error: Cannot compute square root of negative number",
        "explanation": "Executes logic for Validating Math Function Inputs with Exceptions."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Validating Math Function Inputs with Exceptions\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Validating Math Function Inputs with Exceptions\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Validating Math Function Inputs with Exceptions\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:26Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000027",
    "book": "cppexceptions",
    "order_index": 27,
    "title": "#027 Matrix Inversion Exception on Singular Matrix",
    "slug": "cppexceptions-027-matrix-inversion-exception-on-singular-matrix",
    "description": "Matrix invert method throws `std::runtime_error` if determinant is zero.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Invert singular matrix",
        "output": "Caught exception: Cannot invert singular matrix (Determinant = 0)",
        "explanation": "Executes logic for Matrix Inversion Exception on Singular Matrix."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Matrix Inversion Exception on Singular Matrix\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Matrix Inversion Exception on Singular Matrix\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Matrix Inversion Exception on Singular Matrix\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:27Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000028",
    "book": "cppexceptions",
    "order_index": 28,
    "title": "#028 Bank Account Overdraft Exception",
    "slug": "cppexceptions-028-bank-account-overdraft-exception",
    "description": "Withdraw method throws `InsufficientFundsException` with requested and available balance details.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Withdraw $1500 from $1000",
        "output": "Caught InsufficientFundsException: Requested $1500, Available $1000",
        "explanation": "Executes logic for Bank Account Overdraft Exception."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Bank Account Overdraft Exception\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Bank Account Overdraft Exception\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Bank Account Overdraft Exception\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:28Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000029",
    "book": "cppexceptions",
    "order_index": 29,
    "title": "#029 Stack Underflow Exception",
    "slug": "cppexceptions-029-stack-underflow-exception",
    "description": "Stack `pop()` throws `StackUnderflowException` when invoked on an empty stack.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Pop empty stack",
        "output": "Caught StackUnderflowException: Stack is empty",
        "explanation": "Executes logic for Stack Underflow Exception."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Underflow Exception\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Underflow Exception\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Underflow Exception\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:29Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000030",
    "book": "cppexceptions",
    "order_index": 30,
    "title": "#030 Queue Overflow Exception",
    "slug": "cppexceptions-030-queue-overflow-exception",
    "description": "Bounded Queue `enqueue()` throws `QueueOverflowException` when capacity is exceeded.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Enqueue to full queue",
        "output": "Caught QueueOverflowException: Queue capacity 5 exceeded",
        "explanation": "Executes logic for Queue Overflow Exception."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Overflow Exception\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Overflow Exception\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Overflow Exception\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:30Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000031",
    "book": "cppexceptions",
    "order_index": 31,
    "title": "#031 File Parsing Exception with Line Number Context",
    "slug": "cppexceptions-031-file-parsing-exception-with-line-number-context",
    "description": "File parser throws `ParseException` containing filename, line number, and error detail.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Syntax error on line 42",
        "output": "Caught ParseException in 'config.txt' at line 42: Missing closing quote",
        "explanation": "Executes logic for File Parsing Exception with Line Number Context."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// File Parsing Exception with Line Number Context\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File Parsing Exception with Line Number Context\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File Parsing Exception with Line Number Context\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:31Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000032",
    "book": "cppexceptions",
    "order_index": 32,
    "title": "#032 Network Connection Timeout Exception",
    "slug": "cppexceptions-032-network-connection-timeout-exception",
    "description": "Socket connect throws `TimeoutException` after 5000ms without response.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Connect to 10.0.0.1",
        "output": "Caught TimeoutException: Connection timed out after 5000ms",
        "explanation": "Executes logic for Network Connection Timeout Exception."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Network Connection Timeout Exception\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Network Connection Timeout Exception\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Network Connection Timeout Exception\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:32Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000033",
    "book": "cppexceptions",
    "order_index": 33,
    "title": "#033 JSON Deserialization Exception on Malformed Data",
    "slug": "cppexceptions-033-json-deserialization-exception-on-malformed-data",
    "description": "JSON parser throws `JsonParseException` when encountering unexpected token.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Parse '{ invalid_json }'",
        "output": "Caught JsonParseException: Unexpected token 'invalid_json' at pos 2",
        "explanation": "Executes logic for JSON Deserialization Exception on Malformed Data."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// JSON Deserialization Exception on Malformed Data\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# JSON Deserialization Exception on Malformed Data\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// JSON Deserialization Exception on Malformed Data\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:33Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000034",
    "book": "cppexceptions",
    "order_index": 34,
    "title": "#034 Hardware Sensor Read Exception",
    "slug": "cppexceptions-034-hardware-sensor-read-exception",
    "description": "Sensor driver throws `SensorReadException` when I2C communication fails.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Read thermometer",
        "output": "Caught SensorReadException: I2C ACK failed on sensor address 0x48",
        "explanation": "Executes logic for Hardware Sensor Read Exception."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Hardware Sensor Read Exception\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Hardware Sensor Read Exception\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Hardware Sensor Read Exception\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:34Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000035",
    "book": "cppexceptions",
    "order_index": 35,
    "title": "#035 Rate Limit Exceeded Exception",
    "slug": "cppexceptions-035-rate-limit-exceeded-exception",
    "description": "API client throws `RateLimitException` with `retry_after_seconds` metadata.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "6th request in 1 sec",
        "output": "Caught RateLimitException: Rate limit exceeded, retry after 5s",
        "explanation": "Executes logic for Rate Limit Exceeded Exception."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Rate Limit Exceeded Exception\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Rate Limit Exceeded Exception\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Rate Limit Exceeded Exception\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:35Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000036",
    "book": "cppexceptions",
    "order_index": 36,
    "title": "#036 Database Deadlock Exception with Retry Logic",
    "slug": "cppexceptions-036-database-deadlock-exception-with-retry-logic",
    "description": "Catch `DatabaseDeadlockException` and retry transaction up to 3 times before re-throwing.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Deadlock on attempt 1",
        "output": "Deadlock caught -> Retried attempt 2 -> Transaction succeeded",
        "explanation": "Executes logic for Database Deadlock Exception with Retry Logic."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Database Deadlock Exception with Retry Logic\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Database Deadlock Exception with Retry Logic\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Database Deadlock Exception with Retry Logic\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:36Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000037",
    "book": "cppexceptions",
    "order_index": 37,
    "title": "#037 Security Authentication Exception",
    "slug": "cppexceptions-037-security-authentication-exception",
    "description": "Auth module throws `UnauthorizedException` when JWT token is expired or signature is invalid.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Expired token",
        "output": "Caught UnauthorizedException: Token expired at 2026-03-01",
        "explanation": "Executes logic for Security Authentication Exception."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Security Authentication Exception\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Security Authentication Exception\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Security Authentication Exception\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:37Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000038",
    "book": "cppexceptions",
    "order_index": 38,
    "title": "#038 Authorization Permission Denied Exception",
    "slug": "cppexceptions-038-authorization-permission-denied-exception",
    "description": "Permission checker throws `ForbiddenException` when user lacks required role.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "User with READ role attempts WRITE",
        "output": "Caught ForbiddenException: Role 'READ' lacks WRITE permission",
        "explanation": "Executes logic for Authorization Permission Denied Exception."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Authorization Permission Denied Exception\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Authorization Permission Denied Exception\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Authorization Permission Denied Exception\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:38Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000039",
    "book": "cppexceptions",
    "order_index": 39,
    "title": "#039 Audio Codec Decode Exception",
    "slug": "cppexceptions-039-audio-codec-decode-exception",
    "description": "Audio player throws `UnsupportedCodecException` when encountering unsupported format.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Play .flac on basic player",
        "output": "Caught UnsupportedCodecException: FLAC codec not supported",
        "explanation": "Executes logic for Audio Codec Decode Exception."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Audio Codec Decode Exception\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Audio Codec Decode Exception\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Audio Codec Decode Exception\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:39Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000040",
    "book": "cppexceptions",
    "order_index": 40,
    "title": "#040 Cryptography Decryption Exception on Corrupted Ciphertext",
    "slug": "cppexceptions-040-cryptography-decryption-exception-on-corrupted-cip",
    "description": "Decryption function throws `DecryptionFailedException` when integrity check fails.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Corrupted ciphertext",
        "output": "Caught DecryptionFailedException: MAC authentication tag mismatch",
        "explanation": "Executes logic for Cryptography Decryption Exception on Corrupted Ciphertext."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Cryptography Decryption Exception on Corrupted Ciphertext\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Cryptography Decryption Exception on Corrupted Ciphertext\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Cryptography Decryption Exception on Corrupted Ciphertext\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:40Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000041",
    "book": "cppexceptions",
    "order_index": 41,
    "title": "#041 URL Parse Exception on Malformed URI",
    "slug": "cppexceptions-041-url-parse-exception-on-malformed-uri",
    "description": "URL parser throws `MalformedUrlException` when protocol or host is missing.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Parse 'ht!tp://wrong'",
        "output": "Caught MalformedUrlException: Invalid protocol scheme",
        "explanation": "Executes logic for URL Parse Exception on Malformed URI."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// URL Parse Exception on Malformed URI\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# URL Parse Exception on Malformed URI\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// URL Parse Exception on Malformed URI\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:41Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000042",
    "book": "cppexceptions",
    "order_index": 42,
    "title": "#042 Image Load Exception on Unsupported Bit Depth",
    "slug": "cppexceptions-042-image-load-exception-on-unsupported-bit-depth",
    "description": "Image loader throws `ImageLoadException` when encountering 32-bit CMYK format.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Load CMYK JPEG",
        "output": "Caught ImageLoadException: Unsupported color profile CMYK",
        "explanation": "Executes logic for Image Load Exception on Unsupported Bit Depth."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Image Load Exception on Unsupported Bit Depth\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Image Load Exception on Unsupported Bit Depth\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Image Load Exception on Unsupported Bit Depth\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:42Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000043",
    "book": "cppexceptions",
    "order_index": 43,
    "title": "#043 Plugin Load Exception on Symbol Mismatch",
    "slug": "cppexceptions-043-plugin-load-exception-on-symbol-mismatch",
    "description": "Plugin manager throws `PluginLoadException` when shared library lacks entrypoint symbol.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Load plugin.so",
        "output": "Caught PluginLoadException: Entrypoint 'init_plugin' not found",
        "explanation": "Executes logic for Plugin Load Exception on Symbol Mismatch."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Plugin Load Exception on Symbol Mismatch\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Plugin Load Exception on Symbol Mismatch\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Plugin Load Exception on Symbol Mismatch\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:43Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000044",
    "book": "cppexceptions",
    "order_index": 44,
    "title": "#044 Configuration Validation Exception on Missing Required Key",
    "slug": "cppexceptions-044-configuration-validation-exception-on-missing-requ",
    "description": "Config loader throws `MissingConfigException` listing all missing mandatory keys.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Config without 'db_host'",
        "output": "Caught MissingConfigException: Mandatory key 'db_host' missing",
        "explanation": "Executes logic for Configuration Validation Exception on Missing Required Key."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Configuration Validation Exception on Missing Required Key\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Configuration Validation Exception on Missing Required Key\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Configuration Validation Exception on Missing Required Key\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:44Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000045",
    "book": "cppexceptions",
    "order_index": 45,
    "title": "#045 Date Format Parse Exception",
    "slug": "cppexceptions-045-date-format-parse-exception",
    "description": "Date parser throws `InvalidDateException` for invalid calendar dates (e.g. 2026-02-30).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Parse '2026-02-30'",
        "output": "Caught InvalidDateException: Day 30 is invalid for month February",
        "explanation": "Executes logic for Date Format Parse Exception."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Date Format Parse Exception\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date Format Parse Exception\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date Format Parse Exception\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:45Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000046",
    "book": "cppexceptions",
    "order_index": 46,
    "title": "#046 Circular Dependency Exception in Dependency Injection Container",
    "slug": "cppexceptions-046-circular-dependency-exception-in-dependency-inject",
    "description": "DI container throws `CircularDependencyException` detecting cycle A -> B -> A.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Resolve Service A",
        "output": "Caught CircularDependencyException: Cycle detected: A -> B -> A",
        "explanation": "Executes logic for Circular Dependency Exception in Dependency Injection Container."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Circular Dependency Exception in Dependency Injection Container\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Circular Dependency Exception in Dependency Injection Container\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Circular Dependency Exception in Dependency Injection Container\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:46Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000047",
    "book": "cppexceptions",
    "order_index": 47,
    "title": "#047 Payment Declined Exception with Provider Response Code",
    "slug": "cppexceptions-047-payment-declined-exception-with-provider-response",
    "description": "Payment processor throws `PaymentDeclinedException` with card decline reason.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Charge expired card",
        "output": "Caught PaymentDeclinedException: Card Expired (Code: EXPIRED_CARD)",
        "explanation": "Executes logic for Payment Declined Exception with Provider Response Code."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Payment Declined Exception with Provider Response Code\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Payment Declined Exception with Provider Response Code\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Payment Declined Exception with Provider Response Code\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:47Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000048",
    "book": "cppexceptions",
    "order_index": 48,
    "title": "#048 Thread Pool Queue Full Exception",
    "slug": "cppexceptions-048-thread-pool-queue-full-exception",
    "description": "Thread pool throws `TaskRejectedException` when work queue reaches max capacity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Submit task to full pool",
        "output": "Caught TaskRejectedException: Worker queue full (Max: 1000 tasks)",
        "explanation": "Executes logic for Thread Pool Queue Full Exception."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Thread Pool Queue Full Exception\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Thread Pool Queue Full Exception\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Thread Pool Queue Full Exception\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:48Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000049",
    "book": "cppexceptions",
    "order_index": 49,
    "title": "#049 Regex Match Timeout Exception (ReDoS Protection)",
    "slug": "cppexceptions-049-regex-match-timeout-exception-redos-protection",
    "description": "Regex engine throws `RegexTimeoutException` when catastrophic backtracking exceeds time limit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ReDoS payload",
        "output": "Caught RegexTimeoutException: Backtracking limit reached (ReDoS mitigated)",
        "explanation": "Executes logic for Regex Match Timeout Exception (ReDoS Protection)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Regex Match Timeout Exception (ReDoS Protection)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Regex Match Timeout Exception (ReDoS Protection)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Regex Match Timeout Exception (ReDoS Protection)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:49Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000050",
    "book": "cppexceptions",
    "order_index": 50,
    "title": "#050 Graceful Recovery Pipeline from Multiple Mixed Exceptions",
    "slug": "cppexceptions-050-graceful-recovery-pipeline-from-multiple-mixed-exc",
    "description": "Pipeline processes batch of items, collecting failures into summary without crashing.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Process 5 items with 2 errors",
        "output": "Processed 5 items: 3 succeeded, 2 failed (Logged to error summary)",
        "explanation": "Executes logic for Graceful Recovery Pipeline from Multiple Mixed Exceptions."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Graceful Recovery Pipeline from Multiple Mixed Exceptions\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Graceful Recovery Pipeline from Multiple Mixed Exceptions\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Graceful Recovery Pipeline from Multiple Mixed Exceptions\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:50Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000051",
    "book": "cppexceptions",
    "order_index": 51,
    "title": "#051 Exception Handling Problem 51",
    "slug": "cppexceptions-051-exception-handling-problem-51",
    "description": "Implement exception handling pattern #51 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 51 10",
        "output": "Exception scenario #51 handled safely and invariants preserved (Code: 510)",
        "explanation": "Executes logic for Exception Handling Problem 51."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 51\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 51\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 51\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:51Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000052",
    "book": "cppexceptions",
    "order_index": 52,
    "title": "#052 Exception Handling Problem 52",
    "slug": "cppexceptions-052-exception-handling-problem-52",
    "description": "Implement exception handling pattern #52 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 52 10",
        "output": "Exception scenario #52 handled safely and invariants preserved (Code: 520)",
        "explanation": "Executes logic for Exception Handling Problem 52."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 52\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 52\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 52\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:52Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000053",
    "book": "cppexceptions",
    "order_index": 53,
    "title": "#053 Exception Handling Problem 53",
    "slug": "cppexceptions-053-exception-handling-problem-53",
    "description": "Implement exception handling pattern #53 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 53 10",
        "output": "Exception scenario #53 handled safely and invariants preserved (Code: 530)",
        "explanation": "Executes logic for Exception Handling Problem 53."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 53\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 53\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 53\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:53Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000054",
    "book": "cppexceptions",
    "order_index": 54,
    "title": "#054 Exception Handling Problem 54",
    "slug": "cppexceptions-054-exception-handling-problem-54",
    "description": "Implement exception handling pattern #54 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 54 10",
        "output": "Exception scenario #54 handled safely and invariants preserved (Code: 540)",
        "explanation": "Executes logic for Exception Handling Problem 54."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 54\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 54\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 54\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:54Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000055",
    "book": "cppexceptions",
    "order_index": 55,
    "title": "#055 Exception Handling Problem 55",
    "slug": "cppexceptions-055-exception-handling-problem-55",
    "description": "Implement exception handling pattern #55 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 55 10",
        "output": "Exception scenario #55 handled safely and invariants preserved (Code: 550)",
        "explanation": "Executes logic for Exception Handling Problem 55."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 55\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 55\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 55\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:55Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000056",
    "book": "cppexceptions",
    "order_index": 56,
    "title": "#056 Exception Handling Problem 56",
    "slug": "cppexceptions-056-exception-handling-problem-56",
    "description": "Implement exception handling pattern #56 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 56 10",
        "output": "Exception scenario #56 handled safely and invariants preserved (Code: 560)",
        "explanation": "Executes logic for Exception Handling Problem 56."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 56\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 56\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 56\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:56Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000057",
    "book": "cppexceptions",
    "order_index": 57,
    "title": "#057 Exception Handling Problem 57",
    "slug": "cppexceptions-057-exception-handling-problem-57",
    "description": "Implement exception handling pattern #57 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 57 10",
        "output": "Exception scenario #57 handled safely and invariants preserved (Code: 570)",
        "explanation": "Executes logic for Exception Handling Problem 57."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 57\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 57\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 57\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:57Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000058",
    "book": "cppexceptions",
    "order_index": 58,
    "title": "#058 Exception Handling Problem 58",
    "slug": "cppexceptions-058-exception-handling-problem-58",
    "description": "Implement exception handling pattern #58 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 58 10",
        "output": "Exception scenario #58 handled safely and invariants preserved (Code: 580)",
        "explanation": "Executes logic for Exception Handling Problem 58."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 58\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 58\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 58\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:58Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000059",
    "book": "cppexceptions",
    "order_index": 59,
    "title": "#059 Exception Handling Problem 59",
    "slug": "cppexceptions-059-exception-handling-problem-59",
    "description": "Implement exception handling pattern #59 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 59 10",
        "output": "Exception scenario #59 handled safely and invariants preserved (Code: 590)",
        "explanation": "Executes logic for Exception Handling Problem 59."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 59\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 59\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 59\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:59Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000060",
    "book": "cppexceptions",
    "order_index": 60,
    "title": "#060 Exception Handling Problem 60",
    "slug": "cppexceptions-060-exception-handling-problem-60",
    "description": "Implement exception handling pattern #60 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 60 10",
        "output": "Exception scenario #60 handled safely and invariants preserved (Code: 600)",
        "explanation": "Executes logic for Exception Handling Problem 60."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 60\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 60\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 60\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:00Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000061",
    "book": "cppexceptions",
    "order_index": 61,
    "title": "#061 Exception Handling Problem 61",
    "slug": "cppexceptions-061-exception-handling-problem-61",
    "description": "Implement exception handling pattern #61 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 61 10",
        "output": "Exception scenario #61 handled safely and invariants preserved (Code: 610)",
        "explanation": "Executes logic for Exception Handling Problem 61."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 61\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 61\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 61\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:01Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000062",
    "book": "cppexceptions",
    "order_index": 62,
    "title": "#062 Exception Handling Problem 62",
    "slug": "cppexceptions-062-exception-handling-problem-62",
    "description": "Implement exception handling pattern #62 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 62 10",
        "output": "Exception scenario #62 handled safely and invariants preserved (Code: 620)",
        "explanation": "Executes logic for Exception Handling Problem 62."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 62\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 62\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 62\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:02Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000063",
    "book": "cppexceptions",
    "order_index": 63,
    "title": "#063 Exception Handling Problem 63",
    "slug": "cppexceptions-063-exception-handling-problem-63",
    "description": "Implement exception handling pattern #63 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 63 10",
        "output": "Exception scenario #63 handled safely and invariants preserved (Code: 630)",
        "explanation": "Executes logic for Exception Handling Problem 63."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 63\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 63\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 63\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:03Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000064",
    "book": "cppexceptions",
    "order_index": 64,
    "title": "#064 Exception Handling Problem 64",
    "slug": "cppexceptions-064-exception-handling-problem-64",
    "description": "Implement exception handling pattern #64 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 64 10",
        "output": "Exception scenario #64 handled safely and invariants preserved (Code: 640)",
        "explanation": "Executes logic for Exception Handling Problem 64."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 64\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 64\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 64\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:04Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000065",
    "book": "cppexceptions",
    "order_index": 65,
    "title": "#065 Exception Handling Problem 65",
    "slug": "cppexceptions-065-exception-handling-problem-65",
    "description": "Implement exception handling pattern #65 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 65 10",
        "output": "Exception scenario #65 handled safely and invariants preserved (Code: 650)",
        "explanation": "Executes logic for Exception Handling Problem 65."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 65\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 65\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 65\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:05Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000066",
    "book": "cppexceptions",
    "order_index": 66,
    "title": "#066 Exception Handling Problem 66",
    "slug": "cppexceptions-066-exception-handling-problem-66",
    "description": "Implement exception handling pattern #66 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 66 10",
        "output": "Exception scenario #66 handled safely and invariants preserved (Code: 660)",
        "explanation": "Executes logic for Exception Handling Problem 66."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 66\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 66\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 66\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:06Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000067",
    "book": "cppexceptions",
    "order_index": 67,
    "title": "#067 Exception Handling Problem 67",
    "slug": "cppexceptions-067-exception-handling-problem-67",
    "description": "Implement exception handling pattern #67 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 67 10",
        "output": "Exception scenario #67 handled safely and invariants preserved (Code: 670)",
        "explanation": "Executes logic for Exception Handling Problem 67."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 67\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 67\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 67\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:07Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000068",
    "book": "cppexceptions",
    "order_index": 68,
    "title": "#068 Exception Handling Problem 68",
    "slug": "cppexceptions-068-exception-handling-problem-68",
    "description": "Implement exception handling pattern #68 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 68 10",
        "output": "Exception scenario #68 handled safely and invariants preserved (Code: 680)",
        "explanation": "Executes logic for Exception Handling Problem 68."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 68\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 68\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 68\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:08Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000069",
    "book": "cppexceptions",
    "order_index": 69,
    "title": "#069 Exception Handling Problem 69",
    "slug": "cppexceptions-069-exception-handling-problem-69",
    "description": "Implement exception handling pattern #69 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 69 10",
        "output": "Exception scenario #69 handled safely and invariants preserved (Code: 690)",
        "explanation": "Executes logic for Exception Handling Problem 69."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 69\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 69\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 69\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:09Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000070",
    "book": "cppexceptions",
    "order_index": 70,
    "title": "#070 Exception Handling Problem 70",
    "slug": "cppexceptions-070-exception-handling-problem-70",
    "description": "Implement exception handling pattern #70 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 70 10",
        "output": "Exception scenario #70 handled safely and invariants preserved (Code: 700)",
        "explanation": "Executes logic for Exception Handling Problem 70."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 70\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 70\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 70\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:10Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000071",
    "book": "cppexceptions",
    "order_index": 71,
    "title": "#071 Exception Handling Problem 71",
    "slug": "cppexceptions-071-exception-handling-problem-71",
    "description": "Implement exception handling pattern #71 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 71 10",
        "output": "Exception scenario #71 handled safely and invariants preserved (Code: 710)",
        "explanation": "Executes logic for Exception Handling Problem 71."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 71\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 71\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 71\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:11Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000072",
    "book": "cppexceptions",
    "order_index": 72,
    "title": "#072 Exception Handling Problem 72",
    "slug": "cppexceptions-072-exception-handling-problem-72",
    "description": "Implement exception handling pattern #72 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 72 10",
        "output": "Exception scenario #72 handled safely and invariants preserved (Code: 720)",
        "explanation": "Executes logic for Exception Handling Problem 72."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 72\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 72\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 72\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:12Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000073",
    "book": "cppexceptions",
    "order_index": 73,
    "title": "#073 Exception Handling Problem 73",
    "slug": "cppexceptions-073-exception-handling-problem-73",
    "description": "Implement exception handling pattern #73 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 73 10",
        "output": "Exception scenario #73 handled safely and invariants preserved (Code: 730)",
        "explanation": "Executes logic for Exception Handling Problem 73."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 73\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 73\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 73\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:13Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000074",
    "book": "cppexceptions",
    "order_index": 74,
    "title": "#074 Exception Handling Problem 74",
    "slug": "cppexceptions-074-exception-handling-problem-74",
    "description": "Implement exception handling pattern #74 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 74 10",
        "output": "Exception scenario #74 handled safely and invariants preserved (Code: 740)",
        "explanation": "Executes logic for Exception Handling Problem 74."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 74\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 74\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 74\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:14Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000075",
    "book": "cppexceptions",
    "order_index": 75,
    "title": "#075 Exception Handling Problem 75",
    "slug": "cppexceptions-075-exception-handling-problem-75",
    "description": "Implement exception handling pattern #75 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 75 10",
        "output": "Exception scenario #75 handled safely and invariants preserved (Code: 750)",
        "explanation": "Executes logic for Exception Handling Problem 75."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 75\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 75\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 75\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:15Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000076",
    "book": "cppexceptions",
    "order_index": 76,
    "title": "#076 Exception Handling Problem 76",
    "slug": "cppexceptions-076-exception-handling-problem-76",
    "description": "Implement exception handling pattern #76 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 76 10",
        "output": "Exception scenario #76 handled safely and invariants preserved (Code: 760)",
        "explanation": "Executes logic for Exception Handling Problem 76."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 76\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 76\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 76\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:16Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000077",
    "book": "cppexceptions",
    "order_index": 77,
    "title": "#077 Exception Handling Problem 77",
    "slug": "cppexceptions-077-exception-handling-problem-77",
    "description": "Implement exception handling pattern #77 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 77 10",
        "output": "Exception scenario #77 handled safely and invariants preserved (Code: 770)",
        "explanation": "Executes logic for Exception Handling Problem 77."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 77\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 77\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 77\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:17Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000078",
    "book": "cppexceptions",
    "order_index": 78,
    "title": "#078 Exception Handling Problem 78",
    "slug": "cppexceptions-078-exception-handling-problem-78",
    "description": "Implement exception handling pattern #78 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 78 10",
        "output": "Exception scenario #78 handled safely and invariants preserved (Code: 780)",
        "explanation": "Executes logic for Exception Handling Problem 78."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 78\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 78\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 78\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:18Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000079",
    "book": "cppexceptions",
    "order_index": 79,
    "title": "#079 Exception Handling Problem 79",
    "slug": "cppexceptions-079-exception-handling-problem-79",
    "description": "Implement exception handling pattern #79 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 79 10",
        "output": "Exception scenario #79 handled safely and invariants preserved (Code: 790)",
        "explanation": "Executes logic for Exception Handling Problem 79."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 79\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 79\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 79\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:19Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000080",
    "book": "cppexceptions",
    "order_index": 80,
    "title": "#080 Exception Handling Problem 80",
    "slug": "cppexceptions-080-exception-handling-problem-80",
    "description": "Implement exception handling pattern #80 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 80 10",
        "output": "Exception scenario #80 handled safely and invariants preserved (Code: 800)",
        "explanation": "Executes logic for Exception Handling Problem 80."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 80\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 80\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 80\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:20Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000081",
    "book": "cppexceptions",
    "order_index": 81,
    "title": "#081 Exception Handling Problem 81",
    "slug": "cppexceptions-081-exception-handling-problem-81",
    "description": "Implement exception handling pattern #81 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 81 10",
        "output": "Exception scenario #81 handled safely and invariants preserved (Code: 810)",
        "explanation": "Executes logic for Exception Handling Problem 81."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 81\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 81\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 81\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:21Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000082",
    "book": "cppexceptions",
    "order_index": 82,
    "title": "#082 Exception Handling Problem 82",
    "slug": "cppexceptions-082-exception-handling-problem-82",
    "description": "Implement exception handling pattern #82 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 82 10",
        "output": "Exception scenario #82 handled safely and invariants preserved (Code: 820)",
        "explanation": "Executes logic for Exception Handling Problem 82."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 82\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 82\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 82\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:22Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000083",
    "book": "cppexceptions",
    "order_index": 83,
    "title": "#083 Exception Handling Problem 83",
    "slug": "cppexceptions-083-exception-handling-problem-83",
    "description": "Implement exception handling pattern #83 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 83 10",
        "output": "Exception scenario #83 handled safely and invariants preserved (Code: 830)",
        "explanation": "Executes logic for Exception Handling Problem 83."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 83\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 83\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 83\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:23Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000084",
    "book": "cppexceptions",
    "order_index": 84,
    "title": "#084 Exception Handling Problem 84",
    "slug": "cppexceptions-084-exception-handling-problem-84",
    "description": "Implement exception handling pattern #84 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 84 10",
        "output": "Exception scenario #84 handled safely and invariants preserved (Code: 840)",
        "explanation": "Executes logic for Exception Handling Problem 84."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 84\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 84\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 84\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:24Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000085",
    "book": "cppexceptions",
    "order_index": 85,
    "title": "#085 Exception Handling Problem 85",
    "slug": "cppexceptions-085-exception-handling-problem-85",
    "description": "Implement exception handling pattern #85 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 85 10",
        "output": "Exception scenario #85 handled safely and invariants preserved (Code: 850)",
        "explanation": "Executes logic for Exception Handling Problem 85."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 85\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 85\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 85\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:25Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000086",
    "book": "cppexceptions",
    "order_index": 86,
    "title": "#086 Exception Handling Problem 86",
    "slug": "cppexceptions-086-exception-handling-problem-86",
    "description": "Implement exception handling pattern #86 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 86 10",
        "output": "Exception scenario #86 handled safely and invariants preserved (Code: 860)",
        "explanation": "Executes logic for Exception Handling Problem 86."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 86\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 86\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 86\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:26Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000087",
    "book": "cppexceptions",
    "order_index": 87,
    "title": "#087 Exception Handling Problem 87",
    "slug": "cppexceptions-087-exception-handling-problem-87",
    "description": "Implement exception handling pattern #87 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 87 10",
        "output": "Exception scenario #87 handled safely and invariants preserved (Code: 870)",
        "explanation": "Executes logic for Exception Handling Problem 87."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 87\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 87\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 87\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:27Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000088",
    "book": "cppexceptions",
    "order_index": 88,
    "title": "#088 Exception Handling Problem 88",
    "slug": "cppexceptions-088-exception-handling-problem-88",
    "description": "Implement exception handling pattern #88 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 88 10",
        "output": "Exception scenario #88 handled safely and invariants preserved (Code: 880)",
        "explanation": "Executes logic for Exception Handling Problem 88."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 88\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 88\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 88\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:28Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000089",
    "book": "cppexceptions",
    "order_index": 89,
    "title": "#089 Exception Handling Problem 89",
    "slug": "cppexceptions-089-exception-handling-problem-89",
    "description": "Implement exception handling pattern #89 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 89 10",
        "output": "Exception scenario #89 handled safely and invariants preserved (Code: 890)",
        "explanation": "Executes logic for Exception Handling Problem 89."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 89\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 89\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 89\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:29Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000090",
    "book": "cppexceptions",
    "order_index": 90,
    "title": "#090 Exception Handling Problem 90",
    "slug": "cppexceptions-090-exception-handling-problem-90",
    "description": "Implement exception handling pattern #90 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 90 10",
        "output": "Exception scenario #90 handled safely and invariants preserved (Code: 900)",
        "explanation": "Executes logic for Exception Handling Problem 90."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 90\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 90\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 90\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:30Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000091",
    "book": "cppexceptions",
    "order_index": 91,
    "title": "#091 Exception Handling Problem 91",
    "slug": "cppexceptions-091-exception-handling-problem-91",
    "description": "Implement exception handling pattern #91 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 91 10",
        "output": "Exception scenario #91 handled safely and invariants preserved (Code: 910)",
        "explanation": "Executes logic for Exception Handling Problem 91."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 91\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 91\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 91\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:31Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000092",
    "book": "cppexceptions",
    "order_index": 92,
    "title": "#092 Exception Handling Problem 92",
    "slug": "cppexceptions-092-exception-handling-problem-92",
    "description": "Implement exception handling pattern #92 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 92 10",
        "output": "Exception scenario #92 handled safely and invariants preserved (Code: 920)",
        "explanation": "Executes logic for Exception Handling Problem 92."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 92\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 92\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 92\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:32Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000093",
    "book": "cppexceptions",
    "order_index": 93,
    "title": "#093 Exception Handling Problem 93",
    "slug": "cppexceptions-093-exception-handling-problem-93",
    "description": "Implement exception handling pattern #93 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 93 10",
        "output": "Exception scenario #93 handled safely and invariants preserved (Code: 930)",
        "explanation": "Executes logic for Exception Handling Problem 93."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 93\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 93\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 93\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:33Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000094",
    "book": "cppexceptions",
    "order_index": 94,
    "title": "#094 Exception Handling Problem 94",
    "slug": "cppexceptions-094-exception-handling-problem-94",
    "description": "Implement exception handling pattern #94 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 94 10",
        "output": "Exception scenario #94 handled safely and invariants preserved (Code: 940)",
        "explanation": "Executes logic for Exception Handling Problem 94."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 94\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 94\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 94\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:34Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000095",
    "book": "cppexceptions",
    "order_index": 95,
    "title": "#095 Exception Handling Problem 95",
    "slug": "cppexceptions-095-exception-handling-problem-95",
    "description": "Implement exception handling pattern #95 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 95 10",
        "output": "Exception scenario #95 handled safely and invariants preserved (Code: 950)",
        "explanation": "Executes logic for Exception Handling Problem 95."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 95\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 95\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 95\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:35Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000096",
    "book": "cppexceptions",
    "order_index": 96,
    "title": "#096 Exception Handling Problem 96",
    "slug": "cppexceptions-096-exception-handling-problem-96",
    "description": "Implement exception handling pattern #96 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 96 10",
        "output": "Exception scenario #96 handled safely and invariants preserved (Code: 960)",
        "explanation": "Executes logic for Exception Handling Problem 96."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 96\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 96\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 96\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:36Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000097",
    "book": "cppexceptions",
    "order_index": 97,
    "title": "#097 Exception Handling Problem 97",
    "slug": "cppexceptions-097-exception-handling-problem-97",
    "description": "Implement exception handling pattern #97 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 97 10",
        "output": "Exception scenario #97 handled safely and invariants preserved (Code: 970)",
        "explanation": "Executes logic for Exception Handling Problem 97."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 97\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 97\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 97\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:37Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000098",
    "book": "cppexceptions",
    "order_index": 98,
    "title": "#098 Exception Handling Problem 98",
    "slug": "cppexceptions-098-exception-handling-problem-98",
    "description": "Implement exception handling pattern #98 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 98 10",
        "output": "Exception scenario #98 handled safely and invariants preserved (Code: 980)",
        "explanation": "Executes logic for Exception Handling Problem 98."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 98\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 98\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 98\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:38Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000099",
    "book": "cppexceptions",
    "order_index": 99,
    "title": "#099 Exception Handling Problem 99",
    "slug": "cppexceptions-099-exception-handling-problem-99",
    "description": "Implement exception handling pattern #99 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 99 10",
        "output": "Exception scenario #99 handled safely and invariants preserved (Code: 990)",
        "explanation": "Executes logic for Exception Handling Problem 99."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 99\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 99\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 99\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:39Z"
  },
  {
    "id": "00000000-0000-4000-6003-000000000100",
    "book": "cppexceptions",
    "order_index": 100,
    "title": "#100 Exception Handling Problem 100",
    "slug": "cppexceptions-100-exception-handling-problem-100",
    "description": "Implement exception handling pattern #100 managing error throwing, catching, custom types, or RAII safety guarantees.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Exception Handling",
    "tags": [
      "Exceptions",
      "try-catch",
      "throw",
      "std::exception",
      "RAII"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EXC_TEST 100 10",
        "output": "Exception scenario #100 handled safely and invariants preserved (Code: 1000)",
        "explanation": "Executes logic for Exception Handling Problem 100."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exception Handling Problem 100\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exception Handling Problem 100\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exception Handling Problem 100\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:40Z"
  }
];
