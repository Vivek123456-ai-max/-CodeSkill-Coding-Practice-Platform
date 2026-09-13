import { Problem } from '../../types/problem';

export const CPP_OOP_PROBLEMS: Problem[] = [
  {
    "id": "00000000-0000-4000-8001-000000000001",
    "book": "cppoop",
    "order_index": 1,
    "title": "#001 OOP Principles Identification",
    "slug": "cppoop-001-oop-principles-identification",
    "description": "Given descriptions of programming paradigms, identify whether the approach follows Procedural or Object-Oriented paradigm.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Procedural vs OOP",
        "output": "OOP: Encapsulation, Inheritance, Polymorphism, Abstraction",
        "explanation": "Executes logic for OOP Principles Identification."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Principles Identification\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Principles Identification\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Principles Identification\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:01Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000002",
    "book": "cppoop",
    "order_index": 2,
    "title": "#002 Class vs Object Representation",
    "slug": "cppoop-002-class-vs-object-representation",
    "description": "Create a basic object representing a real-world entity with state (attributes) and behavior (methods).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Car ModelX Red 2024",
        "output": "Entity Car: Model=ModelX, Color=Red, Year=2024",
        "explanation": "Executes logic for Class vs Object Representation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class vs Object Representation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class vs Object Representation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class vs Object Representation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:02Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000003",
    "book": "cppoop",
    "order_index": 3,
    "title": "#003 State Mutation and State Invariants",
    "slug": "cppoop-003-state-mutation-and-state-invariants",
    "description": "Model an entity whose state changes only through valid method calls, rejecting invalid mutations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_SPEED 80 SET_SPEED -20",
        "output": "Speed: 80, Invalid speed ignored: -20, Current Speed: 80",
        "explanation": "Executes logic for State Mutation and State Invariants."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// State Mutation and State Invariants\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# State Mutation and State Invariants\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// State Mutation and State Invariants\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:03Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000004",
    "book": "cppoop",
    "order_index": 4,
    "title": "#004 Object Identity vs Value Equality",
    "slug": "cppoop-004-object-identity-vs-value-equality",
    "description": "Compare two objects by their memory addresses (identity) versus their internal attribute values (equality).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Obj1(5, 10) Obj2(5, 10)",
        "output": "Values: Equal, Memory Addresses: Distinct",
        "explanation": "Executes logic for Object Identity vs Value Equality."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Object Identity vs Value Equality\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Object Identity vs Value Equality\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Object Identity vs Value Equality\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:04Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000005",
    "book": "cppoop",
    "order_index": 5,
    "title": "#005 Procedural to OOP Refactoring",
    "slug": "cppoop-005-procedural-to-oop-refactoring",
    "description": "Refactor a procedural area calculation function into a Shape object holding dimensions and area logic.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Rectangle 4 5",
        "output": "Rectangle Area: 20",
        "explanation": "Executes logic for Procedural to OOP Refactoring."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Procedural to OOP Refactoring\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Procedural to OOP Refactoring\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Procedural to OOP Refactoring\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:05Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000006",
    "book": "cppoop",
    "order_index": 6,
    "title": "#006 Abstraction Layer Simulation",
    "slug": "cppoop-006-abstraction-layer-simulation",
    "description": "Implement a high-level CoffeeMachine class that hides internal boiling, grinding, and brewing mechanics.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "BREW Espresso",
        "output": "Coffee Ready: Espresso (Internal steps abstracted)",
        "explanation": "Executes logic for Abstraction Layer Simulation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Abstraction Layer Simulation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Abstraction Layer Simulation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Abstraction Layer Simulation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:06Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000007",
    "book": "cppoop",
    "order_index": 7,
    "title": "#007 Data Hiding in Real World Entities",
    "slug": "cppoop-007-data-hiding-in-real-world-entities",
    "description": "Demonstrate data hiding where account balance cannot be accessed directly without authentication.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "PIN 1234 WITHDRAW 500",
        "output": "Authenticated: Withdrew 500, New Balance: 1500",
        "explanation": "Executes logic for Data Hiding in Real World Entities."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Data Hiding in Real World Entities\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Data Hiding in Real World Entities\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Data Hiding in Real World Entities\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:07Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000008",
    "book": "cppoop",
    "order_index": 8,
    "title": "#008 Separation of Concerns in OOP",
    "slug": "cppoop-008-separation-of-concerns-in-oop",
    "description": "Design separate classes for Order, InvoicePrinter, and PaymentProcessor following OOP design principles.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Order #101 250 USD",
        "output": "Order #101 Processed, Invoice Printed, Paid 250 USD",
        "explanation": "Executes logic for Separation of Concerns in OOP."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Separation of Concerns in OOP\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Separation of Concerns in OOP\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Separation of Concerns in OOP\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:08Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000009",
    "book": "cppoop",
    "order_index": 9,
    "title": "#009 Cohesion and Coupling Assessment",
    "slug": "cppoop-009-cohesion-and-coupling-assessment",
    "description": "Model high cohesion by creating a MathVector class handling only vector arithmetic.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "V1(3, 4) V2(1, 2)",
        "output": "Vector Sum: (4, 6)",
        "explanation": "Executes logic for Cohesion and Coupling Assessment."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Cohesion and Coupling Assessment\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Cohesion and Coupling Assessment\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Cohesion and Coupling Assessment\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:09Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000010",
    "book": "cppoop",
    "order_index": 10,
    "title": "#010 Open Closed Principle Demonstration",
    "slug": "cppoop-010-open-closed-principle-demonstration",
    "description": "Design a DiscountCalculator class open for extension with new discount types without modifying core code.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VIP 1000",
        "output": "VIP Discount Applied: Final Amount = 800",
        "explanation": "Executes logic for Open Closed Principle Demonstration."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Open Closed Principle Demonstration\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Open Closed Principle Demonstration\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Open Closed Principle Demonstration\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:10Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000011",
    "book": "cppoop",
    "order_index": 11,
    "title": "#011 Liskov Substitution Principle Demo",
    "slug": "cppoop-011-liskov-substitution-principle-demo",
    "description": "Demonstrate LSP compliance where a Square and Rectangle adhere to expected geometry contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Rectangle 5 10",
        "output": "Rectangle Width: 5, Height: 10, Area: 50",
        "explanation": "Executes logic for Liskov Substitution Principle Demo."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Liskov Substitution Principle Demo\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Liskov Substitution Principle Demo\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Liskov Substitution Principle Demo\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:11Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000012",
    "book": "cppoop",
    "order_index": 12,
    "title": "#012 Interface Segregation Principle",
    "slug": "cppoop-012-interface-segregation-principle",
    "description": "Split a monolithic Device interface into Printable, Scannable, and Faxable interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "PRINT Doc1",
        "output": "Printed: Doc1",
        "explanation": "Executes logic for Interface Segregation Principle."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Interface Segregation Principle\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Interface Segregation Principle\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Interface Segregation Principle\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:12Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000013",
    "book": "cppoop",
    "order_index": 13,
    "title": "#013 Dependency Inversion Principle",
    "slug": "cppoop-013-dependency-inversion-principle",
    "description": "Decouple a NotificationService from specific delivery channels using an abstract MessageSender interface.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "EMAIL Welcome",
        "output": "Email sent: Welcome",
        "explanation": "Executes logic for Dependency Inversion Principle."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Dependency Inversion Principle\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Dependency Inversion Principle\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Dependency Inversion Principle\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:13Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000014",
    "book": "cppoop",
    "order_index": 14,
    "title": "#014 Single Responsibility Entity Modeling",
    "slug": "cppoop-014-single-responsibility-entity-modeling",
    "description": "Separate UserData storage from UserAuthentication logic into distinct cooperating classes.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "User Alice Login 1234",
        "output": "Alice authenticated successfully",
        "explanation": "Executes logic for Single Responsibility Entity Modeling."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Single Responsibility Entity Modeling\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Single Responsibility Entity Modeling\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Single Responsibility Entity Modeling\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:14Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000015",
    "book": "cppoop",
    "order_index": 15,
    "title": "#015 Law of Demeter (Least Knowledge)",
    "slug": "cppoop-015-law-of-demeter-least-knowledge",
    "description": "Refactor deeply nested object calls a.getB().getC().doAction() to direct delegated methods.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Customer Wallet Balance",
        "output": "Payment approved via Customer.pay() directly",
        "explanation": "Executes logic for Law of Demeter (Least Knowledge)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Law of Demeter (Least Knowledge)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Law of Demeter (Least Knowledge)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Law of Demeter (Least Knowledge)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:15Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000016",
    "book": "cppoop",
    "order_index": 16,
    "title": "#016 Object State Machine Modeling",
    "slug": "cppoop-016-object-state-machine-modeling",
    "description": "Implement an Order state machine transitioning between CREATED, PAID, SHIPPED, DELIVERED.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TRANSITION PAY SHIP DELIVER",
        "output": "State: CREATED -> PAID -> SHIPPED -> DELIVERED",
        "explanation": "Executes logic for Object State Machine Modeling."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Object State Machine Modeling\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Object State Machine Modeling\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Object State Machine Modeling\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:16Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000017",
    "book": "cppoop",
    "order_index": 17,
    "title": "#017 Composition over Inheritance",
    "slug": "cppoop-017-composition-over-inheritance",
    "description": "Model a Robot using composed Arm, Leg, and Sensor components instead of deep inheritance.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Robot Build Arm Leg",
        "output": "Robot operational with composed Arm & Leg",
        "explanation": "Executes logic for Composition over Inheritance."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Composition over Inheritance\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Composition over Inheritance\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Composition over Inheritance\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:17Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000018",
    "book": "cppoop",
    "order_index": 18,
    "title": "#018 Immutable Value Object Pattern",
    "slug": "cppoop-018-immutable-value-object-pattern",
    "description": "Implement an immutable Money class where arithmetic operations return new Money instances.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Money(100) + Money(50)",
        "output": "Result: Money(150), Original: Money(100)",
        "explanation": "Executes logic for Immutable Value Object Pattern."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Immutable Value Object Pattern\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Immutable Value Object Pattern\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Immutable Value Object Pattern\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:18Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000019",
    "book": "cppoop",
    "order_index": 19,
    "title": "#019 Fluent Interface Builder Concept",
    "slug": "cppoop-019-fluent-interface-builder-concept",
    "description": "Design a QueryBuilder object allowing chained configurations before executing.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SELECT id FROM users WHERE age > 18",
        "output": "Query: SELECT id FROM users WHERE age > 18",
        "explanation": "Executes logic for Fluent Interface Builder Concept."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Fluent Interface Builder Concept\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Fluent Interface Builder Concept\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Fluent Interface Builder Concept\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:19Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000020",
    "book": "cppoop",
    "order_index": 20,
    "title": "#020 Domain Driven Entity with UUID",
    "slug": "cppoop-020-domain-driven-entity-with-uuid",
    "description": "Create an Account entity holding an auto-generated unique identifier and business methods.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Account Create Bob 500",
        "output": "Account Bob (ID: ACC-101) Balance: 500",
        "explanation": "Executes logic for Domain Driven Entity with UUID."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Domain Driven Entity with UUID\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Domain Driven Entity with UUID\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Domain Driven Entity with UUID\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:20Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000021",
    "book": "cppoop",
    "order_index": 21,
    "title": "#021 Polymorphic Dispatch Pattern",
    "slug": "cppoop-021-polymorphic-dispatch-pattern",
    "description": "Simulate dynamic dispatch across multiple animal sound producers.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Dog Cat Cow",
        "output": "Dog: Woof, Cat: Meow, Cow: Moo",
        "explanation": "Executes logic for Polymorphic Dispatch Pattern."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphic Dispatch Pattern\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphic Dispatch Pattern\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphic Dispatch Pattern\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:21Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000022",
    "book": "cppoop",
    "order_index": 22,
    "title": "#022 Factory Method Pattern in OOP",
    "slug": "cppoop-022-factory-method-pattern-in-oop",
    "description": "Implement a factory creating Shape objects based on a type string input.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Circle 5",
        "output": "Created Circle with Radius 5, Area: 78.54",
        "explanation": "Executes logic for Factory Method Pattern in OOP."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Factory Method Pattern in OOP\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Factory Method Pattern in OOP\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Factory Method Pattern in OOP\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:22Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000023",
    "book": "cppoop",
    "order_index": 23,
    "title": "#023 Singleton Pattern Class Design",
    "slug": "cppoop-023-singleton-pattern-class-design",
    "description": "Design a ConfigurationManager class ensuring exactly one instance exists throughout execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "GET_INSTANCE SET_THEME dark",
        "output": "Theme set to dark on Singleton ConfigManager",
        "explanation": "Executes logic for Singleton Pattern Class Design."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Singleton Pattern Class Design\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Singleton Pattern Class Design\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Singleton Pattern Class Design\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:23Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000024",
    "book": "cppoop",
    "order_index": 24,
    "title": "#024 Observer Pattern Event Broadcaster",
    "slug": "cppoop-024-observer-pattern-event-broadcaster",
    "description": "Implement a Subject notifying registered Observer objects on state updates.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "WeatherUpdate 32C",
        "output": "Display1: 32C, Display2: 32C notified",
        "explanation": "Executes logic for Observer Pattern Event Broadcaster."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Observer Pattern Event Broadcaster\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Observer Pattern Event Broadcaster\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Observer Pattern Event Broadcaster\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:24Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000025",
    "book": "cppoop",
    "order_index": 25,
    "title": "#025 Strategy Pattern Payment Selector",
    "slug": "cppoop-025-strategy-pattern-payment-selector",
    "description": "Implement interchangeable payment strategies (CreditCard, PayPal, Crypto) in a Cart class.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Cart Total 300 PAY Crypto",
        "output": "Processed 300 via Crypto Strategy",
        "explanation": "Executes logic for Strategy Pattern Payment Selector."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Strategy Pattern Payment Selector\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Strategy Pattern Payment Selector\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Strategy Pattern Payment Selector\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:25Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000026",
    "book": "cppoop",
    "order_index": 26,
    "title": "#026 Decorator Pattern Coffee Addons",
    "slug": "cppoop-026-decorator-pattern-coffee-addons",
    "description": "Dynamically add Milk and Sugar decorators to a BaseCoffee object calculating cost.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Coffee + Milk + Sugar",
        "output": "Cost: 5.50 (Base: 3.0, Milk: 1.5, Sugar: 1.0)",
        "explanation": "Executes logic for Decorator Pattern Coffee Addons."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Decorator Pattern Coffee Addons\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Decorator Pattern Coffee Addons\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Decorator Pattern Coffee Addons\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:26Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000027",
    "book": "cppoop",
    "order_index": 27,
    "title": "#027 Adapter Pattern Legacy Integrator",
    "slug": "cppoop-027-adapter-pattern-legacy-integrator",
    "description": "Wrap a legacy RectangleAPI to fit a modern ModernShape interface.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Draw LegacyRect(10, 20)",
        "output": "Adapted LegacyRect to ModernShape: Rendered (10, 20)",
        "explanation": "Executes logic for Adapter Pattern Legacy Integrator."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Adapter Pattern Legacy Integrator\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Adapter Pattern Legacy Integrator\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Adapter Pattern Legacy Integrator\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:27Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000028",
    "book": "cppoop",
    "order_index": 28,
    "title": "#028 Facade Pattern Home Theater",
    "slug": "cppoop-028-facade-pattern-home-theater",
    "description": "Create a HomeTheaterFacade simplifying operations across Amplifier, Lights, and Projector.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "WATCH_MOVIE Inception",
        "output": "Lights dimmed, Amp ON, Projector streaming Inception",
        "explanation": "Executes logic for Facade Pattern Home Theater."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Facade Pattern Home Theater\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Facade Pattern Home Theater\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Facade Pattern Home Theater\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:28Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000029",
    "book": "cppoop",
    "order_index": 29,
    "title": "#029 Command Pattern Remote Control",
    "slug": "cppoop-029-command-pattern-remote-control",
    "description": "Encapsulate LightOn and LightOff operations into executable Command objects with undo.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "PRESS_ON UNDO",
        "output": "Light turned ON -> Undone: Light turned OFF",
        "explanation": "Executes logic for Command Pattern Remote Control."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Command Pattern Remote Control\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Command Pattern Remote Control\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Command Pattern Remote Control\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:29Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000030",
    "book": "cppoop",
    "order_index": 30,
    "title": "#030 Template Method Pattern Beverage",
    "slug": "cppoop-030-template-method-pattern-beverage",
    "description": "Define template algorithm for brewing hot drinks with primitive hook methods.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Tea Coffee",
        "output": "Boil -> Steep/Brew -> Pour -> Add Condiments",
        "explanation": "Executes logic for Template Method Pattern Beverage."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Method Pattern Beverage\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Method Pattern Beverage\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Method Pattern Beverage\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:30Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000031",
    "book": "cppoop",
    "order_index": 31,
    "title": "#031 Active Record Pattern Simulation",
    "slug": "cppoop-031-active-record-pattern-simulation",
    "description": "Implement a UserRecord class that maps object properties to simulated DB rows.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SAVE Alice 25",
        "output": "Row inserted: (id=1, name=Alice, age=25)",
        "explanation": "Executes logic for Active Record Pattern Simulation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Active Record Pattern Simulation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Active Record Pattern Simulation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Active Record Pattern Simulation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:31Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000032",
    "book": "cppoop",
    "order_index": 32,
    "title": "#032 Data Transfer Object (DTO) Pattern",
    "slug": "cppoop-032-data-transfer-object-dto-pattern",
    "description": "Implement a UserDTO class packing multiple entity fields for lightweight transfer.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Alice alice@mail.com 9876543210",
        "output": "DTO created: {Alice, alice@mail.com}",
        "explanation": "Executes logic for Data Transfer Object (DTO) Pattern."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Data Transfer Object (DTO) Pattern\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Data Transfer Object (DTO) Pattern\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Data Transfer Object (DTO) Pattern\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:32Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000033",
    "book": "cppoop",
    "order_index": 33,
    "title": "#033 Memento Pattern Text Editor Undo",
    "slug": "cppoop-033-memento-pattern-text-editor-undo",
    "description": "Implement Memento snapshotting for a TextEditor saving state before modifications.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TYPE Hello TYPE World UNDO",
        "output": "Current text: Hello",
        "explanation": "Executes logic for Memento Pattern Text Editor Undo."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Memento Pattern Text Editor Undo\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Memento Pattern Text Editor Undo\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Memento Pattern Text Editor Undo\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:33Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000034",
    "book": "cppoop",
    "order_index": 34,
    "title": "#034 Flyweight Pattern Forest Trees",
    "slug": "cppoop-034-flyweight-pattern-forest-trees",
    "description": "Share common intrinsic TreeType state across thousands of individual Tree objects.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "1000 Oak Trees",
        "output": "Shared 1 Oak Type across 1000 Tree coordinate objects",
        "explanation": "Executes logic for Flyweight Pattern Forest Trees."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Flyweight Pattern Forest Trees\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Flyweight Pattern Forest Trees\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Flyweight Pattern Forest Trees\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:34Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000035",
    "book": "cppoop",
    "order_index": 35,
    "title": "#035 Proxy Pattern Image Lazy Loader",
    "slug": "cppoop-035-proxy-pattern-image-lazy-loader",
    "description": "Implement HighResolutionImage proxy that defers heavy disk loading until display() is called.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LOAD photo.png DISPLAY",
        "output": "Proxy: Loading disk image photo.png -> Displayed",
        "explanation": "Executes logic for Proxy Pattern Image Lazy Loader."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Proxy Pattern Image Lazy Loader\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Proxy Pattern Image Lazy Loader\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Proxy Pattern Image Lazy Loader\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:35Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000036",
    "book": "cppoop",
    "order_index": 36,
    "title": "#036 Bridge Pattern Remote and Devices",
    "slug": "cppoop-036-bridge-pattern-remote-and-devices",
    "description": "Decouple RemoteControl abstraction from TV and Radio device implementations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SonyTV VolumeUp",
        "output": "Sony TV: Volume increased to 11",
        "explanation": "Executes logic for Bridge Pattern Remote and Devices."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Bridge Pattern Remote and Devices\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Bridge Pattern Remote and Devices\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Bridge Pattern Remote and Devices\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:36Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000037",
    "book": "cppoop",
    "order_index": 37,
    "title": "#037 Composite Pattern File System Tree",
    "slug": "cppoop-037-composite-pattern-file-system-tree",
    "description": "Treat individual Files and Directory composites uniformly with a calculateSize() method.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Dir[file1(10KB), file2(20KB)]",
        "output": "Total Directory Size: 30KB",
        "explanation": "Executes logic for Composite Pattern File System Tree."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Composite Pattern File System Tree\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Composite Pattern File System Tree\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Composite Pattern File System Tree\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:37Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000038",
    "book": "cppoop",
    "order_index": 38,
    "title": "#038 State Pattern Vending Machine",
    "slug": "cppoop-038-state-pattern-vending-machine",
    "description": "Implement VendingMachine states: NoCoin, HasCoin, Sold, SoldOut with transitions.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INSERT_COIN PRESS_BUTTON DISPENSE",
        "output": "State: HasCoin -> Sold -> Dispensed item -> NoCoin",
        "explanation": "Executes logic for State Pattern Vending Machine."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// State Pattern Vending Machine\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# State Pattern Vending Machine\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// State Pattern Vending Machine\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:38Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000039",
    "book": "cppoop",
    "order_index": 39,
    "title": "#039 Chain of Responsibility Logger",
    "slug": "cppoop-039-chain-of-responsibility-logger",
    "description": "Pass log messages through Info -> Warning -> Error handler chain.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR Database connection lost",
        "output": "Info passed -> Warning passed -> Error logged: Database connection lost",
        "explanation": "Executes logic for Chain of Responsibility Logger."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Chain of Responsibility Logger\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Chain of Responsibility Logger\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Chain of Responsibility Logger\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:39Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000040",
    "book": "cppoop",
    "order_index": 40,
    "title": "#040 Iterator Pattern Custom Collection",
    "slug": "cppoop-040-iterator-pattern-custom-collection",
    "description": "Implement custom Iterator object traversing elements of an internal linked list.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "5 10 15 20",
        "output": "Iterated: 5 -> 10 -> 15 -> 20",
        "explanation": "Executes logic for Iterator Pattern Custom Collection."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Iterator Pattern Custom Collection\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Pattern Custom Collection\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Pattern Custom Collection\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:40Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000041",
    "book": "cppoop",
    "order_index": 41,
    "title": "#041 Visitor Pattern AST Evaluator",
    "slug": "cppoop-041-visitor-pattern-ast-evaluator",
    "description": "Implement Visitor traversing Arithmetic AST nodes (AddNode, MultiplyNode) to compute value.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "(3 + 5) * 2",
        "output": "AST Evaluated via Visitor: 16",
        "explanation": "Executes logic for Visitor Pattern AST Evaluator."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Visitor Pattern AST Evaluator\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Visitor Pattern AST Evaluator\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Visitor Pattern AST Evaluator\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:41Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000042",
    "book": "cppoop",
    "order_index": 42,
    "title": "#042 Mediator Pattern Chat Room",
    "slug": "cppoop-042-mediator-pattern-chat-room",
    "description": "Coordinate messaging between multiple User objects through a central ChatMediator.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Alice to Bob: Hello",
        "output": "ChatMediator delivered: [Alice -> Bob]: Hello",
        "explanation": "Executes logic for Mediator Pattern Chat Room."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Mediator Pattern Chat Room\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Mediator Pattern Chat Room\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Mediator Pattern Chat Room\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:42Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000043",
    "book": "cppoop",
    "order_index": 43,
    "title": "#043 Prototype Pattern Object Cloning",
    "slug": "cppoop-043-prototype-pattern-object-cloning",
    "description": "Implement clone() method on a MonsterPrototype to instantiate clones with modified health.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Goblin clone HP=150",
        "output": "Original: Goblin(100), Clone: Goblin(150)",
        "explanation": "Executes logic for Prototype Pattern Object Cloning."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Prototype Pattern Object Cloning\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Prototype Pattern Object Cloning\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Prototype Pattern Object Cloning\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:43Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000044",
    "book": "cppoop",
    "order_index": 44,
    "title": "#044 Null Object Pattern Safe Handler",
    "slug": "cppoop-044-null-object-pattern-safe-handler",
    "description": "Implement NullLogger avoiding null checks throughout business logic.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LogMessage Test",
        "output": "NullLogger: No-op executed safely without crash",
        "explanation": "Executes logic for Null Object Pattern Safe Handler."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Null Object Pattern Safe Handler\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Null Object Pattern Safe Handler\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Null Object Pattern Safe Handler\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:44Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000045",
    "book": "cppoop",
    "order_index": 45,
    "title": "#045 Object Pool Pattern Database Connections",
    "slug": "cppoop-045-object-pool-pattern-database-connections",
    "description": "Manage reusable Connection objects in a pool allocating and reclaiming them.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ACQUIRE USE RELEASE ACQUIRE",
        "output": "Connection #1 reused from pool (0 new allocations)",
        "explanation": "Executes logic for Object Pool Pattern Database Connections."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Object Pool Pattern Database Connections\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Object Pool Pattern Database Connections\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Object Pool Pattern Database Connections\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:45Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000046",
    "book": "cppoop",
    "order_index": 46,
    "title": "#046 Registry Pattern Global Services",
    "slug": "cppoop-046-registry-pattern-global-services",
    "description": "Implement a ServiceRegistry where singleton services are registered by interface key.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "REGISTER AuthService GET AuthService",
        "output": "AuthService resolved from Registry",
        "explanation": "Executes logic for Registry Pattern Global Services."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Registry Pattern Global Services\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Registry Pattern Global Services\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Registry Pattern Global Services\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:46Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000047",
    "book": "cppoop",
    "order_index": 47,
    "title": "#047 Service Locator Pattern",
    "slug": "cppoop-047-service-locator-pattern",
    "description": "Provide centralized service lookup abstraction for decoupling components.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LOCATE GeoService",
        "output": "GeoService located and invoked",
        "explanation": "Executes logic for Service Locator Pattern."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Service Locator Pattern\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Service Locator Pattern\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Service Locator Pattern\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:47Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000048",
    "book": "cppoop",
    "order_index": 48,
    "title": "#048 Specification Pattern Rule Evaluator",
    "slug": "cppoop-048-specification-pattern-rule-evaluator",
    "description": "Combine customer qualification rules using AndSpecification and OrSpecification.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Age > 18 AND CreditScore > 700",
        "output": "Customer Evaluated: Qualified",
        "explanation": "Executes logic for Specification Pattern Rule Evaluator."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Specification Pattern Rule Evaluator\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Specification Pattern Rule Evaluator\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Specification Pattern Rule Evaluator\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:48Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000049",
    "book": "cppoop",
    "order_index": 49,
    "title": "#049 Domain Event Dispatcher Pattern",
    "slug": "cppoop-049-domain-event-dispatcher-pattern",
    "description": "Emit UserRegisteredEvent when user signs up, triggering WelcomeEmail and Analytics handlers.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "REGISTER Bob",
        "output": "Event emitted: [WelcomeEmail sent, Analytics recorded]",
        "explanation": "Executes logic for Domain Event Dispatcher Pattern."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Domain Event Dispatcher Pattern\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Domain Event Dispatcher Pattern\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Domain Event Dispatcher Pattern\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:49Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000050",
    "book": "cppoop",
    "order_index": 50,
    "title": "#050 Repository Pattern In-Memory Store",
    "slug": "cppoop-050-repository-pattern-in-memory-store",
    "description": "Implement ProductRepository with add(), findById(), and delete() operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ADD P1 Laptop FIND P1",
        "output": "Product Found: Laptop (ID: P1)",
        "explanation": "Executes logic for Repository Pattern In-Memory Store."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Repository Pattern In-Memory Store\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Repository Pattern In-Memory Store\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Repository Pattern In-Memory Store\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:50Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000051",
    "book": "cppoop",
    "order_index": 51,
    "title": "#051 OOP Real World Modeling Problem 51",
    "slug": "cppoop-051-oop-real-world-modeling-problem-51",
    "description": "Apply object-oriented design principles to model real-world business system component #51, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 51 100",
        "output": "Component #51: State Initialized & Invariants Verified (Param: 51)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 51."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 51\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 51\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 51\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:51Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000052",
    "book": "cppoop",
    "order_index": 52,
    "title": "#052 OOP Real World Modeling Problem 52",
    "slug": "cppoop-052-oop-real-world-modeling-problem-52",
    "description": "Apply object-oriented design principles to model real-world business system component #52, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 52 100",
        "output": "Component #52: State Initialized & Invariants Verified (Param: 52)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 52."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 52\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 52\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 52\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:52Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000053",
    "book": "cppoop",
    "order_index": 53,
    "title": "#053 OOP Real World Modeling Problem 53",
    "slug": "cppoop-053-oop-real-world-modeling-problem-53",
    "description": "Apply object-oriented design principles to model real-world business system component #53, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 53 100",
        "output": "Component #53: State Initialized & Invariants Verified (Param: 53)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 53."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 53\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 53\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 53\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:53Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000054",
    "book": "cppoop",
    "order_index": 54,
    "title": "#054 OOP Real World Modeling Problem 54",
    "slug": "cppoop-054-oop-real-world-modeling-problem-54",
    "description": "Apply object-oriented design principles to model real-world business system component #54, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 54 100",
        "output": "Component #54: State Initialized & Invariants Verified (Param: 54)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 54."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 54\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 54\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 54\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:54Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000055",
    "book": "cppoop",
    "order_index": 55,
    "title": "#055 OOP Real World Modeling Problem 55",
    "slug": "cppoop-055-oop-real-world-modeling-problem-55",
    "description": "Apply object-oriented design principles to model real-world business system component #55, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 55 100",
        "output": "Component #55: State Initialized & Invariants Verified (Param: 55)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 55."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 55\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 55\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 55\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:55Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000056",
    "book": "cppoop",
    "order_index": 56,
    "title": "#056 OOP Real World Modeling Problem 56",
    "slug": "cppoop-056-oop-real-world-modeling-problem-56",
    "description": "Apply object-oriented design principles to model real-world business system component #56, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 56 100",
        "output": "Component #56: State Initialized & Invariants Verified (Param: 56)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 56."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 56\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 56\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 56\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:56Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000057",
    "book": "cppoop",
    "order_index": 57,
    "title": "#057 OOP Real World Modeling Problem 57",
    "slug": "cppoop-057-oop-real-world-modeling-problem-57",
    "description": "Apply object-oriented design principles to model real-world business system component #57, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 57 100",
        "output": "Component #57: State Initialized & Invariants Verified (Param: 57)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 57."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 57\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 57\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 57\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:57Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000058",
    "book": "cppoop",
    "order_index": 58,
    "title": "#058 OOP Real World Modeling Problem 58",
    "slug": "cppoop-058-oop-real-world-modeling-problem-58",
    "description": "Apply object-oriented design principles to model real-world business system component #58, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 58 100",
        "output": "Component #58: State Initialized & Invariants Verified (Param: 58)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 58."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 58\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 58\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 58\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:58Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000059",
    "book": "cppoop",
    "order_index": 59,
    "title": "#059 OOP Real World Modeling Problem 59",
    "slug": "cppoop-059-oop-real-world-modeling-problem-59",
    "description": "Apply object-oriented design principles to model real-world business system component #59, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 59 100",
        "output": "Component #59: State Initialized & Invariants Verified (Param: 59)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 59."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 59\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 59\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 59\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:59Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000060",
    "book": "cppoop",
    "order_index": 60,
    "title": "#060 OOP Real World Modeling Problem 60",
    "slug": "cppoop-060-oop-real-world-modeling-problem-60",
    "description": "Apply object-oriented design principles to model real-world business system component #60, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 60 100",
        "output": "Component #60: State Initialized & Invariants Verified (Param: 60)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 60."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 60\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 60\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 60\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:00Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000061",
    "book": "cppoop",
    "order_index": 61,
    "title": "#061 OOP Real World Modeling Problem 61",
    "slug": "cppoop-061-oop-real-world-modeling-problem-61",
    "description": "Apply object-oriented design principles to model real-world business system component #61, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 61 100",
        "output": "Component #61: State Initialized & Invariants Verified (Param: 61)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 61."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 61\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 61\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 61\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:01Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000062",
    "book": "cppoop",
    "order_index": 62,
    "title": "#062 OOP Real World Modeling Problem 62",
    "slug": "cppoop-062-oop-real-world-modeling-problem-62",
    "description": "Apply object-oriented design principles to model real-world business system component #62, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 62 100",
        "output": "Component #62: State Initialized & Invariants Verified (Param: 62)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 62."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 62\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 62\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 62\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:02Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000063",
    "book": "cppoop",
    "order_index": 63,
    "title": "#063 OOP Real World Modeling Problem 63",
    "slug": "cppoop-063-oop-real-world-modeling-problem-63",
    "description": "Apply object-oriented design principles to model real-world business system component #63, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 63 100",
        "output": "Component #63: State Initialized & Invariants Verified (Param: 63)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 63."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 63\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 63\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 63\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:03Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000064",
    "book": "cppoop",
    "order_index": 64,
    "title": "#064 OOP Real World Modeling Problem 64",
    "slug": "cppoop-064-oop-real-world-modeling-problem-64",
    "description": "Apply object-oriented design principles to model real-world business system component #64, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 64 100",
        "output": "Component #64: State Initialized & Invariants Verified (Param: 64)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 64."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 64\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 64\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 64\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:04Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000065",
    "book": "cppoop",
    "order_index": 65,
    "title": "#065 OOP Real World Modeling Problem 65",
    "slug": "cppoop-065-oop-real-world-modeling-problem-65",
    "description": "Apply object-oriented design principles to model real-world business system component #65, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 65 100",
        "output": "Component #65: State Initialized & Invariants Verified (Param: 65)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 65."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 65\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 65\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 65\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:05Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000066",
    "book": "cppoop",
    "order_index": 66,
    "title": "#066 OOP Real World Modeling Problem 66",
    "slug": "cppoop-066-oop-real-world-modeling-problem-66",
    "description": "Apply object-oriented design principles to model real-world business system component #66, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 66 100",
        "output": "Component #66: State Initialized & Invariants Verified (Param: 66)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 66."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 66\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 66\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 66\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:06Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000067",
    "book": "cppoop",
    "order_index": 67,
    "title": "#067 OOP Real World Modeling Problem 67",
    "slug": "cppoop-067-oop-real-world-modeling-problem-67",
    "description": "Apply object-oriented design principles to model real-world business system component #67, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 67 100",
        "output": "Component #67: State Initialized & Invariants Verified (Param: 67)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 67."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 67\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 67\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 67\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:07Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000068",
    "book": "cppoop",
    "order_index": 68,
    "title": "#068 OOP Real World Modeling Problem 68",
    "slug": "cppoop-068-oop-real-world-modeling-problem-68",
    "description": "Apply object-oriented design principles to model real-world business system component #68, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 68 100",
        "output": "Component #68: State Initialized & Invariants Verified (Param: 68)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 68."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 68\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 68\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 68\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:08Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000069",
    "book": "cppoop",
    "order_index": 69,
    "title": "#069 OOP Real World Modeling Problem 69",
    "slug": "cppoop-069-oop-real-world-modeling-problem-69",
    "description": "Apply object-oriented design principles to model real-world business system component #69, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 69 100",
        "output": "Component #69: State Initialized & Invariants Verified (Param: 69)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 69."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 69\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 69\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 69\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:09Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000070",
    "book": "cppoop",
    "order_index": 70,
    "title": "#070 OOP Real World Modeling Problem 70",
    "slug": "cppoop-070-oop-real-world-modeling-problem-70",
    "description": "Apply object-oriented design principles to model real-world business system component #70, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 70 100",
        "output": "Component #70: State Initialized & Invariants Verified (Param: 70)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 70."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 70\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 70\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 70\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:10Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000071",
    "book": "cppoop",
    "order_index": 71,
    "title": "#071 OOP Real World Modeling Problem 71",
    "slug": "cppoop-071-oop-real-world-modeling-problem-71",
    "description": "Apply object-oriented design principles to model real-world business system component #71, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 71 100",
        "output": "Component #71: State Initialized & Invariants Verified (Param: 71)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 71."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 71\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 71\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 71\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:11Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000072",
    "book": "cppoop",
    "order_index": 72,
    "title": "#072 OOP Real World Modeling Problem 72",
    "slug": "cppoop-072-oop-real-world-modeling-problem-72",
    "description": "Apply object-oriented design principles to model real-world business system component #72, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 72 100",
        "output": "Component #72: State Initialized & Invariants Verified (Param: 72)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 72."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 72\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 72\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 72\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:12Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000073",
    "book": "cppoop",
    "order_index": 73,
    "title": "#073 OOP Real World Modeling Problem 73",
    "slug": "cppoop-073-oop-real-world-modeling-problem-73",
    "description": "Apply object-oriented design principles to model real-world business system component #73, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 73 100",
        "output": "Component #73: State Initialized & Invariants Verified (Param: 73)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 73."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 73\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 73\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 73\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:13Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000074",
    "book": "cppoop",
    "order_index": 74,
    "title": "#074 OOP Real World Modeling Problem 74",
    "slug": "cppoop-074-oop-real-world-modeling-problem-74",
    "description": "Apply object-oriented design principles to model real-world business system component #74, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 74 100",
        "output": "Component #74: State Initialized & Invariants Verified (Param: 74)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 74."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 74\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 74\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 74\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:14Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000075",
    "book": "cppoop",
    "order_index": 75,
    "title": "#075 OOP Real World Modeling Problem 75",
    "slug": "cppoop-075-oop-real-world-modeling-problem-75",
    "description": "Apply object-oriented design principles to model real-world business system component #75, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 75 100",
        "output": "Component #75: State Initialized & Invariants Verified (Param: 75)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 75."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 75\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 75\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 75\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:15Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000076",
    "book": "cppoop",
    "order_index": 76,
    "title": "#076 OOP Real World Modeling Problem 76",
    "slug": "cppoop-076-oop-real-world-modeling-problem-76",
    "description": "Apply object-oriented design principles to model real-world business system component #76, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 76 100",
        "output": "Component #76: State Initialized & Invariants Verified (Param: 76)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 76."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 76\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 76\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 76\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:16Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000077",
    "book": "cppoop",
    "order_index": 77,
    "title": "#077 OOP Real World Modeling Problem 77",
    "slug": "cppoop-077-oop-real-world-modeling-problem-77",
    "description": "Apply object-oriented design principles to model real-world business system component #77, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 77 100",
        "output": "Component #77: State Initialized & Invariants Verified (Param: 77)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 77."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 77\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 77\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 77\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:17Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000078",
    "book": "cppoop",
    "order_index": 78,
    "title": "#078 OOP Real World Modeling Problem 78",
    "slug": "cppoop-078-oop-real-world-modeling-problem-78",
    "description": "Apply object-oriented design principles to model real-world business system component #78, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 78 100",
        "output": "Component #78: State Initialized & Invariants Verified (Param: 78)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 78."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 78\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 78\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 78\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:18Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000079",
    "book": "cppoop",
    "order_index": 79,
    "title": "#079 OOP Real World Modeling Problem 79",
    "slug": "cppoop-079-oop-real-world-modeling-problem-79",
    "description": "Apply object-oriented design principles to model real-world business system component #79, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 79 100",
        "output": "Component #79: State Initialized & Invariants Verified (Param: 79)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 79."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 79\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 79\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 79\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:19Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000080",
    "book": "cppoop",
    "order_index": 80,
    "title": "#080 OOP Real World Modeling Problem 80",
    "slug": "cppoop-080-oop-real-world-modeling-problem-80",
    "description": "Apply object-oriented design principles to model real-world business system component #80, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 80 100",
        "output": "Component #80: State Initialized & Invariants Verified (Param: 80)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 80."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 80\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 80\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 80\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:20Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000081",
    "book": "cppoop",
    "order_index": 81,
    "title": "#081 OOP Real World Modeling Problem 81",
    "slug": "cppoop-081-oop-real-world-modeling-problem-81",
    "description": "Apply object-oriented design principles to model real-world business system component #81, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 81 100",
        "output": "Component #81: State Initialized & Invariants Verified (Param: 81)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 81."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 81\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 81\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 81\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:21Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000082",
    "book": "cppoop",
    "order_index": 82,
    "title": "#082 OOP Real World Modeling Problem 82",
    "slug": "cppoop-082-oop-real-world-modeling-problem-82",
    "description": "Apply object-oriented design principles to model real-world business system component #82, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 82 100",
        "output": "Component #82: State Initialized & Invariants Verified (Param: 82)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 82."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 82\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 82\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 82\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:22Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000083",
    "book": "cppoop",
    "order_index": 83,
    "title": "#083 OOP Real World Modeling Problem 83",
    "slug": "cppoop-083-oop-real-world-modeling-problem-83",
    "description": "Apply object-oriented design principles to model real-world business system component #83, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 83 100",
        "output": "Component #83: State Initialized & Invariants Verified (Param: 83)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 83."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 83\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 83\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 83\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:23Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000084",
    "book": "cppoop",
    "order_index": 84,
    "title": "#084 OOP Real World Modeling Problem 84",
    "slug": "cppoop-084-oop-real-world-modeling-problem-84",
    "description": "Apply object-oriented design principles to model real-world business system component #84, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 84 100",
        "output": "Component #84: State Initialized & Invariants Verified (Param: 84)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 84."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 84\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 84\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 84\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:24Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000085",
    "book": "cppoop",
    "order_index": 85,
    "title": "#085 OOP Real World Modeling Problem 85",
    "slug": "cppoop-085-oop-real-world-modeling-problem-85",
    "description": "Apply object-oriented design principles to model real-world business system component #85, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 85 100",
        "output": "Component #85: State Initialized & Invariants Verified (Param: 85)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 85."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 85\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 85\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 85\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:25Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000086",
    "book": "cppoop",
    "order_index": 86,
    "title": "#086 OOP Real World Modeling Problem 86",
    "slug": "cppoop-086-oop-real-world-modeling-problem-86",
    "description": "Apply object-oriented design principles to model real-world business system component #86, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 86 100",
        "output": "Component #86: State Initialized & Invariants Verified (Param: 86)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 86."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 86\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 86\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 86\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:26Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000087",
    "book": "cppoop",
    "order_index": 87,
    "title": "#087 OOP Real World Modeling Problem 87",
    "slug": "cppoop-087-oop-real-world-modeling-problem-87",
    "description": "Apply object-oriented design principles to model real-world business system component #87, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 87 100",
        "output": "Component #87: State Initialized & Invariants Verified (Param: 87)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 87."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 87\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 87\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 87\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:27Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000088",
    "book": "cppoop",
    "order_index": 88,
    "title": "#088 OOP Real World Modeling Problem 88",
    "slug": "cppoop-088-oop-real-world-modeling-problem-88",
    "description": "Apply object-oriented design principles to model real-world business system component #88, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 88 100",
        "output": "Component #88: State Initialized & Invariants Verified (Param: 88)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 88."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 88\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 88\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 88\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:28Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000089",
    "book": "cppoop",
    "order_index": 89,
    "title": "#089 OOP Real World Modeling Problem 89",
    "slug": "cppoop-089-oop-real-world-modeling-problem-89",
    "description": "Apply object-oriented design principles to model real-world business system component #89, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 89 100",
        "output": "Component #89: State Initialized & Invariants Verified (Param: 89)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 89."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 89\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 89\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 89\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:29Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000090",
    "book": "cppoop",
    "order_index": 90,
    "title": "#090 OOP Real World Modeling Problem 90",
    "slug": "cppoop-090-oop-real-world-modeling-problem-90",
    "description": "Apply object-oriented design principles to model real-world business system component #90, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 90 100",
        "output": "Component #90: State Initialized & Invariants Verified (Param: 90)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 90."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 90\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 90\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 90\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:30Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000091",
    "book": "cppoop",
    "order_index": 91,
    "title": "#091 OOP Real World Modeling Problem 91",
    "slug": "cppoop-091-oop-real-world-modeling-problem-91",
    "description": "Apply object-oriented design principles to model real-world business system component #91, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 91 100",
        "output": "Component #91: State Initialized & Invariants Verified (Param: 91)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 91."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 91\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 91\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 91\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:31Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000092",
    "book": "cppoop",
    "order_index": 92,
    "title": "#092 OOP Real World Modeling Problem 92",
    "slug": "cppoop-092-oop-real-world-modeling-problem-92",
    "description": "Apply object-oriented design principles to model real-world business system component #92, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 92 100",
        "output": "Component #92: State Initialized & Invariants Verified (Param: 92)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 92."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 92\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 92\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 92\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:32Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000093",
    "book": "cppoop",
    "order_index": 93,
    "title": "#093 OOP Real World Modeling Problem 93",
    "slug": "cppoop-093-oop-real-world-modeling-problem-93",
    "description": "Apply object-oriented design principles to model real-world business system component #93, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 93 100",
        "output": "Component #93: State Initialized & Invariants Verified (Param: 93)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 93."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 93\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 93\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 93\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:33Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000094",
    "book": "cppoop",
    "order_index": 94,
    "title": "#094 OOP Real World Modeling Problem 94",
    "slug": "cppoop-094-oop-real-world-modeling-problem-94",
    "description": "Apply object-oriented design principles to model real-world business system component #94, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 94 100",
        "output": "Component #94: State Initialized & Invariants Verified (Param: 94)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 94."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 94\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 94\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 94\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:34Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000095",
    "book": "cppoop",
    "order_index": 95,
    "title": "#095 OOP Real World Modeling Problem 95",
    "slug": "cppoop-095-oop-real-world-modeling-problem-95",
    "description": "Apply object-oriented design principles to model real-world business system component #95, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 95 100",
        "output": "Component #95: State Initialized & Invariants Verified (Param: 95)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 95."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 95\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 95\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 95\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:35Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000096",
    "book": "cppoop",
    "order_index": 96,
    "title": "#096 OOP Real World Modeling Problem 96",
    "slug": "cppoop-096-oop-real-world-modeling-problem-96",
    "description": "Apply object-oriented design principles to model real-world business system component #96, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 96 100",
        "output": "Component #96: State Initialized & Invariants Verified (Param: 96)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 96."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 96\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 96\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 96\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:36Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000097",
    "book": "cppoop",
    "order_index": 97,
    "title": "#097 OOP Real World Modeling Problem 97",
    "slug": "cppoop-097-oop-real-world-modeling-problem-97",
    "description": "Apply object-oriented design principles to model real-world business system component #97, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 97 100",
        "output": "Component #97: State Initialized & Invariants Verified (Param: 97)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 97."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 97\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 97\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 97\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:37Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000098",
    "book": "cppoop",
    "order_index": 98,
    "title": "#098 OOP Real World Modeling Problem 98",
    "slug": "cppoop-098-oop-real-world-modeling-problem-98",
    "description": "Apply object-oriented design principles to model real-world business system component #98, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 98 100",
        "output": "Component #98: State Initialized & Invariants Verified (Param: 98)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 98."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 98\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 98\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 98\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:38Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000099",
    "book": "cppoop",
    "order_index": 99,
    "title": "#099 OOP Real World Modeling Problem 99",
    "slug": "cppoop-099-oop-real-world-modeling-problem-99",
    "description": "Apply object-oriented design principles to model real-world business system component #99, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 99 100",
        "output": "Component #99: State Initialized & Invariants Verified (Param: 99)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 99."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 99\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 99\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 99\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:39Z"
  },
  {
    "id": "00000000-0000-4000-8001-000000000100",
    "book": "cppoop",
    "order_index": 100,
    "title": "#100 OOP Real World Modeling Problem 100",
    "slug": "cppoop-100-oop-real-world-modeling-problem-100",
    "description": "Apply object-oriented design principles to model real-world business system component #100, managing object state, invariants, and clean encapsulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Object Oriented Programming",
    "tags": [
      "OOP",
      "Design Patterns",
      "Classes",
      "Architecture"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MODEL_PARAM 100 100",
        "output": "Component #100: State Initialized & Invariants Verified (Param: 100)",
        "explanation": "Executes logic for OOP Real World Modeling Problem 100."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// OOP Real World Modeling Problem 100\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# OOP Real World Modeling Problem 100\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// OOP Real World Modeling Problem 100\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:40Z"
  }
];
