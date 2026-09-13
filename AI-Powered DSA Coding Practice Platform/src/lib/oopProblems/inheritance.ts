import { Problem } from '../../types/problem';

export const INHERITANCE_PROBLEMS: Problem[] = [
  {
    "id": "00000000-0000-4000-8008-000000000001",
    "book": "inheritance",
    "order_index": 1,
    "title": "#001 Single Inheritance Demonstration",
    "slug": "inheritance-001-single-inheritance-demonstration",
    "description": "Derive a `Dog` class from a `Animal` base class, inheriting `eat()` and adding `bark()`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Dog Buddy",
        "output": "Buddy eats food -> Buddy barks: Woof!",
        "explanation": "Executes logic for Single Inheritance Demonstration."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Single Inheritance Demonstration\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Single Inheritance Demonstration\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Single Inheritance Demonstration\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:01Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000002",
    "book": "inheritance",
    "order_index": 2,
    "title": "#002 Multilevel Inheritance Hierarchy",
    "slug": "inheritance-002-multilevel-inheritance-hierarchy",
    "description": "Implement `Vehicle` -> `Car` -> `ElectricCar` hierarchy with accumulated properties.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Tesla Model3 75kWh",
        "output": "Vehicle started -> Car driving -> Electric battery: 75kWh",
        "explanation": "Executes logic for Multilevel Inheritance Hierarchy."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Multilevel Inheritance Hierarchy\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Multilevel Inheritance Hierarchy\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Multilevel Inheritance Hierarchy\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:02Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000003",
    "book": "inheritance",
    "order_index": 3,
    "title": "#003 Multiple Inheritance (Two Base Classes)",
    "slug": "inheritance-003-multiple-inheritance-two-base-classes",
    "description": "Derive `SmartPhone` from both `Camera` and `Phone` base classes.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Take photo & Make call",
        "output": "Camera: Photo captured -> Phone: Call connected",
        "explanation": "Executes logic for Multiple Inheritance (Two Base Classes)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Multiple Inheritance (Two Base Classes)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Multiple Inheritance (Two Base Classes)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Multiple Inheritance (Two Base Classes)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:03Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000004",
    "book": "inheritance",
    "order_index": 4,
    "title": "#004 Hierarchical Inheritance (Multiple Derived from One Base)",
    "slug": "inheritance-004-hierarchical-inheritance-multiple-derived-from-one",
    "description": "Derive `Circle`, `Rectangle`, and `Triangle` from a single `Shape` base class.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Circle r=5, Rect 4x6",
        "output": "Circle Area: 78.54, Rectangle Area: 24.00",
        "explanation": "Executes logic for Hierarchical Inheritance (Multiple Derived from One Base)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Hierarchical Inheritance (Multiple Derived from One Base)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Hierarchical Inheritance (Multiple Derived from One Base)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Hierarchical Inheritance (Multiple Derived from One Base)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:04Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000005",
    "book": "inheritance",
    "order_index": 5,
    "title": "#005 Hybrid Inheritance Demonstration",
    "slug": "inheritance-005-hybrid-inheritance-demonstration",
    "description": "Combine multiple and multilevel inheritance into a hybrid object model.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Hybrid entity",
        "output": "Hybrid inheritance structure initialized",
        "explanation": "Executes logic for Hybrid Inheritance Demonstration."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Hybrid Inheritance Demonstration\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Hybrid Inheritance Demonstration\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Hybrid Inheritance Demonstration\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:05Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000006",
    "book": "inheritance",
    "order_index": 6,
    "title": "#006 The Diamond Problem in Multiple Inheritance",
    "slug": "inheritance-006-the-diamond-problem-in-multiple-inheritance",
    "description": "Demonstrate duplicate base class instances in `A -> B, A -> C, B & C -> D` diamond hierarchy.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Diamond duplicate data",
        "output": "Ambiguity detected: Two copies of Base A exist in D",
        "explanation": "Executes logic for The Diamond Problem in Multiple Inheritance."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// The Diamond Problem in Multiple Inheritance\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# The Diamond Problem in Multiple Inheritance\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// The Diamond Problem in Multiple Inheritance\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:06Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000007",
    "book": "inheritance",
    "order_index": 7,
    "title": "#007 Virtual Base Class Resolving Diamond Problem",
    "slug": "inheritance-007-virtual-base-class-resolving-diamond-problem",
    "description": "Use `virtual public Base` inheritance to ensure only one shared instance of Base A exists in D.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Virtual inheritance",
        "output": "Diamond resolved: Exactly 1 copy of Base A in D",
        "explanation": "Executes logic for Virtual Base Class Resolving Diamond Problem."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Virtual Base Class Resolving Diamond Problem\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Virtual Base Class Resolving Diamond Problem\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Virtual Base Class Resolving Diamond Problem\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:07Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000008",
    "book": "inheritance",
    "order_index": 8,
    "title": "#008 Calling Base Class Constructor from Derived Initializer List",
    "slug": "inheritance-008-calling-base-class-constructor-from-derived-initia",
    "description": "Pass parameters from `Car(name, wheels)` up to `Vehicle(name)` using member initializer list.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Truck 6 wheels",
        "output": "Vehicle initialized: Truck, Wheels: 6",
        "explanation": "Executes logic for Calling Base Class Constructor from Derived Initializer List."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Calling Base Class Constructor from Derived Initializer List\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Calling Base Class Constructor from Derived Initializer List\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Calling Base Class Constructor from Derived Initializer List\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:08Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000009",
    "book": "inheritance",
    "order_index": 9,
    "title": "#009 Constructor Calling Sequence in Multilevel Inheritance",
    "slug": "inheritance-009-constructor-calling-sequence-in-multilevel-inherit",
    "description": "Observe constructor execution order: Grandparent -> Parent -> Child.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Create Child",
        "output": "Grandparent Ctor -> Parent Ctor -> Child Ctor",
        "explanation": "Executes logic for Constructor Calling Sequence in Multilevel Inheritance."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Constructor Calling Sequence in Multilevel Inheritance\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constructor Calling Sequence in Multilevel Inheritance\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constructor Calling Sequence in Multilevel Inheritance\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:09Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000010",
    "book": "inheritance",
    "order_index": 10,
    "title": "#010 Destructor Calling Sequence in Inheritance",
    "slug": "inheritance-010-destructor-calling-sequence-in-inheritance",
    "description": "Observe destructor execution order: Child -> Parent -> Grandparent (reverse of constructor).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Destroy Child",
        "output": "Child Dtor -> Parent Dtor -> Grandparent Dtor",
        "explanation": "Executes logic for Destructor Calling Sequence in Inheritance."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Destructor Calling Sequence in Inheritance\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Destructor Calling Sequence in Inheritance\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Destructor Calling Sequence in Inheritance\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:10Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000011",
    "book": "inheritance",
    "order_index": 11,
    "title": "#011 Protected Member Access in Derived Class",
    "slug": "inheritance-011-protected-member-access-in-derived-class",
    "description": "Base class has protected `int speed`; Derived class modifies and displays `speed` directly.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Accelerate to 90",
        "output": "Protected speed modified in derived class: 90 km/h",
        "explanation": "Executes logic for Protected Member Access in Derived Class."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Protected Member Access in Derived Class\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Protected Member Access in Derived Class\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Protected Member Access in Derived Class\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:11Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000012",
    "book": "inheritance",
    "order_index": 12,
    "title": "#012 Public vs Protected vs Private Inheritance Modes",
    "slug": "inheritance-012-public-vs-protected-vs-private-inheritance-modes",
    "description": "Compare accessibility of base members under public, protected, and private derivation modes.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Inheritance modes",
        "output": "Public: public stays public; Protected: becomes protected; Private: becomes private",
        "explanation": "Executes logic for Public vs Protected vs Private Inheritance Modes."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Public vs Protected vs Private Inheritance Modes\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Public vs Protected vs Private Inheritance Modes\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Public vs Protected vs Private Inheritance Modes\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:12Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000013",
    "book": "inheritance",
    "order_index": 13,
    "title": "#013 Method Overriding in Derived Class",
    "slug": "inheritance-013-method-overriding-in-derived-class",
    "description": "Derived class provides its own implementation of `speak()` replacing base class version.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Cat says meow",
        "output": "Base Animal: ... -> Derived Cat: Meow!",
        "explanation": "Executes logic for Method Overriding in Derived Class."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Method Overriding in Derived Class\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Method Overriding in Derived Class\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Method Overriding in Derived Class\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:13Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000014",
    "book": "inheritance",
    "order_index": 14,
    "title": "#014 Calling Overridden Base Method (`Base::method()`)",
    "slug": "inheritance-014-calling-overridden-base-method-base-method",
    "description": "Invoke overridden base class method from derived class using scope resolution operator `Base::method()`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Derived calling Base::display()",
        "output": "Base display() -> Derived display() appended",
        "explanation": "Executes logic for Calling Overridden Base Method (`Base::method()`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Calling Overridden Base Method (`Base::method()`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Calling Overridden Base Method (`Base::method()`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Calling Overridden Base Method (`Base::method()`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:14Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000015",
    "book": "inheritance",
    "order_index": 15,
    "title": "#015 Hiding Base Overloads (Name Hiding in Derived Classes)",
    "slug": "inheritance-015-hiding-base-overloads-name-hiding-in-derived-class",
    "description": "Demonstrate that defining `foo(int)` in derived class hides `foo(double)` from base class.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Name hiding demo",
        "output": "Base overload hidden: explicit using Base::foo required",
        "explanation": "Executes logic for Hiding Base Overloads (Name Hiding in Derived Classes)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Hiding Base Overloads (Name Hiding in Derived Classes)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Hiding Base Overloads (Name Hiding in Derived Classes)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Hiding Base Overloads (Name Hiding in Derived Classes)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:15Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000016",
    "book": "inheritance",
    "order_index": 16,
    "title": "#016 Using Declaration to Un-Hide Base Overloads",
    "slug": "inheritance-016-using-declaration-to-un-hide-base-overloads",
    "description": "Use `using Base::foo;` in derived class to make all base overloads accessible.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Un-hide overloads",
        "output": "Both Base::foo(double) and Derived::foo(int) available",
        "explanation": "Executes logic for Using Declaration to Un-Hide Base Overloads."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Using Declaration to Un-Hide Base Overloads\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Using Declaration to Un-Hide Base Overloads\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Using Declaration to Un-Hide Base Overloads\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:16Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000017",
    "book": "inheritance",
    "order_index": 17,
    "title": "#017 Object Slicing When Assigning Derived to Base by Value",
    "slug": "inheritance-017-object-slicing-when-assigning-derived-to-base-by-v",
    "description": "Demonstrate slicing of derived attributes when copying `Derived` into `Base` value object.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Base b = derived",
        "output": "Slicing occurred: Derived-specific fields discarded",
        "explanation": "Executes logic for Object Slicing When Assigning Derived to Base by Value."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Object Slicing When Assigning Derived to Base by Value\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Object Slicing When Assigning Derived to Base by Value\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Object Slicing When Assigning Derived to Base by Value\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:17Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000018",
    "book": "inheritance",
    "order_index": 18,
    "title": "#018 Preserving Polymorphism with Base Pointers/References",
    "slug": "inheritance-018-preserving-polymorphism-with-base-pointers-referen",
    "description": "Use `Base* ptr = &derived;` to access derived objects without slicing.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Base* ptr = new Derived()",
        "output": "Full derived object preserved through base pointer",
        "explanation": "Executes logic for Preserving Polymorphism with Base Pointers/References."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Preserving Polymorphism with Base Pointers/References\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Preserving Polymorphism with Base Pointers/References\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Preserving Polymorphism with Base Pointers/References\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:18Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000019",
    "book": "inheritance",
    "order_index": 19,
    "title": "#019 Abstract Base Class with Pure Virtual Function",
    "slug": "inheritance-019-abstract-base-class-with-pure-virtual-function",
    "description": "Define `class Shape { virtual double area() = 0; };` and implement in `Circle`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Circle r=3",
        "output": "Abstract Shape contract fulfilled: Area = 28.27",
        "explanation": "Executes logic for Abstract Base Class with Pure Virtual Function."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Abstract Base Class with Pure Virtual Function\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Abstract Base Class with Pure Virtual Function\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Abstract Base Class with Pure Virtual Function\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:19Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000020",
    "book": "inheritance",
    "order_index": 20,
    "title": "#020 Inheriting from Interface (Pure Virtual Class)",
    "slug": "inheritance-020-inheriting-from-interface-pure-virtual-class",
    "description": "Implement multiple interfaces `Printable` and `Serializable` in a single class `Document`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Print and Serialize Doc",
        "output": "Document printed and serialized successfully",
        "explanation": "Executes logic for Inheriting from Interface (Pure Virtual Class)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheriting from Interface (Pure Virtual Class)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheriting from Interface (Pure Virtual Class)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheriting from Interface (Pure Virtual Class)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:20Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000021",
    "book": "inheritance",
    "order_index": 21,
    "title": "#021 Virtual Destructor in Base Class",
    "slug": "inheritance-021-virtual-destructor-in-base-class",
    "description": "Ensure base class destructor is `virtual` to prevent memory leaks when deleting through base pointer.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "delete basePtr",
        "output": "Derived destructor called before Base destructor",
        "explanation": "Executes logic for Virtual Destructor in Base Class."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Virtual Destructor in Base Class\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Virtual Destructor in Base Class\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Virtual Destructor in Base Class\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:21Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000022",
    "book": "inheritance",
    "order_index": 22,
    "title": "#022 Overriding Virtual Methods with `override` Keyword",
    "slug": "inheritance-022-overriding-virtual-methods-with-override-keyword",
    "description": "Use `override` specifier in derived class to catch signature mismatches at compile time.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Override virtual func",
        "output": "Virtual method overridden safely with compiler check",
        "explanation": "Executes logic for Overriding Virtual Methods with `override` Keyword."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Overriding Virtual Methods with `override` Keyword\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Overriding Virtual Methods with `override` Keyword\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Overriding Virtual Methods with `override` Keyword\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:22Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000023",
    "book": "inheritance",
    "order_index": 23,
    "title": "#023 Preventing Inheritance with `final` Class Specifier",
    "slug": "inheritance-023-preventing-inheritance-with-final-class-specifier",
    "description": "Mark class `class SecureToken final : public Base` to prevent further subclassing.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Final class",
        "output": "Class marked final cannot be derived from",
        "explanation": "Executes logic for Preventing Inheritance with `final` Class Specifier."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Preventing Inheritance with `final` Class Specifier\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Preventing Inheritance with `final` Class Specifier\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Preventing Inheritance with `final` Class Specifier\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:23Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000024",
    "book": "inheritance",
    "order_index": 24,
    "title": "#024 Preventing Method Overriding with `final` Specifier",
    "slug": "inheritance-024-preventing-method-overriding-with-final-specifier",
    "description": "Mark virtual method `virtual void save() final` in middle class to stop further overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Final method",
        "output": "Method cannot be overridden in subsequent derived classes",
        "explanation": "Executes logic for Preventing Method Overriding with `final` Specifier."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Preventing Method Overriding with `final` Specifier\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Preventing Method Overriding with `final` Specifier\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Preventing Method Overriding with `final` Specifier\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:24Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000025",
    "book": "inheritance",
    "order_index": 25,
    "title": "#025 Covariant Return Types in Virtual Functions",
    "slug": "inheritance-025-covariant-return-types-in-virtual-functions",
    "description": "Derived overridden virtual method returns a pointer to `Derived` instead of `Base*`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Clone method",
        "output": "Covariant return type: Returned Derived* from clone()",
        "explanation": "Executes logic for Covariant Return Types in Virtual Functions."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Covariant Return Types in Virtual Functions\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Covariant Return Types in Virtual Functions\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Covariant Return Types in Virtual Functions\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:25Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000026",
    "book": "inheritance",
    "order_index": 26,
    "title": "#026 Base Class Pointer Array (Heterogeneous Collection)",
    "slug": "inheritance-026-base-class-pointer-array-heterogeneous-collection",
    "description": "Store pointers to `Circle`, `Square`, `Triangle` in an array of `Shape*` and compute total area.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Circle(2), Square(4)",
        "output": "Total Area: 12.57 + 16.00 = 28.57",
        "explanation": "Executes logic for Base Class Pointer Array (Heterogeneous Collection)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Base Class Pointer Array (Heterogeneous Collection)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Base Class Pointer Array (Heterogeneous Collection)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Base Class Pointer Array (Heterogeneous Collection)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:26Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000027",
    "book": "inheritance",
    "order_index": 27,
    "title": "#027 Employee Hierarchy: Base Employee, Derived Manager and Engineer",
    "slug": "inheritance-027-employee-hierarchy-base-employee-derived-manager-a",
    "description": "Calculate salary where Manager adds bonus and Engineer adds project incentives.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Manager(5000, 1000), Engineer(4000, 800)",
        "output": "Manager Pay: $6000, Engineer Pay: $4800",
        "explanation": "Executes logic for Employee Hierarchy: Base Employee, Derived Manager and Engineer."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Employee Hierarchy: Base Employee, Derived Manager and Engineer\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Employee Hierarchy: Base Employee, Derived Manager and Engineer\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Employee Hierarchy: Base Employee, Derived Manager and Engineer\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:27Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000028",
    "book": "inheritance",
    "order_index": 28,
    "title": "#028 Bank Account Hierarchy: SavingsAccount with Interest and CheckingAccount with Fees",
    "slug": "inheritance-028-bank-account-hierarchy-savingsaccount-with-interes",
    "description": "Derive specialized accounts from `BankAccount` base with deposit and withdrawal rules.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Savings(1000, 5%), Checking(500, fee $2)",
        "output": "Savings with interest: $1050, Checking after fee: $498",
        "explanation": "Executes logic for Bank Account Hierarchy: SavingsAccount with Interest and CheckingAccount with Fees."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Bank Account Hierarchy: SavingsAccount with Interest and CheckingAccount with Fees\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Bank Account Hierarchy: SavingsAccount with Interest and CheckingAccount with Fees\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Bank Account Hierarchy: SavingsAccount with Interest and CheckingAccount with Fees\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:28Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000029",
    "book": "inheritance",
    "order_index": 29,
    "title": "#029 Vehicle Hierarchy: LandVehicle, WaterVehicle, AmphibiousVehicle (Multiple Inheritance)",
    "slug": "inheritance-029-vehicle-hierarchy-landvehicle-watervehicle-amphibi",
    "description": "Model `AmphibiousVehicle` inheriting drive() from LandVehicle and sail() from WaterVehicle.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Amphibious drive and sail",
        "output": "Driving on land at 60 km/h -> Sailing in water at 20 knots",
        "explanation": "Executes logic for Vehicle Hierarchy: LandVehicle, WaterVehicle, AmphibiousVehicle (Multiple Inheritance)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Vehicle Hierarchy: LandVehicle, WaterVehicle, AmphibiousVehicle (Multiple Inheritance)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vehicle Hierarchy: LandVehicle, WaterVehicle, AmphibiousVehicle (Multiple Inheritance)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vehicle Hierarchy: LandVehicle, WaterVehicle, AmphibiousVehicle (Multiple Inheritance)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:29Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000030",
    "book": "inheritance",
    "order_index": 30,
    "title": "#030 GUI Widget Hierarchy: Component -> Container -> Panel -> Window",
    "slug": "inheritance-030-gui-widget-hierarchy-component-container-panel-win",
    "description": "Model deep GUI widget tree with recursive `render()` and coordinate offsets.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Render Window with Panel",
        "output": "Rendered: Window -> Panel -> Button at (100, 150)",
        "explanation": "Executes logic for GUI Widget Hierarchy: Component -> Container -> Panel -> Window."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// GUI Widget Hierarchy: Component -> Container -> Panel -> Window\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# GUI Widget Hierarchy: Component -> Container -> Panel -> Window\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// GUI Widget Hierarchy: Component -> Container -> Panel -> Window\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:30Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000031",
    "book": "inheritance",
    "order_index": 31,
    "title": "#031 Game Entity Hierarchy: Entity -> LivingEntity -> Player, NPC, Monster",
    "slug": "inheritance-031-game-entity-hierarchy-entity-livingentity-player-n",
    "description": "Implement `takeDamage()` where Player uses armor, Monster has damage immunity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Player vs Monster dmg",
        "output": "Player takes 15 dmg (Armor mitigated), Monster takes 0 dmg (Immune)",
        "explanation": "Executes logic for Game Entity Hierarchy: Entity -> LivingEntity -> Player, NPC, Monster."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Game Entity Hierarchy: Entity -> LivingEntity -> Player, NPC, Monster\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Game Entity Hierarchy: Entity -> LivingEntity -> Player, NPC, Monster\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Game Entity Hierarchy: Entity -> LivingEntity -> Player, NPC, Monster\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:31Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000032",
    "book": "inheritance",
    "order_index": 32,
    "title": "#032 RPG Character Class Hierarchy: Warrior, Mage, Rogue with Unique Skills",
    "slug": "inheritance-032-rpg-character-class-hierarchy-warrior-mage-rogue-w",
    "description": "Model characters with base `attack()` and derived `specialSkill()` (Slash, Fireball, Backstab).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Mage casts Fireball",
        "output": "Mage cast Fireball for 85 magic damage!",
        "explanation": "Executes logic for RPG Character Class Hierarchy: Warrior, Mage, Rogue with Unique Skills."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// RPG Character Class Hierarchy: Warrior, Mage, Rogue with Unique Skills\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# RPG Character Class Hierarchy: Warrior, Mage, Rogue with Unique Skills\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// RPG Character Class Hierarchy: Warrior, Mage, Rogue with Unique Skills\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:32Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000033",
    "book": "inheritance",
    "order_index": 33,
    "title": "#033 Electronic Device Hierarchy: Appliance -> SmartAppliance -> SmartFridge",
    "slug": "inheritance-033-electronic-device-hierarchy-appliance-smartapplian",
    "description": "Appliance tracks power wattage, SmartAppliance adds WiFi, SmartFridge adds inventory.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SmartFridge Power+WiFi+Stock",
        "output": "SmartFridge: 150W, WiFi Connected, 12 Items in stock",
        "explanation": "Executes logic for Electronic Device Hierarchy: Appliance -> SmartAppliance -> SmartFridge."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Electronic Device Hierarchy: Appliance -> SmartAppliance -> SmartFridge\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Electronic Device Hierarchy: Appliance -> SmartAppliance -> SmartFridge\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Electronic Device Hierarchy: Appliance -> SmartAppliance -> SmartFridge\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:33Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000034",
    "book": "inheritance",
    "order_index": 34,
    "title": "#034 Academic Person Hierarchy: Person -> Student, Professor, TeachingAssistant",
    "slug": "inheritance-034-academic-person-hierarchy-person-student-professor",
    "description": "TeachingAssistant inherits from both Student and Professor with virtual base Person.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TA Alice",
        "output": "TA Alice: StudentID=S101, EmployeeID=E505 (Virtual Person shared)",
        "explanation": "Executes logic for Academic Person Hierarchy: Person -> Student, Professor, TeachingAssistant."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Academic Person Hierarchy: Person -> Student, Professor, TeachingAssistant\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Academic Person Hierarchy: Person -> Student, Professor, TeachingAssistant\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Academic Person Hierarchy: Person -> Student, Professor, TeachingAssistant\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:34Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000035",
    "book": "inheritance",
    "order_index": 35,
    "title": "#035 Media File Hierarchy: Media -> Audio, Video, StreamingVideo",
    "slug": "inheritance-035-media-file-hierarchy-media-audio-video-streamingvi",
    "description": "Base Media has file size, Audio has bitrate, Video has resolution, Streaming adds buffer.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Stream 1080p Video",
        "output": "1080p Video streaming at 60fps (Buffer: 5 sec)",
        "explanation": "Executes logic for Media File Hierarchy: Media -> Audio, Video, StreamingVideo."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Media File Hierarchy: Media -> Audio, Video, StreamingVideo\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Media File Hierarchy: Media -> Audio, Video, StreamingVideo\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Media File Hierarchy: Media -> Audio, Video, StreamingVideo\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:35Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000036",
    "book": "inheritance",
    "order_index": 36,
    "title": "#036 Custom Exception Class Hierarchy: BaseAppException -> DatabaseException, NetworkException",
    "slug": "inheritance-036-custom-exception-class-hierarchy-baseappexception",
    "description": "Define custom exception classes deriving from `std::exception` with `what()` overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Throw DatabaseException",
        "output": "Caught DatabaseException: 'Connection timeout on port 5432'",
        "explanation": "Executes logic for Custom Exception Class Hierarchy: BaseAppException -> DatabaseException, NetworkException."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Custom Exception Class Hierarchy: BaseAppException -> DatabaseException, NetworkException\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Custom Exception Class Hierarchy: BaseAppException -> DatabaseException, NetworkException\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Custom Exception Class Hierarchy: BaseAppException -> DatabaseException, NetworkException\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:36Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000037",
    "book": "inheritance",
    "order_index": 37,
    "title": "#037 Network Protocol Hierarchy: Protocol -> TCP, UDP, WebSocket",
    "slug": "inheritance-037-network-protocol-hierarchy-protocol-tcp-udp-websoc",
    "description": "Base Protocol defines connect() and send(); TCP implements handshake, UDP sends datagrams.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TCP connect -> send",
        "output": "TCP Handshake complete -> Sent 128 bytes reliably",
        "explanation": "Executes logic for Network Protocol Hierarchy: Protocol -> TCP, UDP, WebSocket."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Network Protocol Hierarchy: Protocol -> TCP, UDP, WebSocket\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Network Protocol Hierarchy: Protocol -> TCP, UDP, WebSocket\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Network Protocol Hierarchy: Protocol -> TCP, UDP, WebSocket\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:37Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000038",
    "book": "inheritance",
    "order_index": 38,
    "title": "#038 Sensor Hierarchy: Sensor -> TemperatureSensor, PressureSensor, HumiditySensor",
    "slug": "inheritance-038-sensor-hierarchy-sensor-temperaturesensor-pressure",
    "description": "Read various sensors polymorphically through `Sensor*` array.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Temp 24C, Pressure 1013hPa",
        "output": "Readings: Temp=24C, Pressure=1013hPa, Humidity=55%",
        "explanation": "Executes logic for Sensor Hierarchy: Sensor -> TemperatureSensor, PressureSensor, HumiditySensor."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Sensor Hierarchy: Sensor -> TemperatureSensor, PressureSensor, HumiditySensor\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sensor Hierarchy: Sensor -> TemperatureSensor, PressureSensor, HumiditySensor\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sensor Hierarchy: Sensor -> TemperatureSensor, PressureSensor, HumiditySensor\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:38Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000039",
    "book": "inheritance",
    "order_index": 39,
    "title": "#039 Logger Hierarchy: Logger -> ConsoleLogger, FileLogger, NetworkLogger",
    "slug": "inheritance-039-logger-hierarchy-logger-consolelogger-filelogger-n",
    "description": "Polymorphically route log messages to console, disk file, or remote syslog.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Log 'System OK'",
        "output": "ConsoleLogger: [INFO] System OK | FileLogger: Written to log.txt",
        "explanation": "Executes logic for Logger Hierarchy: Logger -> ConsoleLogger, FileLogger, NetworkLogger."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Logger Hierarchy: Logger -> ConsoleLogger, FileLogger, NetworkLogger\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Logger Hierarchy: Logger -> ConsoleLogger, FileLogger, NetworkLogger\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Logger Hierarchy: Logger -> ConsoleLogger, FileLogger, NetworkLogger\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:39Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000040",
    "book": "inheritance",
    "order_index": 40,
    "title": "#040 File System Node Hierarchy: FSNode -> File, Directory, Symlink",
    "slug": "inheritance-040-file-system-node-hierarchy-fsnode-file-directory-s",
    "description": "FSNode provides `getSize()`; Directory recursively sums sizes of all children.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Dir with 2 files (10KB, 20KB)",
        "output": "Directory total size: 30KB",
        "explanation": "Executes logic for File System Node Hierarchy: FSNode -> File, Directory, Symlink."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Node Hierarchy: FSNode -> File, Directory, Symlink\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Node Hierarchy: FSNode -> File, Directory, Symlink\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Node Hierarchy: FSNode -> File, Directory, Symlink\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:40Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000041",
    "book": "inheritance",
    "order_index": 41,
    "title": "#041 Sort Algorithm Hierarchy: Sorter -> BubbleSorter, QuickSorter, MergeSorter",
    "slug": "inheritance-041-sort-algorithm-hierarchy-sorter-bubblesorter-quick",
    "description": "Base Sorter provides `sort(vector<int>&)` and benchmarks execution time.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Sort [5, 2, 8, 1]",
        "output": "Sorted via QuickSort: [1, 2, 5, 8]",
        "explanation": "Executes logic for Sort Algorithm Hierarchy: Sorter -> BubbleSorter, QuickSorter, MergeSorter."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Sort Algorithm Hierarchy: Sorter -> BubbleSorter, QuickSorter, MergeSorter\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sort Algorithm Hierarchy: Sorter -> BubbleSorter, QuickSorter, MergeSorter\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sort Algorithm Hierarchy: Sorter -> BubbleSorter, QuickSorter, MergeSorter\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:41Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000042",
    "book": "inheritance",
    "order_index": 42,
    "title": "#042 Payment Gateway Hierarchy: Payment -> CreditCard, PayPal, ApplePay",
    "slug": "inheritance-042-payment-gateway-hierarchy-payment-creditcard-paypa",
    "description": "Each derived payment class validates credentials and processes transaction.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Process $150 via ApplePay",
        "output": "ApplePay authorized: $150 paid",
        "explanation": "Executes logic for Payment Gateway Hierarchy: Payment -> CreditCard, PayPal, ApplePay."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Payment Gateway Hierarchy: Payment -> CreditCard, PayPal, ApplePay\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Payment Gateway Hierarchy: Payment -> CreditCard, PayPal, ApplePay\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Payment Gateway Hierarchy: Payment -> CreditCard, PayPal, ApplePay\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:42Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000043",
    "book": "inheritance",
    "order_index": 43,
    "title": "#043 Compression Algorithm Hierarchy: Compressor -> ZipCompressor, GzipCompressor, Lz4Compressor",
    "slug": "inheritance-043-compression-algorithm-hierarchy-compressor-zipcomp",
    "description": "Base Compressor defines `compress(data)` and `decompress(data)` interface.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Compress 1000 bytes text",
        "output": "GzipCompressor: Compressed 1000B -> 320B (68% ratio)",
        "explanation": "Executes logic for Compression Algorithm Hierarchy: Compressor -> ZipCompressor, GzipCompressor, Lz4Compressor."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Compression Algorithm Hierarchy: Compressor -> ZipCompressor, GzipCompressor, Lz4Compressor\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Compression Algorithm Hierarchy: Compressor -> ZipCompressor, GzipCompressor, Lz4Compressor\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Compression Algorithm Hierarchy: Compressor -> ZipCompressor, GzipCompressor, Lz4Compressor\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:43Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000044",
    "book": "inheritance",
    "order_index": 44,
    "title": "#044 Document Formatter Hierarchy: Formatter -> HTMLFormatter, MarkdownFormatter, JSONFormatter",
    "slug": "inheritance-044-document-formatter-hierarchy-formatter-htmlformatt",
    "description": "Format same raw text object into HTML, Markdown, and JSON representations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Title 'Hello', Body 'World'",
        "output": "Markdown: '# Hello\nWorld' | HTML: '<h1>Hello</h1><p>World</p>'",
        "explanation": "Executes logic for Document Formatter Hierarchy: Formatter -> HTMLFormatter, MarkdownFormatter, JSONFormatter."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Document Formatter Hierarchy: Formatter -> HTMLFormatter, MarkdownFormatter, JSONFormatter\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Document Formatter Hierarchy: Formatter -> HTMLFormatter, MarkdownFormatter, JSONFormatter\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Document Formatter Hierarchy: Formatter -> HTMLFormatter, MarkdownFormatter, JSONFormatter\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:44Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000045",
    "book": "inheritance",
    "order_index": 45,
    "title": "#045 Database Driver Hierarchy: DBDriver -> PostgresDriver, MySQLDriver, SQLiteDriver",
    "slug": "inheritance-045-database-driver-hierarchy-dbdriver-postgresdriver",
    "description": "Polymorphically execute queries across different database drivers.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Query 'SELECT * FROM users'",
        "output": "PostgresDriver executed query: 3 rows returned",
        "explanation": "Executes logic for Database Driver Hierarchy: DBDriver -> PostgresDriver, MySQLDriver, SQLiteDriver."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Database Driver Hierarchy: DBDriver -> PostgresDriver, MySQLDriver, SQLiteDriver\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Database Driver Hierarchy: DBDriver -> PostgresDriver, MySQLDriver, SQLiteDriver\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Database Driver Hierarchy: DBDriver -> PostgresDriver, MySQLDriver, SQLiteDriver\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:45Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000046",
    "book": "inheritance",
    "order_index": 46,
    "title": "#046 Crypto Algorithm Hierarchy: Cipher -> AESCipher, RSACipher, Chacha20Cipher",
    "slug": "inheritance-046-crypto-algorithm-hierarchy-cipher-aescipher-rsacip",
    "description": "Base Cipher defines `encrypt(plaintext)` and `decrypt(ciphertext)`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Encrypt 'Secret'",
        "output": "AESCipher: Encrypted 16 bytes ciphertext -> Decrypted 'Secret'",
        "explanation": "Executes logic for Crypto Algorithm Hierarchy: Cipher -> AESCipher, RSACipher, Chacha20Cipher."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Crypto Algorithm Hierarchy: Cipher -> AESCipher, RSACipher, Chacha20Cipher\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Crypto Algorithm Hierarchy: Cipher -> AESCipher, RSACipher, Chacha20Cipher\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Crypto Algorithm Hierarchy: Cipher -> AESCipher, RSACipher, Chacha20Cipher\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:46Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000047",
    "book": "inheritance",
    "order_index": 47,
    "title": "#047 Notification Channel Hierarchy: Notifier -> EmailNotifier, SMSNotifier, PushNotifier",
    "slug": "inheritance-047-notification-channel-hierarchy-notifier-emailnotif",
    "description": "Broadcast single message across multiple notification channels.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Alert 'Server Down'",
        "output": "Email sent to admin@site.com | SMS sent to +1234567890",
        "explanation": "Executes logic for Notification Channel Hierarchy: Notifier -> EmailNotifier, SMSNotifier, PushNotifier."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Notification Channel Hierarchy: Notifier -> EmailNotifier, SMSNotifier, PushNotifier\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Notification Channel Hierarchy: Notifier -> EmailNotifier, SMSNotifier, PushNotifier\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Notification Channel Hierarchy: Notifier -> EmailNotifier, SMSNotifier, PushNotifier\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:47Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000048",
    "book": "inheritance",
    "order_index": 48,
    "title": "#048 Parser Hierarchy: Parser -> JSONParser, XMLParser, YAMLParser",
    "slug": "inheritance-048-parser-hierarchy-parser-jsonparser-xmlparser-yamlp",
    "description": "Base Parser defines `parse(raw_string)` returning structured Node tree.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Parse YAML config",
        "output": "YAMLParser constructed configuration tree with 4 nodes",
        "explanation": "Executes logic for Parser Hierarchy: Parser -> JSONParser, XMLParser, YAMLParser."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Parser Hierarchy: Parser -> JSONParser, XMLParser, YAMLParser\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parser Hierarchy: Parser -> JSONParser, XMLParser, YAMLParser\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parser Hierarchy: Parser -> JSONParser, XMLParser, YAMLParser\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:48Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000049",
    "book": "inheritance",
    "order_index": 49,
    "title": "#049 Math Function Hierarchy: MathFunction -> Linear, Quadratic, Exponential",
    "slug": "inheritance-049-math-function-hierarchy-mathfunction-linear-quadra",
    "description": "Evaluate f(x) and compute derivative f'(x) polymorphically.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "f(x) = 2x^2 + 3x, x=2",
        "output": "f(2) = 14, f'(2) = 11",
        "explanation": "Executes logic for Math Function Hierarchy: MathFunction -> Linear, Quadratic, Exponential."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Math Function Hierarchy: MathFunction -> Linear, Quadratic, Exponential\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Math Function Hierarchy: MathFunction -> Linear, Quadratic, Exponential\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Math Function Hierarchy: MathFunction -> Linear, Quadratic, Exponential\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:49Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000050",
    "book": "inheritance",
    "order_index": 50,
    "title": "#050 Smart Contract Hierarchy: Contract -> TokenContract, EscrowContract, StakingContract",
    "slug": "inheritance-050-smart-contract-hierarchy-contract-tokencontract-es",
    "description": "Base Contract verifies caller permissions and executes state transitions.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Token Transfer 50 to Bob",
        "output": "TokenContract: 50 tokens transferred to Bob",
        "explanation": "Executes logic for Smart Contract Hierarchy: Contract -> TokenContract, EscrowContract, StakingContract."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Smart Contract Hierarchy: Contract -> TokenContract, EscrowContract, StakingContract\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Smart Contract Hierarchy: Contract -> TokenContract, EscrowContract, StakingContract\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Smart Contract Hierarchy: Contract -> TokenContract, EscrowContract, StakingContract\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:50Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000051",
    "book": "inheritance",
    "order_index": 51,
    "title": "#051 Inheritance Problem 51",
    "slug": "inheritance-051-inheritance-problem-51",
    "description": "Model class inheritance hierarchy #51 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 51 1",
        "output": "Hierarchy #51 executed and derived contracts verified (Depth: 4)",
        "explanation": "Executes logic for Inheritance Problem 51."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 51\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 51\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 51\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:51Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000052",
    "book": "inheritance",
    "order_index": 52,
    "title": "#052 Inheritance Problem 52",
    "slug": "inheritance-052-inheritance-problem-52",
    "description": "Model class inheritance hierarchy #52 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 52 1",
        "output": "Hierarchy #52 executed and derived contracts verified (Depth: 1)",
        "explanation": "Executes logic for Inheritance Problem 52."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 52\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 52\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 52\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:52Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000053",
    "book": "inheritance",
    "order_index": 53,
    "title": "#053 Inheritance Problem 53",
    "slug": "inheritance-053-inheritance-problem-53",
    "description": "Model class inheritance hierarchy #53 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 53 1",
        "output": "Hierarchy #53 executed and derived contracts verified (Depth: 2)",
        "explanation": "Executes logic for Inheritance Problem 53."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 53\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 53\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 53\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:53Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000054",
    "book": "inheritance",
    "order_index": 54,
    "title": "#054 Inheritance Problem 54",
    "slug": "inheritance-054-inheritance-problem-54",
    "description": "Model class inheritance hierarchy #54 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 54 1",
        "output": "Hierarchy #54 executed and derived contracts verified (Depth: 3)",
        "explanation": "Executes logic for Inheritance Problem 54."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 54\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 54\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 54\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:54Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000055",
    "book": "inheritance",
    "order_index": 55,
    "title": "#055 Inheritance Problem 55",
    "slug": "inheritance-055-inheritance-problem-55",
    "description": "Model class inheritance hierarchy #55 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 55 1",
        "output": "Hierarchy #55 executed and derived contracts verified (Depth: 4)",
        "explanation": "Executes logic for Inheritance Problem 55."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 55\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 55\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 55\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:55Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000056",
    "book": "inheritance",
    "order_index": 56,
    "title": "#056 Inheritance Problem 56",
    "slug": "inheritance-056-inheritance-problem-56",
    "description": "Model class inheritance hierarchy #56 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 56 1",
        "output": "Hierarchy #56 executed and derived contracts verified (Depth: 1)",
        "explanation": "Executes logic for Inheritance Problem 56."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 56\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 56\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 56\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:56Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000057",
    "book": "inheritance",
    "order_index": 57,
    "title": "#057 Inheritance Problem 57",
    "slug": "inheritance-057-inheritance-problem-57",
    "description": "Model class inheritance hierarchy #57 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 57 1",
        "output": "Hierarchy #57 executed and derived contracts verified (Depth: 2)",
        "explanation": "Executes logic for Inheritance Problem 57."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 57\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 57\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 57\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:57Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000058",
    "book": "inheritance",
    "order_index": 58,
    "title": "#058 Inheritance Problem 58",
    "slug": "inheritance-058-inheritance-problem-58",
    "description": "Model class inheritance hierarchy #58 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 58 1",
        "output": "Hierarchy #58 executed and derived contracts verified (Depth: 3)",
        "explanation": "Executes logic for Inheritance Problem 58."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 58\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 58\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 58\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:58Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000059",
    "book": "inheritance",
    "order_index": 59,
    "title": "#059 Inheritance Problem 59",
    "slug": "inheritance-059-inheritance-problem-59",
    "description": "Model class inheritance hierarchy #59 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 59 1",
        "output": "Hierarchy #59 executed and derived contracts verified (Depth: 4)",
        "explanation": "Executes logic for Inheritance Problem 59."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 59\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 59\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 59\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:59Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000060",
    "book": "inheritance",
    "order_index": 60,
    "title": "#060 Inheritance Problem 60",
    "slug": "inheritance-060-inheritance-problem-60",
    "description": "Model class inheritance hierarchy #60 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 60 1",
        "output": "Hierarchy #60 executed and derived contracts verified (Depth: 1)",
        "explanation": "Executes logic for Inheritance Problem 60."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 60\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 60\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 60\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:00Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000061",
    "book": "inheritance",
    "order_index": 61,
    "title": "#061 Inheritance Problem 61",
    "slug": "inheritance-061-inheritance-problem-61",
    "description": "Model class inheritance hierarchy #61 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 61 1",
        "output": "Hierarchy #61 executed and derived contracts verified (Depth: 2)",
        "explanation": "Executes logic for Inheritance Problem 61."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 61\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 61\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 61\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:01Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000062",
    "book": "inheritance",
    "order_index": 62,
    "title": "#062 Inheritance Problem 62",
    "slug": "inheritance-062-inheritance-problem-62",
    "description": "Model class inheritance hierarchy #62 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 62 1",
        "output": "Hierarchy #62 executed and derived contracts verified (Depth: 3)",
        "explanation": "Executes logic for Inheritance Problem 62."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 62\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 62\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 62\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:02Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000063",
    "book": "inheritance",
    "order_index": 63,
    "title": "#063 Inheritance Problem 63",
    "slug": "inheritance-063-inheritance-problem-63",
    "description": "Model class inheritance hierarchy #63 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 63 1",
        "output": "Hierarchy #63 executed and derived contracts verified (Depth: 4)",
        "explanation": "Executes logic for Inheritance Problem 63."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 63\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 63\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 63\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:03Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000064",
    "book": "inheritance",
    "order_index": 64,
    "title": "#064 Inheritance Problem 64",
    "slug": "inheritance-064-inheritance-problem-64",
    "description": "Model class inheritance hierarchy #64 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 64 1",
        "output": "Hierarchy #64 executed and derived contracts verified (Depth: 1)",
        "explanation": "Executes logic for Inheritance Problem 64."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 64\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 64\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 64\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:04Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000065",
    "book": "inheritance",
    "order_index": 65,
    "title": "#065 Inheritance Problem 65",
    "slug": "inheritance-065-inheritance-problem-65",
    "description": "Model class inheritance hierarchy #65 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 65 1",
        "output": "Hierarchy #65 executed and derived contracts verified (Depth: 2)",
        "explanation": "Executes logic for Inheritance Problem 65."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 65\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 65\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 65\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:05Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000066",
    "book": "inheritance",
    "order_index": 66,
    "title": "#066 Inheritance Problem 66",
    "slug": "inheritance-066-inheritance-problem-66",
    "description": "Model class inheritance hierarchy #66 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 66 1",
        "output": "Hierarchy #66 executed and derived contracts verified (Depth: 3)",
        "explanation": "Executes logic for Inheritance Problem 66."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 66\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 66\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 66\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:06Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000067",
    "book": "inheritance",
    "order_index": 67,
    "title": "#067 Inheritance Problem 67",
    "slug": "inheritance-067-inheritance-problem-67",
    "description": "Model class inheritance hierarchy #67 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 67 1",
        "output": "Hierarchy #67 executed and derived contracts verified (Depth: 4)",
        "explanation": "Executes logic for Inheritance Problem 67."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 67\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 67\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 67\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:07Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000068",
    "book": "inheritance",
    "order_index": 68,
    "title": "#068 Inheritance Problem 68",
    "slug": "inheritance-068-inheritance-problem-68",
    "description": "Model class inheritance hierarchy #68 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 68 1",
        "output": "Hierarchy #68 executed and derived contracts verified (Depth: 1)",
        "explanation": "Executes logic for Inheritance Problem 68."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 68\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 68\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 68\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:08Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000069",
    "book": "inheritance",
    "order_index": 69,
    "title": "#069 Inheritance Problem 69",
    "slug": "inheritance-069-inheritance-problem-69",
    "description": "Model class inheritance hierarchy #69 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 69 1",
        "output": "Hierarchy #69 executed and derived contracts verified (Depth: 2)",
        "explanation": "Executes logic for Inheritance Problem 69."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 69\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 69\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 69\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:09Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000070",
    "book": "inheritance",
    "order_index": 70,
    "title": "#070 Inheritance Problem 70",
    "slug": "inheritance-070-inheritance-problem-70",
    "description": "Model class inheritance hierarchy #70 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 70 1",
        "output": "Hierarchy #70 executed and derived contracts verified (Depth: 3)",
        "explanation": "Executes logic for Inheritance Problem 70."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 70\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 70\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 70\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:10Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000071",
    "book": "inheritance",
    "order_index": 71,
    "title": "#071 Inheritance Problem 71",
    "slug": "inheritance-071-inheritance-problem-71",
    "description": "Model class inheritance hierarchy #71 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 71 1",
        "output": "Hierarchy #71 executed and derived contracts verified (Depth: 4)",
        "explanation": "Executes logic for Inheritance Problem 71."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 71\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 71\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 71\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:11Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000072",
    "book": "inheritance",
    "order_index": 72,
    "title": "#072 Inheritance Problem 72",
    "slug": "inheritance-072-inheritance-problem-72",
    "description": "Model class inheritance hierarchy #72 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 72 1",
        "output": "Hierarchy #72 executed and derived contracts verified (Depth: 1)",
        "explanation": "Executes logic for Inheritance Problem 72."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 72\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 72\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 72\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:12Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000073",
    "book": "inheritance",
    "order_index": 73,
    "title": "#073 Inheritance Problem 73",
    "slug": "inheritance-073-inheritance-problem-73",
    "description": "Model class inheritance hierarchy #73 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 73 1",
        "output": "Hierarchy #73 executed and derived contracts verified (Depth: 2)",
        "explanation": "Executes logic for Inheritance Problem 73."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 73\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 73\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 73\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:13Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000074",
    "book": "inheritance",
    "order_index": 74,
    "title": "#074 Inheritance Problem 74",
    "slug": "inheritance-074-inheritance-problem-74",
    "description": "Model class inheritance hierarchy #74 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 74 1",
        "output": "Hierarchy #74 executed and derived contracts verified (Depth: 3)",
        "explanation": "Executes logic for Inheritance Problem 74."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 74\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 74\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 74\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:14Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000075",
    "book": "inheritance",
    "order_index": 75,
    "title": "#075 Inheritance Problem 75",
    "slug": "inheritance-075-inheritance-problem-75",
    "description": "Model class inheritance hierarchy #75 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 75 1",
        "output": "Hierarchy #75 executed and derived contracts verified (Depth: 4)",
        "explanation": "Executes logic for Inheritance Problem 75."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 75\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 75\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 75\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:15Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000076",
    "book": "inheritance",
    "order_index": 76,
    "title": "#076 Inheritance Problem 76",
    "slug": "inheritance-076-inheritance-problem-76",
    "description": "Model class inheritance hierarchy #76 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 76 1",
        "output": "Hierarchy #76 executed and derived contracts verified (Depth: 1)",
        "explanation": "Executes logic for Inheritance Problem 76."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 76\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 76\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 76\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:16Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000077",
    "book": "inheritance",
    "order_index": 77,
    "title": "#077 Inheritance Problem 77",
    "slug": "inheritance-077-inheritance-problem-77",
    "description": "Model class inheritance hierarchy #77 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 77 1",
        "output": "Hierarchy #77 executed and derived contracts verified (Depth: 2)",
        "explanation": "Executes logic for Inheritance Problem 77."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 77\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 77\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 77\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:17Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000078",
    "book": "inheritance",
    "order_index": 78,
    "title": "#078 Inheritance Problem 78",
    "slug": "inheritance-078-inheritance-problem-78",
    "description": "Model class inheritance hierarchy #78 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 78 1",
        "output": "Hierarchy #78 executed and derived contracts verified (Depth: 3)",
        "explanation": "Executes logic for Inheritance Problem 78."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 78\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 78\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 78\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:18Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000079",
    "book": "inheritance",
    "order_index": 79,
    "title": "#079 Inheritance Problem 79",
    "slug": "inheritance-079-inheritance-problem-79",
    "description": "Model class inheritance hierarchy #79 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 79 1",
        "output": "Hierarchy #79 executed and derived contracts verified (Depth: 4)",
        "explanation": "Executes logic for Inheritance Problem 79."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 79\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 79\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 79\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:19Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000080",
    "book": "inheritance",
    "order_index": 80,
    "title": "#080 Inheritance Problem 80",
    "slug": "inheritance-080-inheritance-problem-80",
    "description": "Model class inheritance hierarchy #80 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 80 1",
        "output": "Hierarchy #80 executed and derived contracts verified (Depth: 1)",
        "explanation": "Executes logic for Inheritance Problem 80."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 80\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 80\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 80\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:20Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000081",
    "book": "inheritance",
    "order_index": 81,
    "title": "#081 Inheritance Problem 81",
    "slug": "inheritance-081-inheritance-problem-81",
    "description": "Model class inheritance hierarchy #81 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 81 1",
        "output": "Hierarchy #81 executed and derived contracts verified (Depth: 2)",
        "explanation": "Executes logic for Inheritance Problem 81."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 81\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 81\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 81\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:21Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000082",
    "book": "inheritance",
    "order_index": 82,
    "title": "#082 Inheritance Problem 82",
    "slug": "inheritance-082-inheritance-problem-82",
    "description": "Model class inheritance hierarchy #82 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 82 1",
        "output": "Hierarchy #82 executed and derived contracts verified (Depth: 3)",
        "explanation": "Executes logic for Inheritance Problem 82."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 82\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 82\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 82\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:22Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000083",
    "book": "inheritance",
    "order_index": 83,
    "title": "#083 Inheritance Problem 83",
    "slug": "inheritance-083-inheritance-problem-83",
    "description": "Model class inheritance hierarchy #83 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 83 1",
        "output": "Hierarchy #83 executed and derived contracts verified (Depth: 4)",
        "explanation": "Executes logic for Inheritance Problem 83."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 83\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 83\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 83\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:23Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000084",
    "book": "inheritance",
    "order_index": 84,
    "title": "#084 Inheritance Problem 84",
    "slug": "inheritance-084-inheritance-problem-84",
    "description": "Model class inheritance hierarchy #84 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 84 1",
        "output": "Hierarchy #84 executed and derived contracts verified (Depth: 1)",
        "explanation": "Executes logic for Inheritance Problem 84."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 84\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 84\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 84\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:24Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000085",
    "book": "inheritance",
    "order_index": 85,
    "title": "#085 Inheritance Problem 85",
    "slug": "inheritance-085-inheritance-problem-85",
    "description": "Model class inheritance hierarchy #85 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 85 1",
        "output": "Hierarchy #85 executed and derived contracts verified (Depth: 2)",
        "explanation": "Executes logic for Inheritance Problem 85."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 85\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 85\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 85\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:25Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000086",
    "book": "inheritance",
    "order_index": 86,
    "title": "#086 Inheritance Problem 86",
    "slug": "inheritance-086-inheritance-problem-86",
    "description": "Model class inheritance hierarchy #86 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 86 1",
        "output": "Hierarchy #86 executed and derived contracts verified (Depth: 3)",
        "explanation": "Executes logic for Inheritance Problem 86."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 86\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 86\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 86\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:26Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000087",
    "book": "inheritance",
    "order_index": 87,
    "title": "#087 Inheritance Problem 87",
    "slug": "inheritance-087-inheritance-problem-87",
    "description": "Model class inheritance hierarchy #87 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 87 1",
        "output": "Hierarchy #87 executed and derived contracts verified (Depth: 4)",
        "explanation": "Executes logic for Inheritance Problem 87."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 87\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 87\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 87\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:27Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000088",
    "book": "inheritance",
    "order_index": 88,
    "title": "#088 Inheritance Problem 88",
    "slug": "inheritance-088-inheritance-problem-88",
    "description": "Model class inheritance hierarchy #88 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 88 1",
        "output": "Hierarchy #88 executed and derived contracts verified (Depth: 1)",
        "explanation": "Executes logic for Inheritance Problem 88."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 88\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 88\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 88\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:28Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000089",
    "book": "inheritance",
    "order_index": 89,
    "title": "#089 Inheritance Problem 89",
    "slug": "inheritance-089-inheritance-problem-89",
    "description": "Model class inheritance hierarchy #89 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 89 1",
        "output": "Hierarchy #89 executed and derived contracts verified (Depth: 2)",
        "explanation": "Executes logic for Inheritance Problem 89."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 89\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 89\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 89\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:29Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000090",
    "book": "inheritance",
    "order_index": 90,
    "title": "#090 Inheritance Problem 90",
    "slug": "inheritance-090-inheritance-problem-90",
    "description": "Model class inheritance hierarchy #90 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 90 1",
        "output": "Hierarchy #90 executed and derived contracts verified (Depth: 3)",
        "explanation": "Executes logic for Inheritance Problem 90."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 90\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 90\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 90\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:30Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000091",
    "book": "inheritance",
    "order_index": 91,
    "title": "#091 Inheritance Problem 91",
    "slug": "inheritance-091-inheritance-problem-91",
    "description": "Model class inheritance hierarchy #91 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 91 1",
        "output": "Hierarchy #91 executed and derived contracts verified (Depth: 4)",
        "explanation": "Executes logic for Inheritance Problem 91."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 91\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 91\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 91\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:31Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000092",
    "book": "inheritance",
    "order_index": 92,
    "title": "#092 Inheritance Problem 92",
    "slug": "inheritance-092-inheritance-problem-92",
    "description": "Model class inheritance hierarchy #92 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 92 1",
        "output": "Hierarchy #92 executed and derived contracts verified (Depth: 1)",
        "explanation": "Executes logic for Inheritance Problem 92."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 92\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 92\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 92\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:32Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000093",
    "book": "inheritance",
    "order_index": 93,
    "title": "#093 Inheritance Problem 93",
    "slug": "inheritance-093-inheritance-problem-93",
    "description": "Model class inheritance hierarchy #93 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 93 1",
        "output": "Hierarchy #93 executed and derived contracts verified (Depth: 2)",
        "explanation": "Executes logic for Inheritance Problem 93."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 93\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 93\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 93\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:33Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000094",
    "book": "inheritance",
    "order_index": 94,
    "title": "#094 Inheritance Problem 94",
    "slug": "inheritance-094-inheritance-problem-94",
    "description": "Model class inheritance hierarchy #94 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 94 1",
        "output": "Hierarchy #94 executed and derived contracts verified (Depth: 3)",
        "explanation": "Executes logic for Inheritance Problem 94."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 94\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 94\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 94\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:34Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000095",
    "book": "inheritance",
    "order_index": 95,
    "title": "#095 Inheritance Problem 95",
    "slug": "inheritance-095-inheritance-problem-95",
    "description": "Model class inheritance hierarchy #95 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 95 1",
        "output": "Hierarchy #95 executed and derived contracts verified (Depth: 4)",
        "explanation": "Executes logic for Inheritance Problem 95."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 95\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 95\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 95\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:35Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000096",
    "book": "inheritance",
    "order_index": 96,
    "title": "#096 Inheritance Problem 96",
    "slug": "inheritance-096-inheritance-problem-96",
    "description": "Model class inheritance hierarchy #96 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 96 1",
        "output": "Hierarchy #96 executed and derived contracts verified (Depth: 1)",
        "explanation": "Executes logic for Inheritance Problem 96."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 96\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 96\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 96\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:36Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000097",
    "book": "inheritance",
    "order_index": 97,
    "title": "#097 Inheritance Problem 97",
    "slug": "inheritance-097-inheritance-problem-97",
    "description": "Model class inheritance hierarchy #97 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 97 1",
        "output": "Hierarchy #97 executed and derived contracts verified (Depth: 2)",
        "explanation": "Executes logic for Inheritance Problem 97."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 97\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 97\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 97\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:37Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000098",
    "book": "inheritance",
    "order_index": 98,
    "title": "#098 Inheritance Problem 98",
    "slug": "inheritance-098-inheritance-problem-98",
    "description": "Model class inheritance hierarchy #98 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 98 1",
        "output": "Hierarchy #98 executed and derived contracts verified (Depth: 3)",
        "explanation": "Executes logic for Inheritance Problem 98."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 98\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 98\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 98\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:38Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000099",
    "book": "inheritance",
    "order_index": 99,
    "title": "#099 Inheritance Problem 99",
    "slug": "inheritance-099-inheritance-problem-99",
    "description": "Model class inheritance hierarchy #99 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 99 1",
        "output": "Hierarchy #99 executed and derived contracts verified (Depth: 4)",
        "explanation": "Executes logic for Inheritance Problem 99."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 99\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 99\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 99\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:39Z"
  },
  {
    "id": "00000000-0000-4000-8008-000000000100",
    "book": "inheritance",
    "order_index": 100,
    "title": "#100 Inheritance Problem 100",
    "slug": "inheritance-100-inheritance-problem-100",
    "description": "Model class inheritance hierarchy #100 establishing base and derived relationships, constructor delegation, and method overrides.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Inheritance",
    "tags": [
      "Inheritance",
      "Derived Classes",
      "Base Classes",
      "Multiple Inheritance",
      "Virtual Base Class"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INHERIT_PARAM 100 1",
        "output": "Hierarchy #100 executed and derived contracts verified (Depth: 1)",
        "explanation": "Executes logic for Inheritance Problem 100."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inheritance Problem 100\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inheritance Problem 100\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inheritance Problem 100\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:40Z"
  }
];
