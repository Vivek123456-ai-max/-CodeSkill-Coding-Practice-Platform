import { Problem } from '../../types/problem';

export const FILES_PROBLEMS: Problem[] = [
  {
    "id": "00000000-0000-4000-8011-000000000001",
    "book": "files",
    "order_index": 1,
    "title": "#001 Writing Text to File with std::ofstream",
    "slug": "files-001-writing-text-to-file-with-std-ofstream",
    "description": "Open a text file with `std::ofstream`, write lines of text, and close the stream.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Write 'Hello File System'",
        "output": "File 'output.txt' written successfully (24 bytes)",
        "explanation": "Executes logic for Writing Text to File with std::ofstream."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Writing Text to File with std::ofstream\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Writing Text to File with std::ofstream\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Writing Text to File with std::ofstream\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:01Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000002",
    "book": "files",
    "order_index": 2,
    "title": "#002 Reading Entire File Line by Line with std::ifstream",
    "slug": "files-002-reading-entire-file-line-by-line-with-std-ifstream",
    "description": "Open file with `std::ifstream` and read line by line using `std::getline`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Read 'data.txt'",
        "output": "Read 5 lines from 'data.txt'",
        "explanation": "Executes logic for Reading Entire File Line by Line with std::ifstream."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Reading Entire File Line by Line with std::ifstream\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Reading Entire File Line by Line with std::ifstream\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Reading Entire File Line by Line with std::ifstream\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:02Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000003",
    "book": "files",
    "order_index": 3,
    "title": "#003 Appending Text to Existing File (std::ios::app)",
    "slug": "files-003-appending-text-to-existing-file-std-ios-app",
    "description": "Open file in append mode `ios::app` and add new log entries without overwriting.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Append 'Log entry 101'",
        "output": "Log entry appended to 'app.log'",
        "explanation": "Executes logic for Appending Text to Existing File (std::ios::app)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Appending Text to Existing File (std::ios::app)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Appending Text to Existing File (std::ios::app)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Appending Text to Existing File (std::ios::app)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:03Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000004",
    "book": "files",
    "order_index": 4,
    "title": "#004 Reading Word by Word from File",
    "slug": "files-004-reading-word-by-word-from-file",
    "description": "Read whitespace-delimited tokens from file stream using extraction operator `>>`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "File containing 'apple banana cherry'",
        "output": "Read words: ['apple', 'banana', 'cherry']",
        "explanation": "Executes logic for Reading Word by Word from File."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Reading Word by Word from File\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Reading Word by Word from File\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Reading Word by Word from File\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:04Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000005",
    "book": "files",
    "order_index": 5,
    "title": "#005 Counting Lines, Words, and Characters in a File",
    "slug": "files-005-counting-lines-words-and-characters-in-a-file",
    "description": "Simulate `wc` utility by streaming file and computing line, word, and byte counts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Sample text file",
        "output": "Lines: 12, Words: 84, Chars: 512",
        "explanation": "Executes logic for Counting Lines, Words, and Characters in a File."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Counting Lines, Words, and Characters in a File\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Counting Lines, Words, and Characters in a File\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Counting Lines, Words, and Characters in a File\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:05Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000006",
    "book": "files",
    "order_index": 6,
    "title": "#006 Checking If File Exists Before Reading",
    "slug": "files-006-checking-if-file-exists-before-reading",
    "description": "Verify file accessibility using `ifstream.is_open()` or `std::filesystem::exists`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Check 'missing.txt'",
        "output": "File 'missing.txt' does not exist (Handled safely)",
        "explanation": "Executes logic for Checking If File Exists Before Reading."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Checking If File Exists Before Reading\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Checking If File Exists Before Reading\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Checking If File Exists Before Reading\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:06Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000007",
    "book": "files",
    "order_index": 7,
    "title": "#007 Copying Content from One File to Another",
    "slug": "files-007-copying-content-from-one-file-to-another",
    "description": "Read source file buffer and write directly to destination file stream.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Copy 'src.txt' to 'dst.txt'",
        "output": "Copied 1024 bytes to 'dst.txt'",
        "explanation": "Executes logic for Copying Content from One File to Another."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Copying Content from One File to Another\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Copying Content from One File to Another\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Copying Content from One File to Another\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:07Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000008",
    "book": "files",
    "order_index": 8,
    "title": "#008 Parsing CSV File into Struct Records",
    "slug": "files-008-parsing-csv-file-into-struct-records",
    "description": "Stream comma-separated file and parse columns into a vector of Student structs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "101,Alice,3.8\n102,Bob,3.9",
        "output": "Parsed 2 records: Alice (3.8), Bob (3.9)",
        "explanation": "Executes logic for Parsing CSV File into Struct Records."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Parsing CSV File into Struct Records\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parsing CSV File into Struct Records\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parsing CSV File into Struct Records\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:08Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000009",
    "book": "files",
    "order_index": 9,
    "title": "#009 Writing Structured Data to CSV Format",
    "slug": "files-009-writing-structured-data-to-csv-format",
    "description": "Export an array of Product objects to a formatted CSV file with headers.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Products: Laptop ($999), Mouse ($25)",
        "output": "CSV generated: ID,Name,Price header + 2 rows",
        "explanation": "Executes logic for Writing Structured Data to CSV Format."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Writing Structured Data to CSV Format\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Writing Structured Data to CSV Format\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Writing Structured Data to CSV Format\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:09Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000010",
    "book": "files",
    "order_index": 10,
    "title": "#010 Binary File Writing with ofstream::write",
    "slug": "files-010-binary-file-writing-with-ofstream-write",
    "description": "Write raw binary struct data to disk using `file.write(reinterpret_cast<char*>(&data), sizeof(data))`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Write binary struct Student",
        "output": "Binary record written (32 bytes)",
        "explanation": "Executes logic for Binary File Writing with ofstream::write."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Binary File Writing with ofstream::write\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Binary File Writing with ofstream::write\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Binary File Writing with ofstream::write\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:10Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000011",
    "book": "files",
    "order_index": 11,
    "title": "#011 Binary File Reading with ifstream::read",
    "slug": "files-011-binary-file-reading-with-ifstream-read",
    "description": "Read binary struct records from disk using `file.read()`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Read binary record",
        "output": "Student loaded: Name=David, Score=92",
        "explanation": "Executes logic for Binary File Reading with ifstream::read."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Binary File Reading with ifstream::read\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Binary File Reading with ifstream::read\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Binary File Reading with ifstream::read\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:11Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000012",
    "book": "files",
    "order_index": 12,
    "title": "#012 File Positioning with seekg (Read Pointer)",
    "slug": "files-012-file-positioning-with-seekg-read-pointer",
    "description": "Move file read cursor to byte offset 50 using `file.seekg(50, ios::beg)`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Seek to byte 10",
        "output": "Read from byte 10: 'DataPayload'",
        "explanation": "Executes logic for File Positioning with seekg (Read Pointer)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File Positioning with seekg (Read Pointer)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File Positioning with seekg (Read Pointer)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File Positioning with seekg (Read Pointer)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:12Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000013",
    "book": "files",
    "order_index": 13,
    "title": "#013 File Positioning with seekp (Write Pointer)",
    "slug": "files-013-file-positioning-with-seekp-write-pointer",
    "description": "Move file write cursor to overwrite specific bytes in-place using `seekp`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Seekp to offset 0 and overwrite",
        "output": "First 4 bytes overwritten with 'TEST'",
        "explanation": "Executes logic for File Positioning with seekp (Write Pointer)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File Positioning with seekp (Write Pointer)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File Positioning with seekp (Write Pointer)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File Positioning with seekp (Write Pointer)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:13Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000014",
    "book": "files",
    "order_index": 14,
    "title": "#014 Determining File Size Using tellg and seekg",
    "slug": "files-014-determining-file-size-using-tellg-and-seekg",
    "description": "Seek to `ios::end` and query byte position with `file.tellg()` to find file size.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Query file size",
        "output": "File Size: 4,096 bytes",
        "explanation": "Executes logic for Determining File Size Using tellg and seekg."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Determining File Size Using tellg and seekg\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Determining File Size Using tellg and seekg\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Determining File Size Using tellg and seekg\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:14Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000015",
    "book": "files",
    "order_index": 15,
    "title": "#015 Searching for Substring / Keyword in File (grep Simulation)",
    "slug": "files-015-searching-for-substring-keyword-in-file-grep-simul",
    "description": "Stream file line by line and output line numbers containing target keyword.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Search 'ERROR' in 'server.log'",
        "output": "Matches found at lines: 14, 42, 108",
        "explanation": "Executes logic for Searching for Substring / Keyword in File (grep Simulation)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Searching for Substring / Keyword in File (grep Simulation)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Searching for Substring / Keyword in File (grep Simulation)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Searching for Substring / Keyword in File (grep Simulation)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:15Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000016",
    "book": "files",
    "order_index": 16,
    "title": "#016 Replacing Word in File and Writing to Temp File",
    "slug": "files-016-replacing-word-in-file-and-writing-to-temp-file",
    "description": "Search for old word, replace with new word, and save to updated file.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Replace 'old_host' with 'new_host'",
        "output": "Replaced 3 occurrences in 'config.cfg'",
        "explanation": "Executes logic for Replacing Word in File and Writing to Temp File."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Replacing Word in File and Writing to Temp File\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Replacing Word in File and Writing to Temp File\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Replacing Word in File and Writing to Temp File\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:16Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000017",
    "book": "files",
    "order_index": 17,
    "title": "#017 Reversing Lines of a File",
    "slug": "files-017-reversing-lines-of-a-file",
    "description": "Read all lines into vector and write out in reverse order to new file.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Lines: 1, 2, 3",
        "output": "Reversed file lines: 3, 2, 1",
        "explanation": "Executes logic for Reversing Lines of a File."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Reversing Lines of a File\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Reversing Lines of a File\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Reversing Lines of a File\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:17Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000018",
    "book": "files",
    "order_index": 18,
    "title": "#018 Merging Two Sorted Files into One Sorted File",
    "slug": "files-018-merging-two-sorted-files-into-one-sorted-file",
    "description": "Stream two pre-sorted numeric files and merge into a single sorted output file.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FileA: 1,3,5 FileB: 2,4,6",
        "output": "Merged File: 1, 2, 3, 4, 5, 6",
        "explanation": "Executes logic for Merging Two Sorted Files into One Sorted File."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Merging Two Sorted Files into One Sorted File\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Merging Two Sorted Files into One Sorted File\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Merging Two Sorted Files into One Sorted File\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:18Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000019",
    "book": "files",
    "order_index": 19,
    "title": "#019 Splitting Large File into Chunks of N Lines",
    "slug": "files-019-splitting-large-file-into-chunks-of-n-lines",
    "description": "Read large file and create chunk files 'part_1.txt', 'part_2.txt' every N lines.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "100 lines split by 25",
        "output": "Created 4 chunk files (25 lines each)",
        "explanation": "Executes logic for Splitting Large File into Chunks of N Lines."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Splitting Large File into Chunks of N Lines\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Splitting Large File into Chunks of N Lines\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Splitting Large File into Chunks of N Lines\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:19Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000020",
    "book": "files",
    "order_index": 20,
    "title": "#020 Encrypting File with XOR Cipher",
    "slug": "files-020-encrypting-file-with-xor-cipher",
    "description": "Stream file bytes, XOR each byte with encryption key, and write encrypted output.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Key: 0x5A",
        "output": "File encrypted with XOR key (Decryption verified)",
        "explanation": "Executes logic for Encrypting File with XOR Cipher."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Encrypting File with XOR Cipher\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Encrypting File with XOR Cipher\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Encrypting File with XOR Cipher\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:20Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000021",
    "book": "files",
    "order_index": 21,
    "title": "#021 Calculating Checksum / Hash of File Content",
    "slug": "files-021-calculating-checksum-hash-of-file-content",
    "description": "Read entire file as binary stream and compute CRC32 checksum.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Compute hash of 'binary.dat'",
        "output": "CRC32 Checksum: 0x9E3B48F1",
        "explanation": "Executes logic for Calculating Checksum / Hash of File Content."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Calculating Checksum / Hash of File Content\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Calculating Checksum / Hash of File Content\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Calculating Checksum / Hash of File Content\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:21Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000022",
    "book": "files",
    "order_index": 22,
    "title": "#022 JSON Configuration File Parser Simulation",
    "slug": "files-022-json-configuration-file-parser-simulation",
    "description": "Parse simple key-value config file (e.g. `port=8080`, `host=localhost`).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Read 'app.conf'",
        "output": "Config parsed: port=8080, host=localhost",
        "explanation": "Executes logic for JSON Configuration File Parser Simulation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// JSON Configuration File Parser Simulation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# JSON Configuration File Parser Simulation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// JSON Configuration File Parser Simulation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:22Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000023",
    "book": "files",
    "order_index": 23,
    "title": "#023 Writing Matrix to Space-Separated Matrix File",
    "slug": "files-023-writing-matrix-to-space-separated-matrix-file",
    "description": "Write N x M integer matrix to file formatted with row line breaks.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Matrix 2x3",
        "output": "Matrix file written with 2 rows and 3 columns",
        "explanation": "Executes logic for Writing Matrix to Space-Separated Matrix File."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Writing Matrix to Space-Separated Matrix File\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Writing Matrix to Space-Separated Matrix File\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Writing Matrix to Space-Separated Matrix File\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:23Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000024",
    "book": "files",
    "order_index": 24,
    "title": "#024 Reading Matrix from File into Dynamic 2D Array",
    "slug": "files-024-reading-matrix-from-file-into-dynamic-2d-array",
    "description": "Parse dimensions and space-separated integers from file into 2D array.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Read 'matrix.txt'",
        "output": "Loaded 2D Matrix (Dimensions: 3x3)",
        "explanation": "Executes logic for Reading Matrix from File into Dynamic 2D Array."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Reading Matrix from File into Dynamic 2D Array\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Reading Matrix from File into Dynamic 2D Array\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Reading Matrix from File into Dynamic 2D Array\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:24Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000025",
    "book": "files",
    "order_index": 25,
    "title": "#025 File Stream Error Flags Checking (good, eof, fail, bad)",
    "slug": "files-025-file-stream-error-flags-checking-good-eof-fail-bad",
    "description": "Inspect stream state flags after simulated read operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Read past EOF",
        "output": "Flags: good=0, eof=1, fail=1, bad=0",
        "explanation": "Executes logic for File Stream Error Flags Checking (good, eof, fail, bad)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File Stream Error Flags Checking (good, eof, fail, bad)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File Stream Error Flags Checking (good, eof, fail, bad)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File Stream Error Flags Checking (good, eof, fail, bad)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:25Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000026",
    "book": "files",
    "order_index": 26,
    "title": "#026 Creating and Writing to Temporary File",
    "slug": "files-026-creating-and-writing-to-temporary-file",
    "description": "Create secure temporary file, write intermediate calculation data, and delete on exit.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Temp buffer 512B",
        "output": "Temp file created, written, read, and cleaned up",
        "explanation": "Executes logic for Creating and Writing to Temporary File."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Creating and Writing to Temporary File\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Creating and Writing to Temporary File\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Creating and Writing to Temporary File\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:26Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000027",
    "book": "files",
    "order_index": 27,
    "title": "#027 Log File Rotation Simulator",
    "slug": "files-027-log-file-rotation-simulator",
    "description": "When log file exceeds max size (e.g. 1MB), rename to 'app.log.1' and start fresh log.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Log file reaches 1MB",
        "output": "Rotated 'app.log' -> 'app.log.1', created new 'app.log'",
        "explanation": "Executes logic for Log File Rotation Simulator."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Log File Rotation Simulator\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Log File Rotation Simulator\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Log File Rotation Simulator\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:27Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000028",
    "book": "files",
    "order_index": 28,
    "title": "#028 File Compression Run-Length Encoding (RLE)",
    "slug": "files-028-file-compression-run-length-encoding-rle",
    "description": "Read character stream, compress consecutive repeating chars, and write to `.rle` file.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "AAAAABBBCCDAA",
        "output": "Compressed: 5A3B2C1D2A (13 chars -> 10 chars)",
        "explanation": "Executes logic for File Compression Run-Length Encoding (RLE)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File Compression Run-Length Encoding (RLE)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File Compression Run-Length Encoding (RLE)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File Compression Run-Length Encoding (RLE)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:28Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000029",
    "book": "files",
    "order_index": 29,
    "title": "#029 Decompressing RLE File Back to Original Text",
    "slug": "files-029-decompressing-rle-file-back-to-original-text",
    "description": "Read RLE encoded file and reconstruct original uncompressed string stream.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "5A3B2C1D2A",
        "output": "Decompressed: AAAAABBBCCDAA",
        "explanation": "Executes logic for Decompressing RLE File Back to Original Text."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Decompressing RLE File Back to Original Text\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Decompressing RLE File Back to Original Text\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Decompressing RLE File Back to Original Text\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:29Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000030",
    "book": "files",
    "order_index": 30,
    "title": "#030 Binary Serialization of Vector of Objects to Disk",
    "slug": "files-030-binary-serialization-of-vector-of-objects-to-disk",
    "description": "Serialize vector of 100 Account objects to binary file and reload.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Serialize 100 accounts",
        "output": "100 Accounts saved to 'accounts.bin' and reloaded",
        "explanation": "Executes logic for Binary Serialization of Vector of Objects to Disk."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Binary Serialization of Vector of Objects to Disk\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Binary Serialization of Vector of Objects to Disk\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Binary Serialization of Vector of Objects to Disk\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:30Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000031",
    "book": "files",
    "order_index": 31,
    "title": "#031 Random Access Record Database (Fixed-Length Records)",
    "slug": "files-031-random-access-record-database-fixed-length-records",
    "description": "Seek directly to record #k in binary database file using `offset = k * sizeof(Record)`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Read Record #42",
        "output": "Seeked to byte 4200: Loaded Record #42",
        "explanation": "Executes logic for Random Access Record Database (Fixed-Length Records)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Random Access Record Database (Fixed-Length Records)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Random Access Record Database (Fixed-Length Records)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Random Access Record Database (Fixed-Length Records)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:31Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000032",
    "book": "files",
    "order_index": 32,
    "title": "#032 Writing Bitmap (BMP) Image File from Scratch",
    "slug": "files-032-writing-bitmap-bmp-image-file-from-scratch",
    "description": "Write BMP file header (54 bytes) and RGB pixel matrix to create valid image file.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Generate 10x10 Red BMP",
        "output": "Valid BMP file written (354 bytes)",
        "explanation": "Executes logic for Writing Bitmap (BMP) Image File from Scratch."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Writing Bitmap (BMP) Image File from Scratch\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Writing Bitmap (BMP) Image File from Scratch\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Writing Bitmap (BMP) Image File from Scratch\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:32Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000033",
    "book": "files",
    "order_index": 33,
    "title": "#033 Reading WAV Audio File Header",
    "slug": "files-033-reading-wav-audio-file-header",
    "description": "Read RIFF WAV header (44 bytes) to inspect sample rate, channels, and bits per sample.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Read 'audio.wav' header",
        "output": "Sample Rate: 44100 Hz, Channels: 2, 16-bit PCM",
        "explanation": "Executes logic for Reading WAV Audio File Header."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Reading WAV Audio File Header\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Reading WAV Audio File Header\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Reading WAV Audio File Header\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:33Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000034",
    "book": "files",
    "order_index": 34,
    "title": "#034 Comparing Two Files for Exact Equality (diff)",
    "slug": "files-034-comparing-two-files-for-exact-equality-diff",
    "description": "Stream two files byte by byte and detect first mismatching byte position.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Compare fileA and fileB",
        "output": "Files identical: true (0 differences)",
        "explanation": "Executes logic for Comparing Two Files for Exact Equality (diff)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Comparing Two Files for Exact Equality (diff)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Comparing Two Files for Exact Equality (diff)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Comparing Two Files for Exact Equality (diff)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:34Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000035",
    "book": "files",
    "order_index": 35,
    "title": "#035 Extracting All Email Addresses from Text File",
    "slug": "files-035-extracting-all-email-addresses-from-text-file",
    "description": "Scan text file and extract tokens matching email address regex pattern.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Scan 'contacts.txt'",
        "output": "Extracted 3 emails: alice@site.com, bob@site.com",
        "explanation": "Executes logic for Extracting All Email Addresses from Text File."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Extracting All Email Addresses from Text File\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Extracting All Email Addresses from Text File\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Extracting All Email Addresses from Text File\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:35Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000036",
    "book": "files",
    "order_index": 36,
    "title": "#036 Sorting Large File with External Merge Sort Concept",
    "slug": "files-036-sorting-large-file-with-external-merge-sort-concep",
    "description": "Simulate multi-pass external sorting for files too large to fit in memory.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Sort 10MB file in 1MB chunks",
        "output": "Sorted 10 chunks -> Merged into sorted output file",
        "explanation": "Executes logic for Sorting Large File with External Merge Sort Concept."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Sorting Large File with External Merge Sort Concept\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sorting Large File with External Merge Sort Concept\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sorting Large File with External Merge Sort Concept\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:36Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000037",
    "book": "files",
    "order_index": 37,
    "title": "#037 Directory File Lister (std::filesystem::directory_iterator)",
    "slug": "files-037-directory-file-lister-std-filesystem-directory-ite",
    "description": "Iterate over directory files and display filenames with extension filters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Scan '/assets' for '.png'",
        "output": "Found 4 PNG images in directory",
        "explanation": "Executes logic for Directory File Lister (std::filesystem::directory_iterator)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Directory File Lister (std::filesystem::directory_iterator)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Directory File Lister (std::filesystem::directory_iterator)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Directory File Lister (std::filesystem::directory_iterator)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:37Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000038",
    "book": "files",
    "order_index": 38,
    "title": "#038 Recursive Directory Traversal (recursive_directory_iterator)",
    "slug": "files-038-recursive-directory-traversal-recursive-directory",
    "description": "Recursively traverse directory tree and compute total size of all nested files.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Scan '/project' folder",
        "output": "Total Project Size: 14.5 MB (42 files)",
        "explanation": "Executes logic for Recursive Directory Traversal (recursive_directory_iterator)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Recursive Directory Traversal (recursive_directory_iterator)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Recursive Directory Traversal (recursive_directory_iterator)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Recursive Directory Traversal (recursive_directory_iterator)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:38Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000039",
    "book": "files",
    "order_index": 39,
    "title": "#039 File Permission Inspection and Modification",
    "slug": "files-039-file-permission-inspection-and-modification",
    "description": "Query and toggle read/write permissions using `std::filesystem::perms`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Inspect 'script.sh'",
        "output": "Permissions: Owner: rwx, Group: r-x, Others: r-x",
        "explanation": "Executes logic for File Permission Inspection and Modification."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File Permission Inspection and Modification\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File Permission Inspection and Modification\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File Permission Inspection and Modification\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:39Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000040",
    "book": "files",
    "order_index": 40,
    "title": "#040 File Renaming and Moving (`std::filesystem::rename`)",
    "slug": "files-040-file-renaming-and-moving-std-filesystem-rename",
    "description": "Move file from source path to destination path.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Move 'temp.txt' to 'archive/temp.txt'",
        "output": "File moved successfully",
        "explanation": "Executes logic for File Renaming and Moving (`std::filesystem::rename`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File Renaming and Moving (`std::filesystem::rename`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File Renaming and Moving (`std::filesystem::rename`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File Renaming and Moving (`std::filesystem::rename`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:40Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000041",
    "book": "files",
    "order_index": 41,
    "title": "#041 File Deletion (`std::filesystem::remove`)",
    "slug": "files-041-file-deletion-std-filesystem-remove",
    "description": "Safely delete file with error handling if file does not exist.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Delete 'cache.tmp'",
        "output": "File deleted (Return: true)",
        "explanation": "Executes logic for File Deletion (`std::filesystem::remove`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File Deletion (`std::filesystem::remove`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File Deletion (`std::filesystem::remove`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File Deletion (`std::filesystem::remove`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:41Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000042",
    "book": "files",
    "order_index": 42,
    "title": "#042 Creating Nested Directories (`std::filesystem::create_directories`)",
    "slug": "files-042-creating-nested-directories-std-filesystem-create",
    "description": "Create deep directory tree `/app/logs/2026/03` in a single call.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Create nested path",
        "output": "Directory tree created successfully",
        "explanation": "Executes logic for Creating Nested Directories (`std::filesystem::create_directories`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Creating Nested Directories (`std::filesystem::create_directories`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Creating Nested Directories (`std::filesystem::create_directories`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Creating Nested Directories (`std::filesystem::create_directories`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:42Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000043",
    "book": "files",
    "order_index": 43,
    "title": "#043 Reading Ini File into Sectioned Key-Value Map",
    "slug": "files-043-reading-ini-file-into-sectioned-key-value-map",
    "description": "Parse INI file containing `[database]` and `[server]` sections.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Parse 'config.ini'",
        "output": "Section [database]: user=root, port=5432",
        "explanation": "Executes logic for Reading Ini File into Sectioned Key-Value Map."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Reading Ini File into Sectioned Key-Value Map\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Reading Ini File into Sectioned Key-Value Map\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Reading Ini File into Sectioned Key-Value Map\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:43Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000044",
    "book": "files",
    "order_index": 44,
    "title": "#044 In-Memory Stream Processing with std::stringstream",
    "slug": "files-044-in-memory-stream-processing-with-std-stringstream",
    "description": "Use `std::stringstream` to format complex text before writing to file stream.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Format 3 variables",
        "output": "Stream buffer formatted: [ID: 101, Status: OK]",
        "explanation": "Executes logic for In-Memory Stream Processing with std::stringstream."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// In-Memory Stream Processing with std::stringstream\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# In-Memory Stream Processing with std::stringstream\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// In-Memory Stream Processing with std::stringstream\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:44Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000045",
    "book": "files",
    "order_index": 45,
    "title": "#045 Buffered vs Unbuffered File I/O Benchmark",
    "slug": "files-045-buffered-vs-unbuffered-file-i-o-benchmark",
    "description": "Benchmark writing 100,000 integers with buffered `ofstream` vs direct `std::endl` flushing.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "100k writes",
        "output": "Buffered I/O: 15ms | Unbuffered flushing: 420ms",
        "explanation": "Executes logic for Buffered vs Unbuffered File I/O Benchmark."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Buffered vs Unbuffered File I/O Benchmark\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Buffered vs Unbuffered File I/O Benchmark\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Buffered vs Unbuffered File I/O Benchmark\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:45Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000046",
    "book": "files",
    "order_index": 46,
    "title": "#046 Sanitizing Filenames (Removing Illegal Characters)",
    "slug": "files-046-sanitizing-filenames-removing-illegal-characters",
    "description": "Filter out characters like `\\ / : * ? \" < > |` from user-supplied filename.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Filename 'report:2026/03?.txt'",
        "output": "Sanitized Filename: 'report_2026_03_.txt'",
        "explanation": "Executes logic for Sanitizing Filenames (Removing Illegal Characters)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Sanitizing Filenames (Removing Illegal Characters)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sanitizing Filenames (Removing Illegal Characters)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sanitizing Filenames (Removing Illegal Characters)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:46Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000047",
    "book": "files",
    "order_index": 47,
    "title": "#047 Thread-Safe File Logger with Mutex",
    "slug": "files-047-thread-safe-file-logger-with-mutex",
    "description": "Multiple threads write log messages to shared file with mutex locking.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "3 threads logging",
        "output": "All 30 log lines written without interleaving corruption",
        "explanation": "Executes logic for Thread-Safe File Logger with Mutex."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Thread-Safe File Logger with Mutex\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Thread-Safe File Logger with Mutex\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Thread-Safe File Logger with Mutex\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:47Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000048",
    "book": "files",
    "order_index": 48,
    "title": "#048 Memory-Mapped File Reading Simulation",
    "slug": "files-048-memory-mapped-file-reading-simulation",
    "description": "Simulate reading huge file directly from memory address space.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Map 1GB file",
        "output": "Mapped file: Instant random access at offset 500MB",
        "explanation": "Executes logic for Memory-Mapped File Reading Simulation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Memory-Mapped File Reading Simulation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Memory-Mapped File Reading Simulation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Memory-Mapped File Reading Simulation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:48Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000049",
    "book": "files",
    "order_index": 49,
    "title": "#049 Validating XML / HTML Tag Matching from File",
    "slug": "files-049-validating-xml-html-tag-matching-from-file",
    "description": "Scan file and use stack to verify opening and closing tags match properly.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "<html><body></body></html>",
        "output": "XML/HTML tags balanced and valid: true",
        "explanation": "Executes logic for Validating XML / HTML Tag Matching from File."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Validating XML / HTML Tag Matching from File\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Validating XML / HTML Tag Matching from File\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Validating XML / HTML Tag Matching from File\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:49Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000050",
    "book": "files",
    "order_index": 50,
    "title": "#050 File Recovery from Raw Header Signature",
    "slug": "files-050-file-recovery-from-raw-header-signature",
    "description": "Scan raw byte dump to detect PNG / JPEG magic byte signatures (`0x89PNG`).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Scan disk image",
        "output": "Detected PNG image at byte offset 2048",
        "explanation": "Executes logic for File Recovery from Raw Header Signature."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File Recovery from Raw Header Signature\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File Recovery from Raw Header Signature\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File Recovery from Raw Header Signature\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:50Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000051",
    "book": "files",
    "order_index": 51,
    "title": "#051 File System Problem 51",
    "slug": "files-051-file-system-problem-51",
    "description": "Implement file stream I/O operation #51 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 51 1",
        "output": "File operation #51 completed with 0 errors (Bytes: 3264)",
        "explanation": "Executes logic for File System Problem 51."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 51\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 51\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 51\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:51Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000052",
    "book": "files",
    "order_index": 52,
    "title": "#052 File System Problem 52",
    "slug": "files-052-file-system-problem-52",
    "description": "Implement file stream I/O operation #52 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 52 1",
        "output": "File operation #52 completed with 0 errors (Bytes: 3328)",
        "explanation": "Executes logic for File System Problem 52."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 52\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 52\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 52\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:52Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000053",
    "book": "files",
    "order_index": 53,
    "title": "#053 File System Problem 53",
    "slug": "files-053-file-system-problem-53",
    "description": "Implement file stream I/O operation #53 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 53 1",
        "output": "File operation #53 completed with 0 errors (Bytes: 3392)",
        "explanation": "Executes logic for File System Problem 53."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 53\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 53\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 53\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:53Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000054",
    "book": "files",
    "order_index": 54,
    "title": "#054 File System Problem 54",
    "slug": "files-054-file-system-problem-54",
    "description": "Implement file stream I/O operation #54 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 54 1",
        "output": "File operation #54 completed with 0 errors (Bytes: 3456)",
        "explanation": "Executes logic for File System Problem 54."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 54\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 54\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 54\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:54Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000055",
    "book": "files",
    "order_index": 55,
    "title": "#055 File System Problem 55",
    "slug": "files-055-file-system-problem-55",
    "description": "Implement file stream I/O operation #55 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 55 1",
        "output": "File operation #55 completed with 0 errors (Bytes: 3520)",
        "explanation": "Executes logic for File System Problem 55."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 55\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 55\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 55\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:55Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000056",
    "book": "files",
    "order_index": 56,
    "title": "#056 File System Problem 56",
    "slug": "files-056-file-system-problem-56",
    "description": "Implement file stream I/O operation #56 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 56 1",
        "output": "File operation #56 completed with 0 errors (Bytes: 3584)",
        "explanation": "Executes logic for File System Problem 56."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 56\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 56\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 56\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:56Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000057",
    "book": "files",
    "order_index": 57,
    "title": "#057 File System Problem 57",
    "slug": "files-057-file-system-problem-57",
    "description": "Implement file stream I/O operation #57 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 57 1",
        "output": "File operation #57 completed with 0 errors (Bytes: 3648)",
        "explanation": "Executes logic for File System Problem 57."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 57\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 57\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 57\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:57Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000058",
    "book": "files",
    "order_index": 58,
    "title": "#058 File System Problem 58",
    "slug": "files-058-file-system-problem-58",
    "description": "Implement file stream I/O operation #58 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 58 1",
        "output": "File operation #58 completed with 0 errors (Bytes: 3712)",
        "explanation": "Executes logic for File System Problem 58."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 58\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 58\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 58\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:58Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000059",
    "book": "files",
    "order_index": 59,
    "title": "#059 File System Problem 59",
    "slug": "files-059-file-system-problem-59",
    "description": "Implement file stream I/O operation #59 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 59 1",
        "output": "File operation #59 completed with 0 errors (Bytes: 3776)",
        "explanation": "Executes logic for File System Problem 59."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 59\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 59\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 59\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:59Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000060",
    "book": "files",
    "order_index": 60,
    "title": "#060 File System Problem 60",
    "slug": "files-060-file-system-problem-60",
    "description": "Implement file stream I/O operation #60 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 60 1",
        "output": "File operation #60 completed with 0 errors (Bytes: 3840)",
        "explanation": "Executes logic for File System Problem 60."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 60\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 60\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 60\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:00Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000061",
    "book": "files",
    "order_index": 61,
    "title": "#061 File System Problem 61",
    "slug": "files-061-file-system-problem-61",
    "description": "Implement file stream I/O operation #61 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 61 1",
        "output": "File operation #61 completed with 0 errors (Bytes: 3904)",
        "explanation": "Executes logic for File System Problem 61."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 61\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 61\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 61\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:01Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000062",
    "book": "files",
    "order_index": 62,
    "title": "#062 File System Problem 62",
    "slug": "files-062-file-system-problem-62",
    "description": "Implement file stream I/O operation #62 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 62 1",
        "output": "File operation #62 completed with 0 errors (Bytes: 3968)",
        "explanation": "Executes logic for File System Problem 62."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 62\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 62\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 62\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:02Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000063",
    "book": "files",
    "order_index": 63,
    "title": "#063 File System Problem 63",
    "slug": "files-063-file-system-problem-63",
    "description": "Implement file stream I/O operation #63 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 63 1",
        "output": "File operation #63 completed with 0 errors (Bytes: 4032)",
        "explanation": "Executes logic for File System Problem 63."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 63\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 63\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 63\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:03Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000064",
    "book": "files",
    "order_index": 64,
    "title": "#064 File System Problem 64",
    "slug": "files-064-file-system-problem-64",
    "description": "Implement file stream I/O operation #64 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 64 1",
        "output": "File operation #64 completed with 0 errors (Bytes: 4096)",
        "explanation": "Executes logic for File System Problem 64."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 64\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 64\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 64\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:04Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000065",
    "book": "files",
    "order_index": 65,
    "title": "#065 File System Problem 65",
    "slug": "files-065-file-system-problem-65",
    "description": "Implement file stream I/O operation #65 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 65 1",
        "output": "File operation #65 completed with 0 errors (Bytes: 4160)",
        "explanation": "Executes logic for File System Problem 65."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 65\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 65\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 65\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:05Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000066",
    "book": "files",
    "order_index": 66,
    "title": "#066 File System Problem 66",
    "slug": "files-066-file-system-problem-66",
    "description": "Implement file stream I/O operation #66 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 66 1",
        "output": "File operation #66 completed with 0 errors (Bytes: 4224)",
        "explanation": "Executes logic for File System Problem 66."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 66\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 66\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 66\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:06Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000067",
    "book": "files",
    "order_index": 67,
    "title": "#067 File System Problem 67",
    "slug": "files-067-file-system-problem-67",
    "description": "Implement file stream I/O operation #67 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 67 1",
        "output": "File operation #67 completed with 0 errors (Bytes: 4288)",
        "explanation": "Executes logic for File System Problem 67."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 67\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 67\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 67\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:07Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000068",
    "book": "files",
    "order_index": 68,
    "title": "#068 File System Problem 68",
    "slug": "files-068-file-system-problem-68",
    "description": "Implement file stream I/O operation #68 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 68 1",
        "output": "File operation #68 completed with 0 errors (Bytes: 4352)",
        "explanation": "Executes logic for File System Problem 68."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 68\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 68\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 68\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:08Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000069",
    "book": "files",
    "order_index": 69,
    "title": "#069 File System Problem 69",
    "slug": "files-069-file-system-problem-69",
    "description": "Implement file stream I/O operation #69 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 69 1",
        "output": "File operation #69 completed with 0 errors (Bytes: 4416)",
        "explanation": "Executes logic for File System Problem 69."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 69\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 69\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 69\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:09Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000070",
    "book": "files",
    "order_index": 70,
    "title": "#070 File System Problem 70",
    "slug": "files-070-file-system-problem-70",
    "description": "Implement file stream I/O operation #70 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 70 1",
        "output": "File operation #70 completed with 0 errors (Bytes: 4480)",
        "explanation": "Executes logic for File System Problem 70."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 70\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 70\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 70\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:10Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000071",
    "book": "files",
    "order_index": 71,
    "title": "#071 File System Problem 71",
    "slug": "files-071-file-system-problem-71",
    "description": "Implement file stream I/O operation #71 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 71 1",
        "output": "File operation #71 completed with 0 errors (Bytes: 4544)",
        "explanation": "Executes logic for File System Problem 71."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 71\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 71\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 71\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:11Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000072",
    "book": "files",
    "order_index": 72,
    "title": "#072 File System Problem 72",
    "slug": "files-072-file-system-problem-72",
    "description": "Implement file stream I/O operation #72 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 72 1",
        "output": "File operation #72 completed with 0 errors (Bytes: 4608)",
        "explanation": "Executes logic for File System Problem 72."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 72\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 72\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 72\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:12Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000073",
    "book": "files",
    "order_index": 73,
    "title": "#073 File System Problem 73",
    "slug": "files-073-file-system-problem-73",
    "description": "Implement file stream I/O operation #73 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 73 1",
        "output": "File operation #73 completed with 0 errors (Bytes: 4672)",
        "explanation": "Executes logic for File System Problem 73."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 73\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 73\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 73\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:13Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000074",
    "book": "files",
    "order_index": 74,
    "title": "#074 File System Problem 74",
    "slug": "files-074-file-system-problem-74",
    "description": "Implement file stream I/O operation #74 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 74 1",
        "output": "File operation #74 completed with 0 errors (Bytes: 4736)",
        "explanation": "Executes logic for File System Problem 74."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 74\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 74\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 74\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:14Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000075",
    "book": "files",
    "order_index": 75,
    "title": "#075 File System Problem 75",
    "slug": "files-075-file-system-problem-75",
    "description": "Implement file stream I/O operation #75 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 75 1",
        "output": "File operation #75 completed with 0 errors (Bytes: 4800)",
        "explanation": "Executes logic for File System Problem 75."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 75\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 75\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 75\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:15Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000076",
    "book": "files",
    "order_index": 76,
    "title": "#076 File System Problem 76",
    "slug": "files-076-file-system-problem-76",
    "description": "Implement file stream I/O operation #76 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 76 1",
        "output": "File operation #76 completed with 0 errors (Bytes: 4864)",
        "explanation": "Executes logic for File System Problem 76."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 76\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 76\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 76\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:16Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000077",
    "book": "files",
    "order_index": 77,
    "title": "#077 File System Problem 77",
    "slug": "files-077-file-system-problem-77",
    "description": "Implement file stream I/O operation #77 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 77 1",
        "output": "File operation #77 completed with 0 errors (Bytes: 4928)",
        "explanation": "Executes logic for File System Problem 77."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 77\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 77\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 77\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:17Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000078",
    "book": "files",
    "order_index": 78,
    "title": "#078 File System Problem 78",
    "slug": "files-078-file-system-problem-78",
    "description": "Implement file stream I/O operation #78 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 78 1",
        "output": "File operation #78 completed with 0 errors (Bytes: 4992)",
        "explanation": "Executes logic for File System Problem 78."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 78\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 78\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 78\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:18Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000079",
    "book": "files",
    "order_index": 79,
    "title": "#079 File System Problem 79",
    "slug": "files-079-file-system-problem-79",
    "description": "Implement file stream I/O operation #79 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 79 1",
        "output": "File operation #79 completed with 0 errors (Bytes: 5056)",
        "explanation": "Executes logic for File System Problem 79."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 79\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 79\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 79\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:19Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000080",
    "book": "files",
    "order_index": 80,
    "title": "#080 File System Problem 80",
    "slug": "files-080-file-system-problem-80",
    "description": "Implement file stream I/O operation #80 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 80 1",
        "output": "File operation #80 completed with 0 errors (Bytes: 5120)",
        "explanation": "Executes logic for File System Problem 80."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 80\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 80\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 80\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:20Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000081",
    "book": "files",
    "order_index": 81,
    "title": "#081 File System Problem 81",
    "slug": "files-081-file-system-problem-81",
    "description": "Implement file stream I/O operation #81 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 81 1",
        "output": "File operation #81 completed with 0 errors (Bytes: 5184)",
        "explanation": "Executes logic for File System Problem 81."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 81\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 81\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 81\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:21Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000082",
    "book": "files",
    "order_index": 82,
    "title": "#082 File System Problem 82",
    "slug": "files-082-file-system-problem-82",
    "description": "Implement file stream I/O operation #82 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 82 1",
        "output": "File operation #82 completed with 0 errors (Bytes: 5248)",
        "explanation": "Executes logic for File System Problem 82."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 82\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 82\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 82\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:22Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000083",
    "book": "files",
    "order_index": 83,
    "title": "#083 File System Problem 83",
    "slug": "files-083-file-system-problem-83",
    "description": "Implement file stream I/O operation #83 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 83 1",
        "output": "File operation #83 completed with 0 errors (Bytes: 5312)",
        "explanation": "Executes logic for File System Problem 83."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 83\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 83\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 83\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:23Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000084",
    "book": "files",
    "order_index": 84,
    "title": "#084 File System Problem 84",
    "slug": "files-084-file-system-problem-84",
    "description": "Implement file stream I/O operation #84 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 84 1",
        "output": "File operation #84 completed with 0 errors (Bytes: 5376)",
        "explanation": "Executes logic for File System Problem 84."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 84\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 84\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 84\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:24Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000085",
    "book": "files",
    "order_index": 85,
    "title": "#085 File System Problem 85",
    "slug": "files-085-file-system-problem-85",
    "description": "Implement file stream I/O operation #85 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 85 1",
        "output": "File operation #85 completed with 0 errors (Bytes: 5440)",
        "explanation": "Executes logic for File System Problem 85."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 85\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 85\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 85\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:25Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000086",
    "book": "files",
    "order_index": 86,
    "title": "#086 File System Problem 86",
    "slug": "files-086-file-system-problem-86",
    "description": "Implement file stream I/O operation #86 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 86 1",
        "output": "File operation #86 completed with 0 errors (Bytes: 5504)",
        "explanation": "Executes logic for File System Problem 86."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 86\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 86\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 86\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:26Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000087",
    "book": "files",
    "order_index": 87,
    "title": "#087 File System Problem 87",
    "slug": "files-087-file-system-problem-87",
    "description": "Implement file stream I/O operation #87 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 87 1",
        "output": "File operation #87 completed with 0 errors (Bytes: 5568)",
        "explanation": "Executes logic for File System Problem 87."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 87\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 87\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 87\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:27Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000088",
    "book": "files",
    "order_index": 88,
    "title": "#088 File System Problem 88",
    "slug": "files-088-file-system-problem-88",
    "description": "Implement file stream I/O operation #88 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 88 1",
        "output": "File operation #88 completed with 0 errors (Bytes: 5632)",
        "explanation": "Executes logic for File System Problem 88."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 88\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 88\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 88\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:28Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000089",
    "book": "files",
    "order_index": 89,
    "title": "#089 File System Problem 89",
    "slug": "files-089-file-system-problem-89",
    "description": "Implement file stream I/O operation #89 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 89 1",
        "output": "File operation #89 completed with 0 errors (Bytes: 5696)",
        "explanation": "Executes logic for File System Problem 89."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 89\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 89\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 89\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:29Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000090",
    "book": "files",
    "order_index": 90,
    "title": "#090 File System Problem 90",
    "slug": "files-090-file-system-problem-90",
    "description": "Implement file stream I/O operation #90 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 90 1",
        "output": "File operation #90 completed with 0 errors (Bytes: 5760)",
        "explanation": "Executes logic for File System Problem 90."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 90\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 90\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 90\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:30Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000091",
    "book": "files",
    "order_index": 91,
    "title": "#091 File System Problem 91",
    "slug": "files-091-file-system-problem-91",
    "description": "Implement file stream I/O operation #91 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 91 1",
        "output": "File operation #91 completed with 0 errors (Bytes: 5824)",
        "explanation": "Executes logic for File System Problem 91."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 91\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 91\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 91\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:31Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000092",
    "book": "files",
    "order_index": 92,
    "title": "#092 File System Problem 92",
    "slug": "files-092-file-system-problem-92",
    "description": "Implement file stream I/O operation #92 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 92 1",
        "output": "File operation #92 completed with 0 errors (Bytes: 5888)",
        "explanation": "Executes logic for File System Problem 92."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 92\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 92\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 92\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:32Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000093",
    "book": "files",
    "order_index": 93,
    "title": "#093 File System Problem 93",
    "slug": "files-093-file-system-problem-93",
    "description": "Implement file stream I/O operation #93 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 93 1",
        "output": "File operation #93 completed with 0 errors (Bytes: 5952)",
        "explanation": "Executes logic for File System Problem 93."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 93\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 93\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 93\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:33Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000094",
    "book": "files",
    "order_index": 94,
    "title": "#094 File System Problem 94",
    "slug": "files-094-file-system-problem-94",
    "description": "Implement file stream I/O operation #94 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 94 1",
        "output": "File operation #94 completed with 0 errors (Bytes: 6016)",
        "explanation": "Executes logic for File System Problem 94."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 94\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 94\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 94\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:34Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000095",
    "book": "files",
    "order_index": 95,
    "title": "#095 File System Problem 95",
    "slug": "files-095-file-system-problem-95",
    "description": "Implement file stream I/O operation #95 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 95 1",
        "output": "File operation #95 completed with 0 errors (Bytes: 6080)",
        "explanation": "Executes logic for File System Problem 95."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 95\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 95\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 95\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:35Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000096",
    "book": "files",
    "order_index": 96,
    "title": "#096 File System Problem 96",
    "slug": "files-096-file-system-problem-96",
    "description": "Implement file stream I/O operation #96 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 96 1",
        "output": "File operation #96 completed with 0 errors (Bytes: 6144)",
        "explanation": "Executes logic for File System Problem 96."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 96\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 96\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 96\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:36Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000097",
    "book": "files",
    "order_index": 97,
    "title": "#097 File System Problem 97",
    "slug": "files-097-file-system-problem-97",
    "description": "Implement file stream I/O operation #97 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 97 1",
        "output": "File operation #97 completed with 0 errors (Bytes: 6208)",
        "explanation": "Executes logic for File System Problem 97."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 97\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 97\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 97\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:37Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000098",
    "book": "files",
    "order_index": 98,
    "title": "#098 File System Problem 98",
    "slug": "files-098-file-system-problem-98",
    "description": "Implement file stream I/O operation #98 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 98 1",
        "output": "File operation #98 completed with 0 errors (Bytes: 6272)",
        "explanation": "Executes logic for File System Problem 98."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 98\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 98\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 98\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:38Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000099",
    "book": "files",
    "order_index": 99,
    "title": "#099 File System Problem 99",
    "slug": "files-099-file-system-problem-99",
    "description": "Implement file stream I/O operation #99 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 99 1",
        "output": "File operation #99 completed with 0 errors (Bytes: 6336)",
        "explanation": "Executes logic for File System Problem 99."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 99\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 99\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 99\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:39Z"
  },
  {
    "id": "00000000-0000-4000-8011-000000000100",
    "book": "files",
    "order_index": 100,
    "title": "#100 File System Problem 100",
    "slug": "files-100-file-system-problem-100",
    "description": "Implement file stream I/O operation #100 handling serialization, disk parsing, or filesystem manipulation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ File Handling & Stream I/O",
    "tags": [
      "Files",
      "Streams",
      "fstream",
      "Serialization",
      "Filesystem"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FILE_OP 100 1",
        "output": "File operation #100 completed with 0 errors (Bytes: 6400)",
        "explanation": "Executes logic for File System Problem 100."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// File System Problem 100\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# File System Problem 100\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// File System Problem 100\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:40Z"
  }
];
