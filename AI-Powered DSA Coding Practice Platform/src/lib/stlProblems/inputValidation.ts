import { Problem } from '../../types/problem';

export const INPUT_VALIDATION_PROBLEMS: Problem[] = [
  {
    "id": "00000000-0000-4000-6004-000000000001",
    "book": "inputvalidation",
    "order_index": 1,
    "title": "#001 Checking cin Failure State with `cin.fail()`",
    "slug": "inputvalidation-001-checking-cin-failure-state-with-cin-fail",
    "description": "Detect when non-numeric input is provided to an integer variable using `cin.fail()`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Input 'abc' into int x",
        "output": "Input failure detected: Stream entered fail state",
        "explanation": "Executes logic for Checking cin Failure State with `cin.fail()`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Checking cin Failure State with `cin.fail()`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Checking cin Failure State with `cin.fail()`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Checking cin Failure State with `cin.fail()`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:01Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000002",
    "book": "inputvalidation",
    "order_index": 2,
    "title": "#002 Clearing Stream State and Flushing Buffer (`cin.clear()` & `cin.ignore()`)",
    "slug": "inputvalidation-002-clearing-stream-state-and-flushing-buffer-cin-clea",
    "description": "Clear `cin.fail()` error flag and discard invalid characters up to newline using `cin.ignore()`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Clear and re-read valid int 42",
        "output": "Stream cleared: Successfully re-read integer 42",
        "explanation": "Executes logic for Clearing Stream State and Flushing Buffer (`cin.clear()` & `cin.ignore()`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Clearing Stream State and Flushing Buffer (`cin.clear()` & `cin.ignore()`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Clearing Stream State and Flushing Buffer (`cin.clear()` & `cin.ignore()`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Clearing Stream State and Flushing Buffer (`cin.clear()` & `cin.ignore()`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:02Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000003",
    "book": "inputvalidation",
    "order_index": 3,
    "title": "#003 Robust Integer Input Loop with Re-Prompting",
    "slug": "inputvalidation-003-robust-integer-input-loop-with-re-prompting",
    "description": "Loop until user enters a valid integer, rejecting invalid non-numeric strings.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Inputs: 'bad', 'xyz', '100'",
        "output": "Rejected invalid inputs -> Accepted valid integer: 100",
        "explanation": "Executes logic for Robust Integer Input Loop with Re-Prompting."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Robust Integer Input Loop with Re-Prompting\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Robust Integer Input Loop with Re-Prompting\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Robust Integer Input Loop with Re-Prompting\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:03Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000004",
    "book": "inputvalidation",
    "order_index": 4,
    "title": "#004 Integer Range Validation (Inclusive Min and Max Bounds)",
    "slug": "inputvalidation-004-integer-range-validation-inclusive-min-and-max-bou",
    "description": "Validate that input integer falls strictly between min (e.g. 1) and max (e.g. 100).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Input 150 (Range: 1-100)",
        "output": "Validation Failed: 150 is out of bounds [1, 100]",
        "explanation": "Executes logic for Integer Range Validation (Inclusive Min and Max Bounds)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Integer Range Validation (Inclusive Min and Max Bounds)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Integer Range Validation (Inclusive Min and Max Bounds)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Integer Range Validation (Inclusive Min and Max Bounds)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:04Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000005",
    "book": "inputvalidation",
    "order_index": 5,
    "title": "#005 Positive Floating-Point Validation",
    "slug": "inputvalidation-005-positive-floating-point-validation",
    "description": "Accept only strictly positive floating point numbers (e.g. price > 0.0), rejecting 0 or negatives.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Input -15.5",
        "output": "Validation Failed: Price must be strictly positive",
        "explanation": "Executes logic for Positive Floating-Point Validation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Positive Floating-Point Validation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Positive Floating-Point Validation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Positive Floating-Point Validation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:05Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000006",
    "book": "inputvalidation",
    "order_index": 6,
    "title": "#006 Non-Empty String Validation",
    "slug": "inputvalidation-006-non-empty-string-validation",
    "description": "Reject empty or whitespace-only strings for mandatory fields like Username.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Input '   '",
        "output": "Validation Failed: Username cannot be blank",
        "explanation": "Executes logic for Non-Empty String Validation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Non-Empty String Validation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Non-Empty String Validation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Non-Empty String Validation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:06Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000007",
    "book": "inputvalidation",
    "order_index": 7,
    "title": "#007 Alphanumeric String Validation",
    "slug": "inputvalidation-007-alphanumeric-string-validation",
    "description": "Verify that string contains only letters (A-Z, a-z) and digits (0-9).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Input 'User_123!'",
        "output": "Validation Failed: Contains invalid character '!'",
        "explanation": "Executes logic for Alphanumeric String Validation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Alphanumeric String Validation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Alphanumeric String Validation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Alphanumeric String Validation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:07Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000008",
    "book": "inputvalidation",
    "order_index": 8,
    "title": "#008 Email Address Format Validation (Regex / Token Check)",
    "slug": "inputvalidation-008-email-address-format-validation-regex-token-check",
    "description": "Validate that string contains username, '@' symbol, and valid domain with dot.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "alice@mail.com",
        "output": "Valid email address: alice@mail.com",
        "explanation": "Executes logic for Email Address Format Validation (Regex / Token Check)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Email Address Format Validation (Regex / Token Check)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Email Address Format Validation (Regex / Token Check)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Email Address Format Validation (Regex / Token Check)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:08Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000009",
    "book": "inputvalidation",
    "order_index": 9,
    "title": "#009 Phone Number Format Validation (E.164 Standard)",
    "slug": "inputvalidation-009-phone-number-format-validation-e-164-standard",
    "description": "Validate phone number matching `+1234567890` format (10-15 digits with optional leading +).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "+14155552671",
        "output": "Valid phone number format",
        "explanation": "Executes logic for Phone Number Format Validation (E.164 Standard)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Phone Number Format Validation (E.164 Standard)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Phone Number Format Validation (E.164 Standard)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Phone Number Format Validation (E.164 Standard)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:09Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000010",
    "book": "inputvalidation",
    "order_index": 10,
    "title": "#010 IPv4 Address Format Validation",
    "slug": "inputvalidation-010-ipv4-address-format-validation",
    "description": "Validate IPv4 string format `A.B.C.D` where each octet is an integer between 0 and 255.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "192.168.1.1",
        "output": "Valid IPv4 address",
        "explanation": "Executes logic for IPv4 Address Format Validation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// IPv4 Address Format Validation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# IPv4 Address Format Validation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// IPv4 Address Format Validation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:10Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000011",
    "book": "inputvalidation",
    "order_index": 11,
    "title": "#011 IPv6 Address Format Validation",
    "slug": "inputvalidation-011-ipv6-address-format-validation",
    "description": "Validate hexadecimal 8-group IPv6 address string format.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "2001:0db8:85a3:0000:0000:8a2e:0370:7334",
        "output": "Valid IPv6 address format",
        "explanation": "Executes logic for IPv6 Address Format Validation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// IPv6 Address Format Validation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# IPv6 Address Format Validation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// IPv6 Address Format Validation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:11Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000012",
    "book": "inputvalidation",
    "order_index": 12,
    "title": "#012 Date String Format Validation (YYYY-MM-DD)",
    "slug": "inputvalidation-012-date-string-format-validation-yyyy-mm-dd",
    "description": "Validate format and calendar validity (year, month 1-12, day 1-31).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "2026-02-28",
        "output": "Valid calendar date: February 28, 2026",
        "explanation": "Executes logic for Date String Format Validation (YYYY-MM-DD)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Date String Format Validation (YYYY-MM-DD)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date String Format Validation (YYYY-MM-DD)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date String Format Validation (YYYY-MM-DD)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:12Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000013",
    "book": "inputvalidation",
    "order_index": 13,
    "title": "#013 Time String Format Validation (HH:MM:SS in 24hr format)",
    "slug": "inputvalidation-013-time-string-format-validation-hh-mm-ss-in-24hr-for",
    "description": "Validate hour (0-23), minute (0-59), second (0-59).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "23:45:00",
        "output": "Valid 24-hour time format",
        "explanation": "Executes logic for Time String Format Validation (HH:MM:SS in 24hr format)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Time String Format Validation (HH:MM:SS in 24hr format)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Time String Format Validation (HH:MM:SS in 24hr format)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Time String Format Validation (HH:MM:SS in 24hr format)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:13Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000014",
    "book": "inputvalidation",
    "order_index": 14,
    "title": "#014 Credit Card Number Luhn Algorithm Validation",
    "slug": "inputvalidation-014-credit-card-number-luhn-algorithm-validation",
    "description": "Validate credit card number checksum using Luhn formula (Mod 10).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Card '49927398716'",
        "output": "Luhn Checksum Valid: Card number is authentic",
        "explanation": "Executes logic for Credit Card Number Luhn Algorithm Validation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Credit Card Number Luhn Algorithm Validation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Credit Card Number Luhn Algorithm Validation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Credit Card Number Luhn Algorithm Validation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:14Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000015",
    "book": "inputvalidation",
    "order_index": 15,
    "title": "#015 ZIP / Postal Code Format Validation (US 5-digit or 5+4)",
    "slug": "inputvalidation-015-zip-postal-code-format-validation-us-5-digit-or-5",
    "description": "Validate ZIP code against `12345` or `12345-6789` format.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "90210-1234",
        "output": "Valid ZIP+4 Postal Code",
        "explanation": "Executes logic for ZIP / Postal Code Format Validation (US 5-digit or 5+4)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// ZIP / Postal Code Format Validation (US 5-digit or 5+4)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# ZIP / Postal Code Format Validation (US 5-digit or 5+4)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// ZIP / Postal Code Format Validation (US 5-digit or 5+4)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:15Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000016",
    "book": "inputvalidation",
    "order_index": 16,
    "title": "#016 Password Strength Policy Validation",
    "slug": "inputvalidation-016-password-strength-policy-validation",
    "description": "Enforce: Min 8 chars, 1 uppercase, 1 lowercase, 1 digit, 1 special character.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Pass 'P@ssw0rd2026'",
        "output": "Password Strength: Strong (All criteria met)",
        "explanation": "Executes logic for Password Strength Policy Validation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Password Strength Policy Validation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Password Strength Policy Validation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Password Strength Policy Validation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:16Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000017",
    "book": "inputvalidation",
    "order_index": 17,
    "title": "#017 Hexadecimal Color Code Validation (#RRGGBB / #RGB)",
    "slug": "inputvalidation-017-hexadecimal-color-code-validation-rrggbb-rgb",
    "description": "Validate hex color string starting with '#' followed by 3 or 6 hex digits.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "#FF5733",
        "output": "Valid Hex Color: #FF5733 (RGB: 255, 87, 51)",
        "explanation": "Executes logic for Hexadecimal Color Code Validation (#RRGGBB / #RGB)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Hexadecimal Color Code Validation (#RRGGBB / #RGB)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Hexadecimal Color Code Validation (#RRGGBB / #RGB)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Hexadecimal Color Code Validation (#RRGGBB / #RGB)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:17Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000018",
    "book": "inputvalidation",
    "order_index": 18,
    "title": "#018 URL / Web Address Validation",
    "slug": "inputvalidation-018-url-web-address-validation",
    "description": "Validate URL starting with `http://` or `https://` with valid domain name.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "https://example.com/api",
        "output": "Valid Web URL",
        "explanation": "Executes logic for URL / Web Address Validation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// URL / Web Address Validation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# URL / Web Address Validation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// URL / Web Address Validation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:18Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000019",
    "book": "inputvalidation",
    "order_index": 19,
    "title": "#019 Sanitizing SQL Injection Special Characters",
    "slug": "inputvalidation-019-sanitizing-sql-injection-special-characters",
    "description": "Strip or escape single quotes, semicolons, and comment dashes from input string.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "admin' OR '1'='1",
        "output": "Sanitized Input: 'admin\\' OR \\'1\\'=\\'1'",
        "explanation": "Executes logic for Sanitizing SQL Injection Special Characters."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Sanitizing SQL Injection Special Characters\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sanitizing SQL Injection Special Characters\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sanitizing SQL Injection Special Characters\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:19Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000020",
    "book": "inputvalidation",
    "order_index": 20,
    "title": "#020 Sanitizing HTML / XSS Injection Tags",
    "slug": "inputvalidation-020-sanitizing-html-xss-injection-tags",
    "description": "Replace `<` and `>` with `&lt;` and `&gt;` to prevent XSS script injection.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "<script>alert(1)</script>",
        "output": "Sanitized: &lt;script&gt;alert(1)&lt;/script&gt;",
        "explanation": "Executes logic for Sanitizing HTML / XSS Injection Tags."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Sanitizing HTML / XSS Injection Tags\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sanitizing HTML / XSS Injection Tags\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sanitizing HTML / XSS Injection Tags\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:20Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000021",
    "book": "inputvalidation",
    "order_index": 21,
    "title": "#021 MAC Address Format Validation (XX:XX:XX:XX:XX:XX)",
    "slug": "inputvalidation-021-mac-address-format-validation-xx-xx-xx-xx-xx-xx",
    "description": "Validate 6 pairs of hexadecimal digits separated by colons or hyphens.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "00:1A:2B:3C:4D:5E",
        "output": "Valid MAC address",
        "explanation": "Executes logic for MAC Address Format Validation (XX:XX:XX:XX:XX:XX)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// MAC Address Format Validation (XX:XX:XX:XX:XX:XX)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# MAC Address Format Validation (XX:XX:XX:XX:XX:XX)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// MAC Address Format Validation (XX:XX:XX:XX:XX:XX)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:21Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000022",
    "book": "inputvalidation",
    "order_index": 22,
    "title": "#022 UUID / GUID Format Validation (8-4-4-4-12 hex string)",
    "slug": "inputvalidation-022-uuid-guid-format-validation-8-4-4-4-12-hex-string",
    "description": "Validate 36-character standard UUID string format.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "123e4567-e89b-12d3-a456-426614174000",
        "output": "Valid UUID format",
        "explanation": "Executes logic for UUID / GUID Format Validation (8-4-4-4-12 hex string)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// UUID / GUID Format Validation (8-4-4-4-12 hex string)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# UUID / GUID Format Validation (8-4-4-4-12 hex string)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// UUID / GUID Format Validation (8-4-4-4-12 hex string)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:22Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000023",
    "book": "inputvalidation",
    "order_index": 23,
    "title": "#023 Semantic Versioning Format Validation (Major.Minor.Patch)",
    "slug": "inputvalidation-023-semantic-versioning-format-validation-major-minor",
    "description": "Validate SemVer string (e.g. `v1.2.3` or `2.0.0-beta`).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "v2.1.0",
        "output": "Valid SemVer: Major=2, Minor=1, Patch=0",
        "explanation": "Executes logic for Semantic Versioning Format Validation (Major.Minor.Patch)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Semantic Versioning Format Validation (Major.Minor.Patch)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Semantic Versioning Format Validation (Major.Minor.Patch)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Semantic Versioning Format Validation (Major.Minor.Patch)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:23Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000024",
    "book": "inputvalidation",
    "order_index": 24,
    "title": "#024 Base64 Encoded String Validation",
    "slug": "inputvalidation-024-base64-encoded-string-validation",
    "description": "Verify that string length is multiple of 4 and contains only Base64 chars (A-Z, a-z, 0-9, +, /, =).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SGVsbG8gV29ybGQ=",
        "output": "Valid Base64 string (Decodes to 'Hello World')",
        "explanation": "Executes logic for Base64 Encoded String Validation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Base64 Encoded String Validation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Base64 Encoded String Validation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Base64 Encoded String Validation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:24Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000025",
    "book": "inputvalidation",
    "order_index": 25,
    "title": "#025 ISBN-10 and ISBN-13 Book Number Validation",
    "slug": "inputvalidation-025-isbn-10-and-isbn-13-book-number-validation",
    "description": "Validate ISBN checksum using weighted modulo arithmetic.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ISBN 978-0-306-40615-7",
        "output": "Valid ISBN-13 Checksum",
        "explanation": "Executes logic for ISBN-10 and ISBN-13 Book Number Validation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// ISBN-10 and ISBN-13 Book Number Validation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# ISBN-10 and ISBN-13 Book Number Validation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// ISBN-10 and ISBN-13 Book Number Validation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:25Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000026",
    "book": "inputvalidation",
    "order_index": 26,
    "title": "#026 Latitude and Longitude Coordinate Validation",
    "slug": "inputvalidation-026-latitude-and-longitude-coordinate-validation",
    "description": "Validate latitude [-90.0, 90.0] and longitude [-180.0, 180.0].\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Lat: 37.7749, Lon: -122.4194",
        "output": "Valid GPS Coordinates (San Francisco)",
        "explanation": "Executes logic for Latitude and Longitude Coordinate Validation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Latitude and Longitude Coordinate Validation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Latitude and Longitude Coordinate Validation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Latitude and Longitude Coordinate Validation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:26Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000027",
    "book": "inputvalidation",
    "order_index": 27,
    "title": "#027 JSON String Syntax Validation",
    "slug": "inputvalidation-027-json-string-syntax-validation",
    "description": "Verify matching braces, brackets, and quotes in raw JSON string.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "{\"name\": \"Alice\", \"age\": 25}",
        "output": "Valid JSON Syntax",
        "explanation": "Executes logic for JSON String Syntax Validation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// JSON String Syntax Validation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# JSON String Syntax Validation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// JSON String Syntax Validation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:27Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000028",
    "book": "inputvalidation",
    "order_index": 28,
    "title": "#028 Currency / Price Monetary Amount Validation",
    "slug": "inputvalidation-028-currency-price-monetary-amount-validation",
    "description": "Validate decimal currency string with at most 2 decimal places.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "199.99",
        "output": "Valid Monetary Value: $199.99",
        "explanation": "Executes logic for Currency / Price Monetary Amount Validation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Currency / Price Monetary Amount Validation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Currency / Price Monetary Amount Validation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Currency / Price Monetary Amount Validation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:28Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000029",
    "book": "inputvalidation",
    "order_index": 29,
    "title": "#029 Percentage Value Validation (0.0% to 100.0%)",
    "slug": "inputvalidation-029-percentage-value-validation-0-0-to-100-0",
    "description": "Validate float percentage within [0.0, 100.0] inclusive.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "85.5",
        "output": "Valid Percentage: 85.5%",
        "explanation": "Executes logic for Percentage Value Validation (0.0% to 100.0%)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Percentage Value Validation (0.0% to 100.0%)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Percentage Value Validation (0.0% to 100.0%)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Percentage Value Validation (0.0% to 100.0%)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:29Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000030",
    "book": "inputvalidation",
    "order_index": 30,
    "title": "#030 File Path Traversal Attack Prevention",
    "slug": "inputvalidation-030-file-path-traversal-attack-prevention",
    "description": "Reject paths containing `..` or leading `/` that attempt directory traversal.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "../../../etc/passwd",
        "output": "Security Alert: Path traversal attempt blocked",
        "explanation": "Executes logic for File Path Traversal Attack Prevention."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// File Path Traversal Attack Prevention\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File Path Traversal Attack Prevention\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File Path Traversal Attack Prevention\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:30Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000031",
    "book": "inputvalidation",
    "order_index": 31,
    "title": "#031 Numeric String Parsing without Exceptions (std::from_chars)",
    "slug": "inputvalidation-031-numeric-string-parsing-without-exceptions-std-from",
    "description": "Use high-performance `std::from_chars` (C++17) to parse integer without exceptions.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Parse '12345'",
        "output": "Parsed: 12345 (std::errc::success)",
        "explanation": "Executes logic for Numeric String Parsing without Exceptions (std::from_chars)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Numeric String Parsing without Exceptions (std::from_chars)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Numeric String Parsing without Exceptions (std::from_chars)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Numeric String Parsing without Exceptions (std::from_chars)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:31Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000032",
    "book": "inputvalidation",
    "order_index": 32,
    "title": "#032 Floating Point Parsing with std::from_chars",
    "slug": "inputvalidation-032-floating-point-parsing-with-std-from-chars",
    "description": "Parse floating point number from char buffer using `std::from_chars`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Parse '3.14159'",
        "output": "Parsed float: 3.14159",
        "explanation": "Executes logic for Floating Point Parsing with std::from_chars."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Floating Point Parsing with std::from_chars\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Floating Point Parsing with std::from_chars\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Floating Point Parsing with std::from_chars\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:32Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000033",
    "book": "inputvalidation",
    "order_index": 33,
    "title": "#033 Command Line Argument Count and Option Validation",
    "slug": "inputvalidation-033-command-line-argument-count-and-option-validation",
    "description": "Validate `argc >= 2` and check known option flags (`-v`, `-h`, `-o`).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Args: ./app -o out.txt",
        "output": "Arguments valid: Option -o set with 'out.txt'",
        "explanation": "Executes logic for Command Line Argument Count and Option Validation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Command Line Argument Count and Option Validation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Command Line Argument Count and Option Validation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Command Line Argument Count and Option Validation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:33Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000034",
    "book": "inputvalidation",
    "order_index": 34,
    "title": "#034 Port Number Validation (1 to 65535)",
    "slug": "inputvalidation-034-port-number-validation-1-to-65535",
    "description": "Validate network TCP/UDP port number within valid 16-bit range.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Port 8080",
        "output": "Valid Port: 8080 (Non-privileged user port)",
        "explanation": "Executes logic for Port Number Validation (1 to 65535)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Port Number Validation (1 to 65535)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Port Number Validation (1 to 65535)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Port Number Validation (1 to 65535)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:34Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000035",
    "book": "inputvalidation",
    "order_index": 35,
    "title": "#035 Domain Name FQDN Validation",
    "slug": "inputvalidation-035-domain-name-fqdn-validation",
    "description": "Validate Fully Qualified Domain Name (labels <= 63 chars, valid TLD).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "sub.example.com",
        "output": "Valid Domain Name",
        "explanation": "Executes logic for Domain Name FQDN Validation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Domain Name FQDN Validation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Domain Name FQDN Validation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Domain Name FQDN Validation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:35Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000036",
    "book": "inputvalidation",
    "order_index": 36,
    "title": "#036 Social Security Number (SSN) Masking and Validation",
    "slug": "inputvalidation-036-social-security-number-ssn-masking-and-validation",
    "description": "Validate 9-digit SSN format `AAA-GG-SSSS` and display masked as `***-**-1234`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "123-45-6789",
        "output": "Valid SSN (Masked: ***-**-6789)",
        "explanation": "Executes logic for Social Security Number (SSN) Masking and Validation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Social Security Number (SSN) Masking and Validation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Social Security Number (SSN) Masking and Validation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Social Security Number (SSN) Masking and Validation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:36Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000037",
    "book": "inputvalidation",
    "order_index": 37,
    "title": "#037 ASCII Printable Character Range Validation",
    "slug": "inputvalidation-037-ascii-printable-character-range-validation",
    "description": "Verify all characters in string have ASCII codes between 32 and 126.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Text 'Hello 123!'",
        "output": "All characters are printable ASCII",
        "explanation": "Executes logic for ASCII Printable Character Range Validation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// ASCII Printable Character Range Validation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# ASCII Printable Character Range Validation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// ASCII Printable Character Range Validation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:37Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000038",
    "book": "inputvalidation",
    "order_index": 38,
    "title": "#038 Hexadecimal String Validation (0x prefix optional)",
    "slug": "inputvalidation-038-hexadecimal-string-validation-0x-prefix-optional",
    "description": "Validate hex string containing only 0-9, A-F, a-f.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "0x1A2B3C",
        "output": "Valid Hexadecimal Value: 1715004 decimal",
        "explanation": "Executes logic for Hexadecimal String Validation (0x prefix optional)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Hexadecimal String Validation (0x prefix optional)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Hexadecimal String Validation (0x prefix optional)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Hexadecimal String Validation (0x prefix optional)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:38Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000039",
    "book": "inputvalidation",
    "order_index": 39,
    "title": "#039 Binary String Validation (0s and 1s only)",
    "slug": "inputvalidation-039-binary-string-validation-0s-and-1s-only",
    "description": "Validate string consisting exclusively of '0' and '1' characters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "10110010",
        "output": "Valid Binary String (Decimal: 178)",
        "explanation": "Executes logic for Binary String Validation (0s and 1s only)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Binary String Validation (0s and 1s only)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Binary String Validation (0s and 1s only)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Binary String Validation (0s and 1s only)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:39Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000040",
    "book": "inputvalidation",
    "order_index": 40,
    "title": "#040 Single Character Menu Option Validation",
    "slug": "inputvalidation-040-single-character-menu-option-validation",
    "description": "Validate user single character menu input against allowed choices `[A, B, C, Q]`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Input 'B'",
        "output": "Valid Choice: Option B selected",
        "explanation": "Executes logic for Single Character Menu Option Validation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Single Character Menu Option Validation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Single Character Menu Option Validation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Single Character Menu Option Validation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:40Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000041",
    "book": "inputvalidation",
    "order_index": 41,
    "title": "#041 Minimum and Maximum String Length Validation",
    "slug": "inputvalidation-041-minimum-and-maximum-string-length-validation",
    "description": "Validate that username is between 3 and 20 characters long.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Username 'developer'",
        "output": "Length Valid: 9 characters (Allowed: 3-20)",
        "explanation": "Executes logic for Minimum and Maximum String Length Validation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Minimum and Maximum String Length Validation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Minimum and Maximum String Length Validation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Minimum and Maximum String Length Validation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:41Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000042",
    "book": "inputvalidation",
    "order_index": 42,
    "title": "#042 File Extension Whitelist Validation",
    "slug": "inputvalidation-042-file-extension-whitelist-validation",
    "description": "Verify uploaded filename extension against whitelist `['.jpg', '.png', '.pdf']`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Upload 'document.pdf'",
        "output": "Extension Allowed: .pdf",
        "explanation": "Executes logic for File Extension Whitelist Validation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// File Extension Whitelist Validation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File Extension Whitelist Validation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File Extension Whitelist Validation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:42Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000043",
    "book": "inputvalidation",
    "order_index": 43,
    "title": "#043 Integer Parity Validation (Odd vs Even)",
    "slug": "inputvalidation-043-integer-parity-validation-odd-vs-even",
    "description": "Validate requirement that entered number must be strictly even.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Input 14",
        "output": "Valid: 14 is an even integer",
        "explanation": "Executes logic for Integer Parity Validation (Odd vs Even)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Integer Parity Validation (Odd vs Even)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Integer Parity Validation (Odd vs Even)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Integer Parity Validation (Odd vs Even)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:43Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000044",
    "book": "inputvalidation",
    "order_index": 44,
    "title": "#044 Prime Number Input Validation",
    "slug": "inputvalidation-044-prime-number-input-validation",
    "description": "Verify whether user-entered integer is a valid prime number.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Input 17",
        "output": "Valid: 17 is a prime number",
        "explanation": "Executes logic for Prime Number Input Validation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Prime Number Input Validation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Prime Number Input Validation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Prime Number Input Validation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:44Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000045",
    "book": "inputvalidation",
    "order_index": 45,
    "title": "#045 Palindromic String Input Validation",
    "slug": "inputvalidation-045-palindromic-string-input-validation",
    "description": "Validate whether user-entered string reads identically forwards and backwards.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Input 'racecar'",
        "output": "Valid: 'racecar' is a palindrome",
        "explanation": "Executes logic for Palindromic String Input Validation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Palindromic String Input Validation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Palindromic String Input Validation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Palindromic String Input Validation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:45Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000046",
    "book": "inputvalidation",
    "order_index": 46,
    "title": "#046 Matrix Dimension Input Validation",
    "slug": "inputvalidation-046-matrix-dimension-input-validation",
    "description": "Ensure rows and columns are positive integers and within memory bounds (<= 1000).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Rows 3, Cols 3",
        "output": "Valid matrix dimensions: 3x3 (9 elements)",
        "explanation": "Executes logic for Matrix Dimension Input Validation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Matrix Dimension Input Validation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Matrix Dimension Input Validation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Matrix Dimension Input Validation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:46Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000047",
    "book": "inputvalidation",
    "order_index": 47,
    "title": "#047 Bank Account Number Format Validation",
    "slug": "inputvalidation-047-bank-account-number-format-validation",
    "description": "Validate 10-12 digit bank account number with non-zero leading digit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Account '1234567890'",
        "output": "Valid bank account number format",
        "explanation": "Executes logic for Bank Account Number Format Validation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Bank Account Number Format Validation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Bank Account Number Format Validation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Bank Account Number Format Validation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:47Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000048",
    "book": "inputvalidation",
    "order_index": 48,
    "title": "#048 Vehicle VIN Number Validation (17 alphanumeric chars excluding I, O, Q)",
    "slug": "inputvalidation-048-vehicle-vin-number-validation-17-alphanumeric-char",
    "description": "Validate standard 17-character VIN code format.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "1HGCR2F83HA123456",
        "output": "Valid 17-character VIN format",
        "explanation": "Executes logic for Vehicle VIN Number Validation (17 alphanumeric chars excluding I, O, Q)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vehicle VIN Number Validation (17 alphanumeric chars excluding I, O, Q)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vehicle VIN Number Validation (17 alphanumeric chars excluding I, O, Q)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vehicle VIN Number Validation (17 alphanumeric chars excluding I, O, Q)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:48Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000049",
    "book": "inputvalidation",
    "order_index": 49,
    "title": "#049 HTTP Header Key-Value Validation",
    "slug": "inputvalidation-049-http-header-key-value-validation",
    "description": "Validate header line `Content-Type: application/json` against RFC token rules.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Header line",
        "output": "Valid HTTP header format",
        "explanation": "Executes logic for HTTP Header Key-Value Validation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// HTTP Header Key-Value Validation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# HTTP Header Key-Value Validation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// HTTP Header Key-Value Validation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:49Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000050",
    "book": "inputvalidation",
    "order_index": 50,
    "title": "#050 Robust Multi-Field Form Validation Engine",
    "slug": "inputvalidation-050-robust-multi-field-form-validation-engine",
    "description": "Validate complete user registration form with name, email, age, password in one pass.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Form Data Submission",
        "output": "Form Validated: 4/4 fields passed all constraints",
        "explanation": "Executes logic for Robust Multi-Field Form Validation Engine."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Robust Multi-Field Form Validation Engine\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Robust Multi-Field Form Validation Engine\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Robust Multi-Field Form Validation Engine\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:50Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000051",
    "book": "inputvalidation",
    "order_index": 51,
    "title": "#051 Input Validation Problem 51",
    "slug": "inputvalidation-051-input-validation-problem-51",
    "description": "Implement input verification and sanitization filter #51 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 51 'DATA'",
        "output": "Validation filter #51 executed: Input data verified clean (Code: 51)",
        "explanation": "Executes logic for Input Validation Problem 51."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 51\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 51\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 51\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:51Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000052",
    "book": "inputvalidation",
    "order_index": 52,
    "title": "#052 Input Validation Problem 52",
    "slug": "inputvalidation-052-input-validation-problem-52",
    "description": "Implement input verification and sanitization filter #52 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 52 'DATA'",
        "output": "Validation filter #52 executed: Input data verified clean (Code: 52)",
        "explanation": "Executes logic for Input Validation Problem 52."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 52\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 52\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 52\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:52Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000053",
    "book": "inputvalidation",
    "order_index": 53,
    "title": "#053 Input Validation Problem 53",
    "slug": "inputvalidation-053-input-validation-problem-53",
    "description": "Implement input verification and sanitization filter #53 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 53 'DATA'",
        "output": "Validation filter #53 executed: Input data verified clean (Code: 53)",
        "explanation": "Executes logic for Input Validation Problem 53."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 53\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 53\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 53\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:53Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000054",
    "book": "inputvalidation",
    "order_index": 54,
    "title": "#054 Input Validation Problem 54",
    "slug": "inputvalidation-054-input-validation-problem-54",
    "description": "Implement input verification and sanitization filter #54 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 54 'DATA'",
        "output": "Validation filter #54 executed: Input data verified clean (Code: 54)",
        "explanation": "Executes logic for Input Validation Problem 54."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 54\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 54\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 54\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:54Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000055",
    "book": "inputvalidation",
    "order_index": 55,
    "title": "#055 Input Validation Problem 55",
    "slug": "inputvalidation-055-input-validation-problem-55",
    "description": "Implement input verification and sanitization filter #55 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 55 'DATA'",
        "output": "Validation filter #55 executed: Input data verified clean (Code: 55)",
        "explanation": "Executes logic for Input Validation Problem 55."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 55\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 55\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 55\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:55Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000056",
    "book": "inputvalidation",
    "order_index": 56,
    "title": "#056 Input Validation Problem 56",
    "slug": "inputvalidation-056-input-validation-problem-56",
    "description": "Implement input verification and sanitization filter #56 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 56 'DATA'",
        "output": "Validation filter #56 executed: Input data verified clean (Code: 56)",
        "explanation": "Executes logic for Input Validation Problem 56."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 56\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 56\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 56\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:56Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000057",
    "book": "inputvalidation",
    "order_index": 57,
    "title": "#057 Input Validation Problem 57",
    "slug": "inputvalidation-057-input-validation-problem-57",
    "description": "Implement input verification and sanitization filter #57 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 57 'DATA'",
        "output": "Validation filter #57 executed: Input data verified clean (Code: 57)",
        "explanation": "Executes logic for Input Validation Problem 57."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 57\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 57\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 57\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:57Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000058",
    "book": "inputvalidation",
    "order_index": 58,
    "title": "#058 Input Validation Problem 58",
    "slug": "inputvalidation-058-input-validation-problem-58",
    "description": "Implement input verification and sanitization filter #58 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 58 'DATA'",
        "output": "Validation filter #58 executed: Input data verified clean (Code: 58)",
        "explanation": "Executes logic for Input Validation Problem 58."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 58\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 58\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 58\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:58Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000059",
    "book": "inputvalidation",
    "order_index": 59,
    "title": "#059 Input Validation Problem 59",
    "slug": "inputvalidation-059-input-validation-problem-59",
    "description": "Implement input verification and sanitization filter #59 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 59 'DATA'",
        "output": "Validation filter #59 executed: Input data verified clean (Code: 59)",
        "explanation": "Executes logic for Input Validation Problem 59."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 59\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 59\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 59\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:59Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000060",
    "book": "inputvalidation",
    "order_index": 60,
    "title": "#060 Input Validation Problem 60",
    "slug": "inputvalidation-060-input-validation-problem-60",
    "description": "Implement input verification and sanitization filter #60 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 60 'DATA'",
        "output": "Validation filter #60 executed: Input data verified clean (Code: 60)",
        "explanation": "Executes logic for Input Validation Problem 60."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 60\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 60\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 60\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:00Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000061",
    "book": "inputvalidation",
    "order_index": 61,
    "title": "#061 Input Validation Problem 61",
    "slug": "inputvalidation-061-input-validation-problem-61",
    "description": "Implement input verification and sanitization filter #61 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 61 'DATA'",
        "output": "Validation filter #61 executed: Input data verified clean (Code: 61)",
        "explanation": "Executes logic for Input Validation Problem 61."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 61\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 61\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 61\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:01Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000062",
    "book": "inputvalidation",
    "order_index": 62,
    "title": "#062 Input Validation Problem 62",
    "slug": "inputvalidation-062-input-validation-problem-62",
    "description": "Implement input verification and sanitization filter #62 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 62 'DATA'",
        "output": "Validation filter #62 executed: Input data verified clean (Code: 62)",
        "explanation": "Executes logic for Input Validation Problem 62."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 62\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 62\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 62\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:02Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000063",
    "book": "inputvalidation",
    "order_index": 63,
    "title": "#063 Input Validation Problem 63",
    "slug": "inputvalidation-063-input-validation-problem-63",
    "description": "Implement input verification and sanitization filter #63 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 63 'DATA'",
        "output": "Validation filter #63 executed: Input data verified clean (Code: 63)",
        "explanation": "Executes logic for Input Validation Problem 63."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 63\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 63\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 63\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:03Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000064",
    "book": "inputvalidation",
    "order_index": 64,
    "title": "#064 Input Validation Problem 64",
    "slug": "inputvalidation-064-input-validation-problem-64",
    "description": "Implement input verification and sanitization filter #64 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 64 'DATA'",
        "output": "Validation filter #64 executed: Input data verified clean (Code: 64)",
        "explanation": "Executes logic for Input Validation Problem 64."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 64\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 64\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 64\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:04Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000065",
    "book": "inputvalidation",
    "order_index": 65,
    "title": "#065 Input Validation Problem 65",
    "slug": "inputvalidation-065-input-validation-problem-65",
    "description": "Implement input verification and sanitization filter #65 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 65 'DATA'",
        "output": "Validation filter #65 executed: Input data verified clean (Code: 65)",
        "explanation": "Executes logic for Input Validation Problem 65."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 65\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 65\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 65\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:05Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000066",
    "book": "inputvalidation",
    "order_index": 66,
    "title": "#066 Input Validation Problem 66",
    "slug": "inputvalidation-066-input-validation-problem-66",
    "description": "Implement input verification and sanitization filter #66 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 66 'DATA'",
        "output": "Validation filter #66 executed: Input data verified clean (Code: 66)",
        "explanation": "Executes logic for Input Validation Problem 66."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 66\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 66\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 66\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:06Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000067",
    "book": "inputvalidation",
    "order_index": 67,
    "title": "#067 Input Validation Problem 67",
    "slug": "inputvalidation-067-input-validation-problem-67",
    "description": "Implement input verification and sanitization filter #67 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 67 'DATA'",
        "output": "Validation filter #67 executed: Input data verified clean (Code: 67)",
        "explanation": "Executes logic for Input Validation Problem 67."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 67\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 67\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 67\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:07Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000068",
    "book": "inputvalidation",
    "order_index": 68,
    "title": "#068 Input Validation Problem 68",
    "slug": "inputvalidation-068-input-validation-problem-68",
    "description": "Implement input verification and sanitization filter #68 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 68 'DATA'",
        "output": "Validation filter #68 executed: Input data verified clean (Code: 68)",
        "explanation": "Executes logic for Input Validation Problem 68."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 68\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 68\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 68\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:08Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000069",
    "book": "inputvalidation",
    "order_index": 69,
    "title": "#069 Input Validation Problem 69",
    "slug": "inputvalidation-069-input-validation-problem-69",
    "description": "Implement input verification and sanitization filter #69 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 69 'DATA'",
        "output": "Validation filter #69 executed: Input data verified clean (Code: 69)",
        "explanation": "Executes logic for Input Validation Problem 69."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 69\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 69\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 69\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:09Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000070",
    "book": "inputvalidation",
    "order_index": 70,
    "title": "#070 Input Validation Problem 70",
    "slug": "inputvalidation-070-input-validation-problem-70",
    "description": "Implement input verification and sanitization filter #70 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 70 'DATA'",
        "output": "Validation filter #70 executed: Input data verified clean (Code: 70)",
        "explanation": "Executes logic for Input Validation Problem 70."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 70\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 70\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 70\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:10Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000071",
    "book": "inputvalidation",
    "order_index": 71,
    "title": "#071 Input Validation Problem 71",
    "slug": "inputvalidation-071-input-validation-problem-71",
    "description": "Implement input verification and sanitization filter #71 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 71 'DATA'",
        "output": "Validation filter #71 executed: Input data verified clean (Code: 71)",
        "explanation": "Executes logic for Input Validation Problem 71."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 71\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 71\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 71\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:11Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000072",
    "book": "inputvalidation",
    "order_index": 72,
    "title": "#072 Input Validation Problem 72",
    "slug": "inputvalidation-072-input-validation-problem-72",
    "description": "Implement input verification and sanitization filter #72 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 72 'DATA'",
        "output": "Validation filter #72 executed: Input data verified clean (Code: 72)",
        "explanation": "Executes logic for Input Validation Problem 72."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 72\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 72\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 72\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:12Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000073",
    "book": "inputvalidation",
    "order_index": 73,
    "title": "#073 Input Validation Problem 73",
    "slug": "inputvalidation-073-input-validation-problem-73",
    "description": "Implement input verification and sanitization filter #73 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 73 'DATA'",
        "output": "Validation filter #73 executed: Input data verified clean (Code: 73)",
        "explanation": "Executes logic for Input Validation Problem 73."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 73\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 73\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 73\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:13Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000074",
    "book": "inputvalidation",
    "order_index": 74,
    "title": "#074 Input Validation Problem 74",
    "slug": "inputvalidation-074-input-validation-problem-74",
    "description": "Implement input verification and sanitization filter #74 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 74 'DATA'",
        "output": "Validation filter #74 executed: Input data verified clean (Code: 74)",
        "explanation": "Executes logic for Input Validation Problem 74."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 74\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 74\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 74\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:14Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000075",
    "book": "inputvalidation",
    "order_index": 75,
    "title": "#075 Input Validation Problem 75",
    "slug": "inputvalidation-075-input-validation-problem-75",
    "description": "Implement input verification and sanitization filter #75 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 75 'DATA'",
        "output": "Validation filter #75 executed: Input data verified clean (Code: 75)",
        "explanation": "Executes logic for Input Validation Problem 75."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 75\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 75\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 75\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:15Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000076",
    "book": "inputvalidation",
    "order_index": 76,
    "title": "#076 Input Validation Problem 76",
    "slug": "inputvalidation-076-input-validation-problem-76",
    "description": "Implement input verification and sanitization filter #76 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 76 'DATA'",
        "output": "Validation filter #76 executed: Input data verified clean (Code: 76)",
        "explanation": "Executes logic for Input Validation Problem 76."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 76\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 76\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 76\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:16Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000077",
    "book": "inputvalidation",
    "order_index": 77,
    "title": "#077 Input Validation Problem 77",
    "slug": "inputvalidation-077-input-validation-problem-77",
    "description": "Implement input verification and sanitization filter #77 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 77 'DATA'",
        "output": "Validation filter #77 executed: Input data verified clean (Code: 77)",
        "explanation": "Executes logic for Input Validation Problem 77."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 77\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 77\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 77\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:17Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000078",
    "book": "inputvalidation",
    "order_index": 78,
    "title": "#078 Input Validation Problem 78",
    "slug": "inputvalidation-078-input-validation-problem-78",
    "description": "Implement input verification and sanitization filter #78 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 78 'DATA'",
        "output": "Validation filter #78 executed: Input data verified clean (Code: 78)",
        "explanation": "Executes logic for Input Validation Problem 78."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 78\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 78\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 78\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:18Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000079",
    "book": "inputvalidation",
    "order_index": 79,
    "title": "#079 Input Validation Problem 79",
    "slug": "inputvalidation-079-input-validation-problem-79",
    "description": "Implement input verification and sanitization filter #79 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 79 'DATA'",
        "output": "Validation filter #79 executed: Input data verified clean (Code: 79)",
        "explanation": "Executes logic for Input Validation Problem 79."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 79\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 79\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 79\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:19Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000080",
    "book": "inputvalidation",
    "order_index": 80,
    "title": "#080 Input Validation Problem 80",
    "slug": "inputvalidation-080-input-validation-problem-80",
    "description": "Implement input verification and sanitization filter #80 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 80 'DATA'",
        "output": "Validation filter #80 executed: Input data verified clean (Code: 80)",
        "explanation": "Executes logic for Input Validation Problem 80."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 80\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 80\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 80\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:20Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000081",
    "book": "inputvalidation",
    "order_index": 81,
    "title": "#081 Input Validation Problem 81",
    "slug": "inputvalidation-081-input-validation-problem-81",
    "description": "Implement input verification and sanitization filter #81 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 81 'DATA'",
        "output": "Validation filter #81 executed: Input data verified clean (Code: 81)",
        "explanation": "Executes logic for Input Validation Problem 81."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 81\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 81\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 81\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:21Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000082",
    "book": "inputvalidation",
    "order_index": 82,
    "title": "#082 Input Validation Problem 82",
    "slug": "inputvalidation-082-input-validation-problem-82",
    "description": "Implement input verification and sanitization filter #82 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 82 'DATA'",
        "output": "Validation filter #82 executed: Input data verified clean (Code: 82)",
        "explanation": "Executes logic for Input Validation Problem 82."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 82\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 82\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 82\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:22Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000083",
    "book": "inputvalidation",
    "order_index": 83,
    "title": "#083 Input Validation Problem 83",
    "slug": "inputvalidation-083-input-validation-problem-83",
    "description": "Implement input verification and sanitization filter #83 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 83 'DATA'",
        "output": "Validation filter #83 executed: Input data verified clean (Code: 83)",
        "explanation": "Executes logic for Input Validation Problem 83."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 83\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 83\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 83\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:23Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000084",
    "book": "inputvalidation",
    "order_index": 84,
    "title": "#084 Input Validation Problem 84",
    "slug": "inputvalidation-084-input-validation-problem-84",
    "description": "Implement input verification and sanitization filter #84 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 84 'DATA'",
        "output": "Validation filter #84 executed: Input data verified clean (Code: 84)",
        "explanation": "Executes logic for Input Validation Problem 84."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 84\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 84\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 84\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:24Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000085",
    "book": "inputvalidation",
    "order_index": 85,
    "title": "#085 Input Validation Problem 85",
    "slug": "inputvalidation-085-input-validation-problem-85",
    "description": "Implement input verification and sanitization filter #85 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 85 'DATA'",
        "output": "Validation filter #85 executed: Input data verified clean (Code: 85)",
        "explanation": "Executes logic for Input Validation Problem 85."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 85\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 85\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 85\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:25Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000086",
    "book": "inputvalidation",
    "order_index": 86,
    "title": "#086 Input Validation Problem 86",
    "slug": "inputvalidation-086-input-validation-problem-86",
    "description": "Implement input verification and sanitization filter #86 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 86 'DATA'",
        "output": "Validation filter #86 executed: Input data verified clean (Code: 86)",
        "explanation": "Executes logic for Input Validation Problem 86."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 86\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 86\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 86\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:26Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000087",
    "book": "inputvalidation",
    "order_index": 87,
    "title": "#087 Input Validation Problem 87",
    "slug": "inputvalidation-087-input-validation-problem-87",
    "description": "Implement input verification and sanitization filter #87 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 87 'DATA'",
        "output": "Validation filter #87 executed: Input data verified clean (Code: 87)",
        "explanation": "Executes logic for Input Validation Problem 87."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 87\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 87\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 87\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:27Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000088",
    "book": "inputvalidation",
    "order_index": 88,
    "title": "#088 Input Validation Problem 88",
    "slug": "inputvalidation-088-input-validation-problem-88",
    "description": "Implement input verification and sanitization filter #88 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 88 'DATA'",
        "output": "Validation filter #88 executed: Input data verified clean (Code: 88)",
        "explanation": "Executes logic for Input Validation Problem 88."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 88\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 88\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 88\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:28Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000089",
    "book": "inputvalidation",
    "order_index": 89,
    "title": "#089 Input Validation Problem 89",
    "slug": "inputvalidation-089-input-validation-problem-89",
    "description": "Implement input verification and sanitization filter #89 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 89 'DATA'",
        "output": "Validation filter #89 executed: Input data verified clean (Code: 89)",
        "explanation": "Executes logic for Input Validation Problem 89."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 89\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 89\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 89\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:29Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000090",
    "book": "inputvalidation",
    "order_index": 90,
    "title": "#090 Input Validation Problem 90",
    "slug": "inputvalidation-090-input-validation-problem-90",
    "description": "Implement input verification and sanitization filter #90 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 90 'DATA'",
        "output": "Validation filter #90 executed: Input data verified clean (Code: 90)",
        "explanation": "Executes logic for Input Validation Problem 90."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 90\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 90\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 90\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:30Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000091",
    "book": "inputvalidation",
    "order_index": 91,
    "title": "#091 Input Validation Problem 91",
    "slug": "inputvalidation-091-input-validation-problem-91",
    "description": "Implement input verification and sanitization filter #91 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 91 'DATA'",
        "output": "Validation filter #91 executed: Input data verified clean (Code: 91)",
        "explanation": "Executes logic for Input Validation Problem 91."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 91\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 91\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 91\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:31Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000092",
    "book": "inputvalidation",
    "order_index": 92,
    "title": "#092 Input Validation Problem 92",
    "slug": "inputvalidation-092-input-validation-problem-92",
    "description": "Implement input verification and sanitization filter #92 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 92 'DATA'",
        "output": "Validation filter #92 executed: Input data verified clean (Code: 92)",
        "explanation": "Executes logic for Input Validation Problem 92."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 92\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 92\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 92\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:32Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000093",
    "book": "inputvalidation",
    "order_index": 93,
    "title": "#093 Input Validation Problem 93",
    "slug": "inputvalidation-093-input-validation-problem-93",
    "description": "Implement input verification and sanitization filter #93 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 93 'DATA'",
        "output": "Validation filter #93 executed: Input data verified clean (Code: 93)",
        "explanation": "Executes logic for Input Validation Problem 93."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 93\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 93\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 93\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:33Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000094",
    "book": "inputvalidation",
    "order_index": 94,
    "title": "#094 Input Validation Problem 94",
    "slug": "inputvalidation-094-input-validation-problem-94",
    "description": "Implement input verification and sanitization filter #94 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 94 'DATA'",
        "output": "Validation filter #94 executed: Input data verified clean (Code: 94)",
        "explanation": "Executes logic for Input Validation Problem 94."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 94\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 94\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 94\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:34Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000095",
    "book": "inputvalidation",
    "order_index": 95,
    "title": "#095 Input Validation Problem 95",
    "slug": "inputvalidation-095-input-validation-problem-95",
    "description": "Implement input verification and sanitization filter #95 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 95 'DATA'",
        "output": "Validation filter #95 executed: Input data verified clean (Code: 95)",
        "explanation": "Executes logic for Input Validation Problem 95."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 95\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 95\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 95\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:35Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000096",
    "book": "inputvalidation",
    "order_index": 96,
    "title": "#096 Input Validation Problem 96",
    "slug": "inputvalidation-096-input-validation-problem-96",
    "description": "Implement input verification and sanitization filter #96 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 96 'DATA'",
        "output": "Validation filter #96 executed: Input data verified clean (Code: 96)",
        "explanation": "Executes logic for Input Validation Problem 96."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 96\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 96\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 96\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:36Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000097",
    "book": "inputvalidation",
    "order_index": 97,
    "title": "#097 Input Validation Problem 97",
    "slug": "inputvalidation-097-input-validation-problem-97",
    "description": "Implement input verification and sanitization filter #97 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 97 'DATA'",
        "output": "Validation filter #97 executed: Input data verified clean (Code: 97)",
        "explanation": "Executes logic for Input Validation Problem 97."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 97\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 97\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 97\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:37Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000098",
    "book": "inputvalidation",
    "order_index": 98,
    "title": "#098 Input Validation Problem 98",
    "slug": "inputvalidation-098-input-validation-problem-98",
    "description": "Implement input verification and sanitization filter #98 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 98 'DATA'",
        "output": "Validation filter #98 executed: Input data verified clean (Code: 98)",
        "explanation": "Executes logic for Input Validation Problem 98."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 98\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 98\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 98\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:38Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000099",
    "book": "inputvalidation",
    "order_index": 99,
    "title": "#099 Input Validation Problem 99",
    "slug": "inputvalidation-099-input-validation-problem-99",
    "description": "Implement input verification and sanitization filter #99 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 99 'DATA'",
        "output": "Validation filter #99 executed: Input data verified clean (Code: 99)",
        "explanation": "Executes logic for Input Validation Problem 99."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 99\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 99\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 99\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:39Z"
  },
  {
    "id": "00000000-0000-4000-6004-000000000100",
    "book": "inputvalidation",
    "order_index": 100,
    "title": "#100 Input Validation Problem 100",
    "slug": "inputvalidation-100-input-validation-problem-100",
    "description": "Implement input verification and sanitization filter #100 rejecting malformed, dangerous, or out-of-range data.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Input Validation & Sanitization",
    "tags": [
      "Input Validation",
      "cin.fail",
      "Regex",
      "Security",
      "Sanitization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VALIDATE_INPUT 100 'DATA'",
        "output": "Validation filter #100 executed: Input data verified clean (Code: 100)",
        "explanation": "Executes logic for Input Validation Problem 100."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Input Validation Problem 100\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Input Validation Problem 100\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Input Validation Problem 100\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:40Z"
  }
];
