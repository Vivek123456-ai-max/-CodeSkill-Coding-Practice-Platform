import { Problem } from '../../types/problem';

export const CPP_DEBUGGING_PROBLEMS: Problem[] = [
  {
    "id": "00000000-0000-4000-6002-000000000001",
    "book": "cppdebugging",
    "order_index": 1,
    "title": "#001 Runtime Assertion with `assert()` Macro",
    "slug": "cppdebugging-001-runtime-assertion-with-assert-macro",
    "description": "Use `assert(condition)` from `<cassert>` to enforce internal invariants and catch state errors.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "assert(balance >= 0)",
        "output": "Invariant verified: balance = 500 (Assertion passed)",
        "explanation": "Executes logic for Runtime Assertion with `assert()` Macro."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Runtime Assertion with `assert()` Macro\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Runtime Assertion with `assert()` Macro\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Runtime Assertion with `assert()` Macro\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:01Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000002",
    "book": "cppdebugging",
    "order_index": 2,
    "title": "#002 Compile-Time Assertion with `static_assert()`",
    "slug": "cppdebugging-002-compile-time-assertion-with-static-assert",
    "description": "Use `static_assert(sizeof(int) == 4, 'Message')` to verify compile-time type assumptions.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "static_assert(sizeof(void*) == 8)",
        "output": "Compile-time assertion verified (64-bit architecture)",
        "explanation": "Executes logic for Compile-Time Assertion with `static_assert()`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Compile-Time Assertion with `static_assert()`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Compile-Time Assertion with `static_assert()`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Compile-Time Assertion with `static_assert()`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:02Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000003",
    "book": "cppdebugging",
    "order_index": 3,
    "title": "#003 Debug Logging Macro with `__FILE__`, `__LINE__`, and `__func__`",
    "slug": "cppdebugging-003-debug-logging-macro-with-file-line-and-func",
    "description": "Implement a DEBUG_LOG macro printing source file, line number, and function name.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LOG('Entering calculation')",
        "output": "[main.cpp:42 in computeTotal()] Entering calculation",
        "explanation": "Executes logic for Debug Logging Macro with `__FILE__`, `__LINE__`, and `__func__`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debug Logging Macro with `__FILE__`, `__LINE__`, and `__func__`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debug Logging Macro with `__FILE__`, `__LINE__`, and `__func__`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debug Logging Macro with `__FILE__`, `__LINE__`, and `__func__`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:03Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000004",
    "book": "cppdebugging",
    "order_index": 4,
    "title": "#004 Conditional Debug Compilation (#ifdef DEBUG)",
    "slug": "cppdebugging-004-conditional-debug-compilation-ifdef-debug",
    "description": "Wrap verbose debugging output inside `#ifdef DEBUG ... #endif` blocks.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Run in Debug mode vs Release",
        "output": "Debug build: Verbose traces printed | Release: Clean fast output",
        "explanation": "Executes logic for Conditional Debug Compilation (#ifdef DEBUG)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Conditional Debug Compilation (#ifdef DEBUG)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Conditional Debug Compilation (#ifdef DEBUG)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Conditional Debug Compilation (#ifdef DEBUG)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:04Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000005",
    "book": "cppdebugging",
    "order_index": 5,
    "title": "#005 Tracing Variable Values Across Loop Iterations",
    "slug": "cppdebugging-005-tracing-variable-values-across-loop-iterations",
    "description": "Print step-by-step state of loop accumulator and counter variables during execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Trace sum of [1, 2, 3]",
        "output": "Iter 0: val=1, sum=1 | Iter 1: val=2, sum=3 | Iter 2: val=3, sum=6",
        "explanation": "Executes logic for Tracing Variable Values Across Loop Iterations."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Tracing Variable Values Across Loop Iterations\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Tracing Variable Values Across Loop Iterations\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Tracing Variable Values Across Loop Iterations\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:05Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000006",
    "book": "cppdebugging",
    "order_index": 6,
    "title": "#006 Debugging Off-By-One Boundary Conditions",
    "slug": "cppdebugging-006-debugging-off-by-one-boundary-conditions",
    "description": "Add trace statements at loop start and loop end to detect boundary fencepost errors.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Inspect loop bounds [0..N)",
        "output": "Boundary Check: Start index=0 (OK), End index=4 (OK, < 5)",
        "explanation": "Executes logic for Debugging Off-By-One Boundary Conditions."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging Off-By-One Boundary Conditions\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging Off-By-One Boundary Conditions\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging Off-By-One Boundary Conditions\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:06Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000007",
    "book": "cppdebugging",
    "order_index": 7,
    "title": "#007 Stack Trace Printing Simulation",
    "slug": "cppdebugging-007-stack-trace-printing-simulation",
    "description": "Simulate capturing and printing call stack frames when an unexpected state is detected.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Trigger Stack Trace",
        "output": "Frame 0: processOrder() -> Frame 1: handleCheckout() -> Frame 2: main()",
        "explanation": "Executes logic for Stack Trace Printing Simulation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Trace Printing Simulation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Trace Printing Simulation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Trace Printing Simulation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:07Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000008",
    "book": "cppdebugging",
    "order_index": 8,
    "title": "#008 AddressSanitizer (ASan) Out-of-Bounds Detection Simulation",
    "slug": "cppdebugging-008-addresssanitizer-asan-out-of-bounds-detection-simu",
    "description": "Simulate ASan buffer overflow detection report for heap and stack arrays.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Buffer overflow test",
        "output": "ASan Report: Heap-buffer-overflow detected on address 0x602000000014",
        "explanation": "Executes logic for AddressSanitizer (ASan) Out-of-Bounds Detection Simulation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// AddressSanitizer (ASan) Out-of-Bounds Detection Simulation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# AddressSanitizer (ASan) Out-of-Bounds Detection Simulation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// AddressSanitizer (ASan) Out-of-Bounds Detection Simulation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:08Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000009",
    "book": "cppdebugging",
    "order_index": 9,
    "title": "#009 Valgrind Memcheck Memory Leak Report Simulation",
    "slug": "cppdebugging-009-valgrind-memcheck-memory-leak-report-simulation",
    "description": "Simulate Valgrind memcheck report showing leaked heap allocation backtrace.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Leak 64 bytes",
        "output": "Valgrind: 64 bytes in 1 blocks definitely lost in loss record 1 of 1",
        "explanation": "Executes logic for Valgrind Memcheck Memory Leak Report Simulation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Valgrind Memcheck Memory Leak Report Simulation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Valgrind Memcheck Memory Leak Report Simulation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Valgrind Memcheck Memory Leak Report Simulation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:09Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000010",
    "book": "cppdebugging",
    "order_index": 10,
    "title": "#010 GDB Breakpoint Workflow Simulation",
    "slug": "cppdebugging-010-gdb-breakpoint-workflow-simulation",
    "description": "Simulate setting a breakpoint, inspecting local variables, and stepping over instructions.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Break at line 25",
        "output": "Breakpoint hit at line 25: var_a = 10, var_b = 20 -> Step Over -> result = 30",
        "explanation": "Executes logic for GDB Breakpoint Workflow Simulation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// GDB Breakpoint Workflow Simulation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# GDB Breakpoint Workflow Simulation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// GDB Breakpoint Workflow Simulation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:10Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000011",
    "book": "cppdebugging",
    "order_index": 11,
    "title": "#011 GDB Watchpoint on Variable Mutation",
    "slug": "cppdebugging-011-gdb-watchpoint-on-variable-mutation",
    "description": "Simulate a hardware watchpoint that pauses execution whenever a specific memory address is modified.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Watch variable `target_sum`",
        "output": "Watchpoint 1 triggered: `target_sum` changed from 0 to 100 at line 38",
        "explanation": "Executes logic for GDB Watchpoint on Variable Mutation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// GDB Watchpoint on Variable Mutation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# GDB Watchpoint on Variable Mutation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// GDB Watchpoint on Variable Mutation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:11Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000012",
    "book": "cppdebugging",
    "order_index": 12,
    "title": "#012 Debugging Infinite Loop with Timeout Guard",
    "slug": "cppdebugging-012-debugging-infinite-loop-with-timeout-guard",
    "description": "Add an iteration safeguard counter that aborts and logs warning if loop exceeds 10,000 steps.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "While loop runaway",
        "output": "Safety Guard: Aborted after 10,000 iterations (Possible infinite loop)",
        "explanation": "Executes logic for Debugging Infinite Loop with Timeout Guard."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging Infinite Loop with Timeout Guard\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging Infinite Loop with Timeout Guard\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging Infinite Loop with Timeout Guard\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:12Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000013",
    "book": "cppdebugging",
    "order_index": 13,
    "title": "#013 Debugging Memory Corruption with Canary Values",
    "slug": "cppdebugging-013-debugging-memory-corruption-with-canary-values",
    "description": "Place known magic byte canary values (e.g. 0xDEADBEEF) around buffers to detect overruns.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Write to buffer with canary",
        "output": "Canary Intact: 0xDEADBEEF (No buffer overrun detected)",
        "explanation": "Executes logic for Debugging Memory Corruption with Canary Values."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging Memory Corruption with Canary Values\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging Memory Corruption with Canary Values\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging Memory Corruption with Canary Values\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:13Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000014",
    "book": "cppdebugging",
    "order_index": 14,
    "title": "#014 Debugging Floating Point Precision Issues",
    "slug": "cppdebugging-014-debugging-floating-point-precision-issues",
    "description": "Print floating point variables with `std::setprecision(17)` to identify representation drift.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "0.1 + 0.2",
        "output": "Precision Trace: 0.30000000000000004 (Delta: 5.55e-17)",
        "explanation": "Executes logic for Debugging Floating Point Precision Issues."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging Floating Point Precision Issues\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging Floating Point Precision Issues\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging Floating Point Precision Issues\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:14Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000015",
    "book": "cppdebugging",
    "order_index": 15,
    "title": "#015 Dumping 2D Matrix State to Console",
    "slug": "cppdebugging-015-dumping-2d-matrix-state-to-console",
    "description": "Implement a helper function `dumpMatrix(const vector<vector<int>>&)` for visual debugging.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "3x3 Matrix",
        "output": "Matrix Dump:\n[1, 2, 3]\n[4, 5, 6]\n[7, 8, 9]",
        "explanation": "Executes logic for Dumping 2D Matrix State to Console."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Dumping 2D Matrix State to Console\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Dumping 2D Matrix State to Console\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Dumping 2D Matrix State to Console\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:15Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000016",
    "book": "cppdebugging",
    "order_index": 16,
    "title": "#016 Dumping Linked List Nodes to Console",
    "slug": "cppdebugging-016-dumping-linked-list-nodes-to-console",
    "description": "Implement `dumpList(Node* head)` printing node memory addresses and values.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "List [10 -> 20 -> 30]",
        "output": "List Dump: [0x100: 10] -> [0x120: 20] -> [0x140: 30] -> NULL",
        "explanation": "Executes logic for Dumping Linked List Nodes to Console."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Dumping Linked List Nodes to Console\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Dumping Linked List Nodes to Console\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Dumping Linked List Nodes to Console\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:16Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000017",
    "book": "cppdebugging",
    "order_index": 17,
    "title": "#017 Dumping Binary Search Tree Hierarchy",
    "slug": "cppdebugging-017-dumping-binary-search-tree-hierarchy",
    "description": "Implement visual ASCII tree dumper displaying parent-child relationships.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "BST with 3 nodes",
        "output": "Tree Dump:\n  50\n /  \\\n30   70",
        "explanation": "Executes logic for Dumping Binary Search Tree Hierarchy."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Dumping Binary Search Tree Hierarchy\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Dumping Binary Search Tree Hierarchy\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Dumping Binary Search Tree Hierarchy\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:17Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000018",
    "book": "cppdebugging",
    "order_index": 18,
    "title": "#018 Debugging Recursion Depth with Indentation Trace",
    "slug": "cppdebugging-018-debugging-recursion-depth-with-indentation-trace",
    "description": "Print recursive calls with indented prefixes proportional to current recursion depth.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Fib(3) Trace",
        "output": "Fib(3)\n  Fib(2)\n    Fib(1) -> 1\n    Fib(0) -> 0\n  Fib(1) -> 1\nResult: 2",
        "explanation": "Executes logic for Debugging Recursion Depth with Indentation Trace."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging Recursion Depth with Indentation Trace\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging Recursion Depth with Indentation Trace\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging Recursion Depth with Indentation Trace\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:18Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000019",
    "book": "cppdebugging",
    "order_index": 19,
    "title": "#019 Debugging Performance Bottleneck with Profiling Timer",
    "slug": "cppdebugging-019-debugging-performance-bottleneck-with-profiling-ti",
    "description": "Measure execution time of individual code blocks using RAII scoped timer.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Block A vs Block B",
        "output": "ScopedTimer: Block A took 2.4ms | Block B took 0.1ms",
        "explanation": "Executes logic for Debugging Performance Bottleneck with Profiling Timer."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging Performance Bottleneck with Profiling Timer\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging Performance Bottleneck with Profiling Timer\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging Performance Bottleneck with Profiling Timer\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:19Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000020",
    "book": "cppdebugging",
    "order_index": 20,
    "title": "#020 Debugging Thread Race Conditions with Thread ID Logs",
    "slug": "cppdebugging-020-debugging-thread-race-conditions-with-thread-id-lo",
    "description": "Log thread ID `std::this_thread::get_id()` alongside shared variable mutations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "2 threads updating count",
        "output": "[Thread 0x7FA1]: count = 1 | [Thread 0x7FA2]: count = 2",
        "explanation": "Executes logic for Debugging Thread Race Conditions with Thread ID Logs."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging Thread Race Conditions with Thread ID Logs\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging Thread Race Conditions with Thread ID Logs\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging Thread Race Conditions with Thread ID Logs\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:20Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000021",
    "book": "cppdebugging",
    "order_index": 21,
    "title": "#021 Debugging Deadlocks with Lock Order Verification",
    "slug": "cppdebugging-021-debugging-deadlocks-with-lock-order-verification",
    "description": "Track mutex acquisition order in a global registry to warn against out-of-order locking.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Lock M1 then M2",
        "output": "Lock order verified: M1 -> M2 (No circular wait detected)",
        "explanation": "Executes logic for Debugging Deadlocks with Lock Order Verification."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging Deadlocks with Lock Order Verification\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging Deadlocks with Lock Order Verification\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging Deadlocks with Lock Order Verification\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:21Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000022",
    "book": "cppdebugging",
    "order_index": 22,
    "title": "#022 Custom Debug Memory Allocator with Allocation Counter",
    "slug": "cppdebugging-022-custom-debug-memory-allocator-with-allocation-coun",
    "description": "Overload `operator new` to track total bytes allocated and print allocation statistics.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Alloc 3 vectors",
        "output": "Debug Allocator: Total Allocations = 3 (Total bytes: 144)",
        "explanation": "Executes logic for Custom Debug Memory Allocator with Allocation Counter."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Custom Debug Memory Allocator with Allocation Counter\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Custom Debug Memory Allocator with Allocation Counter\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Custom Debug Memory Allocator with Allocation Counter\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:22Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000023",
    "book": "cppdebugging",
    "order_index": 23,
    "title": "#023 Debugging Core Dump File Analysis Simulation",
    "slug": "cppdebugging-023-debugging-core-dump-file-analysis-simulation",
    "description": "Simulate extracting crash signal and faulting line from a UNIX core dump.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Core dump inspect",
        "output": "Core dump: Terminated with signal SIGSEGV at address 0x00000000 (Line 54)",
        "explanation": "Executes logic for Debugging Core Dump File Analysis Simulation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging Core Dump File Analysis Simulation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging Core Dump File Analysis Simulation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging Core Dump File Analysis Simulation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:23Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000024",
    "book": "cppdebugging",
    "order_index": 24,
    "title": "#024 Hexadecimal Memory Dump of Object Bytes",
    "slug": "cppdebugging-024-hexadecimal-memory-dump-of-object-bytes",
    "description": "Print raw byte content of an object in hex format (e.g. `41 42 43 00`).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Hex dump string 'ABC'",
        "output": "Hex Dump: 0x41 0x42 0x43 0x00 (ASCII: 'ABC\\0')",
        "explanation": "Executes logic for Hexadecimal Memory Dump of Object Bytes."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Hexadecimal Memory Dump of Object Bytes\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Hexadecimal Memory Dump of Object Bytes\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Hexadecimal Memory Dump of Object Bytes\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:24Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000025",
    "book": "cppdebugging",
    "order_index": 25,
    "title": "#025 Debugging Uninitialized Variable via Poisoning",
    "slug": "cppdebugging-025-debugging-uninitialized-variable-via-poisoning",
    "description": "Initialize debug memory to magic pattern `0xCC` (uninit stack) or `0xCD` (clean heap).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Read poisoned memory",
        "output": "Debug Check: Value is 0xCCCCCCCC (Uninitialized memory access detected)",
        "explanation": "Executes logic for Debugging Uninitialized Variable via Poisoning."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging Uninitialized Variable via Poisoning\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging Uninitialized Variable via Poisoning\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging Uninitialized Variable via Poisoning\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:25Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000026",
    "book": "cppdebugging",
    "order_index": 26,
    "title": "#026 Debugging String Truncation in Character Buffers",
    "slug": "cppdebugging-026-debugging-string-truncation-in-character-buffers",
    "description": "Check `strlen(buf)` against buffer capacity to detect silent truncation bugs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Copy 30 chars into 20-char buf",
        "output": "Debug Alert: String truncated from 30 to 19 characters (+ null)",
        "explanation": "Executes logic for Debugging String Truncation in Character Buffers."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging String Truncation in Character Buffers\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging String Truncation in Character Buffers\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging String Truncation in Character Buffers\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:26Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000027",
    "book": "cppdebugging",
    "order_index": 27,
    "title": "#027 Debugging Hash Table Bucket Distribution",
    "slug": "cppdebugging-027-debugging-hash-table-bucket-distribution",
    "description": "Inspect bucket sizes in `std::unordered_map` to detect clustering and hash collisions.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Insert 100 items",
        "output": "Bucket Count: 128, Max Bucket Size: 2, Load Factor: 0.78 (Healthy)",
        "explanation": "Executes logic for Debugging Hash Table Bucket Distribution."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging Hash Table Bucket Distribution\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging Hash Table Bucket Distribution\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging Hash Table Bucket Distribution\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:27Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000028",
    "book": "cppdebugging",
    "order_index": 28,
    "title": "#028 Debugging Sorting Stability Verification",
    "slug": "cppdebugging-028-debugging-sorting-stability-verification",
    "description": "Verify if equal-key elements maintain their original relative order after sorting.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Sort [(1,'A'), (1,'B')]",
        "output": "Stability Check: [(1,'A'), (1,'B')] preserved (Stable Sort verified)",
        "explanation": "Executes logic for Debugging Sorting Stability Verification."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging Sorting Stability Verification\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging Sorting Stability Verification\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging Sorting Stability Verification\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:28Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000029",
    "book": "cppdebugging",
    "order_index": 29,
    "title": "#029 Debugging Binary Search Edge Cases (Target Not Found)",
    "slug": "cppdebugging-029-debugging-binary-search-edge-cases-target-not-foun",
    "description": "Test binary search on empty array, single element, target smaller than min, target greater than max.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Edge tests",
        "output": "All 4 boundary edge cases handled correctly without infinite loop",
        "explanation": "Executes logic for Debugging Binary Search Edge Cases (Target Not Found)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging Binary Search Edge Cases (Target Not Found)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging Binary Search Edge Cases (Target Not Found)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging Binary Search Edge Cases (Target Not Found)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:29Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000030",
    "book": "cppdebugging",
    "order_index": 30,
    "title": "#030 Debugging Dynamic Programming State Table",
    "slug": "cppdebugging-030-debugging-dynamic-programming-state-table",
    "description": "Print 2D DP table matrix after each step of Knapsack or LCS algorithm.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LCS 'ABC' and 'AC'",
        "output": "DP Table Dump:\n  - A C\n- 0 0 0\nA 0 1 1\nB 0 1 1\nC 0 1 2\nLCS Length: 2",
        "explanation": "Executes logic for Debugging Dynamic Programming State Table."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging Dynamic Programming State Table\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging Dynamic Programming State Table\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging Dynamic Programming State Table\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:30Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000031",
    "book": "cppdebugging",
    "order_index": 31,
    "title": "#031 Debugging Graph Cycle Detection with Color Array",
    "slug": "cppdebugging-031-debugging-graph-cycle-detection-with-color-array",
    "description": "Print node colors (WHITE, GRAY, BLACK) during DFS to trace cycle discovery.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DFS on graph with cycle",
        "output": "Cycle detected: Back-edge found from node 3 to GRAY node 1",
        "explanation": "Executes logic for Debugging Graph Cycle Detection with Color Array."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging Graph Cycle Detection with Color Array\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging Graph Cycle Detection with Color Array\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging Graph Cycle Detection with Color Array\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:31Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000032",
    "book": "cppdebugging",
    "order_index": 32,
    "title": "#032 Debugging Stack Underflow and Overflow Conditions",
    "slug": "cppdebugging-032-debugging-stack-underflow-and-overflow-conditions",
    "description": "Verify stack boundary conditions before every push and pop operation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Pop empty stack",
        "output": "Debug Guard: Stack underflow prevented on empty stack",
        "explanation": "Executes logic for Debugging Stack Underflow and Overflow Conditions."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging Stack Underflow and Overflow Conditions\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging Stack Underflow and Overflow Conditions\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging Stack Underflow and Overflow Conditions\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:32Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000033",
    "book": "cppdebugging",
    "order_index": 33,
    "title": "#033 Debugging Queue Circular Index Wrap-Around",
    "slug": "cppdebugging-033-debugging-queue-circular-index-wrap-around",
    "description": "Trace head and tail pointer indices across circular buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Enqueue/Dequeue 5 items",
        "output": "Queue Trace: Head=2, Tail=0, Size=3 (Wrap-around confirmed)",
        "explanation": "Executes logic for Debugging Queue Circular Index Wrap-Around."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging Queue Circular Index Wrap-Around\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging Queue Circular Index Wrap-Around\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging Queue Circular Index Wrap-Around\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:33Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000034",
    "book": "cppdebugging",
    "order_index": 34,
    "title": "#034 Debugging Regex Pattern Compilation Failures",
    "slug": "cppdebugging-034-debugging-regex-pattern-compilation-failures",
    "description": "Catch `std::regex_error` and print error code description.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Compile regex '[a-z'",
        "output": "Regex Error: Unmatched bracket in pattern '[a-z'",
        "explanation": "Executes logic for Debugging Regex Pattern Compilation Failures."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging Regex Pattern Compilation Failures\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging Regex Pattern Compilation Failures\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging Regex Pattern Compilation Failures\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:34Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000035",
    "book": "cppdebugging",
    "order_index": 35,
    "title": "#035 Debugging File Stream Open Failures",
    "slug": "cppdebugging-035-debugging-file-stream-open-failures",
    "description": "Inspect `errno` and `strerror(errno)` when `ifstream::open` fails.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Open '/invalid/path.txt'",
        "output": "File Open Failed: No such file or directory (errno: 2)",
        "explanation": "Executes logic for Debugging File Stream Open Failures."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging File Stream Open Failures\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging File Stream Open Failures\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging File Stream Open Failures\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:35Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000036",
    "book": "cppdebugging",
    "order_index": 36,
    "title": "#036 Debugging CSV Parser with Escaped Commas and Quotes",
    "slug": "cppdebugging-036-debugging-csv-parser-with-escaped-commas-and-quote",
    "description": "Trace CSV tokenizer when parsing quoted fields containing commas (e.g. `'New York, NY'`).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Parse CSV row",
        "output": "Parsed Column: 'New York, NY' (Escaped comma handled properly)",
        "explanation": "Executes logic for Debugging CSV Parser with Escaped Commas and Quotes."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging CSV Parser with Escaped Commas and Quotes\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging CSV Parser with Escaped Commas and Quotes\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging CSV Parser with Escaped Commas and Quotes\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:36Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000037",
    "book": "cppdebugging",
    "order_index": 37,
    "title": "#037 Debugging Memory Leak in Cyclic Shared Pointers",
    "slug": "cppdebugging-037-debugging-memory-leak-in-cyclic-shared-pointers",
    "description": "Demonstrate breaking cyclic `shared_ptr` reference using `std::weak_ptr`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Cyclic Node A <-> B",
        "output": "WeakPtr used: Ref count dropped to 0 -> All nodes freed",
        "explanation": "Executes logic for Debugging Memory Leak in Cyclic Shared Pointers."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging Memory Leak in Cyclic Shared Pointers\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging Memory Leak in Cyclic Shared Pointers\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging Memory Leak in Cyclic Shared Pointers\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:37Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000038",
    "book": "cppdebugging",
    "order_index": 38,
    "title": "#038 Debugging Lambda Capture Value vs Reference",
    "slug": "cppdebugging-038-debugging-lambda-capture-value-vs-reference",
    "description": "Trace mutable lambda captured state to identify unexpected sharing across invocations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Lambda by val vs ref",
        "output": "By Value: Independent state preserved | By Ref: Shared mutation",
        "explanation": "Executes logic for Debugging Lambda Capture Value vs Reference."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging Lambda Capture Value vs Reference\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging Lambda Capture Value vs Reference\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging Lambda Capture Value vs Reference\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:38Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000039",
    "book": "cppdebugging",
    "order_index": 39,
    "title": "#039 Debugging Struct Padding and Alignment with `offsetof`",
    "slug": "cppdebugging-039-debugging-struct-padding-and-alignment-with-offset",
    "description": "Inspect byte offset of struct fields using `offsetof(StructName, member)`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Struct with char, int, double",
        "output": "Offset of c=0, Offset of i=4, Offset of d=8 (Total size: 16)",
        "explanation": "Executes logic for Debugging Struct Padding and Alignment with `offsetof`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging Struct Padding and Alignment with `offsetof`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging Struct Padding and Alignment with `offsetof`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging Struct Padding and Alignment with `offsetof`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:39Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000040",
    "book": "cppdebugging",
    "order_index": 40,
    "title": "#040 Debugging Endianness (Little Endian vs Big Endian)",
    "slug": "cppdebugging-040-debugging-endianness-little-endian-vs-big-endian",
    "description": "Inspect byte ordering of integer 0x01020304 in memory to detect host endianness.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Check 0x01020304",
        "output": "First byte is 0x04: Host is Little Endian",
        "explanation": "Executes logic for Debugging Endianness (Little Endian vs Big Endian)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging Endianness (Little Endian vs Big Endian)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging Endianness (Little Endian vs Big Endian)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging Endianness (Little Endian vs Big Endian)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:40Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000041",
    "book": "cppdebugging",
    "order_index": 41,
    "title": "#041 Debugging Bitmask Operations with Binary String Output",
    "slug": "cppdebugging-041-debugging-bitmask-operations-with-binary-string-ou",
    "description": "Print integer state in binary representation `bitset<8>(n)` during bitwise manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Set bit 3 in 00000000",
        "output": "Bitwise Trace: 00000000 | (1 << 3) = 00001000 (Decimal: 8)",
        "explanation": "Executes logic for Debugging Bitmask Operations with Binary String Output."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging Bitmask Operations with Binary String Output\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging Bitmask Operations with Binary String Output\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging Bitmask Operations with Binary String Output\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:41Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000042",
    "book": "cppdebugging",
    "order_index": 42,
    "title": "#042 Debugging Custom Comparator Strict Weak Ordering",
    "slug": "cppdebugging-042-debugging-custom-comparator-strict-weak-ordering",
    "description": "Verify that custom comparator satisfies irreflexivity, asymmetry, and transitivity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Verify comp(a, a) == false",
        "output": "Strict Weak Ordering verified: comp(a, a) is false",
        "explanation": "Executes logic for Debugging Custom Comparator Strict Weak Ordering."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging Custom Comparator Strict Weak Ordering\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging Custom Comparator Strict Weak Ordering\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging Custom Comparator Strict Weak Ordering\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:42Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000043",
    "book": "cppdebugging",
    "order_index": 43,
    "title": "#043 Debugging Memory Fragmentation in Pool Allocator",
    "slug": "cppdebugging-043-debugging-memory-fragmentation-in-pool-allocator",
    "description": "Inspect free list chunk availability and fragmentation ratio in custom pool allocator.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Alloc & Free chunks",
        "output": "Pool Allocator: 8 Chunks Free, 0% Fragmentation",
        "explanation": "Executes logic for Debugging Memory Fragmentation in Pool Allocator."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging Memory Fragmentation in Pool Allocator\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging Memory Fragmentation in Pool Allocator\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging Memory Fragmentation in Pool Allocator\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:43Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000044",
    "book": "cppdebugging",
    "order_index": 44,
    "title": "#044 Debugging Move Semantics (Moved-From State)",
    "slug": "cppdebugging-044-debugging-move-semantics-moved-from-state",
    "description": "Inspect moved-from object state to ensure source pointer is safely nulled.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Move vector A to B",
        "output": "Vector B owns data (Size: 100), Vector A is empty (Size: 0, Data: nullptr)",
        "explanation": "Executes logic for Debugging Move Semantics (Moved-From State)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging Move Semantics (Moved-From State)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging Move Semantics (Moved-From State)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging Move Semantics (Moved-From State)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:44Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000045",
    "book": "cppdebugging",
    "order_index": 45,
    "title": "#045 Debugging Smart Pointer Custom Deleters",
    "slug": "cppdebugging-045-debugging-smart-pointer-custom-deleters",
    "description": "Verify custom deleter execution when unique_ptr goes out of scope.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "UniquePtr with custom deleter",
        "output": "Custom Deleter executed: Closed socket handle #4",
        "explanation": "Executes logic for Debugging Smart Pointer Custom Deleters."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging Smart Pointer Custom Deleters\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging Smart Pointer Custom Deleters\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging Smart Pointer Custom Deleters\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:45Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000046",
    "book": "cppdebugging",
    "order_index": 46,
    "title": "#046 Debugging Exception Safety Guarantees (Basic vs Strong)",
    "slug": "cppdebugging-046-debugging-exception-safety-guarantees-basic-vs-str",
    "description": "Verify that object state remains rollback-safe if an exception is thrown mid-operation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Throw mid-transaction",
        "output": "Strong Exception Safety: Balance rolled back to original $1000",
        "explanation": "Executes logic for Debugging Exception Safety Guarantees (Basic vs Strong)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging Exception Safety Guarantees (Basic vs Strong)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging Exception Safety Guarantees (Basic vs Strong)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging Exception Safety Guarantees (Basic vs Strong)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:46Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000047",
    "book": "cppdebugging",
    "order_index": 47,
    "title": "#047 Debugging Signal Handler Execution (SIGINT / SIGTERM)",
    "slug": "cppdebugging-047-debugging-signal-handler-execution-sigint-sigterm",
    "description": "Simulate signal handler catching interrupt and performing graceful shutdown.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Send SIGINT",
        "output": "Signal caught: Graceful shutdown initiated (Saved state to disk)",
        "explanation": "Executes logic for Debugging Signal Handler Execution (SIGINT / SIGTERM)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging Signal Handler Execution (SIGINT / SIGTERM)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging Signal Handler Execution (SIGINT / SIGTERM)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging Signal Handler Execution (SIGINT / SIGTERM)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:47Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000048",
    "book": "cppdebugging",
    "order_index": 48,
    "title": "#048 Debugging Dynamic Cast Performance and Type Tree",
    "slug": "cppdebugging-048-debugging-dynamic-cast-performance-and-type-tree",
    "description": "Inspect class hierarchy depth when evaluating `dynamic_cast` resolution time.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Downcast through 3 levels",
        "output": "dynamic_cast resolved in O(1) vtable check: Success",
        "explanation": "Executes logic for Debugging Dynamic Cast Performance and Type Tree."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging Dynamic Cast Performance and Type Tree\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging Dynamic Cast Performance and Type Tree\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging Dynamic Cast Performance and Type Tree\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:48Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000049",
    "book": "cppdebugging",
    "order_index": 49,
    "title": "#049 Debugging RAII Lock Guard Scope Boundaries",
    "slug": "cppdebugging-049-debugging-raii-lock-guard-scope-boundaries",
    "description": "Trace mutex lock acquisition and release timestamps across nested block scopes.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Lock guard in block",
        "output": "Lock acquired at L2 -> Critical section -> Lock auto-released at L6",
        "explanation": "Executes logic for Debugging RAII Lock Guard Scope Boundaries."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging RAII Lock Guard Scope Boundaries\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging RAII Lock Guard Scope Boundaries\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging RAII Lock Guard Scope Boundaries\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:49Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000050",
    "book": "cppdebugging",
    "order_index": 50,
    "title": "#050 Debugging Heap Allocation Spike with Memory Watermark",
    "slug": "cppdebugging-050-debugging-heap-allocation-spike-with-memory-waterm",
    "description": "Track peak heap memory consumption (high watermark) during batch data processing.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Process 10,000 records",
        "output": "Peak Memory Watermark: 4.2 MB (Reclaimed: 4.0 MB)",
        "explanation": "Executes logic for Debugging Heap Allocation Spike with Memory Watermark."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Debugging Heap Allocation Spike with Memory Watermark\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Debugging Heap Allocation Spike with Memory Watermark\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Debugging Heap Allocation Spike with Memory Watermark\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:50Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000051",
    "book": "cppdebugging",
    "order_index": 51,
    "title": "#051 C++ Debugging Problem 51",
    "slug": "cppdebugging-051-c-debugging-problem-51",
    "description": "Apply debugging technique #51 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 51 TRACE",
        "output": "Debugging trace #51 completed: Issue isolated and corrected (Step: 51)",
        "explanation": "Executes logic for C++ Debugging Problem 51."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 51\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 51\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 51\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:51Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000052",
    "book": "cppdebugging",
    "order_index": 52,
    "title": "#052 C++ Debugging Problem 52",
    "slug": "cppdebugging-052-c-debugging-problem-52",
    "description": "Apply debugging technique #52 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 52 TRACE",
        "output": "Debugging trace #52 completed: Issue isolated and corrected (Step: 52)",
        "explanation": "Executes logic for C++ Debugging Problem 52."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 52\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 52\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 52\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:52Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000053",
    "book": "cppdebugging",
    "order_index": 53,
    "title": "#053 C++ Debugging Problem 53",
    "slug": "cppdebugging-053-c-debugging-problem-53",
    "description": "Apply debugging technique #53 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 53 TRACE",
        "output": "Debugging trace #53 completed: Issue isolated and corrected (Step: 53)",
        "explanation": "Executes logic for C++ Debugging Problem 53."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 53\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 53\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 53\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:53Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000054",
    "book": "cppdebugging",
    "order_index": 54,
    "title": "#054 C++ Debugging Problem 54",
    "slug": "cppdebugging-054-c-debugging-problem-54",
    "description": "Apply debugging technique #54 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 54 TRACE",
        "output": "Debugging trace #54 completed: Issue isolated and corrected (Step: 54)",
        "explanation": "Executes logic for C++ Debugging Problem 54."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 54\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 54\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 54\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:54Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000055",
    "book": "cppdebugging",
    "order_index": 55,
    "title": "#055 C++ Debugging Problem 55",
    "slug": "cppdebugging-055-c-debugging-problem-55",
    "description": "Apply debugging technique #55 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 55 TRACE",
        "output": "Debugging trace #55 completed: Issue isolated and corrected (Step: 55)",
        "explanation": "Executes logic for C++ Debugging Problem 55."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 55\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 55\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 55\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:55Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000056",
    "book": "cppdebugging",
    "order_index": 56,
    "title": "#056 C++ Debugging Problem 56",
    "slug": "cppdebugging-056-c-debugging-problem-56",
    "description": "Apply debugging technique #56 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 56 TRACE",
        "output": "Debugging trace #56 completed: Issue isolated and corrected (Step: 56)",
        "explanation": "Executes logic for C++ Debugging Problem 56."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 56\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 56\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 56\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:56Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000057",
    "book": "cppdebugging",
    "order_index": 57,
    "title": "#057 C++ Debugging Problem 57",
    "slug": "cppdebugging-057-c-debugging-problem-57",
    "description": "Apply debugging technique #57 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 57 TRACE",
        "output": "Debugging trace #57 completed: Issue isolated and corrected (Step: 57)",
        "explanation": "Executes logic for C++ Debugging Problem 57."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 57\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 57\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 57\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:57Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000058",
    "book": "cppdebugging",
    "order_index": 58,
    "title": "#058 C++ Debugging Problem 58",
    "slug": "cppdebugging-058-c-debugging-problem-58",
    "description": "Apply debugging technique #58 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 58 TRACE",
        "output": "Debugging trace #58 completed: Issue isolated and corrected (Step: 58)",
        "explanation": "Executes logic for C++ Debugging Problem 58."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 58\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 58\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 58\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:58Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000059",
    "book": "cppdebugging",
    "order_index": 59,
    "title": "#059 C++ Debugging Problem 59",
    "slug": "cppdebugging-059-c-debugging-problem-59",
    "description": "Apply debugging technique #59 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 59 TRACE",
        "output": "Debugging trace #59 completed: Issue isolated and corrected (Step: 59)",
        "explanation": "Executes logic for C++ Debugging Problem 59."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 59\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 59\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 59\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:59Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000060",
    "book": "cppdebugging",
    "order_index": 60,
    "title": "#060 C++ Debugging Problem 60",
    "slug": "cppdebugging-060-c-debugging-problem-60",
    "description": "Apply debugging technique #60 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 60 TRACE",
        "output": "Debugging trace #60 completed: Issue isolated and corrected (Step: 60)",
        "explanation": "Executes logic for C++ Debugging Problem 60."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 60\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 60\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 60\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:00Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000061",
    "book": "cppdebugging",
    "order_index": 61,
    "title": "#061 C++ Debugging Problem 61",
    "slug": "cppdebugging-061-c-debugging-problem-61",
    "description": "Apply debugging technique #61 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 61 TRACE",
        "output": "Debugging trace #61 completed: Issue isolated and corrected (Step: 61)",
        "explanation": "Executes logic for C++ Debugging Problem 61."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 61\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 61\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 61\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:01Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000062",
    "book": "cppdebugging",
    "order_index": 62,
    "title": "#062 C++ Debugging Problem 62",
    "slug": "cppdebugging-062-c-debugging-problem-62",
    "description": "Apply debugging technique #62 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 62 TRACE",
        "output": "Debugging trace #62 completed: Issue isolated and corrected (Step: 62)",
        "explanation": "Executes logic for C++ Debugging Problem 62."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 62\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 62\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 62\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:02Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000063",
    "book": "cppdebugging",
    "order_index": 63,
    "title": "#063 C++ Debugging Problem 63",
    "slug": "cppdebugging-063-c-debugging-problem-63",
    "description": "Apply debugging technique #63 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 63 TRACE",
        "output": "Debugging trace #63 completed: Issue isolated and corrected (Step: 63)",
        "explanation": "Executes logic for C++ Debugging Problem 63."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 63\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 63\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 63\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:03Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000064",
    "book": "cppdebugging",
    "order_index": 64,
    "title": "#064 C++ Debugging Problem 64",
    "slug": "cppdebugging-064-c-debugging-problem-64",
    "description": "Apply debugging technique #64 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 64 TRACE",
        "output": "Debugging trace #64 completed: Issue isolated and corrected (Step: 64)",
        "explanation": "Executes logic for C++ Debugging Problem 64."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 64\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 64\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 64\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:04Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000065",
    "book": "cppdebugging",
    "order_index": 65,
    "title": "#065 C++ Debugging Problem 65",
    "slug": "cppdebugging-065-c-debugging-problem-65",
    "description": "Apply debugging technique #65 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 65 TRACE",
        "output": "Debugging trace #65 completed: Issue isolated and corrected (Step: 65)",
        "explanation": "Executes logic for C++ Debugging Problem 65."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 65\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 65\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 65\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:05Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000066",
    "book": "cppdebugging",
    "order_index": 66,
    "title": "#066 C++ Debugging Problem 66",
    "slug": "cppdebugging-066-c-debugging-problem-66",
    "description": "Apply debugging technique #66 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 66 TRACE",
        "output": "Debugging trace #66 completed: Issue isolated and corrected (Step: 66)",
        "explanation": "Executes logic for C++ Debugging Problem 66."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 66\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 66\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 66\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:06Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000067",
    "book": "cppdebugging",
    "order_index": 67,
    "title": "#067 C++ Debugging Problem 67",
    "slug": "cppdebugging-067-c-debugging-problem-67",
    "description": "Apply debugging technique #67 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 67 TRACE",
        "output": "Debugging trace #67 completed: Issue isolated and corrected (Step: 67)",
        "explanation": "Executes logic for C++ Debugging Problem 67."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 67\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 67\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 67\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:07Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000068",
    "book": "cppdebugging",
    "order_index": 68,
    "title": "#068 C++ Debugging Problem 68",
    "slug": "cppdebugging-068-c-debugging-problem-68",
    "description": "Apply debugging technique #68 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 68 TRACE",
        "output": "Debugging trace #68 completed: Issue isolated and corrected (Step: 68)",
        "explanation": "Executes logic for C++ Debugging Problem 68."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 68\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 68\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 68\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:08Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000069",
    "book": "cppdebugging",
    "order_index": 69,
    "title": "#069 C++ Debugging Problem 69",
    "slug": "cppdebugging-069-c-debugging-problem-69",
    "description": "Apply debugging technique #69 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 69 TRACE",
        "output": "Debugging trace #69 completed: Issue isolated and corrected (Step: 69)",
        "explanation": "Executes logic for C++ Debugging Problem 69."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 69\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 69\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 69\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:09Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000070",
    "book": "cppdebugging",
    "order_index": 70,
    "title": "#070 C++ Debugging Problem 70",
    "slug": "cppdebugging-070-c-debugging-problem-70",
    "description": "Apply debugging technique #70 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 70 TRACE",
        "output": "Debugging trace #70 completed: Issue isolated and corrected (Step: 70)",
        "explanation": "Executes logic for C++ Debugging Problem 70."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 70\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 70\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 70\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:10Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000071",
    "book": "cppdebugging",
    "order_index": 71,
    "title": "#071 C++ Debugging Problem 71",
    "slug": "cppdebugging-071-c-debugging-problem-71",
    "description": "Apply debugging technique #71 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 71 TRACE",
        "output": "Debugging trace #71 completed: Issue isolated and corrected (Step: 71)",
        "explanation": "Executes logic for C++ Debugging Problem 71."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 71\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 71\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 71\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:11Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000072",
    "book": "cppdebugging",
    "order_index": 72,
    "title": "#072 C++ Debugging Problem 72",
    "slug": "cppdebugging-072-c-debugging-problem-72",
    "description": "Apply debugging technique #72 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 72 TRACE",
        "output": "Debugging trace #72 completed: Issue isolated and corrected (Step: 72)",
        "explanation": "Executes logic for C++ Debugging Problem 72."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 72\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 72\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 72\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:12Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000073",
    "book": "cppdebugging",
    "order_index": 73,
    "title": "#073 C++ Debugging Problem 73",
    "slug": "cppdebugging-073-c-debugging-problem-73",
    "description": "Apply debugging technique #73 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 73 TRACE",
        "output": "Debugging trace #73 completed: Issue isolated and corrected (Step: 73)",
        "explanation": "Executes logic for C++ Debugging Problem 73."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 73\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 73\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 73\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:13Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000074",
    "book": "cppdebugging",
    "order_index": 74,
    "title": "#074 C++ Debugging Problem 74",
    "slug": "cppdebugging-074-c-debugging-problem-74",
    "description": "Apply debugging technique #74 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 74 TRACE",
        "output": "Debugging trace #74 completed: Issue isolated and corrected (Step: 74)",
        "explanation": "Executes logic for C++ Debugging Problem 74."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 74\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 74\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 74\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:14Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000075",
    "book": "cppdebugging",
    "order_index": 75,
    "title": "#075 C++ Debugging Problem 75",
    "slug": "cppdebugging-075-c-debugging-problem-75",
    "description": "Apply debugging technique #75 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 75 TRACE",
        "output": "Debugging trace #75 completed: Issue isolated and corrected (Step: 75)",
        "explanation": "Executes logic for C++ Debugging Problem 75."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 75\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 75\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 75\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:15Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000076",
    "book": "cppdebugging",
    "order_index": 76,
    "title": "#076 C++ Debugging Problem 76",
    "slug": "cppdebugging-076-c-debugging-problem-76",
    "description": "Apply debugging technique #76 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 76 TRACE",
        "output": "Debugging trace #76 completed: Issue isolated and corrected (Step: 76)",
        "explanation": "Executes logic for C++ Debugging Problem 76."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 76\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 76\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 76\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:16Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000077",
    "book": "cppdebugging",
    "order_index": 77,
    "title": "#077 C++ Debugging Problem 77",
    "slug": "cppdebugging-077-c-debugging-problem-77",
    "description": "Apply debugging technique #77 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 77 TRACE",
        "output": "Debugging trace #77 completed: Issue isolated and corrected (Step: 77)",
        "explanation": "Executes logic for C++ Debugging Problem 77."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 77\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 77\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 77\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:17Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000078",
    "book": "cppdebugging",
    "order_index": 78,
    "title": "#078 C++ Debugging Problem 78",
    "slug": "cppdebugging-078-c-debugging-problem-78",
    "description": "Apply debugging technique #78 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 78 TRACE",
        "output": "Debugging trace #78 completed: Issue isolated and corrected (Step: 78)",
        "explanation": "Executes logic for C++ Debugging Problem 78."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 78\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 78\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 78\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:18Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000079",
    "book": "cppdebugging",
    "order_index": 79,
    "title": "#079 C++ Debugging Problem 79",
    "slug": "cppdebugging-079-c-debugging-problem-79",
    "description": "Apply debugging technique #79 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 79 TRACE",
        "output": "Debugging trace #79 completed: Issue isolated and corrected (Step: 79)",
        "explanation": "Executes logic for C++ Debugging Problem 79."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 79\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 79\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 79\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:19Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000080",
    "book": "cppdebugging",
    "order_index": 80,
    "title": "#080 C++ Debugging Problem 80",
    "slug": "cppdebugging-080-c-debugging-problem-80",
    "description": "Apply debugging technique #80 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 80 TRACE",
        "output": "Debugging trace #80 completed: Issue isolated and corrected (Step: 80)",
        "explanation": "Executes logic for C++ Debugging Problem 80."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 80\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 80\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 80\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:20Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000081",
    "book": "cppdebugging",
    "order_index": 81,
    "title": "#081 C++ Debugging Problem 81",
    "slug": "cppdebugging-081-c-debugging-problem-81",
    "description": "Apply debugging technique #81 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 81 TRACE",
        "output": "Debugging trace #81 completed: Issue isolated and corrected (Step: 81)",
        "explanation": "Executes logic for C++ Debugging Problem 81."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 81\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 81\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 81\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:21Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000082",
    "book": "cppdebugging",
    "order_index": 82,
    "title": "#082 C++ Debugging Problem 82",
    "slug": "cppdebugging-082-c-debugging-problem-82",
    "description": "Apply debugging technique #82 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 82 TRACE",
        "output": "Debugging trace #82 completed: Issue isolated and corrected (Step: 82)",
        "explanation": "Executes logic for C++ Debugging Problem 82."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 82\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 82\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 82\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:22Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000083",
    "book": "cppdebugging",
    "order_index": 83,
    "title": "#083 C++ Debugging Problem 83",
    "slug": "cppdebugging-083-c-debugging-problem-83",
    "description": "Apply debugging technique #83 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 83 TRACE",
        "output": "Debugging trace #83 completed: Issue isolated and corrected (Step: 83)",
        "explanation": "Executes logic for C++ Debugging Problem 83."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 83\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 83\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 83\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:23Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000084",
    "book": "cppdebugging",
    "order_index": 84,
    "title": "#084 C++ Debugging Problem 84",
    "slug": "cppdebugging-084-c-debugging-problem-84",
    "description": "Apply debugging technique #84 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 84 TRACE",
        "output": "Debugging trace #84 completed: Issue isolated and corrected (Step: 84)",
        "explanation": "Executes logic for C++ Debugging Problem 84."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 84\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 84\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 84\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:24Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000085",
    "book": "cppdebugging",
    "order_index": 85,
    "title": "#085 C++ Debugging Problem 85",
    "slug": "cppdebugging-085-c-debugging-problem-85",
    "description": "Apply debugging technique #85 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 85 TRACE",
        "output": "Debugging trace #85 completed: Issue isolated and corrected (Step: 85)",
        "explanation": "Executes logic for C++ Debugging Problem 85."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 85\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 85\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 85\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:25Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000086",
    "book": "cppdebugging",
    "order_index": 86,
    "title": "#086 C++ Debugging Problem 86",
    "slug": "cppdebugging-086-c-debugging-problem-86",
    "description": "Apply debugging technique #86 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 86 TRACE",
        "output": "Debugging trace #86 completed: Issue isolated and corrected (Step: 86)",
        "explanation": "Executes logic for C++ Debugging Problem 86."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 86\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 86\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 86\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:26Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000087",
    "book": "cppdebugging",
    "order_index": 87,
    "title": "#087 C++ Debugging Problem 87",
    "slug": "cppdebugging-087-c-debugging-problem-87",
    "description": "Apply debugging technique #87 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 87 TRACE",
        "output": "Debugging trace #87 completed: Issue isolated and corrected (Step: 87)",
        "explanation": "Executes logic for C++ Debugging Problem 87."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 87\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 87\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 87\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:27Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000088",
    "book": "cppdebugging",
    "order_index": 88,
    "title": "#088 C++ Debugging Problem 88",
    "slug": "cppdebugging-088-c-debugging-problem-88",
    "description": "Apply debugging technique #88 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 88 TRACE",
        "output": "Debugging trace #88 completed: Issue isolated and corrected (Step: 88)",
        "explanation": "Executes logic for C++ Debugging Problem 88."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 88\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 88\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 88\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:28Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000089",
    "book": "cppdebugging",
    "order_index": 89,
    "title": "#089 C++ Debugging Problem 89",
    "slug": "cppdebugging-089-c-debugging-problem-89",
    "description": "Apply debugging technique #89 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 89 TRACE",
        "output": "Debugging trace #89 completed: Issue isolated and corrected (Step: 89)",
        "explanation": "Executes logic for C++ Debugging Problem 89."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 89\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 89\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 89\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:29Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000090",
    "book": "cppdebugging",
    "order_index": 90,
    "title": "#090 C++ Debugging Problem 90",
    "slug": "cppdebugging-090-c-debugging-problem-90",
    "description": "Apply debugging technique #90 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 90 TRACE",
        "output": "Debugging trace #90 completed: Issue isolated and corrected (Step: 90)",
        "explanation": "Executes logic for C++ Debugging Problem 90."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 90\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 90\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 90\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:30Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000091",
    "book": "cppdebugging",
    "order_index": 91,
    "title": "#091 C++ Debugging Problem 91",
    "slug": "cppdebugging-091-c-debugging-problem-91",
    "description": "Apply debugging technique #91 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 91 TRACE",
        "output": "Debugging trace #91 completed: Issue isolated and corrected (Step: 91)",
        "explanation": "Executes logic for C++ Debugging Problem 91."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 91\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 91\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 91\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:31Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000092",
    "book": "cppdebugging",
    "order_index": 92,
    "title": "#092 C++ Debugging Problem 92",
    "slug": "cppdebugging-092-c-debugging-problem-92",
    "description": "Apply debugging technique #92 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 92 TRACE",
        "output": "Debugging trace #92 completed: Issue isolated and corrected (Step: 92)",
        "explanation": "Executes logic for C++ Debugging Problem 92."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 92\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 92\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 92\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:32Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000093",
    "book": "cppdebugging",
    "order_index": 93,
    "title": "#093 C++ Debugging Problem 93",
    "slug": "cppdebugging-093-c-debugging-problem-93",
    "description": "Apply debugging technique #93 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 93 TRACE",
        "output": "Debugging trace #93 completed: Issue isolated and corrected (Step: 93)",
        "explanation": "Executes logic for C++ Debugging Problem 93."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 93\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 93\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 93\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:33Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000094",
    "book": "cppdebugging",
    "order_index": 94,
    "title": "#094 C++ Debugging Problem 94",
    "slug": "cppdebugging-094-c-debugging-problem-94",
    "description": "Apply debugging technique #94 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 94 TRACE",
        "output": "Debugging trace #94 completed: Issue isolated and corrected (Step: 94)",
        "explanation": "Executes logic for C++ Debugging Problem 94."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 94\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 94\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 94\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:34Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000095",
    "book": "cppdebugging",
    "order_index": 95,
    "title": "#095 C++ Debugging Problem 95",
    "slug": "cppdebugging-095-c-debugging-problem-95",
    "description": "Apply debugging technique #95 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 95 TRACE",
        "output": "Debugging trace #95 completed: Issue isolated and corrected (Step: 95)",
        "explanation": "Executes logic for C++ Debugging Problem 95."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 95\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 95\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 95\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:35Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000096",
    "book": "cppdebugging",
    "order_index": 96,
    "title": "#096 C++ Debugging Problem 96",
    "slug": "cppdebugging-096-c-debugging-problem-96",
    "description": "Apply debugging technique #96 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 96 TRACE",
        "output": "Debugging trace #96 completed: Issue isolated and corrected (Step: 96)",
        "explanation": "Executes logic for C++ Debugging Problem 96."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 96\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 96\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 96\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:36Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000097",
    "book": "cppdebugging",
    "order_index": 97,
    "title": "#097 C++ Debugging Problem 97",
    "slug": "cppdebugging-097-c-debugging-problem-97",
    "description": "Apply debugging technique #97 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 97 TRACE",
        "output": "Debugging trace #97 completed: Issue isolated and corrected (Step: 97)",
        "explanation": "Executes logic for C++ Debugging Problem 97."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 97\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 97\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 97\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:37Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000098",
    "book": "cppdebugging",
    "order_index": 98,
    "title": "#098 C++ Debugging Problem 98",
    "slug": "cppdebugging-098-c-debugging-problem-98",
    "description": "Apply debugging technique #98 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 98 TRACE",
        "output": "Debugging trace #98 completed: Issue isolated and corrected (Step: 98)",
        "explanation": "Executes logic for C++ Debugging Problem 98."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 98\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 98\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 98\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:38Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000099",
    "book": "cppdebugging",
    "order_index": 99,
    "title": "#099 C++ Debugging Problem 99",
    "slug": "cppdebugging-099-c-debugging-problem-99",
    "description": "Apply debugging technique #99 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 99 TRACE",
        "output": "Debugging trace #99 completed: Issue isolated and corrected (Step: 99)",
        "explanation": "Executes logic for C++ Debugging Problem 99."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 99\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 99\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 99\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:39Z"
  },
  {
    "id": "00000000-0000-4000-6002-000000000100",
    "book": "cppdebugging",
    "order_index": 100,
    "title": "#100 C++ Debugging Problem 100",
    "slug": "cppdebugging-100-c-debugging-problem-100",
    "description": "Apply debugging technique #100 (assertions, logging, sanitizers, or memory tracing) to diagnose and fix the scenario.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Debugging & Diagnostics",
    "tags": [
      "Debugging",
      "Assertions",
      "Logging",
      "Sanitizers",
      "Valgrind",
      "GDB"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEBUG_STEP 100 TRACE",
        "output": "Debugging trace #100 completed: Issue isolated and corrected (Step: 100)",
        "explanation": "Executes logic for C++ Debugging Problem 100."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Debugging Problem 100\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Debugging Problem 100\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Debugging Problem 100\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:40Z"
  }
];
