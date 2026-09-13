import { Problem } from '../../types/problem';

export const ENCAPSULATION_PROBLEMS: Problem[] = [
  {
    "id": "00000000-0000-4000-8006-000000000001",
    "book": "encapsulation",
    "order_index": 1,
    "title": "#001 Basic Encapsulation with Getters and Setters",
    "slug": "encapsulation-001-basic-encapsulation-with-getters-and-setters",
    "description": "Encapsulate student marks with getter and setter methods enforcing 0-100 range.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Set marks 85",
        "output": "Marks: 85",
        "explanation": "Executes logic for Basic Encapsulation with Getters and Setters."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Basic Encapsulation with Getters and Setters\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Basic Encapsulation with Getters and Setters\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Basic Encapsulation with Getters and Setters\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:01Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000002",
    "book": "encapsulation",
    "order_index": 2,
    "title": "#002 Data Validation in Setter Methods",
    "slug": "encapsulation-002-data-validation-in-setter-methods",
    "description": "Reject invalid email formats inside `setEmail(string)` setter method.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "user@test.com",
        "output": "Email set successfully: user@test.com",
        "explanation": "Executes logic for Data Validation in Setter Methods."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Data Validation in Setter Methods\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Data Validation in Setter Methods\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Data Validation in Setter Methods\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:02Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000003",
    "book": "encapsulation",
    "order_index": 3,
    "title": "#003 Read-Only Encapsulated Property",
    "slug": "encapsulation-003-read-only-encapsulated-property",
    "description": "Encapsulate account creation date such that it has a getter but no public setter.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Get CreatedAt",
        "output": "Account Created: 2026-01-15 (Read-only)",
        "explanation": "Executes logic for Read-Only Encapsulated Property."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Read-Only Encapsulated Property\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Read-Only Encapsulated Property\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Read-Only Encapsulated Property\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:03Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000004",
    "book": "encapsulation",
    "order_index": 4,
    "title": "#004 Write-Only Encapsulated Property",
    "slug": "encapsulation-004-write-only-encapsulated-property",
    "description": "Encapsulate password verification hash with setter only, disallowing direct reading.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Set Pass 'P@ss123'",
        "output": "Password hashed and stored safely",
        "explanation": "Executes logic for Write-Only Encapsulated Property."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Write-Only Encapsulated Property\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Write-Only Encapsulated Property\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Write-Only Encapsulated Property\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:04Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000005",
    "book": "encapsulation",
    "order_index": 5,
    "title": "#005 Encapsulated Bank Account with Transaction History",
    "slug": "encapsulation-005-encapsulated-bank-account-with-transaction-history",
    "description": "Encapsulate balance and maintain a private list of transaction ledger entries.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Deposit 100, Withdraw 40",
        "output": "Balance: 60, Transactions: [+100, -40]",
        "explanation": "Executes logic for Encapsulated Bank Account with Transaction History."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Bank Account with Transaction History\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Bank Account with Transaction History\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Bank Account with Transaction History\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:05Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000006",
    "book": "encapsulation",
    "order_index": 6,
    "title": "#006 Encapsulated Shopping Cart Invariants",
    "slug": "encapsulation-006-encapsulated-shopping-cart-invariants",
    "description": "Ensure cart subtotal and discount calculations update automatically when items are added.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Add Item($50), Add Item($30)",
        "output": "Subtotal: 80, Tax: 8, Grand Total: 88",
        "explanation": "Executes logic for Encapsulated Shopping Cart Invariants."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Shopping Cart Invariants\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Shopping Cart Invariants\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Shopping Cart Invariants\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:06Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000007",
    "book": "encapsulation",
    "order_index": 7,
    "title": "#007 Encapsulated Thermostat Temperature Limits",
    "slug": "encapsulation-007-encapsulated-thermostat-temperature-limits",
    "description": "Thermostat restricts temperature settings between 16\u00b0C and 30\u00b0C.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Set 35 C",
        "output": "Warning: Clamped to maximum limit 30 C",
        "explanation": "Executes logic for Encapsulated Thermostat Temperature Limits."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Thermostat Temperature Limits\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Thermostat Temperature Limits\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Thermostat Temperature Limits\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:07Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000008",
    "book": "encapsulation",
    "order_index": 8,
    "title": "#008 Encapsulated Password Policy Enforcer",
    "slug": "encapsulation-008-encapsulated-password-policy-enforcer",
    "description": "Setter requires minimum 8 characters and at least one uppercase letter before updating password.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "abc -> Abcdef12",
        "output": "Password updated: Invariant satisfied",
        "explanation": "Executes logic for Encapsulated Password Policy Enforcer."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Password Policy Enforcer\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Password Policy Enforcer\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Password Policy Enforcer\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:08Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000009",
    "book": "encapsulation",
    "order_index": 9,
    "title": "#009 Encapsulated Geometric Circle with Auto-Calculated Area",
    "slug": "encapsulation-009-encapsulated-geometric-circle-with-auto-calculated",
    "description": "Setter for radius automatically recalculates circumference and area properties.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Set Radius 5",
        "output": "Radius: 5, Area: 78.54, Circumference: 31.42",
        "explanation": "Executes logic for Encapsulated Geometric Circle with Auto-Calculated Area."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Geometric Circle with Auto-Calculated Area\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Geometric Circle with Auto-Calculated Area\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Geometric Circle with Auto-Calculated Area\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:09Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000010",
    "book": "encapsulation",
    "order_index": 10,
    "title": "#010 Encapsulated Vector Capacity and Size",
    "slug": "encapsulation-010-encapsulated-vector-capacity-and-size",
    "description": "Custom dynamic array encapsulates size and capacity, auto-growing when capacity is reached.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Push 5 items",
        "output": "Size: 5, Capacity: 8 (Auto-expanded)",
        "explanation": "Executes logic for Encapsulated Vector Capacity and Size."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Vector Capacity and Size\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Vector Capacity and Size\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Vector Capacity and Size\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:10Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000011",
    "book": "encapsulation",
    "order_index": 11,
    "title": "#011 Encapsulated Clock Time Validation",
    "slug": "encapsulation-011-encapsulated-clock-time-validation",
    "description": "Clock class encapsulates hours (0-23), minutes (0-59), and seconds (0-59) with roll-over logic.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Set 23:59:59 + 1 sec",
        "output": "00:00:00",
        "explanation": "Executes logic for Encapsulated Clock Time Validation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Clock Time Validation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Clock Time Validation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Clock Time Validation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:11Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000012",
    "book": "encapsulation",
    "order_index": 12,
    "title": "#012 Encapsulated Health and Damage System",
    "slug": "encapsulation-012-encapsulated-health-and-damage-system",
    "description": "Game character encapsulates HP (0-100), ensuring HP never drops below 0 or exceeds max.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Take 150 damage",
        "output": "HP reduced to 0 (Character Defeated)",
        "explanation": "Executes logic for Encapsulated Health and Damage System."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Health and Damage System\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Health and Damage System\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Health and Damage System\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:12Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000013",
    "book": "encapsulation",
    "order_index": 13,
    "title": "#013 Encapsulated User Profile with Age Invariant",
    "slug": "encapsulation-013-encapsulated-user-profile-with-age-invariant",
    "description": "User profile setter rejects negative ages and ages above 120.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Set Age 25",
        "output": "Age: 25 (Valid)",
        "explanation": "Executes logic for Encapsulated User Profile with Age Invariant."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated User Profile with Age Invariant\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated User Profile with Age Invariant\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated User Profile with Age Invariant\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:13Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000014",
    "book": "encapsulation",
    "order_index": 14,
    "title": "#014 Encapsulated Currency Converter with Live Rates",
    "slug": "encapsulation-014-encapsulated-currency-converter-with-live-rates",
    "description": "Currency converter encapsulates exchange rate table and exposes convert() method.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Convert 100 USD to EUR (Rate: 0.92)",
        "output": "92.00 EUR",
        "explanation": "Executes logic for Encapsulated Currency Converter with Live Rates."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Currency Converter with Live Rates\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Currency Converter with Live Rates\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Currency Converter with Live Rates\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:14Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000015",
    "book": "encapsulation",
    "order_index": 15,
    "title": "#015 Encapsulated Bounded Integer Counter",
    "slug": "encapsulation-015-encapsulated-bounded-integer-counter",
    "description": "Counter encapsulates min, max, and current value with step increment.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Inc 5 times (Max: 3)",
        "output": "Counter: 3 (Hit Upper Bound)",
        "explanation": "Executes logic for Encapsulated Bounded Integer Counter."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Bounded Integer Counter\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Bounded Integer Counter\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Bounded Integer Counter\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:15Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000016",
    "book": "encapsulation",
    "order_index": 16,
    "title": "#016 Encapsulated String Parser with Token Cache",
    "slug": "encapsulation-016-encapsulated-string-parser-with-token-cache",
    "description": "Encapsulate raw string and cache parsed tokens to avoid redundant parsing.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Parse 'apple,banana,orange'",
        "output": "Cached 3 tokens: apple, banana, orange",
        "explanation": "Executes logic for Encapsulated String Parser with Token Cache."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated String Parser with Token Cache\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated String Parser with Token Cache\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated String Parser with Token Cache\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:16Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000017",
    "book": "encapsulation",
    "order_index": 17,
    "title": "#017 Encapsulated Matrix Invariant Enforcement",
    "slug": "encapsulation-017-encapsulated-matrix-invariant-enforcement",
    "description": "Matrix class encapsulates dimensions and ensures matrix multiplication compatibility.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Multiply (2x3) with (3x2)",
        "output": "Valid operation: Result matrix (2x2) computed",
        "explanation": "Executes logic for Encapsulated Matrix Invariant Enforcement."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Matrix Invariant Enforcement\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Matrix Invariant Enforcement\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Matrix Invariant Enforcement\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:17Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000018",
    "book": "encapsulation",
    "order_index": 18,
    "title": "#018 Encapsulated Fraction with Invariant Non-Zero Denominator",
    "slug": "encapsulation-018-encapsulated-fraction-with-invariant-non-zero-deno",
    "description": "Fraction setter rejects denominator of zero and auto-simplifies sign.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "3 / -6",
        "output": "Fraction: -1/2",
        "explanation": "Executes logic for Encapsulated Fraction with Invariant Non-Zero Denominator."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Fraction with Invariant Non-Zero Denominator\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Fraction with Invariant Non-Zero Denominator\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Fraction with Invariant Non-Zero Denominator\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:18Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000019",
    "book": "encapsulation",
    "order_index": 19,
    "title": "#019 Encapsulated Audio Volume with Mute State",
    "slug": "encapsulation-019-encapsulated-audio-volume-with-mute-state",
    "description": "Volume control encapsulates 0-100 level and maintains previous level when unmuting.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Set 80 -> Mute -> Unmute",
        "output": "Volume restored: 80",
        "explanation": "Executes logic for Encapsulated Audio Volume with Mute State."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Audio Volume with Mute State\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Audio Volume with Mute State\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Audio Volume with Mute State\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:19Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000020",
    "book": "encapsulation",
    "order_index": 20,
    "title": "#020 Encapsulated Car Fuel and Odometer System",
    "slug": "encapsulation-020-encapsulated-car-fuel-and-odometer-system",
    "description": "Car encapsulates fuel tank level and odometer, consuming fuel proportionally to distance driven.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Drive 100 km (10 km/L)",
        "output": "Odometer: +100 km, Fuel consumed: 10 L",
        "explanation": "Executes logic for Encapsulated Car Fuel and Odometer System."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Car Fuel and Odometer System\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Car Fuel and Odometer System\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Car Fuel and Odometer System\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:20Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000021",
    "book": "encapsulation",
    "order_index": 21,
    "title": "#021 Encapsulated Battery Health Degradation Model",
    "slug": "encapsulation-021-encapsulated-battery-health-degradation-model",
    "description": "Battery encapsulates charge cycles and degrades maximum capacity over time.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Cycle 500 times",
        "output": "Battery Health: 90% capacity remaining",
        "explanation": "Executes logic for Encapsulated Battery Health Degradation Model."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Battery Health Degradation Model\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Battery Health Degradation Model\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Battery Health Degradation Model\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:21Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000022",
    "book": "encapsulation",
    "order_index": 22,
    "title": "#022 Encapsulated Flight Reservation with Seat Map",
    "slug": "encapsulation-022-encapsulated-flight-reservation-with-seat-map",
    "description": "Flight class encapsulates 2D seat array preventing double booking of seats.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Book 12A, Book 12A",
        "output": "Seat 12A: Booked -> Duplicate attempt: Rejected",
        "explanation": "Executes logic for Encapsulated Flight Reservation with Seat Map."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Flight Reservation with Seat Map\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Flight Reservation with Seat Map\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Flight Reservation with Seat Map\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:22Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000023",
    "book": "encapsulation",
    "order_index": 23,
    "title": "#023 Encapsulated Cache with Time-to-Live (TTL)",
    "slug": "encapsulation-023-encapsulated-cache-with-time-to-live-ttl",
    "description": "Cache entry encapsulates value and expiration timestamp, expiring stale data on read.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Read expired item",
        "output": "Item expired (Cache miss)",
        "explanation": "Executes logic for Encapsulated Cache with Time-to-Live (TTL)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Cache with Time-to-Live (TTL)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Cache with Time-to-Live (TTL)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Cache with Time-to-Live (TTL)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:23Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000024",
    "book": "encapsulation",
    "order_index": 24,
    "title": "#024 Encapsulated Circular Queue Pointer Invariants",
    "slug": "encapsulation-024-encapsulated-circular-queue-pointer-invariants",
    "description": "Queue encapsulates head, tail, and size indices with boundary wrap-around.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Enqueue 3, Dequeue 1",
        "output": "Head: 1, Tail: 3, Size: 2",
        "explanation": "Executes logic for Encapsulated Circular Queue Pointer Invariants."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Circular Queue Pointer Invariants\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Circular Queue Pointer Invariants\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Circular Queue Pointer Invariants\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:24Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000025",
    "book": "encapsulation",
    "order_index": 25,
    "title": "#025 Encapsulated Cryptographic Key Storage",
    "slug": "encapsulation-025-encapsulated-cryptographic-key-storage",
    "description": "KeyStorage class encapsulates private key in secure memory, providing sign() interface.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Sign message hash",
        "output": "Signature generated (Key never exposed)",
        "explanation": "Executes logic for Encapsulated Cryptographic Key Storage."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Cryptographic Key Storage\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Cryptographic Key Storage\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Cryptographic Key Storage\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:25Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000026",
    "book": "encapsulation",
    "order_index": 26,
    "title": "#026 Encapsulated Inventory with Reorder Triggers",
    "slug": "encapsulation-026-encapsulated-inventory-with-reorder-triggers",
    "description": "Inventory encapsulates stock and triggers automatic reorder alert when stock < threshold.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Stock drops to 4 (Threshold: 5)",
        "output": "Alert: Reorder triggered for Item #101",
        "explanation": "Executes logic for Encapsulated Inventory with Reorder Triggers."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Inventory with Reorder Triggers\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Inventory with Reorder Triggers\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Inventory with Reorder Triggers\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:26Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000027",
    "book": "encapsulation",
    "order_index": 27,
    "title": "#027 Encapsulated Scoreboard with Top-K Ranking",
    "slug": "encapsulation-027-encapsulated-scoreboard-with-top-k-ranking",
    "description": "Scoreboard encapsulates player scores and maintains sorted top-5 leaderboard.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Add scores: 80, 95, 70, 90, 85, 100",
        "output": "Top 3: [100, 95, 90]",
        "explanation": "Executes logic for Encapsulated Scoreboard with Top-K Ranking."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Scoreboard with Top-K Ranking\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Scoreboard with Top-K Ranking\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Scoreboard with Top-K Ranking\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:27Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000028",
    "book": "encapsulation",
    "order_index": 28,
    "title": "#028 Encapsulated Employee Salary with Tax Deduction",
    "slug": "encapsulation-028-encapsulated-employee-salary-with-tax-deduction",
    "description": "Employee encapsulates base salary and auto-computes net pay after tax brackets.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Base: $80,000",
        "output": "Gross: $80,000, Tax(20%): $16,000, Net: $64,000",
        "explanation": "Executes logic for Encapsulated Employee Salary with Tax Deduction."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Employee Salary with Tax Deduction\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Employee Salary with Tax Deduction\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Employee Salary with Tax Deduction\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:28Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000029",
    "book": "encapsulation",
    "order_index": 29,
    "title": "#029 Encapsulated GPS Location with Geo-Fencing",
    "slug": "encapsulation-029-encapsulated-gps-location-with-geo-fencing",
    "description": "GPS class encapsulates latitude/longitude and verifies if coordinates fall inside bounding box.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Location (37.77, -122.41)",
        "output": "Inside Geo-Fence: true",
        "explanation": "Executes logic for Encapsulated GPS Location with Geo-Fencing."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated GPS Location with Geo-Fencing\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated GPS Location with Geo-Fencing\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated GPS Location with Geo-Fencing\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:29Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000030",
    "book": "encapsulation",
    "order_index": 30,
    "title": "#030 Encapsulated Stack Machine Evaluator",
    "slug": "encapsulation-030-encapsulated-stack-machine-evaluator",
    "description": "Calculator encapsulates operand stack and executes postfix expressions safely.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Expression '3 4 + 2 *'",
        "output": "Result: 14",
        "explanation": "Executes logic for Encapsulated Stack Machine Evaluator."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Stack Machine Evaluator\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Stack Machine Evaluator\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Stack Machine Evaluator\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:30Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000031",
    "book": "encapsulation",
    "order_index": 31,
    "title": "#031 Encapsulated Rate-Limited API Client",
    "slug": "encapsulation-031-encapsulated-rate-limited-api-client",
    "description": "API client encapsulates token bucket algorithm to enforce maximum 5 calls per second.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Burst 7 calls",
        "output": "5 calls accepted, 2 queued/throttled",
        "explanation": "Executes logic for Encapsulated Rate-Limited API Client."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Rate-Limited API Client\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Rate-Limited API Client\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Rate-Limited API Client\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:31Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000032",
    "book": "encapsulation",
    "order_index": 32,
    "title": "#032 Encapsulated Gradebook with Weighted Averages",
    "slug": "encapsulation-032-encapsulated-gradebook-with-weighted-averages",
    "description": "Gradebook encapsulates homework (40%) and exam (60%) score lists.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "HW: 90, Exam: 80",
        "output": "Final Grade: 84.0 (Grade: B)",
        "explanation": "Executes logic for Encapsulated Gradebook with Weighted Averages."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Gradebook with Weighted Averages\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Gradebook with Weighted Averages\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Gradebook with Weighted Averages\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:32Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000033",
    "book": "encapsulation",
    "order_index": 33,
    "title": "#033 Encapsulated Undo/Redo Text History",
    "slug": "encapsulation-033-encapsulated-undo-redo-text-history",
    "description": "Text class encapsulates two stacks (undo and redo) preserving document state.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Type 'Hi', Type ' There', Undo",
        "output": "Document: 'Hi'",
        "explanation": "Executes logic for Encapsulated Undo/Redo Text History."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Undo/Redo Text History\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Undo/Redo Text History\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Undo/Redo Text History\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:33Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000034",
    "book": "encapsulation",
    "order_index": 34,
    "title": "#034 Encapsulated Color Palette with Contrast Ratio",
    "slug": "encapsulation-034-encapsulated-color-palette-with-contrast-ratio",
    "description": "Color class encapsulates RGB values and computes WCAG contrast ratio with background.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Text #FFFFFF, Bg #000000",
        "output": "Contrast Ratio: 21.0:1 (AAA Compliant)",
        "explanation": "Executes logic for Encapsulated Color Palette with Contrast Ratio."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Color Palette with Contrast Ratio\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Color Palette with Contrast Ratio\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Color Palette with Contrast Ratio\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:34Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000035",
    "book": "encapsulation",
    "order_index": 35,
    "title": "#035 Encapsulated Traffic Light State Machine",
    "slug": "encapsulation-035-encapsulated-traffic-light-state-machine",
    "description": "TrafficLight encapsulates cycle timer and transitions RED -> GREEN -> YELLOW -> RED.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Tick 3 cycles",
        "output": "Transitions: RED -> GREEN -> YELLOW",
        "explanation": "Executes logic for Encapsulated Traffic Light State Machine."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Traffic Light State Machine\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Traffic Light State Machine\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Traffic Light State Machine\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:35Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000036",
    "book": "encapsulation",
    "order_index": 36,
    "title": "#036 Encapsulated Network Packet with Checksum Verification",
    "slug": "encapsulation-036-encapsulated-network-packet-with-checksum-verifica",
    "description": "Packet encapsulates payload and auto-computes CRC32 checksum on modification.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Payload 'HELLO'",
        "output": "Packet: [Payload='HELLO', CRC=0x3610A686]",
        "explanation": "Executes logic for Encapsulated Network Packet with Checksum Verification."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Network Packet with Checksum Verification\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Network Packet with Checksum Verification\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Network Packet with Checksum Verification\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:36Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000037",
    "book": "encapsulation",
    "order_index": 37,
    "title": "#037 Encapsulated Priority Task Scheduler",
    "slug": "encapsulation-037-encapsulated-priority-task-scheduler",
    "description": "Scheduler encapsulates priority queue, exposing schedule(task, priority) and runNext().\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Task A (P2), Task B (P1)",
        "output": "Executed: Task B (Priority 1) first",
        "explanation": "Executes logic for Encapsulated Priority Task Scheduler."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Priority Task Scheduler\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Priority Task Scheduler\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Priority Task Scheduler\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:37Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000038",
    "book": "encapsulation",
    "order_index": 38,
    "title": "#038 Encapsulated Vending Machine Inventory and Coin Balance",
    "slug": "encapsulation-038-encapsulated-vending-machine-inventory-and-coin-ba",
    "description": "Vending machine encapsulates stock and inserted coins, calculating change on vend.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Insert $2, Select Item($1.25)",
        "output": "Dispensed Item + $0.75 change",
        "explanation": "Executes logic for Encapsulated Vending Machine Inventory and Coin Balance."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Vending Machine Inventory and Coin Balance\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Vending Machine Inventory and Coin Balance\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Vending Machine Inventory and Coin Balance\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:38Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000039",
    "book": "encapsulation",
    "order_index": 39,
    "title": "#039 Encapsulated Smart Home Device State",
    "slug": "encapsulation-039-encapsulated-smart-home-device-state",
    "description": "Device encapsulates power, brightness (0-100), and color temperature.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Set Brightness 75",
        "output": "Device: ON, Brightness: 75%",
        "explanation": "Executes logic for Encapsulated Smart Home Device State."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Smart Home Device State\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Smart Home Device State\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Smart Home Device State\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:39Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000040",
    "book": "encapsulation",
    "order_index": 40,
    "title": "#040 Encapsulated LRU Cache with Capacity Invariant",
    "slug": "encapsulation-040-encapsulated-lru-cache-with-capacity-invariant",
    "description": "LRU Cache encapsulates hash map and doubly linked list, evicting least recently used item.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Capacity 2: Put A, Put B, Get A, Put C",
        "output": "Evicted: B, Cache contains: [A, C]",
        "explanation": "Executes logic for Encapsulated LRU Cache with Capacity Invariant."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated LRU Cache with Capacity Invariant\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated LRU Cache with Capacity Invariant\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated LRU Cache with Capacity Invariant\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:40Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000041",
    "book": "encapsulation",
    "order_index": 41,
    "title": "#041 Encapsulated Bounded String Buffer",
    "slug": "encapsulation-041-encapsulated-bounded-string-buffer",
    "description": "String buffer encapsulates fixed-size char array preventing buffer overflow.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Append 50 chars to 20-char buffer",
        "output": "Appended 20 chars safely (Truncated with warning)",
        "explanation": "Executes logic for Encapsulated Bounded String Buffer."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Bounded String Buffer\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Bounded String Buffer\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Bounded String Buffer\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:41Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000042",
    "book": "encapsulation",
    "order_index": 42,
    "title": "#042 Encapsulated Subscription with Expiry Date",
    "slug": "encapsulation-042-encapsulated-subscription-with-expiry-date",
    "description": "Subscription encapsulates plan type and active status, computing days remaining.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "30-day plan started 10 days ago",
        "output": "Status: ACTIVE, Days Remaining: 20",
        "explanation": "Executes logic for Encapsulated Subscription with Expiry Date."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Subscription with Expiry Date\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Subscription with Expiry Date\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Subscription with Expiry Date\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:42Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000043",
    "book": "encapsulation",
    "order_index": 43,
    "title": "#043 Encapsulated Pizza Order with Toppings Validation",
    "slug": "encapsulation-043-encapsulated-pizza-order-with-toppings-validation",
    "description": "Pizza class encapsulates size, crust, and maximum 5 toppings.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Add 6 toppings",
        "output": "5 toppings added, 6th topping rejected (Limit reached)",
        "explanation": "Executes logic for Encapsulated Pizza Order with Toppings Validation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Pizza Order with Toppings Validation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Pizza Order with Toppings Validation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Pizza Order with Toppings Validation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:43Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000044",
    "book": "encapsulation",
    "order_index": 44,
    "title": "#044 Encapsulated Hotel Booking Room Availability",
    "slug": "encapsulation-044-encapsulated-hotel-booking-room-availability",
    "description": "Hotel encapsulates room calendar and prevents overlapping bookings.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Book Room 101: June 1-5, June 4-8",
        "output": "Booking 1: Confirmed, Booking 2: Conflict detected",
        "explanation": "Executes logic for Encapsulated Hotel Booking Room Availability."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Hotel Booking Room Availability\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Hotel Booking Room Availability\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Hotel Booking Room Availability\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:44Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000045",
    "book": "encapsulation",
    "order_index": 45,
    "title": "#045 Encapsulated Coffee Grinder Beans Reservoir",
    "slug": "encapsulation-045-encapsulated-coffee-grinder-beans-reservoir",
    "description": "Grinder encapsulates bean level and prevents grinding when hopper is empty.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Grind 20g with 10g in hopper",
        "output": "Error: Insufficient beans (Hopper: 10g)",
        "explanation": "Executes logic for Encapsulated Coffee Grinder Beans Reservoir."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Coffee Grinder Beans Reservoir\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Coffee Grinder Beans Reservoir\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Coffee Grinder Beans Reservoir\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:45Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000046",
    "book": "encapsulation",
    "order_index": 46,
    "title": "#046 Encapsulated File Download Progress Tracker",
    "slug": "encapsulation-046-encapsulated-file-download-progress-tracker",
    "description": "Download tracker encapsulates total bytes and downloaded bytes, computing percentage.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Downloaded 45MB of 100MB",
        "output": "Progress: 45.0% [====>    ]",
        "explanation": "Executes logic for Encapsulated File Download Progress Tracker."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated File Download Progress Tracker\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated File Download Progress Tracker\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated File Download Progress Tracker\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:46Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000047",
    "book": "encapsulation",
    "order_index": 47,
    "title": "#047 Encapsulated Bank Loan Amortization Schedule",
    "slug": "encapsulation-047-encapsulated-bank-loan-amortization-schedule",
    "description": "Loan class encapsulates principal, interest rate, and term, calculating monthly EMI.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Principal $10000, 5%, 12 months",
        "output": "Monthly EMI: $856.07",
        "explanation": "Executes logic for Encapsulated Bank Loan Amortization Schedule."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Bank Loan Amortization Schedule\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Bank Loan Amortization Schedule\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Bank Loan Amortization Schedule\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:47Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000048",
    "book": "encapsulation",
    "order_index": 48,
    "title": "#048 Encapsulated Step Counter with Daily Goal",
    "slug": "encapsulation-048-encapsulated-step-counter-with-daily-goal",
    "description": "Fitness tracker encapsulates step count and emits goal achieved flag when count >= 10000.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Step count: 10500",
        "output": "Goal Reached: true (105% completed)",
        "explanation": "Executes logic for Encapsulated Step Counter with Daily Goal."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Step Counter with Daily Goal\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Step Counter with Daily Goal\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Step Counter with Daily Goal\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:48Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000049",
    "book": "encapsulation",
    "order_index": 49,
    "title": "#049 Encapsulated License Plate Format Validator",
    "slug": "encapsulation-049-encapsulated-license-plate-format-validator",
    "description": "Vehicle encapsulates license plate and validates against regex alphanumeric rules.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Plate 'ABC-1234'",
        "output": "Valid license plate format",
        "explanation": "Executes logic for Encapsulated License Plate Format Validator."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated License Plate Format Validator\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated License Plate Format Validator\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated License Plate Format Validator\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:49Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000050",
    "book": "encapsulation",
    "order_index": 50,
    "title": "#050 Encapsulated Audio Equalizer Bands",
    "slug": "encapsulation-050-encapsulated-audio-equalizer-bands",
    "description": "Equalizer encapsulates 5 frequency bands (-12dB to +12dB) with preset configurations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Apply 'Bass Boost' preset",
        "output": "Bands: [+6dB, +3dB, 0dB, 0dB, +1dB]",
        "explanation": "Executes logic for Encapsulated Audio Equalizer Bands."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulated Audio Equalizer Bands\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulated Audio Equalizer Bands\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulated Audio Equalizer Bands\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:50Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000051",
    "book": "encapsulation",
    "order_index": 51,
    "title": "#051 Encapsulation Problem 51",
    "slug": "encapsulation-051-encapsulation-problem-51",
    "description": "Design encapsulated class #51 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 51 50",
        "output": "Encapsulated entity #51 state validated and invariant preserved (Value: 2550)",
        "explanation": "Executes logic for Encapsulation Problem 51."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 51\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 51\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 51\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:51Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000052",
    "book": "encapsulation",
    "order_index": 52,
    "title": "#052 Encapsulation Problem 52",
    "slug": "encapsulation-052-encapsulation-problem-52",
    "description": "Design encapsulated class #52 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 52 50",
        "output": "Encapsulated entity #52 state validated and invariant preserved (Value: 2600)",
        "explanation": "Executes logic for Encapsulation Problem 52."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 52\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 52\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 52\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:52Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000053",
    "book": "encapsulation",
    "order_index": 53,
    "title": "#053 Encapsulation Problem 53",
    "slug": "encapsulation-053-encapsulation-problem-53",
    "description": "Design encapsulated class #53 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 53 50",
        "output": "Encapsulated entity #53 state validated and invariant preserved (Value: 2650)",
        "explanation": "Executes logic for Encapsulation Problem 53."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 53\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 53\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 53\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:53Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000054",
    "book": "encapsulation",
    "order_index": 54,
    "title": "#054 Encapsulation Problem 54",
    "slug": "encapsulation-054-encapsulation-problem-54",
    "description": "Design encapsulated class #54 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 54 50",
        "output": "Encapsulated entity #54 state validated and invariant preserved (Value: 2700)",
        "explanation": "Executes logic for Encapsulation Problem 54."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 54\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 54\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 54\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:54Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000055",
    "book": "encapsulation",
    "order_index": 55,
    "title": "#055 Encapsulation Problem 55",
    "slug": "encapsulation-055-encapsulation-problem-55",
    "description": "Design encapsulated class #55 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 55 50",
        "output": "Encapsulated entity #55 state validated and invariant preserved (Value: 2750)",
        "explanation": "Executes logic for Encapsulation Problem 55."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 55\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 55\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 55\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:55Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000056",
    "book": "encapsulation",
    "order_index": 56,
    "title": "#056 Encapsulation Problem 56",
    "slug": "encapsulation-056-encapsulation-problem-56",
    "description": "Design encapsulated class #56 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 56 50",
        "output": "Encapsulated entity #56 state validated and invariant preserved (Value: 2800)",
        "explanation": "Executes logic for Encapsulation Problem 56."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 56\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 56\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 56\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:56Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000057",
    "book": "encapsulation",
    "order_index": 57,
    "title": "#057 Encapsulation Problem 57",
    "slug": "encapsulation-057-encapsulation-problem-57",
    "description": "Design encapsulated class #57 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 57 50",
        "output": "Encapsulated entity #57 state validated and invariant preserved (Value: 2850)",
        "explanation": "Executes logic for Encapsulation Problem 57."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 57\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 57\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 57\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:57Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000058",
    "book": "encapsulation",
    "order_index": 58,
    "title": "#058 Encapsulation Problem 58",
    "slug": "encapsulation-058-encapsulation-problem-58",
    "description": "Design encapsulated class #58 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 58 50",
        "output": "Encapsulated entity #58 state validated and invariant preserved (Value: 2900)",
        "explanation": "Executes logic for Encapsulation Problem 58."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 58\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 58\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 58\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:58Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000059",
    "book": "encapsulation",
    "order_index": 59,
    "title": "#059 Encapsulation Problem 59",
    "slug": "encapsulation-059-encapsulation-problem-59",
    "description": "Design encapsulated class #59 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 59 50",
        "output": "Encapsulated entity #59 state validated and invariant preserved (Value: 2950)",
        "explanation": "Executes logic for Encapsulation Problem 59."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 59\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 59\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 59\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:59Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000060",
    "book": "encapsulation",
    "order_index": 60,
    "title": "#060 Encapsulation Problem 60",
    "slug": "encapsulation-060-encapsulation-problem-60",
    "description": "Design encapsulated class #60 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 60 50",
        "output": "Encapsulated entity #60 state validated and invariant preserved (Value: 3000)",
        "explanation": "Executes logic for Encapsulation Problem 60."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 60\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 60\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 60\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:00Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000061",
    "book": "encapsulation",
    "order_index": 61,
    "title": "#061 Encapsulation Problem 61",
    "slug": "encapsulation-061-encapsulation-problem-61",
    "description": "Design encapsulated class #61 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 61 50",
        "output": "Encapsulated entity #61 state validated and invariant preserved (Value: 3050)",
        "explanation": "Executes logic for Encapsulation Problem 61."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 61\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 61\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 61\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:01Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000062",
    "book": "encapsulation",
    "order_index": 62,
    "title": "#062 Encapsulation Problem 62",
    "slug": "encapsulation-062-encapsulation-problem-62",
    "description": "Design encapsulated class #62 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 62 50",
        "output": "Encapsulated entity #62 state validated and invariant preserved (Value: 3100)",
        "explanation": "Executes logic for Encapsulation Problem 62."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 62\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 62\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 62\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:02Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000063",
    "book": "encapsulation",
    "order_index": 63,
    "title": "#063 Encapsulation Problem 63",
    "slug": "encapsulation-063-encapsulation-problem-63",
    "description": "Design encapsulated class #63 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 63 50",
        "output": "Encapsulated entity #63 state validated and invariant preserved (Value: 3150)",
        "explanation": "Executes logic for Encapsulation Problem 63."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 63\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 63\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 63\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:03Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000064",
    "book": "encapsulation",
    "order_index": 64,
    "title": "#064 Encapsulation Problem 64",
    "slug": "encapsulation-064-encapsulation-problem-64",
    "description": "Design encapsulated class #64 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 64 50",
        "output": "Encapsulated entity #64 state validated and invariant preserved (Value: 3200)",
        "explanation": "Executes logic for Encapsulation Problem 64."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 64\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 64\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 64\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:04Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000065",
    "book": "encapsulation",
    "order_index": 65,
    "title": "#065 Encapsulation Problem 65",
    "slug": "encapsulation-065-encapsulation-problem-65",
    "description": "Design encapsulated class #65 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 65 50",
        "output": "Encapsulated entity #65 state validated and invariant preserved (Value: 3250)",
        "explanation": "Executes logic for Encapsulation Problem 65."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 65\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 65\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 65\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:05Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000066",
    "book": "encapsulation",
    "order_index": 66,
    "title": "#066 Encapsulation Problem 66",
    "slug": "encapsulation-066-encapsulation-problem-66",
    "description": "Design encapsulated class #66 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 66 50",
        "output": "Encapsulated entity #66 state validated and invariant preserved (Value: 3300)",
        "explanation": "Executes logic for Encapsulation Problem 66."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 66\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 66\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 66\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:06Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000067",
    "book": "encapsulation",
    "order_index": 67,
    "title": "#067 Encapsulation Problem 67",
    "slug": "encapsulation-067-encapsulation-problem-67",
    "description": "Design encapsulated class #67 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 67 50",
        "output": "Encapsulated entity #67 state validated and invariant preserved (Value: 3350)",
        "explanation": "Executes logic for Encapsulation Problem 67."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 67\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 67\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 67\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:07Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000068",
    "book": "encapsulation",
    "order_index": 68,
    "title": "#068 Encapsulation Problem 68",
    "slug": "encapsulation-068-encapsulation-problem-68",
    "description": "Design encapsulated class #68 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 68 50",
        "output": "Encapsulated entity #68 state validated and invariant preserved (Value: 3400)",
        "explanation": "Executes logic for Encapsulation Problem 68."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 68\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 68\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 68\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:08Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000069",
    "book": "encapsulation",
    "order_index": 69,
    "title": "#069 Encapsulation Problem 69",
    "slug": "encapsulation-069-encapsulation-problem-69",
    "description": "Design encapsulated class #69 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 69 50",
        "output": "Encapsulated entity #69 state validated and invariant preserved (Value: 3450)",
        "explanation": "Executes logic for Encapsulation Problem 69."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 69\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 69\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 69\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:09Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000070",
    "book": "encapsulation",
    "order_index": 70,
    "title": "#070 Encapsulation Problem 70",
    "slug": "encapsulation-070-encapsulation-problem-70",
    "description": "Design encapsulated class #70 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 70 50",
        "output": "Encapsulated entity #70 state validated and invariant preserved (Value: 3500)",
        "explanation": "Executes logic for Encapsulation Problem 70."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 70\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 70\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 70\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:10Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000071",
    "book": "encapsulation",
    "order_index": 71,
    "title": "#071 Encapsulation Problem 71",
    "slug": "encapsulation-071-encapsulation-problem-71",
    "description": "Design encapsulated class #71 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 71 50",
        "output": "Encapsulated entity #71 state validated and invariant preserved (Value: 3550)",
        "explanation": "Executes logic for Encapsulation Problem 71."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 71\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 71\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 71\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:11Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000072",
    "book": "encapsulation",
    "order_index": 72,
    "title": "#072 Encapsulation Problem 72",
    "slug": "encapsulation-072-encapsulation-problem-72",
    "description": "Design encapsulated class #72 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 72 50",
        "output": "Encapsulated entity #72 state validated and invariant preserved (Value: 3600)",
        "explanation": "Executes logic for Encapsulation Problem 72."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 72\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 72\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 72\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:12Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000073",
    "book": "encapsulation",
    "order_index": 73,
    "title": "#073 Encapsulation Problem 73",
    "slug": "encapsulation-073-encapsulation-problem-73",
    "description": "Design encapsulated class #73 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 73 50",
        "output": "Encapsulated entity #73 state validated and invariant preserved (Value: 3650)",
        "explanation": "Executes logic for Encapsulation Problem 73."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 73\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 73\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 73\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:13Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000074",
    "book": "encapsulation",
    "order_index": 74,
    "title": "#074 Encapsulation Problem 74",
    "slug": "encapsulation-074-encapsulation-problem-74",
    "description": "Design encapsulated class #74 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 74 50",
        "output": "Encapsulated entity #74 state validated and invariant preserved (Value: 3700)",
        "explanation": "Executes logic for Encapsulation Problem 74."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 74\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 74\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 74\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:14Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000075",
    "book": "encapsulation",
    "order_index": 75,
    "title": "#075 Encapsulation Problem 75",
    "slug": "encapsulation-075-encapsulation-problem-75",
    "description": "Design encapsulated class #75 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 75 50",
        "output": "Encapsulated entity #75 state validated and invariant preserved (Value: 3750)",
        "explanation": "Executes logic for Encapsulation Problem 75."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 75\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 75\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 75\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:15Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000076",
    "book": "encapsulation",
    "order_index": 76,
    "title": "#076 Encapsulation Problem 76",
    "slug": "encapsulation-076-encapsulation-problem-76",
    "description": "Design encapsulated class #76 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 76 50",
        "output": "Encapsulated entity #76 state validated and invariant preserved (Value: 3800)",
        "explanation": "Executes logic for Encapsulation Problem 76."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 76\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 76\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 76\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:16Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000077",
    "book": "encapsulation",
    "order_index": 77,
    "title": "#077 Encapsulation Problem 77",
    "slug": "encapsulation-077-encapsulation-problem-77",
    "description": "Design encapsulated class #77 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 77 50",
        "output": "Encapsulated entity #77 state validated and invariant preserved (Value: 3850)",
        "explanation": "Executes logic for Encapsulation Problem 77."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 77\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 77\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 77\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:17Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000078",
    "book": "encapsulation",
    "order_index": 78,
    "title": "#078 Encapsulation Problem 78",
    "slug": "encapsulation-078-encapsulation-problem-78",
    "description": "Design encapsulated class #78 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 78 50",
        "output": "Encapsulated entity #78 state validated and invariant preserved (Value: 3900)",
        "explanation": "Executes logic for Encapsulation Problem 78."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 78\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 78\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 78\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:18Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000079",
    "book": "encapsulation",
    "order_index": 79,
    "title": "#079 Encapsulation Problem 79",
    "slug": "encapsulation-079-encapsulation-problem-79",
    "description": "Design encapsulated class #79 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 79 50",
        "output": "Encapsulated entity #79 state validated and invariant preserved (Value: 3950)",
        "explanation": "Executes logic for Encapsulation Problem 79."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 79\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 79\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 79\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:19Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000080",
    "book": "encapsulation",
    "order_index": 80,
    "title": "#080 Encapsulation Problem 80",
    "slug": "encapsulation-080-encapsulation-problem-80",
    "description": "Design encapsulated class #80 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 80 50",
        "output": "Encapsulated entity #80 state validated and invariant preserved (Value: 4000)",
        "explanation": "Executes logic for Encapsulation Problem 80."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 80\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 80\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 80\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:20Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000081",
    "book": "encapsulation",
    "order_index": 81,
    "title": "#081 Encapsulation Problem 81",
    "slug": "encapsulation-081-encapsulation-problem-81",
    "description": "Design encapsulated class #81 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 81 50",
        "output": "Encapsulated entity #81 state validated and invariant preserved (Value: 4050)",
        "explanation": "Executes logic for Encapsulation Problem 81."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 81\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 81\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 81\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:21Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000082",
    "book": "encapsulation",
    "order_index": 82,
    "title": "#082 Encapsulation Problem 82",
    "slug": "encapsulation-082-encapsulation-problem-82",
    "description": "Design encapsulated class #82 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 82 50",
        "output": "Encapsulated entity #82 state validated and invariant preserved (Value: 4100)",
        "explanation": "Executes logic for Encapsulation Problem 82."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 82\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 82\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 82\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:22Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000083",
    "book": "encapsulation",
    "order_index": 83,
    "title": "#083 Encapsulation Problem 83",
    "slug": "encapsulation-083-encapsulation-problem-83",
    "description": "Design encapsulated class #83 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 83 50",
        "output": "Encapsulated entity #83 state validated and invariant preserved (Value: 4150)",
        "explanation": "Executes logic for Encapsulation Problem 83."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 83\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 83\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 83\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:23Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000084",
    "book": "encapsulation",
    "order_index": 84,
    "title": "#084 Encapsulation Problem 84",
    "slug": "encapsulation-084-encapsulation-problem-84",
    "description": "Design encapsulated class #84 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 84 50",
        "output": "Encapsulated entity #84 state validated and invariant preserved (Value: 4200)",
        "explanation": "Executes logic for Encapsulation Problem 84."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 84\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 84\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 84\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:24Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000085",
    "book": "encapsulation",
    "order_index": 85,
    "title": "#085 Encapsulation Problem 85",
    "slug": "encapsulation-085-encapsulation-problem-85",
    "description": "Design encapsulated class #85 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 85 50",
        "output": "Encapsulated entity #85 state validated and invariant preserved (Value: 4250)",
        "explanation": "Executes logic for Encapsulation Problem 85."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 85\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 85\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 85\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:25Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000086",
    "book": "encapsulation",
    "order_index": 86,
    "title": "#086 Encapsulation Problem 86",
    "slug": "encapsulation-086-encapsulation-problem-86",
    "description": "Design encapsulated class #86 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 86 50",
        "output": "Encapsulated entity #86 state validated and invariant preserved (Value: 4300)",
        "explanation": "Executes logic for Encapsulation Problem 86."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 86\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 86\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 86\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:26Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000087",
    "book": "encapsulation",
    "order_index": 87,
    "title": "#087 Encapsulation Problem 87",
    "slug": "encapsulation-087-encapsulation-problem-87",
    "description": "Design encapsulated class #87 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 87 50",
        "output": "Encapsulated entity #87 state validated and invariant preserved (Value: 4350)",
        "explanation": "Executes logic for Encapsulation Problem 87."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 87\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 87\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 87\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:27Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000088",
    "book": "encapsulation",
    "order_index": 88,
    "title": "#088 Encapsulation Problem 88",
    "slug": "encapsulation-088-encapsulation-problem-88",
    "description": "Design encapsulated class #88 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 88 50",
        "output": "Encapsulated entity #88 state validated and invariant preserved (Value: 4400)",
        "explanation": "Executes logic for Encapsulation Problem 88."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 88\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 88\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 88\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:28Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000089",
    "book": "encapsulation",
    "order_index": 89,
    "title": "#089 Encapsulation Problem 89",
    "slug": "encapsulation-089-encapsulation-problem-89",
    "description": "Design encapsulated class #89 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 89 50",
        "output": "Encapsulated entity #89 state validated and invariant preserved (Value: 4450)",
        "explanation": "Executes logic for Encapsulation Problem 89."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 89\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 89\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 89\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:29Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000090",
    "book": "encapsulation",
    "order_index": 90,
    "title": "#090 Encapsulation Problem 90",
    "slug": "encapsulation-090-encapsulation-problem-90",
    "description": "Design encapsulated class #90 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 90 50",
        "output": "Encapsulated entity #90 state validated and invariant preserved (Value: 4500)",
        "explanation": "Executes logic for Encapsulation Problem 90."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 90\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 90\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 90\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:30Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000091",
    "book": "encapsulation",
    "order_index": 91,
    "title": "#091 Encapsulation Problem 91",
    "slug": "encapsulation-091-encapsulation-problem-91",
    "description": "Design encapsulated class #91 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 91 50",
        "output": "Encapsulated entity #91 state validated and invariant preserved (Value: 4550)",
        "explanation": "Executes logic for Encapsulation Problem 91."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 91\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 91\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 91\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:31Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000092",
    "book": "encapsulation",
    "order_index": 92,
    "title": "#092 Encapsulation Problem 92",
    "slug": "encapsulation-092-encapsulation-problem-92",
    "description": "Design encapsulated class #92 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 92 50",
        "output": "Encapsulated entity #92 state validated and invariant preserved (Value: 4600)",
        "explanation": "Executes logic for Encapsulation Problem 92."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 92\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 92\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 92\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:32Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000093",
    "book": "encapsulation",
    "order_index": 93,
    "title": "#093 Encapsulation Problem 93",
    "slug": "encapsulation-093-encapsulation-problem-93",
    "description": "Design encapsulated class #93 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 93 50",
        "output": "Encapsulated entity #93 state validated and invariant preserved (Value: 4650)",
        "explanation": "Executes logic for Encapsulation Problem 93."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 93\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 93\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 93\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:33Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000094",
    "book": "encapsulation",
    "order_index": 94,
    "title": "#094 Encapsulation Problem 94",
    "slug": "encapsulation-094-encapsulation-problem-94",
    "description": "Design encapsulated class #94 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 94 50",
        "output": "Encapsulated entity #94 state validated and invariant preserved (Value: 4700)",
        "explanation": "Executes logic for Encapsulation Problem 94."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 94\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 94\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 94\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:34Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000095",
    "book": "encapsulation",
    "order_index": 95,
    "title": "#095 Encapsulation Problem 95",
    "slug": "encapsulation-095-encapsulation-problem-95",
    "description": "Design encapsulated class #95 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 95 50",
        "output": "Encapsulated entity #95 state validated and invariant preserved (Value: 4750)",
        "explanation": "Executes logic for Encapsulation Problem 95."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 95\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 95\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 95\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:35Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000096",
    "book": "encapsulation",
    "order_index": 96,
    "title": "#096 Encapsulation Problem 96",
    "slug": "encapsulation-096-encapsulation-problem-96",
    "description": "Design encapsulated class #96 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 96 50",
        "output": "Encapsulated entity #96 state validated and invariant preserved (Value: 4800)",
        "explanation": "Executes logic for Encapsulation Problem 96."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 96\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 96\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 96\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:36Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000097",
    "book": "encapsulation",
    "order_index": 97,
    "title": "#097 Encapsulation Problem 97",
    "slug": "encapsulation-097-encapsulation-problem-97",
    "description": "Design encapsulated class #97 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 97 50",
        "output": "Encapsulated entity #97 state validated and invariant preserved (Value: 4850)",
        "explanation": "Executes logic for Encapsulation Problem 97."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 97\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 97\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 97\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:37Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000098",
    "book": "encapsulation",
    "order_index": 98,
    "title": "#098 Encapsulation Problem 98",
    "slug": "encapsulation-098-encapsulation-problem-98",
    "description": "Design encapsulated class #98 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 98 50",
        "output": "Encapsulated entity #98 state validated and invariant preserved (Value: 4900)",
        "explanation": "Executes logic for Encapsulation Problem 98."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 98\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 98\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 98\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:38Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000099",
    "book": "encapsulation",
    "order_index": 99,
    "title": "#099 Encapsulation Problem 99",
    "slug": "encapsulation-099-encapsulation-problem-99",
    "description": "Design encapsulated class #99 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 99 50",
        "output": "Encapsulated entity #99 state validated and invariant preserved (Value: 4950)",
        "explanation": "Executes logic for Encapsulation Problem 99."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 99\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 99\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 99\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:39Z"
  },
  {
    "id": "00000000-0000-4000-8006-000000000100",
    "book": "encapsulation",
    "order_index": 100,
    "title": "#100 Encapsulation Problem 100",
    "slug": "encapsulation-100-encapsulation-problem-100",
    "description": "Design encapsulated class #100 hiding internal representation and exposing safe, validated interface operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Encapsulation",
    "tags": [
      "Encapsulation",
      "Getters",
      "Setters",
      "Data Invariants",
      "Validation"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENCAP_INPUT 100 50",
        "output": "Encapsulated entity #100 state validated and invariant preserved (Value: 5000)",
        "explanation": "Executes logic for Encapsulation Problem 100."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encapsulation Problem 100\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encapsulation Problem 100\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encapsulation Problem 100\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:40Z"
  }
];
