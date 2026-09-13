import { Problem } from '../../types/problem';

export const CPP_DATE_PROBLEMS: Problem[] = [
  {
    "id": "00000000-0000-4000-8012-000000000001",
    "book": "cppdate",
    "order_index": 1,
    "title": "#001 Current System Time and Date via std::chrono",
    "slug": "cppdate-001-current-system-time-and-date-via-std-chrono",
    "description": "Retrieve current system clock time point and format as YYYY-MM-DD.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Get current date",
        "output": "Current Date: 2026-03-15",
        "explanation": "Executes logic for Current System Time and Date via std::chrono."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Current System Time and Date via std::chrono\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Current System Time and Date via std::chrono\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Current System Time and Date via std::chrono\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:01Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000002",
    "book": "cppdate",
    "order_index": 2,
    "title": "#002 Leap Year Checker Function",
    "slug": "cppdate-002-leap-year-checker-function",
    "description": "Determine whether a given year is a leap year (divisible by 4, not 100 unless divisible by 400).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Year 2024, Year 1900, Year 2000",
        "output": "2024: Leap, 1900: Not Leap, 2000: Leap",
        "explanation": "Executes logic for Leap Year Checker Function."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Leap Year Checker Function\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Leap Year Checker Function\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Leap Year Checker Function\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:02Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000003",
    "book": "cppdate",
    "order_index": 3,
    "title": "#003 Days in a Given Month and Year",
    "slug": "cppdate-003-days-in-a-given-month-and-year",
    "description": "Calculate total days in a month accounting for February in leap years.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Month 2, Year 2024",
        "output": "Days: 29",
        "explanation": "Executes logic for Days in a Given Month and Year."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Days in a Given Month and Year\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Days in a Given Month and Year\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Days in a Given Month and Year\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:03Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000004",
    "book": "cppdate",
    "order_index": 4,
    "title": "#004 Day of the Week Calculation (Zeller's Congruence)",
    "slug": "cppdate-004-day-of-the-week-calculation-zeller-s-congruence",
    "description": "Compute day of week (Monday-Sunday) for any calendar date using Zeller's formula.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "2026-03-15",
        "output": "Day of Week: Sunday",
        "explanation": "Executes logic for Day of the Week Calculation (Zeller's Congruence)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Day of the Week Calculation (Zeller's Congruence)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Day of the Week Calculation (Zeller's Congruence)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Day of the Week Calculation (Zeller's Congruence)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:04Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000005",
    "book": "cppdate",
    "order_index": 5,
    "title": "#005 Number of Days Between Two Dates",
    "slug": "cppdate-005-number-of-days-between-two-dates",
    "description": "Calculate total calendar days elapsed between date A and date B.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "2026-01-01 to 2026-03-15",
        "output": "Elapsed: 73 days",
        "explanation": "Executes logic for Number of Days Between Two Dates."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Number of Days Between Two Dates\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Number of Days Between Two Dates\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Number of Days Between Two Dates\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:05Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000006",
    "book": "cppdate",
    "order_index": 6,
    "title": "#006 Add N Days to a Date",
    "slug": "cppdate-006-add-n-days-to-a-date",
    "description": "Compute resulting calendar date after adding N days handling month/year rollovers.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "2026-02-25 + 10 days",
        "output": "Result: 2026-03-07",
        "explanation": "Executes logic for Add N Days to a Date."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Add N Days to a Date\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Add N Days to a Date\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Add N Days to a Date\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:06Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000007",
    "book": "cppdate",
    "order_index": 7,
    "title": "#007 Subtract N Days from a Date",
    "slug": "cppdate-007-subtract-n-days-from-a-date",
    "description": "Compute past date after subtracting N days.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "2026-03-05 - 10 days",
        "output": "Result: 2026-02-23",
        "explanation": "Executes logic for Subtract N Days from a Date."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Subtract N Days from a Date\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Subtract N Days from a Date\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Subtract N Days from a Date\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:07Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000008",
    "book": "cppdate",
    "order_index": 8,
    "title": "#008 Date Comparison (Earlier, Equal, Later)",
    "slug": "cppdate-008-date-comparison-earlier-equal-later",
    "description": "Compare two dates (d1, m1, y1) vs (d2, m2, y2) and return -1, 0, or 1.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "2026-03-15 vs 2026-04-01",
        "output": "2026-03-15 is earlier than 2026-04-01",
        "explanation": "Executes logic for Date Comparison (Earlier, Equal, Later)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date Comparison (Earlier, Equal, Later)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date Comparison (Earlier, Equal, Later)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date Comparison (Earlier, Equal, Later)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:08Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000009",
    "book": "cppdate",
    "order_index": 9,
    "title": "#009 Unix Epoch Timestamp to Human-Readable Date",
    "slug": "cppdate-009-unix-epoch-timestamp-to-human-readable-date",
    "description": "Convert seconds since Jan 1, 1970 (Epoch) into UTC date string.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Timestamp 1773532800",
        "output": "Converted UTC: 2026-03-15 00:00:00",
        "explanation": "Executes logic for Unix Epoch Timestamp to Human-Readable Date."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Unix Epoch Timestamp to Human-Readable Date\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Unix Epoch Timestamp to Human-Readable Date\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Unix Epoch Timestamp to Human-Readable Date\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:09Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000010",
    "book": "cppdate",
    "order_index": 10,
    "title": "#010 Human-Readable Date to Unix Epoch Timestamp",
    "slug": "cppdate-010-human-readable-date-to-unix-epoch-timestamp",
    "description": "Convert (year, month, day, hour, min, sec) into seconds since Epoch.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "2026-03-15 00:00:00",
        "output": "Epoch Timestamp: 1773532800",
        "explanation": "Executes logic for Human-Readable Date to Unix Epoch Timestamp."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Human-Readable Date to Unix Epoch Timestamp\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Human-Readable Date to Unix Epoch Timestamp\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Human-Readable Date to Unix Epoch Timestamp\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:10Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000011",
    "book": "cppdate",
    "order_index": 11,
    "title": "#011 Benchmarking Execution Time with std::chrono::high_resolution_clock",
    "slug": "cppdate-011-benchmarking-execution-time-with-std-chrono-high-r",
    "description": "Measure execution time of a sorting loop in microseconds.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Sort 10,000 ints",
        "output": "Elapsed: 850 microseconds",
        "explanation": "Executes logic for Benchmarking Execution Time with std::chrono::high_resolution_clock."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Benchmarking Execution Time with std::chrono::high_resolution_clock\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Benchmarking Execution Time with std::chrono::high_resolution_clock\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Benchmarking Execution Time with std::chrono::high_resolution_clock\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:11Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000012",
    "book": "cppdate",
    "order_index": 12,
    "title": "#012 Formatting Date with Custom Specifiers (std::put_time / strftime)",
    "slug": "cppdate-012-formatting-date-with-custom-specifiers-std-put-tim",
    "description": "Format date structure into '%A, %B %d, %Y' format.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "2026-03-15",
        "output": "Formatted: 'Sunday, March 15, 2026'",
        "explanation": "Executes logic for Formatting Date with Custom Specifiers (std::put_time / strftime)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Formatting Date with Custom Specifiers (std::put_time / strftime)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Formatting Date with Custom Specifiers (std::put_time / strftime)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Formatting Date with Custom Specifiers (std::put_time / strftime)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:12Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000013",
    "book": "cppdate",
    "order_index": 13,
    "title": "#013 Parsing Date String (YYYY-MM-DD) into Integer Components",
    "slug": "cppdate-013-parsing-date-string-yyyy-mm-dd-into-integer-compon",
    "description": "Extract year, month, and day integers from formatted date string.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "String '2026-11-28'",
        "output": "Year: 2026, Month: 11, Day: 28",
        "explanation": "Executes logic for Parsing Date String (YYYY-MM-DD) into Integer Components."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Parsing Date String (YYYY-MM-DD) into Integer Components\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parsing Date String (YYYY-MM-DD) into Integer Components\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parsing Date String (YYYY-MM-DD) into Integer Components\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:13Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000014",
    "book": "cppdate",
    "order_index": 14,
    "title": "#014 Validating Date Integrity (Invalid Date Detection)",
    "slug": "cppdate-014-validating-date-integrity-invalid-date-detection",
    "description": "Verify if given date combination (e.g. 31/04/2026 or 29/02/2023) is valid.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "31/04/2026",
        "output": "Invalid Date: April has only 30 days",
        "explanation": "Executes logic for Validating Date Integrity (Invalid Date Detection)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Validating Date Integrity (Invalid Date Detection)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Validating Date Integrity (Invalid Date Detection)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Validating Date Integrity (Invalid Date Detection)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:14Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000015",
    "book": "cppdate",
    "order_index": 15,
    "title": "#015 Age Calculator from Birthdate",
    "slug": "cppdate-015-age-calculator-from-birthdate",
    "description": "Calculate exact age in years, months, and days given birthdate and current date.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Birth: 2000-05-20, Current: 2026-03-15",
        "output": "Age: 25 years, 9 months, 23 days",
        "explanation": "Executes logic for Age Calculator from Birthdate."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Age Calculator from Birthdate\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Age Calculator from Birthdate\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Age Calculator from Birthdate\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:15Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000016",
    "book": "cppdate",
    "order_index": 16,
    "title": "#016 Time Duration Arithmetic with std::chrono::duration",
    "slug": "cppdate-016-time-duration-arithmetic-with-std-chrono-duration",
    "description": "Add 2 hours, 45 minutes, and 30 seconds using chrono duration objects.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "2h + 45m + 30s",
        "output": "Total Seconds: 9,930s",
        "explanation": "Executes logic for Time Duration Arithmetic with std::chrono::duration."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Time Duration Arithmetic with std::chrono::duration\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Time Duration Arithmetic with std::chrono::duration\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Time Duration Arithmetic with std::chrono::duration\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:16Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000017",
    "book": "cppdate",
    "order_index": 17,
    "title": "#017 Chrono Duration Unit Conversions (hours to milliseconds)",
    "slug": "cppdate-017-chrono-duration-unit-conversions-hours-to-millisec",
    "description": "Cast chrono::hours(3) to chrono::milliseconds using duration_cast.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "3 hours",
        "output": "Converted: 10,800,000 ms",
        "explanation": "Executes logic for Chrono Duration Unit Conversions (hours to milliseconds)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Chrono Duration Unit Conversions (hours to milliseconds)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Chrono Duration Unit Conversions (hours to milliseconds)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Chrono Duration Unit Conversions (hours to milliseconds)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:17Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000018",
    "book": "cppdate",
    "order_index": 18,
    "title": "#018 Day Number of the Year (Julian Day 1-366)",
    "slug": "cppdate-018-day-number-of-the-year-julian-day-1-366",
    "description": "Calculate the day index within the year (e.g. Feb 1 is Day 32).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "2026-03-01",
        "output": "Day of Year: 60 (out of 365)",
        "explanation": "Executes logic for Day Number of the Year (Julian Day 1-366)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Day Number of the Year (Julian Day 1-366)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Day Number of the Year (Julian Day 1-366)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Day Number of the Year (Julian Day 1-366)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:18Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000019",
    "book": "cppdate",
    "order_index": 19,
    "title": "#019 Week Number of the Year (ISO 8601)",
    "slug": "cppdate-019-week-number-of-the-year-iso-8601",
    "description": "Compute ISO week number (1-53) for a given date.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "2026-03-15",
        "output": "ISO Week: Week 11",
        "explanation": "Executes logic for Week Number of the Year (ISO 8601)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Week Number of the Year (ISO 8601)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Week Number of the Year (ISO 8601)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Week Number of the Year (ISO 8601)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:19Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000020",
    "book": "cppdate",
    "order_index": 20,
    "title": "#020 Countdown Timer to Target Date",
    "slug": "cppdate-020-countdown-timer-to-target-date",
    "description": "Compute remaining days, hours, minutes, and seconds until New Year.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Current: 2026-12-25",
        "output": "Countdown: 7 days, 0 hours remaining",
        "explanation": "Executes logic for Countdown Timer to Target Date."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Countdown Timer to Target Date\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Countdown Timer to Target Date\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Countdown Timer to Target Date\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:20Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000021",
    "book": "cppdate",
    "order_index": 21,
    "title": "#021 Next Occurrence of Friday the 13th",
    "slug": "cppdate-021-next-occurrence-of-friday-the-13th",
    "description": "Scan subsequent months to find next month where 13th falls on Friday.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "From 2026-01-01",
        "output": "Next Friday 13th: 2026-02-13",
        "explanation": "Executes logic for Next Occurrence of Friday the 13th."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Next Occurrence of Friday the 13th\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Next Occurrence of Friday the 13th\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Next Occurrence of Friday the 13th\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:21Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000022",
    "book": "cppdate",
    "order_index": 22,
    "title": "#022 Time Zone Offset Conversion (UTC to Local Time)",
    "slug": "cppdate-022-time-zone-offset-conversion-utc-to-local-time",
    "description": "Adjust UTC timestamp with timezone offset (+05:30 IST).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "UTC 12:00 + 05:30",
        "output": "Local Time (IST): 17:30",
        "explanation": "Executes logic for Time Zone Offset Conversion (UTC to Local Time)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Time Zone Offset Conversion (UTC to Local Time)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Time Zone Offset Conversion (UTC to Local Time)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Time Zone Offset Conversion (UTC to Local Time)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:22Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000023",
    "book": "cppdate",
    "order_index": 23,
    "title": "#023 Working Days (Business Days) Between Two Dates",
    "slug": "cppdate-023-working-days-business-days-between-two-dates",
    "description": "Count number of business days (Monday-Friday) excluding weekends.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "2026-03-01 to 2026-03-15",
        "output": "Business Days: 10 (4 weekend days excluded)",
        "explanation": "Executes logic for Working Days (Business Days) Between Two Dates."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Working Days (Business Days) Between Two Dates\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Working Days (Business Days) Between Two Dates\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Working Days (Business Days) Between Two Dates\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:23Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000024",
    "book": "cppdate",
    "order_index": 24,
    "title": "#024 Add N Working Days to a Date",
    "slug": "cppdate-024-add-n-working-days-to-a-date",
    "description": "Add business days to start date skipping Saturdays and Sundays.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Friday + 3 business days",
        "output": "Result: Wednesday next week",
        "explanation": "Executes logic for Add N Working Days to a Date."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Add N Working Days to a Date\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Add N Working Days to a Date\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Add N Working Days to a Date\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:24Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000025",
    "book": "cppdate",
    "order_index": 25,
    "title": "#025 Fiscal Quarter Calculation for a Date",
    "slug": "cppdate-025-fiscal-quarter-calculation-for-a-date",
    "description": "Determine corporate fiscal quarter (Q1, Q2, Q3, Q4) for any date.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "2026-08-15 (Calendar Year)",
        "output": "Quarter: Q3",
        "explanation": "Executes logic for Fiscal Quarter Calculation for a Date."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Fiscal Quarter Calculation for a Date\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Fiscal Quarter Calculation for a Date\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Fiscal Quarter Calculation for a Date\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:25Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000026",
    "book": "cppdate",
    "order_index": 26,
    "title": "#026 Solar Equinox and Solstice Approximation",
    "slug": "cppdate-026-solar-equinox-and-solstice-approximation",
    "description": "Determine season (Spring, Summer, Autumn, Winter) for Northern Hemisphere date.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "2026-07-10",
        "output": "Season: Summer",
        "explanation": "Executes logic for Solar Equinox and Solstice Approximation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Solar Equinox and Solstice Approximation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Solar Equinox and Solstice Approximation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Solar Equinox and Solstice Approximation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:26Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000027",
    "book": "cppdate",
    "order_index": 27,
    "title": "#027 Moon Phase Calculation from Date",
    "slug": "cppdate-027-moon-phase-calculation-from-date",
    "description": "Approximate lunar phase (New, First Quarter, Full, Last Quarter) based on synodic month.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "2026-03-15",
        "output": "Moon Phase: Waxing Crescent (~25% illuminated)",
        "explanation": "Executes logic for Moon Phase Calculation from Date."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Moon Phase Calculation from Date\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Moon Phase Calculation from Date\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Moon Phase Calculation from Date\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:27Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000028",
    "book": "cppdate",
    "order_index": 28,
    "title": "#028 Stopwatch Class with Lap Times via std::chrono",
    "slug": "cppdate-028-stopwatch-class-with-lap-times-via-std-chrono",
    "description": "Implement Stopwatch with start(), lap(), stop(), and getLaps().\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Lap 1: 1.2s, Lap 2: 1.5s",
        "output": "Total Elapsed: 2.7s across 2 laps",
        "explanation": "Executes logic for Stopwatch Class with Lap Times via std::chrono."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Stopwatch Class with Lap Times via std::chrono\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stopwatch Class with Lap Times via std::chrono\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stopwatch Class with Lap Times via std::chrono\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:28Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000029",
    "book": "cppdate",
    "order_index": 29,
    "title": "#029 Periodic Task Timer (Execute Every N Milliseconds)",
    "slug": "cppdate-029-periodic-task-timer-execute-every-n-milliseconds",
    "description": "Simulate timer triggering callback at fixed 100ms intervals.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Run 5 ticks at 100ms",
        "output": "Tick 1, Tick 2, Tick 3, Tick 4, Tick 5 executed",
        "explanation": "Executes logic for Periodic Task Timer (Execute Every N Milliseconds)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Periodic Task Timer (Execute Every N Milliseconds)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Periodic Task Timer (Execute Every N Milliseconds)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Periodic Task Timer (Execute Every N Milliseconds)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:29Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000030",
    "book": "cppdate",
    "order_index": 30,
    "title": "#030 Expiry Date Verification for Products / Certificates",
    "slug": "cppdate-030-expiry-date-verification-for-products-certificates",
    "description": "Check if SSL certificate or food item is expired given expiry date.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Expiry: 2026-01-01 vs Current: 2026-03-15",
        "output": "Status: EXPIRED (73 days ago)",
        "explanation": "Executes logic for Expiry Date Verification for Products / Certificates."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Expiry Date Verification for Products / Certificates\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Expiry Date Verification for Products / Certificates\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Expiry Date Verification for Products / Certificates\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:30Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000031",
    "book": "cppdate",
    "order_index": 31,
    "title": "#031 Date Range Overlap Detector",
    "slug": "cppdate-031-date-range-overlap-detector",
    "description": "Determine whether date range [StartA, EndA] overlaps with [StartB, EndB].\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[June 1-10] and [June 5-15]",
        "output": "Ranges overlap: true (June 5-10)",
        "explanation": "Executes logic for Date Range Overlap Detector."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date Range Overlap Detector\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date Range Overlap Detector\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date Range Overlap Detector\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:31Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000032",
    "book": "cppdate",
    "order_index": 32,
    "title": "#032 Monthly Calendar Grid Generator",
    "slug": "cppdate-032-monthly-calendar-grid-generator",
    "description": "Generate 2D matrix representing month calendar with day alignment.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "March 2026",
        "output": "Su Mo Tu We Th Fr Sa\n 1  2  3  4  5  6  7 ...",
        "explanation": "Executes logic for Monthly Calendar Grid Generator."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Monthly Calendar Grid Generator\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Monthly Calendar Grid Generator\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Monthly Calendar Grid Generator\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:32Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000033",
    "book": "cppdate",
    "order_index": 33,
    "title": "#033 Recurring Meeting Schedule Generator",
    "slug": "cppdate-033-recurring-meeting-schedule-generator",
    "description": "Generate dates for meeting recurring every 2nd Tuesday for 6 months.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Start 2026-01-01",
        "output": "Generated 6 meeting dates",
        "explanation": "Executes logic for Recurring Meeting Schedule Generator."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Recurring Meeting Schedule Generator\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Recurring Meeting Schedule Generator\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Recurring Meeting Schedule Generator\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:33Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000034",
    "book": "cppdate",
    "order_index": 34,
    "title": "#034 Sleep / Delay Accurate Timing with chrono::sleep_for",
    "slug": "cppdate-034-sleep-delay-accurate-timing-with-chrono-sleep-for",
    "description": "Demonstrate `std::this_thread::sleep_for(std::chrono::milliseconds(50))`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Sleep 50ms",
        "output": "Thread slept for ~50 ms accurately",
        "explanation": "Executes logic for Sleep / Delay Accurate Timing with chrono::sleep_for."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Sleep / Delay Accurate Timing with chrono::sleep_for\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sleep / Delay Accurate Timing with chrono::sleep_for\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sleep / Delay Accurate Timing with chrono::sleep_for\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:34Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000035",
    "book": "cppdate",
    "order_index": 35,
    "title": "#035 Rate Limit Window Timestamp Tracker",
    "slug": "cppdate-035-rate-limit-window-timestamp-tracker",
    "description": "Verify if timestamp falls within sliding 60-second rate limit window.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Timestamp delta: 45s",
        "output": "Inside 60s window: Request counted",
        "explanation": "Executes logic for Rate Limit Window Timestamp Tracker."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Rate Limit Window Timestamp Tracker\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Rate Limit Window Timestamp Tracker\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Rate Limit Window Timestamp Tracker\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:35Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000036",
    "book": "cppdate",
    "order_index": 36,
    "title": "#036 Clock In / Clock Out Shift Hours Calculator",
    "slug": "cppdate-036-clock-in-clock-out-shift-hours-calculator",
    "description": "Calculate total worked hours and overtime (>8 hrs) from shift punch logs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "In: 09:00, Out: 18:30",
        "output": "Total: 9.5 hrs (Regular: 8.0 hrs, Overtime: 1.5 hrs)",
        "explanation": "Executes logic for Clock In / Clock Out Shift Hours Calculator."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Clock In / Clock Out Shift Hours Calculator\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Clock In / Clock Out Shift Hours Calculator\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Clock In / Clock Out Shift Hours Calculator\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:36Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000037",
    "book": "cppdate",
    "order_index": 37,
    "title": "#037 Easter Sunday Date Calculation (Meeus/Jones Algorithm)",
    "slug": "cppdate-037-easter-sunday-date-calculation-meeus-jones-algorit",
    "description": "Compute exact date of Easter Sunday for any year using Butcher's algorithm.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Year 2026",
        "output": "Easter Sunday 2026: April 5",
        "explanation": "Executes logic for Easter Sunday Date Calculation (Meeus/Jones Algorithm)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Easter Sunday Date Calculation (Meeus/Jones Algorithm)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Easter Sunday Date Calculation (Meeus/Jones Algorithm)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Easter Sunday Date Calculation (Meeus/Jones Algorithm)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:37Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000038",
    "book": "cppdate",
    "order_index": 38,
    "title": "#038 Golden Hour and Daylight Length Approximation",
    "slug": "cppdate-038-golden-hour-and-daylight-length-approximation",
    "description": "Approximate sunrise, sunset, and daylight duration given latitude and day of year.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Latitude 40N, Day 80 (Equinox)",
        "output": "Daylight: ~12.0 hours (Sunrise: 06:00, Sunset: 18:00)",
        "explanation": "Executes logic for Golden Hour and Daylight Length Approximation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Golden Hour and Daylight Length Approximation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Golden Hour and Daylight Length Approximation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Golden Hour and Daylight Length Approximation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:38Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000039",
    "book": "cppdate",
    "order_index": 39,
    "title": "#039 Parking Lot Fee Calculator with Grace Period",
    "slug": "cppdate-039-parking-lot-fee-calculator-with-grace-period",
    "description": "Calculate parking fee: First 15 mins free, then $3/hr rounded up.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Parked for 2 hrs 10 mins",
        "output": "Fee: $9 (3 hours charged)",
        "explanation": "Executes logic for Parking Lot Fee Calculator with Grace Period."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Parking Lot Fee Calculator with Grace Period\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parking Lot Fee Calculator with Grace Period\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parking Lot Fee Calculator with Grace Period\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:39Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000040",
    "book": "cppdate",
    "order_index": 40,
    "title": "#040 Flight Duration Across Time Zones",
    "slug": "cppdate-040-flight-duration-across-time-zones",
    "description": "Calculate elapsed flight duration given departure time+zone and arrival time+zone.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Depart JFK 10:00 (UTC-5), Arrive LHR 22:00 (UTC+0)",
        "output": "Actual Flight Duration: 7 hours",
        "explanation": "Executes logic for Flight Duration Across Time Zones."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Flight Duration Across Time Zones\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Flight Duration Across Time Zones\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Flight Duration Across Time Zones\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:40Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000041",
    "book": "cppdate",
    "order_index": 41,
    "title": "#041 Subscription Billing Next Renewal Date",
    "slug": "cppdate-041-subscription-billing-next-renewal-date",
    "description": "Compute renewal date for monthly plan (handling Feb 28 and 31-day months).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Subscribed Jan 31 -> Next month",
        "output": "Next Renewal Date: Feb 28",
        "explanation": "Executes logic for Subscription Billing Next Renewal Date."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Subscription Billing Next Renewal Date\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Subscription Billing Next Renewal Date\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Subscription Billing Next Renewal Date\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:41Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000042",
    "book": "cppdate",
    "order_index": 42,
    "title": "#042 Battery Remaining Runtime from Drain Rate",
    "slug": "cppdate-042-battery-remaining-runtime-from-drain-rate",
    "description": "Estimate time remaining (hours:mins) given battery capacity and current draw.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Capacity: 3000mAh, Draw: 400mA",
        "output": "Time Remaining: 7 hours 30 mins",
        "explanation": "Executes logic for Battery Remaining Runtime from Drain Rate."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Battery Remaining Runtime from Drain Rate\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Battery Remaining Runtime from Drain Rate\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Battery Remaining Runtime from Drain Rate\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:42Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000043",
    "book": "cppdate",
    "order_index": 43,
    "title": "#043 Historical Date Offset Before Year 1970 (Pre-Epoch)",
    "slug": "cppdate-043-historical-date-offset-before-year-1970-pre-epoch",
    "description": "Handle dates prior to 1970 with negative epoch timestamps or custom date structs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Date: 1945-08-15",
        "output": "Handled historical date: August 15, 1945",
        "explanation": "Executes logic for Historical Date Offset Before Year 1970 (Pre-Epoch)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Historical Date Offset Before Year 1970 (Pre-Epoch)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Historical Date Offset Before Year 1970 (Pre-Epoch)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Historical Date Offset Before Year 1970 (Pre-Epoch)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:43Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000044",
    "book": "cppdate",
    "order_index": 44,
    "title": "#044 Biorhythm Cycle Calculation from Birthdate",
    "slug": "cppdate-044-biorhythm-cycle-calculation-from-birthdate",
    "description": "Compute physical (23d), emotional (28d), intellectual (33d) sine wave cycles.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Days lived: 10,000",
        "output": "Physical: +85%, Emotional: -42%, Intellectual: +98%",
        "explanation": "Executes logic for Biorhythm Cycle Calculation from Birthdate."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Biorhythm Cycle Calculation from Birthdate\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Biorhythm Cycle Calculation from Birthdate\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Biorhythm Cycle Calculation from Birthdate\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:44Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000045",
    "book": "cppdate",
    "order_index": 45,
    "title": "#045 Rental Car Late Return Penalty Calculation",
    "slug": "cppdate-045-rental-car-late-return-penalty-calculation",
    "description": "Calculate penalty fee based on hourly rate if returned past due timestamp.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Due: 14:00, Returned: 16:45 ($10/hr penalty)",
        "output": "Late by 2h 45m: Penalty = $30 (3 hrs)",
        "explanation": "Executes logic for Rental Car Late Return Penalty Calculation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Rental Car Late Return Penalty Calculation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Rental Car Late Return Penalty Calculation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Rental Car Late Return Penalty Calculation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:45Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000046",
    "book": "cppdate",
    "order_index": 46,
    "title": "#046 Sprint Agile Calendar Working Days",
    "slug": "cppdate-046-sprint-agile-calendar-working-days",
    "description": "Compute total team story point capacity across a 2-week agile sprint.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "10 working days, 5 developers, 4 pts/day",
        "output": "Sprint Capacity: 200 story points",
        "explanation": "Executes logic for Sprint Agile Calendar Working Days."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Sprint Agile Calendar Working Days\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sprint Agile Calendar Working Days\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sprint Agile Calendar Working Days\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:46Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000047",
    "book": "cppdate",
    "order_index": 47,
    "title": "#047 Cron Expression Next Execution Time Simulation",
    "slug": "cppdate-047-cron-expression-next-execution-time-simulation",
    "description": "Parse simple cron '0 12 * * 1' (Every Monday at noon) and find next execution date.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "From 2026-03-15 (Sun)",
        "output": "Next run: 2026-03-16 12:00:00",
        "explanation": "Executes logic for Cron Expression Next Execution Time Simulation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Cron Expression Next Execution Time Simulation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Cron Expression Next Execution Time Simulation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Cron Expression Next Execution Time Simulation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:47Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000048",
    "book": "cppdate",
    "order_index": 48,
    "title": "#048 Julian Date to Gregorian Date Conversion",
    "slug": "cppdate-048-julian-date-to-gregorian-date-conversion",
    "description": "Convert astronomical Julian Day Number (e.g. JD 2461115.5) to calendar date.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "JD 2461115.5",
        "output": "Gregorian Date: 2026-03-15",
        "explanation": "Executes logic for Julian Date to Gregorian Date Conversion."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Julian Date to Gregorian Date Conversion\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Julian Date to Gregorian Date Conversion\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Julian Date to Gregorian Date Conversion\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:48Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000049",
    "book": "cppdate",
    "order_index": 49,
    "title": "#049 Daylight Saving Time (DST) Transition Detector",
    "slug": "cppdate-049-daylight-saving-time-dst-transition-detector",
    "description": "Determine if a given date falls within DST period for US/EU regions.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Date: 2026-06-15 vs 2026-12-15",
        "output": "June: DST Active (EDT) | Dec: Standard Time (EST)",
        "explanation": "Executes logic for Daylight Saving Time (DST) Transition Detector."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Daylight Saving Time (DST) Transition Detector\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Daylight Saving Time (DST) Transition Detector\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Daylight Saving Time (DST) Transition Detector\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:49Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000050",
    "book": "cppdate",
    "order_index": 50,
    "title": "#050 High-Precision Clock Jitter Measurement",
    "slug": "cppdate-050-high-precision-clock-jitter-measurement",
    "description": "Sample 1,000 consecutive clock reads and calculate standard deviation / jitter.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "1,000 clock reads",
        "output": "Clock Jitter: 12 nanoseconds std-dev",
        "explanation": "Executes logic for High-Precision Clock Jitter Measurement."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// High-Precision Clock Jitter Measurement\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# High-Precision Clock Jitter Measurement\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// High-Precision Clock Jitter Measurement\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:50Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000051",
    "book": "cppdate",
    "order_index": 51,
    "title": "#051 Date & Chrono Problem 51",
    "slug": "cppdate-051-date-chrono-problem-51",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #51.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 51 2026",
        "output": "Date computation #51 completed successfully (Result: 2026-03-24)",
        "explanation": "Executes logic for Date & Chrono Problem 51."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 51\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 51\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 51\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:51Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000052",
    "book": "cppdate",
    "order_index": 52,
    "title": "#052 Date & Chrono Problem 52",
    "slug": "cppdate-052-date-chrono-problem-52",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #52.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 52 2026",
        "output": "Date computation #52 completed successfully (Result: 2026-03-25)",
        "explanation": "Executes logic for Date & Chrono Problem 52."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 52\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 52\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 52\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:52Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000053",
    "book": "cppdate",
    "order_index": 53,
    "title": "#053 Date & Chrono Problem 53",
    "slug": "cppdate-053-date-chrono-problem-53",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #53.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 53 2026",
        "output": "Date computation #53 completed successfully (Result: 2026-03-26)",
        "explanation": "Executes logic for Date & Chrono Problem 53."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 53\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 53\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 53\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:53Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000054",
    "book": "cppdate",
    "order_index": 54,
    "title": "#054 Date & Chrono Problem 54",
    "slug": "cppdate-054-date-chrono-problem-54",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #54.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 54 2026",
        "output": "Date computation #54 completed successfully (Result: 2026-03-27)",
        "explanation": "Executes logic for Date & Chrono Problem 54."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 54\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 54\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 54\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:54Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000055",
    "book": "cppdate",
    "order_index": 55,
    "title": "#055 Date & Chrono Problem 55",
    "slug": "cppdate-055-date-chrono-problem-55",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #55.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 55 2026",
        "output": "Date computation #55 completed successfully (Result: 2026-03-28)",
        "explanation": "Executes logic for Date & Chrono Problem 55."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 55\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 55\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 55\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:55Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000056",
    "book": "cppdate",
    "order_index": 56,
    "title": "#056 Date & Chrono Problem 56",
    "slug": "cppdate-056-date-chrono-problem-56",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #56.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 56 2026",
        "output": "Date computation #56 completed successfully (Result: 2026-03-01)",
        "explanation": "Executes logic for Date & Chrono Problem 56."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 56\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 56\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 56\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:56Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000057",
    "book": "cppdate",
    "order_index": 57,
    "title": "#057 Date & Chrono Problem 57",
    "slug": "cppdate-057-date-chrono-problem-57",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #57.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 57 2026",
        "output": "Date computation #57 completed successfully (Result: 2026-03-02)",
        "explanation": "Executes logic for Date & Chrono Problem 57."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 57\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 57\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 57\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:57Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000058",
    "book": "cppdate",
    "order_index": 58,
    "title": "#058 Date & Chrono Problem 58",
    "slug": "cppdate-058-date-chrono-problem-58",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #58.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 58 2026",
        "output": "Date computation #58 completed successfully (Result: 2026-03-03)",
        "explanation": "Executes logic for Date & Chrono Problem 58."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 58\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 58\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 58\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:58Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000059",
    "book": "cppdate",
    "order_index": 59,
    "title": "#059 Date & Chrono Problem 59",
    "slug": "cppdate-059-date-chrono-problem-59",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #59.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 59 2026",
        "output": "Date computation #59 completed successfully (Result: 2026-03-04)",
        "explanation": "Executes logic for Date & Chrono Problem 59."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 59\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 59\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 59\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:59Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000060",
    "book": "cppdate",
    "order_index": 60,
    "title": "#060 Date & Chrono Problem 60",
    "slug": "cppdate-060-date-chrono-problem-60",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #60.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 60 2026",
        "output": "Date computation #60 completed successfully (Result: 2026-03-05)",
        "explanation": "Executes logic for Date & Chrono Problem 60."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 60\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 60\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 60\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:00Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000061",
    "book": "cppdate",
    "order_index": 61,
    "title": "#061 Date & Chrono Problem 61",
    "slug": "cppdate-061-date-chrono-problem-61",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #61.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 61 2026",
        "output": "Date computation #61 completed successfully (Result: 2026-03-06)",
        "explanation": "Executes logic for Date & Chrono Problem 61."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 61\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 61\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 61\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:01Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000062",
    "book": "cppdate",
    "order_index": 62,
    "title": "#062 Date & Chrono Problem 62",
    "slug": "cppdate-062-date-chrono-problem-62",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #62.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 62 2026",
        "output": "Date computation #62 completed successfully (Result: 2026-03-07)",
        "explanation": "Executes logic for Date & Chrono Problem 62."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 62\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 62\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 62\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:02Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000063",
    "book": "cppdate",
    "order_index": 63,
    "title": "#063 Date & Chrono Problem 63",
    "slug": "cppdate-063-date-chrono-problem-63",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #63.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 63 2026",
        "output": "Date computation #63 completed successfully (Result: 2026-03-08)",
        "explanation": "Executes logic for Date & Chrono Problem 63."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 63\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 63\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 63\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:03Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000064",
    "book": "cppdate",
    "order_index": 64,
    "title": "#064 Date & Chrono Problem 64",
    "slug": "cppdate-064-date-chrono-problem-64",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #64.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 64 2026",
        "output": "Date computation #64 completed successfully (Result: 2026-03-09)",
        "explanation": "Executes logic for Date & Chrono Problem 64."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 64\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 64\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 64\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:04Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000065",
    "book": "cppdate",
    "order_index": 65,
    "title": "#065 Date & Chrono Problem 65",
    "slug": "cppdate-065-date-chrono-problem-65",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #65.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 65 2026",
        "output": "Date computation #65 completed successfully (Result: 2026-03-10)",
        "explanation": "Executes logic for Date & Chrono Problem 65."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 65\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 65\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 65\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:05Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000066",
    "book": "cppdate",
    "order_index": 66,
    "title": "#066 Date & Chrono Problem 66",
    "slug": "cppdate-066-date-chrono-problem-66",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #66.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 66 2026",
        "output": "Date computation #66 completed successfully (Result: 2026-03-11)",
        "explanation": "Executes logic for Date & Chrono Problem 66."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 66\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 66\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 66\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:06Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000067",
    "book": "cppdate",
    "order_index": 67,
    "title": "#067 Date & Chrono Problem 67",
    "slug": "cppdate-067-date-chrono-problem-67",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #67.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 67 2026",
        "output": "Date computation #67 completed successfully (Result: 2026-03-12)",
        "explanation": "Executes logic for Date & Chrono Problem 67."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 67\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 67\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 67\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:07Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000068",
    "book": "cppdate",
    "order_index": 68,
    "title": "#068 Date & Chrono Problem 68",
    "slug": "cppdate-068-date-chrono-problem-68",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #68.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 68 2026",
        "output": "Date computation #68 completed successfully (Result: 2026-03-13)",
        "explanation": "Executes logic for Date & Chrono Problem 68."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 68\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 68\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 68\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:08Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000069",
    "book": "cppdate",
    "order_index": 69,
    "title": "#069 Date & Chrono Problem 69",
    "slug": "cppdate-069-date-chrono-problem-69",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #69.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 69 2026",
        "output": "Date computation #69 completed successfully (Result: 2026-03-14)",
        "explanation": "Executes logic for Date & Chrono Problem 69."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 69\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 69\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 69\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:09Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000070",
    "book": "cppdate",
    "order_index": 70,
    "title": "#070 Date & Chrono Problem 70",
    "slug": "cppdate-070-date-chrono-problem-70",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #70.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 70 2026",
        "output": "Date computation #70 completed successfully (Result: 2026-03-15)",
        "explanation": "Executes logic for Date & Chrono Problem 70."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 70\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 70\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 70\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:10Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000071",
    "book": "cppdate",
    "order_index": 71,
    "title": "#071 Date & Chrono Problem 71",
    "slug": "cppdate-071-date-chrono-problem-71",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #71.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 71 2026",
        "output": "Date computation #71 completed successfully (Result: 2026-03-16)",
        "explanation": "Executes logic for Date & Chrono Problem 71."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 71\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 71\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 71\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:11Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000072",
    "book": "cppdate",
    "order_index": 72,
    "title": "#072 Date & Chrono Problem 72",
    "slug": "cppdate-072-date-chrono-problem-72",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #72.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 72 2026",
        "output": "Date computation #72 completed successfully (Result: 2026-03-17)",
        "explanation": "Executes logic for Date & Chrono Problem 72."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 72\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 72\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 72\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:12Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000073",
    "book": "cppdate",
    "order_index": 73,
    "title": "#073 Date & Chrono Problem 73",
    "slug": "cppdate-073-date-chrono-problem-73",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #73.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 73 2026",
        "output": "Date computation #73 completed successfully (Result: 2026-03-18)",
        "explanation": "Executes logic for Date & Chrono Problem 73."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 73\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 73\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 73\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:13Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000074",
    "book": "cppdate",
    "order_index": 74,
    "title": "#074 Date & Chrono Problem 74",
    "slug": "cppdate-074-date-chrono-problem-74",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #74.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 74 2026",
        "output": "Date computation #74 completed successfully (Result: 2026-03-19)",
        "explanation": "Executes logic for Date & Chrono Problem 74."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 74\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 74\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 74\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:14Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000075",
    "book": "cppdate",
    "order_index": 75,
    "title": "#075 Date & Chrono Problem 75",
    "slug": "cppdate-075-date-chrono-problem-75",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #75.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 75 2026",
        "output": "Date computation #75 completed successfully (Result: 2026-03-20)",
        "explanation": "Executes logic for Date & Chrono Problem 75."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 75\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 75\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 75\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:15Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000076",
    "book": "cppdate",
    "order_index": 76,
    "title": "#076 Date & Chrono Problem 76",
    "slug": "cppdate-076-date-chrono-problem-76",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #76.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 76 2026",
        "output": "Date computation #76 completed successfully (Result: 2026-03-21)",
        "explanation": "Executes logic for Date & Chrono Problem 76."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 76\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 76\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 76\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:16Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000077",
    "book": "cppdate",
    "order_index": 77,
    "title": "#077 Date & Chrono Problem 77",
    "slug": "cppdate-077-date-chrono-problem-77",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #77.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 77 2026",
        "output": "Date computation #77 completed successfully (Result: 2026-03-22)",
        "explanation": "Executes logic for Date & Chrono Problem 77."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 77\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 77\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 77\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:17Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000078",
    "book": "cppdate",
    "order_index": 78,
    "title": "#078 Date & Chrono Problem 78",
    "slug": "cppdate-078-date-chrono-problem-78",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #78.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 78 2026",
        "output": "Date computation #78 completed successfully (Result: 2026-03-23)",
        "explanation": "Executes logic for Date & Chrono Problem 78."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 78\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 78\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 78\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:18Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000079",
    "book": "cppdate",
    "order_index": 79,
    "title": "#079 Date & Chrono Problem 79",
    "slug": "cppdate-079-date-chrono-problem-79",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #79.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 79 2026",
        "output": "Date computation #79 completed successfully (Result: 2026-03-24)",
        "explanation": "Executes logic for Date & Chrono Problem 79."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 79\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 79\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 79\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:19Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000080",
    "book": "cppdate",
    "order_index": 80,
    "title": "#080 Date & Chrono Problem 80",
    "slug": "cppdate-080-date-chrono-problem-80",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #80.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 80 2026",
        "output": "Date computation #80 completed successfully (Result: 2026-03-25)",
        "explanation": "Executes logic for Date & Chrono Problem 80."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 80\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 80\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 80\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:20Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000081",
    "book": "cppdate",
    "order_index": 81,
    "title": "#081 Date & Chrono Problem 81",
    "slug": "cppdate-081-date-chrono-problem-81",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #81.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 81 2026",
        "output": "Date computation #81 completed successfully (Result: 2026-03-26)",
        "explanation": "Executes logic for Date & Chrono Problem 81."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 81\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 81\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 81\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:21Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000082",
    "book": "cppdate",
    "order_index": 82,
    "title": "#082 Date & Chrono Problem 82",
    "slug": "cppdate-082-date-chrono-problem-82",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #82.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 82 2026",
        "output": "Date computation #82 completed successfully (Result: 2026-03-27)",
        "explanation": "Executes logic for Date & Chrono Problem 82."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 82\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 82\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 82\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:22Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000083",
    "book": "cppdate",
    "order_index": 83,
    "title": "#083 Date & Chrono Problem 83",
    "slug": "cppdate-083-date-chrono-problem-83",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #83.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 83 2026",
        "output": "Date computation #83 completed successfully (Result: 2026-03-28)",
        "explanation": "Executes logic for Date & Chrono Problem 83."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 83\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 83\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 83\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:23Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000084",
    "book": "cppdate",
    "order_index": 84,
    "title": "#084 Date & Chrono Problem 84",
    "slug": "cppdate-084-date-chrono-problem-84",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #84.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 84 2026",
        "output": "Date computation #84 completed successfully (Result: 2026-03-01)",
        "explanation": "Executes logic for Date & Chrono Problem 84."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 84\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 84\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 84\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:24Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000085",
    "book": "cppdate",
    "order_index": 85,
    "title": "#085 Date & Chrono Problem 85",
    "slug": "cppdate-085-date-chrono-problem-85",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #85.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 85 2026",
        "output": "Date computation #85 completed successfully (Result: 2026-03-02)",
        "explanation": "Executes logic for Date & Chrono Problem 85."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 85\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 85\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 85\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:25Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000086",
    "book": "cppdate",
    "order_index": 86,
    "title": "#086 Date & Chrono Problem 86",
    "slug": "cppdate-086-date-chrono-problem-86",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #86.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 86 2026",
        "output": "Date computation #86 completed successfully (Result: 2026-03-03)",
        "explanation": "Executes logic for Date & Chrono Problem 86."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 86\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 86\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 86\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:26Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000087",
    "book": "cppdate",
    "order_index": 87,
    "title": "#087 Date & Chrono Problem 87",
    "slug": "cppdate-087-date-chrono-problem-87",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #87.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 87 2026",
        "output": "Date computation #87 completed successfully (Result: 2026-03-04)",
        "explanation": "Executes logic for Date & Chrono Problem 87."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 87\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 87\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 87\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:27Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000088",
    "book": "cppdate",
    "order_index": 88,
    "title": "#088 Date & Chrono Problem 88",
    "slug": "cppdate-088-date-chrono-problem-88",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #88.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 88 2026",
        "output": "Date computation #88 completed successfully (Result: 2026-03-05)",
        "explanation": "Executes logic for Date & Chrono Problem 88."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 88\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 88\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 88\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:28Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000089",
    "book": "cppdate",
    "order_index": 89,
    "title": "#089 Date & Chrono Problem 89",
    "slug": "cppdate-089-date-chrono-problem-89",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #89.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 89 2026",
        "output": "Date computation #89 completed successfully (Result: 2026-03-06)",
        "explanation": "Executes logic for Date & Chrono Problem 89."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 89\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 89\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 89\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:29Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000090",
    "book": "cppdate",
    "order_index": 90,
    "title": "#090 Date & Chrono Problem 90",
    "slug": "cppdate-090-date-chrono-problem-90",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #90.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 90 2026",
        "output": "Date computation #90 completed successfully (Result: 2026-03-07)",
        "explanation": "Executes logic for Date & Chrono Problem 90."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 90\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 90\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 90\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:30Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000091",
    "book": "cppdate",
    "order_index": 91,
    "title": "#091 Date & Chrono Problem 91",
    "slug": "cppdate-091-date-chrono-problem-91",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #91.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 91 2026",
        "output": "Date computation #91 completed successfully (Result: 2026-03-08)",
        "explanation": "Executes logic for Date & Chrono Problem 91."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 91\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 91\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 91\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:31Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000092",
    "book": "cppdate",
    "order_index": 92,
    "title": "#092 Date & Chrono Problem 92",
    "slug": "cppdate-092-date-chrono-problem-92",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #92.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 92 2026",
        "output": "Date computation #92 completed successfully (Result: 2026-03-09)",
        "explanation": "Executes logic for Date & Chrono Problem 92."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 92\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 92\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 92\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:32Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000093",
    "book": "cppdate",
    "order_index": 93,
    "title": "#093 Date & Chrono Problem 93",
    "slug": "cppdate-093-date-chrono-problem-93",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #93.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 93 2026",
        "output": "Date computation #93 completed successfully (Result: 2026-03-10)",
        "explanation": "Executes logic for Date & Chrono Problem 93."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 93\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 93\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 93\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:33Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000094",
    "book": "cppdate",
    "order_index": 94,
    "title": "#094 Date & Chrono Problem 94",
    "slug": "cppdate-094-date-chrono-problem-94",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #94.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 94 2026",
        "output": "Date computation #94 completed successfully (Result: 2026-03-11)",
        "explanation": "Executes logic for Date & Chrono Problem 94."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 94\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 94\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 94\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:34Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000095",
    "book": "cppdate",
    "order_index": 95,
    "title": "#095 Date & Chrono Problem 95",
    "slug": "cppdate-095-date-chrono-problem-95",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #95.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 95 2026",
        "output": "Date computation #95 completed successfully (Result: 2026-03-12)",
        "explanation": "Executes logic for Date & Chrono Problem 95."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 95\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 95\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 95\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:35Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000096",
    "book": "cppdate",
    "order_index": 96,
    "title": "#096 Date & Chrono Problem 96",
    "slug": "cppdate-096-date-chrono-problem-96",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #96.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 96 2026",
        "output": "Date computation #96 completed successfully (Result: 2026-03-13)",
        "explanation": "Executes logic for Date & Chrono Problem 96."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 96\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 96\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 96\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:36Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000097",
    "book": "cppdate",
    "order_index": 97,
    "title": "#097 Date & Chrono Problem 97",
    "slug": "cppdate-097-date-chrono-problem-97",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #97.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 97 2026",
        "output": "Date computation #97 completed successfully (Result: 2026-03-14)",
        "explanation": "Executes logic for Date & Chrono Problem 97."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 97\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 97\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 97\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:37Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000098",
    "book": "cppdate",
    "order_index": 98,
    "title": "#098 Date & Chrono Problem 98",
    "slug": "cppdate-098-date-chrono-problem-98",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #98.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 98 2026",
        "output": "Date computation #98 completed successfully (Result: 2026-03-15)",
        "explanation": "Executes logic for Date & Chrono Problem 98."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 98\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 98\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 98\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:38Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000099",
    "book": "cppdate",
    "order_index": 99,
    "title": "#099 Date & Chrono Problem 99",
    "slug": "cppdate-099-date-chrono-problem-99",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #99.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 99 2026",
        "output": "Date computation #99 completed successfully (Result: 2026-03-16)",
        "explanation": "Executes logic for Date & Chrono Problem 99."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 99\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 99\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 99\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:39Z"
  },
  {
    "id": "00000000-0000-4000-8012-000000000100",
    "book": "cppdate",
    "order_index": 100,
    "title": "#100 Date & Chrono Problem 100",
    "slug": "cppdate-100-date-chrono-problem-100",
    "description": "Perform date calculation, timestamp manipulation, or chrono timing operation #100.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Date, Time & std::chrono",
    "tags": [
      "Date",
      "Time",
      "Chrono",
      "Timestamps",
      "Calendar"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DATE_PARAM 100 2026",
        "output": "Date computation #100 completed successfully (Result: 2026-03-17)",
        "explanation": "Executes logic for Date & Chrono Problem 100."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date & Chrono Problem 100\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date & Chrono Problem 100\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date & Chrono Problem 100\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:40Z"
  }
];
