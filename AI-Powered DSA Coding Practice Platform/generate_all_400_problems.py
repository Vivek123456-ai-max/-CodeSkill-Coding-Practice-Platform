import json

from generate_100_problems import raw_problems_data as pattern_problems
from generate_all_200_problems import loop_problems

# Define Book 3: Variables Mastery (100 Problems)
variables_problems = [
  # 01 Declaring & Initializing Variables (1-8)
  {
    "num": 1, "title": "Declare and Print an Integer", "difficulty": "Easy", "category": "Declaring & Initializing",
    "tags": ["Declaration", "Output"],
    "desc": "Declare an integer variable, initialize it with the given input value, and print it.\n\n### Input\nA single integer N.\n\n### Output\nPrint the value of N.",
    "input": "42", "output": "42"
  },
  {
    "num": 2, "title": "Declare and Print a Float", "difficulty": "Easy", "category": "Declaring & Initializing",
    "tags": ["Declaration", "Output", "Float"],
    "desc": "Declare a float variable, initialize it with the given input, and print it rounded to 2 decimal places.\n\n### Input\nA single decimal number.\n\n### Output\nPrint the value with exactly 2 decimal places.",
    "input": "3.14159", "output": "3.14"
  },
  {
    "num": 3, "title": "Declare and Print a Character", "difficulty": "Easy", "category": "Declaring & Initializing",
    "tags": ["Declaration", "Output", "Char"],
    "desc": "Declare a char variable, initialize it with the given input character, and print it.\n\n### Input\nA single character.\n\n### Output\nPrint the character.",
    "input": "A", "output": "A"
  },
  {
    "num": 4, "title": "Declare and Print a Boolean", "difficulty": "Easy", "category": "Declaring & Initializing",
    "tags": ["Declaration", "Output", "Bool"],
    "desc": "Declare a bool variable from the given input (1 or 0) and print it as the word true or false.\n\n### Input\nA single integer, 1 or 0.\n\n### Output\nPrint 'true' if the input is 1, otherwise 'false'.",
    "input": "1", "output": "true"
  },
  {
    "num": 5, "title": "Declare Multiple Variables on One Line", "difficulty": "Easy", "category": "Declaring & Initializing",
    "tags": ["Declaration", "Multiple Variables"],
    "desc": "Declare three integer variables a, b, c on a single line, initialize them from input, and print their sum.\n\n### Input\nThree integers a, b and c.\n\n### Output\nPrint the sum a + b + c.",
    "input": "3 5 7", "output": "15"
  },
  {
    "num": 6, "title": "Reassigning a Variable's Value", "difficulty": "Easy", "category": "Declaring & Initializing",
    "tags": ["Assignment", "Reassignment"],
    "desc": "Declare an integer variable initialized to 0, print it, then reassign it to the given input value and print it again.\n\n### Input\nA single integer N.\n\n### Output\nPrint 0 on the first line, then N on the second line.",
    "input": "25", "output": "0\n25"
  },
  {
    "num": 7, "title": "Declare a Variable Using auto", "difficulty": "Easy", "category": "Declaring & Initializing",
    "tags": ["auto", "Type Inference"],
    "desc": "Declare a variable using the auto keyword, initialize it with the given integer input, and print double its value.\n\n### Input\nA single integer N.\n\n### Output\nPrint 2 * N.",
    "input": "6", "output": "12"
  },
  {
    "num": 8, "title": "Declare and Print a String Variable", "difficulty": "Easy", "category": "Declaring & Initializing",
    "tags": ["std::string", "Declaration"],
    "desc": "Declare a std::string variable, initialize it with the given name, and print a greeting using it.\n\n### Input\nA single word (name).\n\n### Output\nPrint 'Hello, <name>!'",
    "input": "Aarav", "output": "Hello, Aarav!"
  },

  # 02 Printing & Formatting Variables (9-16)
  {
    "num": 9, "title": "Print Variable with Label", "difficulty": "Easy", "category": "Printing & Formatting",
    "tags": ["Output", "Formatting"],
    "desc": "Read an integer into a variable and print it with a descriptive label.\n\n### Input\nA single integer N.\n\n### Output\nPrint 'Value: N'.",
    "input": "7", "output": "Value: 7"
  },
  {
    "num": 10, "title": "Print Multiple Variables in One Line", "difficulty": "Easy", "category": "Printing & Formatting",
    "tags": ["Output", "Formatting"],
    "desc": "Read three integers into variables a, b, c and print them on one line separated by spaces.\n\n### Input\nThree integers.\n\n### Output\nPrint all three values separated by single spaces.",
    "input": "1 2 3", "output": "1 2 3"
  },
  {
    "num": 11, "title": "Print Variables on Separate Lines", "difficulty": "Easy", "category": "Printing & Formatting",
    "tags": ["Output", "Formatting"],
    "desc": "Read two integers into variables and print each one on its own line.\n\n### Input\nTwo integers a and b.\n\n### Output\nPrint a, then b, each on its own line.",
    "input": "4 5", "output": "4\n5"
  },
  {
    "num": 12, "title": "Print Float with Fixed 3 Decimal Places", "difficulty": "Easy", "category": "Printing & Formatting",
    "tags": ["Output", "Precision"],
    "desc": "Read a float value and print it with exactly 3 decimal places.\n\n### Input\nA single decimal number.\n\n### Output\nPrint the value with 3 decimal places.",
    "input": "2.5", "output": "2.500"
  },
  {
    "num": 13, "title": "Print Integer with Leading Zeros", "difficulty": "Medium", "category": "Printing & Formatting",
    "tags": ["Output", "Width/Padding"],
    "desc": "Read an integer and print it zero-padded to a total width of 5 characters.\n\n### Input\nA single integer N (0 to 99999).\n\n### Output\nPrint N padded with leading zeros to width 5.",
    "input": "42", "output": "00042"
  },
  {
    "num": 14, "title": "Print Variable Value and Its Type Size", "difficulty": "Medium", "category": "Printing & Formatting",
    "tags": ["sizeof", "Output"],
    "desc": "Read an integer, store it in an int variable, and print both its value and the number of bytes an int occupies.\n\n### Input\nA single integer N.\n\n### Output\nPrint 'Value: N, Size: 4 bytes'.",
    "input": "10", "output": "Value: 10, Size: 4 bytes"
  },
  {
    "num": 15, "title": "Print a Character's ASCII Value", "difficulty": "Easy", "category": "Printing & Formatting",
    "tags": ["char", "ASCII"],
    "desc": "Read a character and print its ASCII (integer) value.\n\n### Input\nA single character.\n\n### Output\nPrint the ASCII value of the character as an integer.",
    "input": "A", "output": "65"
  },
  {
    "num": 16, "title": "Print Boolean as 1/0 and as true/false", "difficulty": "Medium", "category": "Printing & Formatting",
    "tags": ["bool", "Output Formatting"],
    "desc": "Read an integer (1 or 0) into a bool variable and print it first as 1/0, then as true/false.\n\n### Input\nA single integer, 1 or 0.\n\n### Output\nPrint the value as 1/0 on the first line and true/false on the second.",
    "input": "1", "output": "1\ntrue"
  },

  # 03 Data Types & Ranges (17-26)
  {
    "num": 17, "title": "Sum of an int and a float", "difficulty": "Easy", "category": "Data Types & Ranges",
    "tags": ["Type Promotion"],
    "desc": "Read an integer and a float, add them together, and print the result (which becomes a float).\n\n### Input\nAn integer and a decimal number.\n\n### Output\nPrint their sum.",
    "input": "3 2.5", "output": "5.5"
  },
  {
    "num": 18, "title": "Integer Division vs Float Division", "difficulty": "Medium", "category": "Data Types & Ranges",
    "tags": ["Type Promotion", "Division"],
    "desc": "Read two integers and print both their integer division result and their float division result.\n\n### Input\nTwo integers a and b.\n\n### Output\nInteger division: X\nFloat division: Y",
    "input": "7 2", "output": "Integer division: 3\nFloat division: 3.5"
  },
  {
    "num": 19, "title": "Char Arithmetic", "difficulty": "Medium", "category": "Data Types & Ranges",
    "tags": ["char", "ASCII Arithmetic"],
    "desc": "Read a character and an integer, add the integer to the character's ASCII value, and print the resulting character.\n\n### Input\nA character and an integer N.\n\n### Output\nPrint the character N positions later in the alphabet.",
    "input": "A 2", "output": "C"
  },
  {
    "num": 20, "title": "Double Precision Output", "difficulty": "Medium", "category": "Data Types & Ranges",
    "tags": ["double", "setprecision"],
    "desc": "Read a double value and print it with 8 significant digits.\n\n### Input\nA decimal number.\n\n### Output\nPrint the value using 8 significant digits.",
    "input": "3.14159265", "output": "3.14159265"
  },
  {
    "num": 21, "title": "Storing Large Numbers with long long", "difficulty": "Easy", "category": "Data Types & Ranges",
    "tags": ["long long", "Data Types"],
    "desc": "Read a large integer into a long long variable and print it back.\n\n### Input\nA large integer (may exceed int range).\n\n### Output\nPrint the value.",
    "input": "10000000000", "output": "10000000000"
  },
  {
    "num": 22, "title": "Minimum and Maximum int Value", "difficulty": "Easy", "category": "Data Types & Ranges",
    "tags": ["climits", "Data Type Ranges"],
    "desc": "Print the minimum and maximum values a standard int can hold.\n\n### Input\nNo input.\n\n### Output\nPrint INT_MIN then INT_MAX, each on its own line.",
    "input": "", "output": "-2147483648\n2147483647"
  },
  {
    "num": 23, "title": "Unsigned int Behavior", "difficulty": "Medium", "category": "Data Types & Ranges",
    "tags": ["unsigned int", "Overflow"],
    "desc": "Assign -1 to an unsigned int variable and print the resulting (wrapped-around) value.\n\n### Input\nNo input.\n\n### Output\nPrint the value stored in the unsigned int.",
    "input": "", "output": "4294967295"
  },
  {
    "num": 24, "title": "Bool to Int Conversion", "difficulty": "Easy", "category": "Data Types & Ranges",
    "tags": ["bool", "Implicit Conversion"],
    "desc": "Read three 0/1 values into bool variables and print the sum of them treated as integers.\n\n### Input\nThree integers, each 0 or 1.\n\n### Output\nPrint the sum of the three boolean values.",
    "input": "1 0 1", "output": "sum = 2"
  },
  {
    "num": 25, "title": "Int to Char Conversion", "difficulty": "Easy", "category": "Data Types & Ranges",
    "tags": ["char", "Implicit Conversion"],
    "desc": "Read an integer ASCII code and print the corresponding character.\n\n### Input\nA single integer (valid ASCII code).\n\n### Output\nPrint the character with that ASCII value.",
    "input": "66", "output": "B"
  },
  {
    "num": 26, "title": "Float to Int Truncation", "difficulty": "Easy", "category": "Data Types & Ranges",
    "tags": ["Casting", "Truncation"],
    "desc": "Read a float value, store it in an int variable, and print the truncated (decimal part removed) result.\n\n### Input\nA decimal number.\n\n### Output\nPrint the truncated integer value.",
    "input": "9.99", "output": "9"
  },

  # 04 Arithmetic with Variables (27-36)
  {
    "num": 27, "title": "Add Two Variables", "difficulty": "Easy", "category": "Arithmetic with Variables",
    "tags": ["Arithmetic"],
    "desc": "Read two integers into variables and print their sum.\n\n### Input\nTwo integers a and b.\n\n### Output\nPrint a + b.",
    "input": "4 5", "output": "9"
  },
  {
    "num": 28, "title": "Subtract Two Variables", "difficulty": "Easy", "category": "Arithmetic with Variables",
    "tags": ["Arithmetic"],
    "desc": "Read two integers into variables and print their difference.\n\n### Input\nTwo integers a and b.\n\n### Output\nPrint a - b.",
    "input": "10 3", "output": "7"
  },
  {
    "num": 29, "title": "Multiply Two Variables", "difficulty": "Easy", "category": "Arithmetic with Variables",
    "tags": ["Arithmetic"],
    "desc": "Read two integers into variables and print their product.\n\n### Input\nTwo integers a and b.\n\n### Output\nPrint a * b.",
    "input": "6 7", "output": "42"
  },
  {
    "num": 30, "title": "Divide Two Variables", "difficulty": "Easy", "category": "Arithmetic with Variables",
    "tags": ["Arithmetic", "Division"],
    "desc": "Read two integers into variables and print the integer result of dividing the first by the second.\n\n### Input\nTwo integers a and b (b divides a evenly).\n\n### Output\nPrint a / b.",
    "input": "20 4", "output": "5"
  },
  {
    "num": 31, "title": "Modulus of Two Variables", "difficulty": "Easy", "category": "Arithmetic with Variables",
    "tags": ["Arithmetic", "Modulus"],
    "desc": "Read two integers into variables and print the remainder when the first is divided by the second.\n\n### Input\nTwo integers a and b.\n\n### Output\nPrint a % b.",
    "input": "17 5", "output": "2"
  },
  {
    "num": 32, "title": "Average of Three Variables", "difficulty": "Easy", "category": "Arithmetic with Variables",
    "tags": ["Arithmetic", "Average"],
    "desc": "Read three integers into variables and print their average as an integer.\n\n### Input\nThree integers.\n\n### Output\nPrint the average (integer division).",
    "input": "4 5 9", "output": "6"
  },
  {
    "num": 33, "title": "Area of a Rectangle from Variables", "difficulty": "Easy", "category": "Arithmetic with Variables",
    "tags": ["Arithmetic", "Real-World"],
    "desc": "Read the length and width of a rectangle into variables and print its area.\n\n### Input\nTwo integers: length and width.\n\n### Output\nPrint length * width.",
    "input": "5 3", "output": "15"
  },
  {
    "num": 34, "title": "Simple Interest from Variables", "difficulty": "Medium", "category": "Arithmetic with Variables",
    "tags": ["Arithmetic", "Real-World Formula"],
    "desc": "Read principal, rate and time into variables and print the simple interest using SI = P*R*T/100.\n\n### Input\nThree integers: principal, rate, time.\n\n### Output\nPrint the simple interest.",
    "input": "1000 5 2", "output": "100"
  },
  {
    "num": 35, "title": "Convert Celsius to Fahrenheit", "difficulty": "Medium", "category": "Arithmetic with Variables",
    "tags": ["Arithmetic", "Real-World Formula"],
    "desc": "Read a Celsius temperature into a variable and print the equivalent Fahrenheit temperature.\n\n### Input\nAn integer, Celsius temperature.\n\n### Output\nPrint F = C*9/5 + 32.",
    "input": "0", "output": "32"
  },
  {
    "num": 36, "title": "Sum of Digits of a 3-Digit Number", "difficulty": "Medium", "category": "Arithmetic with Variables",
    "tags": ["Arithmetic", "Digit Extraction"],
    "desc": "Read a 3-digit number into a variable and print the sum of its digits using / and % on variables.\n\n### Input\nA 3-digit integer.\n\n### Output\nPrint the sum of its digits.",
    "input": "123", "output": "6"
  },

  # 05 Type Conversion & Casting (37-44)
  {
    "num": 37, "title": "Implicit Type Conversion", "difficulty": "Easy", "category": "Type Conversion & Casting",
    "tags": ["Type Conversion"],
    "desc": "Read an integer and a float, add them without any explicit cast, and print the result.\n\n### Input\nAn integer and a decimal number.\n\n### Output\nPrint their sum.",
    "input": "5 2.5", "output": "7.5"
  },
  {
    "num": 38, "title": "Explicit Cast: float to int", "difficulty": "Easy", "category": "Type Conversion & Casting",
    "tags": ["static_cast", "Casting"],
    "desc": "Read a float value and use static_cast to convert and print it as an integer.\n\n### Input\nA decimal number.\n\n### Output\nPrint the value cast to int.",
    "input": "9.7", "output": "9"
  },
  {
    "num": 39, "title": "Explicit Cast for Accurate Division", "difficulty": "Medium", "category": "Type Conversion & Casting",
    "tags": ["static_cast", "Division"],
    "desc": "Read two integers, cast one to a float before dividing, and print the precise (non-truncated) result.\n\n### Input\nTwo integers a and b.\n\n### Output\nPrint a / b as a float using a cast.",
    "input": "7 2", "output": "3.5"
  },
  {
    "num": 40, "title": "Cast Char to Int", "difficulty": "Easy", "category": "Type Conversion & Casting",
    "tags": ["Casting", "ASCII"],
    "desc": "Read a character and print its integer (ASCII) value using an explicit cast.\n\n### Input\nA single character.\n\n### Output\nPrint its ASCII value as an integer.",
    "input": "Z", "output": "90"
  },
  {
    "num": 41, "title": "Cast Int to Char", "difficulty": "Easy", "category": "Type Conversion & Casting",
    "tags": ["Casting", "ASCII"],
    "desc": "Read an integer ASCII code and print the corresponding character using an explicit cast.\n\n### Input\nA single integer (valid ASCII code).\n\n### Output\nPrint the character.",
    "input": "97", "output": "a"
  },
  {
    "num": 42, "title": "Cast double to float", "difficulty": "Medium", "category": "Type Conversion & Casting",
    "tags": ["Casting", "Precision Loss"],
    "desc": "Read a double value with many decimal digits, cast it to float, and print it using default precision.\n\n### Input\nA decimal number with many digits.\n\n### Output\nPrint the value after casting to float.",
    "input": "3.14159265358979", "output": "3.14159"
  },
  {
    "num": 43, "title": "static_cast bool to int", "difficulty": "Easy", "category": "Type Conversion & Casting",
    "tags": ["static_cast", "bool"],
    "desc": "Read the word true or false into a bool and print it as an integer using static_cast.\n\n### Input\nThe word 'true' or 'false'.\n\n### Output\nPrint 1 for true, 0 for false.",
    "input": "true", "output": "1"
  },
  {
    "num": 44, "title": "Convert String Number to Integer", "difficulty": "Medium", "category": "Type Conversion & Casting",
    "tags": ["stoi", "String Conversion"],
    "desc": "Read a numeric string, convert it to an integer using stoi, add 1, and print the result.\n\n### Input\nA string containing digits.\n\n### Output\nPrint the converted number plus 1.",
    "input": "123", "output": "124"
  },

  # 06 Constants (45-52)
  {
    "num": 45, "title": "Declare and Use a const Variable", "difficulty": "Easy", "category": "Constants",
    "tags": ["const"],
    "desc": "Declare a const double for PI = 3.14, read a radius into a variable, and print the circle's area rounded to 1 decimal place.\n\n### Input\nAn integer radius.\n\n### Output\nPrint PI * radius * radius, rounded to 1 decimal place.",
    "input": "5", "output": "78.5"
  },
  {
    "num": 46, "title": "Use #define for a Constant", "difficulty": "Easy", "category": "Constants",
    "tags": ["#define", "Macros"],
    "desc": "Use a #define macro to compute the square of an input value.\n\n### Input\nA single integer N.\n\n### Output\nPrint N squared using the macro.",
    "input": "10", "output": "100"
  },
  {
    "num": 47, "title": "constexpr Compile-Time Constant", "difficulty": "Easy", "category": "Constants",
    "tags": ["constexpr"],
    "desc": "Declare a constexpr int as an array size and print that size.\n\n### Input\nNo input.\n\n### Output\nPrint 'Array size: 5'.",
    "input": "", "output": "Array size: 5"
  },
  {
    "num": 48, "title": "Circle Circumference Using const PI", "difficulty": "Easy", "category": "Constants",
    "tags": ["const", "Real-World Formula"],
    "desc": "Declare a const double for PI = 3.14, read a radius, and print the circle's circumference rounded to 2 decimals.\n\n### Input\nAn integer radius.\n\n### Output\nPrint 2 * PI * radius, rounded to 2 decimal places.",
    "input": "7", "output": "43.96"
  },
  {
    "num": 49, "title": "const Reference to a Variable", "difficulty": "Medium", "category": "Constants",
    "tags": ["const reference"],
    "desc": "Declare an integer variable and a const reference to it, then print the value through the reference.\n\n### Input\nA single integer N.\n\n### Output\nPrint the value of N via the const reference.",
    "input": "8", "output": "8"
  },
  {
    "num": 50, "title": "Enum as Named Constants", "difficulty": "Medium", "category": "Constants",
    "tags": ["enum"],
    "desc": "Declare an enum for the days of the week and print the name corresponding to the given number (1 = Monday).\n\n### Input\nA single integer from 1 to 7.\n\n### Output\nPrint the matching day name.",
    "input": "3", "output": "Wednesday"
  },
  {
    "num": 51, "title": "const in a Function Parameter", "difficulty": "Medium", "category": "Constants",
    "tags": ["const parameter"],
    "desc": "Read an integer, pass it to a function that takes a const reference and returns double its value, and print both the original and doubled values.\n\n### Input\nA single integer N.\n\n### Output\nOriginal: N, Doubled: 2N",
    "input": "6", "output": "Original: 6, Doubled: 12"
  },
  {
    "num": 52, "title": "Combine Multiple const Variables in a Formula", "difficulty": "Medium", "category": "Constants",
    "tags": ["const", "Physics Formula"],
    "desc": "Read a mass and a velocity, and print the kinetic energy using KE = 0.5 * m * v * v.\n\n### Input\nTwo integers: mass and velocity.\n\n### Output\nPrint the kinetic energy.",
    "input": "2 3", "output": "9"
  },

  # 07 Increment/Decrement & Compound Assignment (53-60)
  {
    "num": 53, "title": "Post-Increment on a Variable", "difficulty": "Medium", "category": "Increment & Compound Assignment",
    "tags": ["Increment", "Post-Increment"],
    "desc": "Read an integer a, print the value of a++ (its value before incrementing), then print a's new value.\n\n### Input\nA single integer a.\n\n### Output\nPrint a++ on the first line, then the updated a on the second.",
    "input": "5", "output": "5\n6"
  },
  {
    "num": 54, "title": "Pre-Increment on a Variable", "difficulty": "Easy", "category": "Increment & Compound Assignment",
    "tags": ["Increment", "Pre-Increment"],
    "desc": "Read an integer a and print the value of ++a (its value after incrementing).\n\n### Input\nA single integer a.\n\n### Output\nPrint ++a.",
    "input": "5", "output": "6"
  },
  {
    "num": 55, "title": "Compound Addition Assignment", "difficulty": "Easy", "category": "Increment & Compound Assignment",
    "tags": ["+=", "Compound Assignment"],
    "desc": "Read an integer a and an integer b, then apply a += b and print the result.\n\n### Input\nTwo integers a and b.\n\n### Output\nPrint the value of a after a += b.",
    "input": "10 5", "output": "15"
  },
  {
    "num": 56, "title": "Compound Multiplication Assignment", "difficulty": "Easy", "category": "Increment & Compound Assignment",
    "tags": ["*=", "Compound Assignment"],
    "desc": "Read an integer a and an integer b, then apply a *= b and print the result.\n\n### Input\nTwo integers a and b.\n\n### Output\nPrint the value of a after a *= b.",
    "input": "4 3", "output": "12"
  },
  {
    "num": 57, "title": "Compound Subtraction and Division Together", "difficulty": "Medium", "category": "Increment & Compound Assignment",
    "tags": ["-=", "/=", "Compound Assignment"],
    "desc": "Read an integer a and an integer b. Apply a -= b and print the result, then apply a /= b to that new value and print the result.\n\n### Input\nTwo integers a and b.\n\n### Output\nAfter -=5: 15\nAfter /=5: 3",
    "input": "20 5", "output": "After -=5: 15\nAfter /=5: 3"
  },
  {
    "num": 58, "title": "Chained Increment in an Expression", "difficulty": "Hard", "category": "Increment & Compound Assignment",
    "tags": ["Increment", "Expression Evaluation"],
    "desc": "Read an integer a. Compute b = ++a + a++ and print the final value of b.\n\n### Input\nA single integer a.\n\n### Output\nPrint the value of b.",
    "input": "3", "output": "8"
  },
  {
    "num": 59, "title": "Decrement Loop Countdown", "difficulty": "Easy", "category": "Increment & Compound Assignment",
    "tags": ["Decrement", "Loops"],
    "desc": "Read an integer N and print a countdown from N down to 1, one number per line, using -- on a variable.\n\n### Input\nA single integer N.\n\n### Output\nPrint N, N-1, ..., 1 each on its own line.",
    "input": "5", "output": "5\n4\n3\n2\n1"
  },
  {
    "num": 60, "title": "Combined Increment and Compound Assignment", "difficulty": "Medium", "category": "Increment & Compound Assignment",
    "tags": ["+=", "Increment", "Running Total"],
    "desc": "Read three integers representing points earned, add each to a running total using +=, then apply one final ++ bonus point and print the total.\n\n### Input\nThree integers.\n\n### Output\nPrint the final total after summing and adding a bonus point.",
    "input": "10 20 5", "output": "36"
  },

  # 08 Swapping & Multiple Variable Manipulation (61-68)
  {
    "num": 61, "title": "Swap Two Variables Using a Temporary Variable", "difficulty": "Easy", "category": "Swapping & Variable Manipulation",
    "tags": ["Swap", "Temp Variable"],
    "desc": "Read two integers into variables a and b, swap their values using a temporary variable, and print the swapped values.\n\n### Input\nTwo integers a and b.\n\n### Output\nPrint the new a and new b separated by a space.",
    "input": "3 8", "output": "8 3"
  },
  {
    "num": 62, "title": "Swap Two Variables Without a Temporary Variable", "difficulty": "Medium", "category": "Swapping & Variable Manipulation",
    "tags": ["Swap", "Arithmetic"],
    "desc": "Read two integers into variables a and b, swap their values using arithmetic (no temp variable), and print the swapped values.\n\n### Input\nTwo integers a and b.\n\n### Output\nPrint the new a and new b separated by a space.",
    "input": "5 9", "output": "9 5"
  },
  {
    "num": 63, "title": "Swap Two Variables Using XOR", "difficulty": "Medium", "category": "Swapping & Variable Manipulation",
    "tags": ["Swap", "Bitwise XOR"],
    "desc": "Read two integers into variables a and b, swap their values using the XOR swap technique, and print the result.\n\n### Input\nTwo integers a and b.\n\n### Output\nPrint the new a and new b separated by a space.",
    "input": "6 11", "output": "11 6"
  },
  {
    "num": 64, "title": "Rotate Three Variables", "difficulty": "Medium", "category": "Swapping & Variable Manipulation",
    "tags": ["Multiple Variables", "Rotation"],
    "desc": "Read three integers a, b, c and rotate their values so that a takes c's value, b takes a's original value, and c takes b's original value. Print the results.\n\n### Input\nThree integers a, b and c.\n\n### Output\nPrint the new a, b and c separated by spaces.",
    "input": "1 2 3", "output": "3 1 2"
  },
  {
    "num": 65, "title": "Swap Two Characters", "difficulty": "Easy", "category": "Swapping & Variable Manipulation",
    "tags": ["Swap", "char"],
    "desc": "Read two characters into variables and swap their values using a temporary variable, then print them.\n\n### Input\nTwo characters.\n\n### Output\nPrint the swapped characters separated by a space.",
    "input": "A B", "output": "B A"
  },
  {
    "num": 66, "title": "Largest of Two Variables Without if", "difficulty": "Medium", "category": "Swapping & Variable Manipulation",
    "tags": ["Conditional Operator", "Ternary"],
    "desc": "Read two integers and print the larger one using the ternary (conditional) operator instead of an if statement.\n\n### Input\nTwo integers a and b.\n\n### Output\nPrint the larger value.",
    "input": "7 3", "output": "7"
  },
  {
    "num": 67, "title": "Smallest of Three Variables", "difficulty": "Medium", "category": "Swapping & Variable Manipulation",
    "tags": ["Comparison", "Multiple Variables"],
    "desc": "Read three integers into variables and print the smallest of the three.\n\n### Input\nThree integers.\n\n### Output\nPrint the smallest value.",
    "input": "4 9 2", "output": "2"
  },
  {
    "num": 68, "title": "Running Total Across Multiple Reads", "difficulty": "Easy", "category": "Swapping & Variable Manipulation",
    "tags": ["Accumulation", "Loops"],
    "desc": "Read four integers one at a time, adding each to a running total variable, and print the final total.\n\n### Input\nFour integers.\n\n### Output\nPrint the sum of all four values.",
    "input": "1 2 3 4", "output": "10"
  },

  # 09 Variable Scope (69-76)
  {
    "num": 69, "title": "Local Variable Inside a Function", "difficulty": "Easy", "category": "Variable Scope",
    "tags": ["Local Scope", "Functions"],
    "desc": "Write a function that declares a local variable, doubles the given input inside it, and returns the result. Print the returned value.\n\n### Input\nA single integer N.\n\n### Output\nPrint 2 * N, computed inside the function.",
    "input": "5", "output": "10"
  },
  {
    "num": 70, "title": "Global Variable Modified by a Function", "difficulty": "Medium", "category": "Variable Scope",
    "tags": ["Global Scope", "Functions"],
    "desc": "Declare a global counter variable. Write a function that increments it by 1. Call the function 3 times and print the final counter value.\n\n### Input\nNo input.\n\n### Output\nPrint the counter value after 3 increments.",
    "input": "", "output": "3"
  },
  {
    "num": 71, "title": "Variable Shadowing", "difficulty": "Medium", "category": "Variable Scope",
    "tags": ["Scope", "Shadowing"],
    "desc": "Declare a global variable initialized to 100. Inside main, declare a local variable with the same name using the given input, and print both the local and global values.\n\n### Input\nA single integer N.\n\n### Output\nLocal: N\nGlobal: 100",
    "input": "5", "output": "Local: 5\nGlobal: 100"
  },
  {
    "num": 72, "title": "Block Scope Variable", "difficulty": "Easy", "category": "Variable Scope",
    "tags": ["Block Scope"],
    "desc": "Read an integer, and inside an if block, declare a local variable holding that value and print it from within the block.\n\n### Input\nA single integer N.\n\n### Output\nPrint 'Inside block: N'.",
    "input": "7", "output": "Inside block: 7"
  },
  {
    "num": 73, "title": "Static Local Variable Retains Value", "difficulty": "Medium", "category": "Variable Scope",
    "tags": ["static", "Function State"],
    "desc": "Write a function containing a static local counter that increments and returns its value each time it is called. Call it 3 times and print each result.\n\n### Input\nNo input.\n\n### Output\nPrint 1, 2, 3 each on its own line.",
    "input": "", "output": "1\n2\n3"
  },
  {
    "num": 74, "title": "Loop Variable Scope", "difficulty": "Easy", "category": "Variable Scope",
    "tags": ["Scope", "Loops"],
    "desc": "Declare a loop variable inside a for loop that runs from 0 to N-1, printing its value each iteration, all on one line separated by spaces.\n\n### Input\nA single integer N.\n\n### Output\nPrint 0 through N-1 separated by spaces.",
    "input": "3", "output": "0 1 2"
  },
  {
    "num": 75, "title": "Pass by Value vs Pass by Reference", "difficulty": "Medium", "category": "Variable Scope",
    "tags": ["Function Parameters", "Reference"],
    "desc": "Read an integer. Pass it to a function by value that doubles it internally (original unaffected), then pass it by reference to a function that doubles it in place. Print both results.\n\n### Input\nA single integer N.\n\n### Output\nBy value: N\nBy reference: 2N",
    "input": "5", "output": "By value: 5\nBy reference: 10"
  },
  {
    "num": 76, "title": "Lifetime of a Variable Declared Inside a Loop", "difficulty": "Medium", "category": "Variable Scope",
    "tags": ["Scope", "Variable Lifetime"],
    "desc": "Inside a loop that runs N times, declare and initialize a variable to 0 each iteration, increment it once, and print it.\n\n### Input\nA single integer N.\n\n### Output\nPrint 1, N times, each on its own line.",
    "input": "3", "output": "1\n1\n1"
  },

  # 10 sizeof & Memory (77-82)
  {
    "num": 77, "title": "sizeof int, float, double, char", "difficulty": "Easy", "category": "sizeof & Memory",
    "tags": ["sizeof", "Data Types"],
    "desc": "Print the number of bytes occupied by int, float, double and char on this system.\n\n### Input\nNo input.\n\n### Output\nint:4 float:4 double:8 char:1",
    "input": "", "output": "int:4 float:4 double:8 char:1"
  },
  {
    "num": 78, "title": "sizeof an Array Variable", "difficulty": "Medium", "category": "sizeof & Memory",
    "tags": ["sizeof", "Arrays"],
    "desc": "Declare an integer array of the given size and print the total number of bytes it occupies.\n\n### Input\nA single integer N (array size).\n\n### Output\nPrint sizeof(the array).",
    "input": "5", "output": "20"
  },
  {
    "num": 79, "title": "Compare Memory Size of int vs long long", "difficulty": "Easy", "category": "sizeof & Memory",
    "tags": ["sizeof", "Data Types"],
    "desc": "Print the size in bytes of int and long long side by side.\n\n### Input\nNo input.\n\n### Output\nint:4 long long:8",
    "input": "", "output": "int:4 long long:8"
  },
  {
    "num": 80, "title": "sizeof bool Compared to int", "difficulty": "Easy", "category": "sizeof & Memory",
    "tags": ["sizeof", "bool"],
    "desc": "Print the size in bytes of a bool variable and an int variable.\n\n### Input\nNo input.\n\n### Output\nbool:1 int:4",
    "input": "", "output": "bool:1 int:4"
  },
  {
    "num": 81, "title": "Total Memory Used by Multiple Variables", "difficulty": "Medium", "category": "sizeof & Memory",
    "tags": ["sizeof", "Accumulation"],
    "desc": "Declare one variable each of type int, float, double and char, and print the sum of their sizes in bytes.\n\n### Input\nNo input.\n\n### Output\n17",
    "input": "", "output": "17"
  },
  {
    "num": 82, "title": "Memory Difference Between int and short", "difficulty": "Medium", "category": "sizeof & Memory",
    "tags": ["sizeof", "Data Types"],
    "desc": "Print the size of int, the size of short, and the difference between them.\n\n### Input\nNo input.\n\n### Output\nint:4 short:2 difference:2",
    "input": "", "output": "int:4 short:2 difference:2"
  },

  # 11 Mixed Expressions & Real-World Calculations (83-92)
  {
    "num": 83, "title": "Average of Three Subject Marks", "difficulty": "Easy", "category": "Mixed Expressions & Calculations",
    "tags": ["Real-World", "Average"],
    "desc": "Read three subject marks into variables and print their average.\n\n### Input\nThree integers.\n\n### Output\nPrint the average (integer division).",
    "input": "80 90 70", "output": "80"
  },
  {
    "num": 84, "title": "Convert Seconds into Minutes and Seconds", "difficulty": "Medium", "category": "Mixed Expressions & Calculations",
    "tags": ["Real-World", "Division/Modulus"],
    "desc": "Read a total number of seconds and print it as minutes and remaining seconds.\n\n### Input\nA single integer, total seconds.\n\n### Output\nPrint in the format 'Xm Ys'.",
    "input": "125", "output": "2m 5s"
  },
  {
    "num": 85, "title": "Calculate BMI from Weight and Height", "difficulty": "Medium", "category": "Mixed Expressions & Calculations",
    "tags": ["Real-World Formula", "double"],
    "desc": "Read weight (kg) and height (m) into variables and print the BMI (weight / height^2) rounded to 2 decimal places.\n\n### Input\nA decimal weight and a decimal height.\n\n### Output\nPrint the BMI rounded to 2 decimal places.",
    "input": "70 1.75", "output": "22.86"
  },
  {
    "num": 86, "title": "Calculate Total Bill with Tax", "difficulty": "Medium", "category": "Mixed Expressions & Calculations",
    "tags": ["Real-World Formula", "Percentage"],
    "desc": "Read a price and a tax percentage into variables and print the total bill including tax.\n\n### Input\nAn integer price and an integer tax percentage.\n\n### Output\nPrint price + price*tax/100.",
    "input": "200 5", "output": "210"
  },
  {
    "num": 87, "title": "Convert Days into Years, Months and Days", "difficulty": "Medium", "category": "Mixed Expressions & Calculations",
    "tags": ["Real-World", "Division/Modulus"],
    "desc": "Read a total number of days and convert it into years (365 days), months (30 days) and remaining days.\n\n### Input\nA single integer, total days.\n\n### Output\nPrint in the format 'Xy Ym Zd'.",
    "input": "400", "output": "1y 1m 5d"
  },
  {
    "num": 88, "title": "Calculate Compound Interest", "difficulty": "Medium", "category": "Mixed Expressions & Calculations",
    "tags": ["Real-World Formula", "pow"],
    "desc": "Read principal, rate and time into variables and print the final amount using A = P*(1+R/100)^T.\n\n### Input\nThree integers: principal, rate, time.\n\n### Output\nPrint the final amount.",
    "input": "1000 10 2", "output": "1210"
  },
  {
    "num": 89, "title": "Convert Fahrenheit to Celsius", "difficulty": "Easy", "category": "Mixed Expressions & Calculations",
    "tags": ["Real-World Formula"],
    "desc": "Read a Fahrenheit temperature into a variable and print the equivalent Celsius temperature.\n\n### Input\nA decimal Fahrenheit temperature.\n\n### Output\nPrint C = (F-32)*5/9, rounded to the nearest integer.",
    "input": "98.6", "output": "37"
  },
  {
    "num": 90, "title": "Perimeter and Area of a Rectangle", "difficulty": "Easy", "category": "Mixed Expressions & Calculations",
    "tags": ["Real-World Formula", "Multiple Outputs"],
    "desc": "Read the length and width of a rectangle and print both its perimeter and area.\n\n### Input\nTwo integers: length and width.\n\n### Output\nPerimeter: X\nArea: Y",
    "input": "4 6", "output": "Perimeter: 20\nArea: 24"
  },
  {
    "num": 91, "title": "Calculate Average Speed", "difficulty": "Easy", "category": "Mixed Expressions & Calculations",
    "tags": ["Real-World Formula"],
    "desc": "Read a distance and a time into variables and print the average speed (distance / time).\n\n### Input\nTwo integers: distance and time.\n\n### Output\nPrint distance / time.",
    "input": "100 2", "output": "50"
  },
  {
    "num": 92, "title": "Convert Marks to Percentage", "difficulty": "Easy", "category": "Mixed Expressions & Calculations",
    "tags": ["Real-World Formula", "Percentage"],
    "desc": "Read the marks obtained and the total marks into variables and print the percentage.\n\n### Input\nTwo integers: marks obtained and total marks.\n\n### Output\nPrint (marks/total)*100.",
    "input": "450 500", "output": "90"
  },

  # 12 Advanced / Final Variable Challenges (93-100)
  {
    "num": 93, "title": "Chained Assignment Across Multiple Variables", "difficulty": "Easy", "category": "Final Variable Challenges",
    "tags": ["Chained Assignment"],
    "desc": "Read a single integer and assign it to three variables a, b, c in one chained assignment statement. Print all three.\n\n### Input\nA single integer N.\n\n### Output\nPrint a, b and c separated by spaces (all equal to N).",
    "input": "5", "output": "5 5 5"
  },
  {
    "num": 94, "title": "Counter with Reset Condition", "difficulty": "Medium", "category": "Final Variable Challenges",
    "tags": ["State Tracking", "Conditionals"],
    "desc": "Starting from 0, increment a counter variable N times, printing its value at each step. Once it reaches N, print 'Reset!' and reset it to 0.\n\n### Input\nA single integer N.\n\n### Output\nPrint the counter's value at each of the N steps, then print 'Reset!'.",
    "input": "3", "output": "1\n2\n3\nReset!"
  },
  {
    "num": 95, "title": "Multiple Variable Types in One Physics Formula", "difficulty": "Medium", "category": "Final Variable Challenges",
    "tags": ["Mixed Types", "Real-World Formula"],
    "desc": "Read speed, time and acceleration into variables and print the distance using d = speed*time + 0.5*accel*time*time.\n\n### Input\nThree integers: speed, time, acceleration.\n\n### Output\nPrint the computed distance.",
    "input": "5 2 1", "output": "12"
  },
  {
    "num": 96, "title": "Boolean Flag to Track State", "difficulty": "Easy", "category": "Final Variable Challenges",
    "tags": ["bool", "State Flag"],
    "desc": "Read an integer into a variable, use a bool flag to check if it is even, and print 'Even' or 'Odd' accordingly.\n\n### Input\nA single integer N.\n\n### Output\nPrint 'Even' or 'Odd'.",
    "input": "5", "output": "Odd"
  },
  {
    "num": 97, "title": "Combine String and Numeric Variables", "difficulty": "Easy", "category": "Final Variable Challenges",
    "tags": ["std::string", "Mixed Types"],
    "desc": "Read a name and an age into separate variables and print a sentence combining both.\n\n### Input\nA name (string) and an age (integer).\n\n### Output\nPrint '<name> is <age> years old.'",
    "input": "Riya 20", "output": "Riya is 20 years old."
  },
  {
    "num": 98, "title": "Track Min and Max Across Multiple Inputs", "difficulty": "Medium", "category": "Final Variable Challenges",
    "tags": ["Comparison", "State Tracking"],
    "desc": "Read four integers one at a time, updating min and max variables as you go, and print the final min and max.\n\n### Input\nFour integers.\n\n### Output\nPrint 'Min: X, Max: Y'.",
    "input": "4 9 2 7", "output": "Min: 2, Max: 9"
  },
  {
    "num": 99, "title": "Simulate a Simple Bank Balance", "difficulty": "Medium", "category": "Final Variable Challenges",
    "tags": ["State Tracking", "Real-World"],
    "desc": "Read a starting balance, a deposit amount and a withdrawal amount into variables. Update the balance step by step and print the final balance.\n\n### Input\nThree integers: starting balance, deposit, withdrawal.\n\n### Output\nPrint the final balance.",
    "input": "1000 200 500", "output": "700"
  },
  {
    "num": 100, "title": "Final Challenge - Student Report Using Multiple Variable Types", "difficulty": "Hard", "category": "Final Variable Challenges",
    "tags": ["Mixed Types", "Final Challenge"],
    "desc": "Read a student's name (string) and marks in 3 subjects (integers). Compute the total, the average (as an int), and a pass/fail result (bool, pass if average >= 40). Print a full report using all these variable types together.\n\n### Input\nA name and three integer marks.\n\n### Output\nName: X\nTotal: Y\nAverage: Z\nResult: Pass",
    "input": "Aarav 80 90 70", "output": "Name: Aarav\nTotal: 240\nAverage: 80\nResult: Pass"
  }
]

# Define Book 4: Data Types Mastery (100 Problems)
datatypes_problems = [
  # 01 Integer Types (1-10)
  {
    "num": 1, "title": "Declare and Print an int Value", "difficulty": "Easy", "category": "Integer Types",
    "tags": ["int", "Basic Types"],
    "desc": "Read an integer into an int variable and print it.\n\n### Input\nA single integer N.\n\n### Output\nPrint N.",
    "input": "100", "output": "100"
  },
  {
    "num": 2, "title": "Declare and Print a short Value", "difficulty": "Easy", "category": "Integer Types",
    "tags": ["short", "Basic Types"],
    "desc": "Read an integer into a short variable and print it.\n\n### Input\nA single integer within short range.\n\n### Output\nPrint the value.",
    "input": "30000", "output": "30000"
  },
  {
    "num": 3, "title": "Declare and Print a long Value", "difficulty": "Easy", "category": "Integer Types",
    "tags": ["long", "Basic Types"],
    "desc": "Read an integer into a long variable and print it.\n\n### Input\nA single integer.\n\n### Output\nPrint the value.",
    "input": "2000000000", "output": "2000000000"
  },
  {
    "num": 4, "title": "Declare and Print a long long Value", "difficulty": "Easy", "category": "Integer Types",
    "tags": ["long long", "Basic Types"],
    "desc": "Read a large integer into a long long variable and print it.\n\n### Input\nA single large integer.\n\n### Output\nPrint the value.",
    "input": "9000000000000", "output": "9000000000000"
  },
  {
    "num": 5, "title": "Print the Range of int", "difficulty": "Easy", "category": "Integer Types",
    "tags": ["int", "climits"],
    "desc": "Print the minimum and maximum values a standard int can hold, using climits.\n\n### Input\nNo input.\n\n### Output\nPrint INT_MIN then INT_MAX, separated by a space.",
    "input": "", "output": "-2147483648 2147483647"
  },
  {
    "num": 6, "title": "Print the Range of short", "difficulty": "Easy", "category": "Integer Types",
    "tags": ["short", "climits"],
    "desc": "Print the minimum and maximum values a short can hold, using climits.\n\n### Input\nNo input.\n\n### Output\nPrint SHRT_MIN then SHRT_MAX, separated by a space.",
    "input": "", "output": "-32768 32767"
  },
  {
    "num": 7, "title": "Overflow Behavior of int", "difficulty": "Medium", "category": "Integer Types",
    "tags": ["int", "Overflow"],
    "desc": "Add 1 to INT_MAX and print the resulting (wrapped-around) value.\n\n### Input\nNo input.\n\n### Output\nPrint INT_MAX + 1.",
    "input": "", "output": "-2147483648"
  },
  {
    "num": 8, "title": "Store and Print a Negative Integer", "difficulty": "Easy", "category": "Integer Types",
    "tags": ["int", "Negative Numbers"],
    "desc": "Read a negative integer and print it back.\n\n### Input\nA single negative integer.\n\n### Output\nPrint the value.",
    "input": "-45", "output": "-45"
  },
  {
    "num": 9, "title": "Add an int and a short Together", "difficulty": "Easy", "category": "Integer Types",
    "tags": ["int", "short", "Mixed Arithmetic"],
    "desc": "Read an int and a short and print their sum.\n\n### Input\nTwo integers.\n\n### Output\nPrint their sum.",
    "input": "10 5", "output": "15"
  },
  {
    "num": 10, "title": "Compare Sizes of int and long", "difficulty": "Easy", "category": "Integer Types",
    "tags": ["sizeof", "int", "long"],
    "desc": "Print the number of bytes occupied by int and by long.\n\n### Input\nNo input.\n\n### Output\nint:4 long:8",
    "input": "", "output": "int:4 long:8"
  },

  # 02 Floating-Point Types (11-20)
  {
    "num": 11, "title": "Declare and Print a float Value", "difficulty": "Easy", "category": "Floating-Point Types",
    "tags": ["float", "Basic Types"],
    "desc": "Read a float value and print it back.\n\n### Input\nA decimal number.\n\n### Output\nPrint the value.",
    "input": "3.5", "output": "3.5"
  },
  {
    "num": 12, "title": "Declare and Print a double Value", "difficulty": "Easy", "category": "Floating-Point Types",
    "tags": ["double", "Basic Types"],
    "desc": "Read a double value and print it using default precision.\n\n### Input\nA decimal number.\n\n### Output\nPrint the value.",
    "input": "3.14159265", "output": "3.14159"
  },
  {
    "num": 13, "title": "Add Two Floats", "difficulty": "Easy", "category": "Floating-Point Types",
    "tags": ["float", "Arithmetic"],
    "desc": "Read two float values and print their sum.\n\n### Input\nTwo decimal numbers.\n\n### Output\nPrint their sum.",
    "input": "2.5 3.5", "output": "6"
  },
  {
    "num": 14, "title": "Add Two Doubles", "difficulty": "Easy", "category": "Floating-Point Types",
    "tags": ["double", "Arithmetic"],
    "desc": "Read two double values and print their sum.\n\n### Input\nTwo decimal numbers.\n\n### Output\nPrint their sum.",
    "input": "2.25 3.75", "output": "6"
  },
  {
    "num": 15, "title": "Print a float with Fixed 2 Decimal Places", "difficulty": "Easy", "category": "Floating-Point Types",
    "tags": ["float", "Formatting"],
    "desc": "Read a float value and print it with exactly 2 decimal places.\n\n### Input\nA decimal number.\n\n### Output\nPrint the value with 2 decimal places.",
    "input": "7.6789", "output": "7.68"
  },
  {
    "num": 16, "title": "Print a double with Fixed 4 Decimal Places", "difficulty": "Easy", "category": "Floating-Point Types",
    "tags": ["double", "Formatting"],
    "desc": "Read a double value and print it with exactly 4 decimal places.\n\n### Input\nA decimal number.\n\n### Output\nPrint the value with 4 decimal places.",
    "input": "3.14159265", "output": "3.1416"
  },
  {
    "num": 17, "title": "Compare Sizes of float and double", "difficulty": "Easy", "category": "Floating-Point Types",
    "tags": ["sizeof", "float", "double"],
    "desc": "Print the number of bytes occupied by float and by double.\n\n### Input\nNo input.\n\n### Output\nfloat:4 double:8",
    "input": "", "output": "float:4 double:8"
  },
  {
    "num": 18, "title": "Store a Very Small Decimal in a double", "difficulty": "Medium", "category": "Floating-Point Types",
    "tags": ["double", "Precision"],
    "desc": "Read a very small decimal value into a double and print it with 10 decimal places.\n\n### Input\nA small decimal number.\n\n### Output\nPrint the value with 10 decimal places.",
    "input": "0.0000001234", "output": "0.0000001234"
  },
  {
    "num": 19, "title": "Multiply Two Floats", "difficulty": "Easy", "category": "Floating-Point Types",
    "tags": ["float", "Arithmetic"],
    "desc": "Read two float values and print their product.\n\n### Input\nTwo decimal numbers.\n\n### Output\nPrint their product.",
    "input": "2.5 4.0", "output": "10"
  },
  {
    "num": 20, "title": "Compute the Average of Three Doubles", "difficulty": "Easy", "category": "Floating-Point Types",
    "tags": ["double", "Arithmetic"],
    "desc": "Read three double values and print their average.\n\n### Input\nThree decimal numbers.\n\n### Output\nPrint the average.",
    "input": "1.5 2.5 3.5", "output": "2.5"
  },

  # 03 Character Type (21-30)
  {
    "num": 21, "title": "Declare and Print a char Value", "difficulty": "Easy", "category": "Character Type",
    "tags": ["char", "Basic Types"],
    "desc": "Read a character and print it back.\n\n### Input\nA single character.\n\n### Output\nPrint the character.",
    "input": "Q", "output": "Q"
  },
  {
    "num": 22, "title": "Print the ASCII Value of a char", "difficulty": "Easy", "category": "Character Type",
    "tags": ["char", "ASCII"],
    "desc": "Read a character and print its ASCII (integer) value.\n\n### Input\nA single character.\n\n### Output\nPrint its ASCII value.",
    "input": "A", "output": "65"
  },
  {
    "num": 23, "title": "Convert an int to a char", "difficulty": "Easy", "category": "Character Type",
    "tags": ["char", "Casting"],
    "desc": "Read an integer ASCII code and print the corresponding character.\n\n### Input\nA single integer (valid ASCII code).\n\n### Output\nPrint the character.",
    "input": "90", "output": "Z"
  },
  {
    "num": 24, "title": "Convert a Digit Character to Its Numeric Value", "difficulty": "Medium", "category": "Character Type",
    "tags": ["char", "ASCII Arithmetic"],
    "desc": "Read a single digit character and print its equivalent numeric value.\n\n### Input\nA single digit character.\n\n### Output\nPrint the numeric value of the digit.",
    "input": "7", "output": "7"
  },
  {
    "num": 25, "title": "Print the Size of the char Type", "difficulty": "Easy", "category": "Character Type",
    "tags": ["sizeof", "char"],
    "desc": "Print the number of bytes a char occupies.\n\n### Input\nNo input.\n\n### Output\n1",
    "input": "", "output": "1"
  },
  {
    "num": 26, "title": "Compare Two Characters Alphabetically", "difficulty": "Easy", "category": "Character Type",
    "tags": ["char", "Comparison"],
    "desc": "Read two characters and print which one comes first alphabetically.\n\n### Input\nTwo characters.\n\n### Output\nPrint the character that comes first.",
    "input": "a b", "output": "a"
  },
  {
    "num": 27, "title": "Check If a Character Is Uppercase", "difficulty": "Easy", "category": "Character Type",
    "tags": ["char", "isupper"],
    "desc": "Read a character and print whether it is uppercase.\n\n### Input\nA single character.\n\n### Output\nPrint 'Uppercase' or 'Not uppercase'.",
    "input": "G", "output": "Uppercase"
  },
  {
    "num": 28, "title": "Convert a Lowercase char to Uppercase", "difficulty": "Easy", "category": "Character Type",
    "tags": ["char", "toupper"],
    "desc": "Read a lowercase letter and print its uppercase equivalent.\n\n### Input\nA single lowercase letter.\n\n### Output\nPrint the uppercase letter.",
    "input": "m", "output": "M"
  },
  {
    "num": 29, "title": "Combine Three char Variables into a Word", "difficulty": "Medium", "category": "Character Type",
    "tags": ["char", "Multiple Variables"],
    "desc": "Read three separate characters and print them combined into a single word.\n\n### Input\nThree characters, space-separated.\n\n### Output\nPrint the three characters joined together.",
    "input": "C A T", "output": "CAT"
  },
  {
    "num": 30, "title": "Print the Character Before a Given Character", "difficulty": "Easy", "category": "Character Type",
    "tags": ["char", "ASCII Arithmetic"],
    "desc": "Read a character and print the character that comes immediately before it in the alphabet.\n\n### Input\nA single character (not 'a').\n\n### Output\nPrint the previous character.",
    "input": "d", "output": "c"
  },

  # 04 Boolean Type (31-38)
  {
    "num": 31, "title": "Declare and Print a bool Value", "difficulty": "Easy", "category": "Boolean Type",
    "tags": ["bool", "Basic Types"],
    "desc": "Read an integer (0 or 1) into a bool variable and print it as true/false.\n\n### Input\nA single integer, 0 or 1.\n\n### Output\nPrint 'true' or 'false'.",
    "input": "1", "output": "true"
  },
  {
    "num": 32, "title": "Print a bool as an Integer", "difficulty": "Easy", "category": "Boolean Type",
    "tags": ["bool", "boolalpha"],
    "desc": "Read the word true or false into a bool and print it as 1 or 0.\n\n### Input\nThe word 'true' or 'false'.\n\n### Output\nPrint 1 for true, 0 for false.",
    "input": "true", "output": "1"
  },
  {
    "num": 33, "title": "Store a Comparison Result in a bool", "difficulty": "Easy", "category": "Boolean Type",
    "tags": ["bool", "Comparison"],
    "desc": "Read two integers, store the result of checking whether the first is greater than the second in a bool, and print it.\n\n### Input\nTwo integers a and b.\n\n### Output\nPrint 'true' if a > b, otherwise 'false'.",
    "input": "5 8", "output": "false"
  },
  {
    "num": 34, "title": "Logical AND of Two bools", "difficulty": "Easy", "category": "Boolean Type",
    "tags": ["bool", "Logical AND"],
    "desc": "Read two integers (0 or 1) into bool variables and print the result of their logical AND.\n\n### Input\nTwo integers, each 0 or 1.\n\n### Output\nPrint 'true' or 'false'.",
    "input": "1 0", "output": "false"
  },
  {
    "num": 35, "title": "Logical OR of Two bools", "difficulty": "Easy", "category": "Boolean Type",
    "tags": ["bool", "Logical OR"],
    "desc": "Read two integers (0 or 1) into bool variables and print the result of their logical OR.\n\n### Input\nTwo integers, each 0 or 1.\n\n### Output\nPrint 'true' or 'false'.",
    "input": "0 0", "output": "false"
  },
  {
    "num": 36, "title": "Logical NOT of a bool", "difficulty": "Easy", "category": "Boolean Type",
    "tags": ["bool", "Logical NOT"],
    "desc": "Read an integer (0 or 1) into a bool variable and print the result of applying logical NOT.\n\n### Input\nA single integer, 0 or 1.\n\n### Output\nPrint 'true' or 'false'.",
    "input": "1", "output": "false"
  },
  {
    "num": 37, "title": "Print the Size of the bool Type", "difficulty": "Easy", "category": "Boolean Type",
    "tags": ["sizeof", "bool"],
    "desc": "Print the number of bytes a bool occupies.\n\n### Input\nNo input.\n\n### Output\n1",
    "input": "", "output": "1"
  },
  {
    "num": 38, "title": "Combine Multiple Boolean Conditions", "difficulty": "Medium", "category": "Boolean Type",
    "tags": ["bool", "Combined Conditions"],
    "desc": "Read an integer and print whether it lies between 1 and 10 (inclusive), storing the combined condition in a bool.\n\n### Input\nA single integer N.\n\n### Output\nPrint 'true' if 1<=N<=10, otherwise 'false'.",
    "input": "5", "output": "true"
  },

  # 05 String Type (39-48)
  {
    "num": 39, "title": "Declare and Print a std::string", "difficulty": "Easy", "category": "String Type",
    "tags": ["std::string", "Basic Types"],
    "desc": "Read a word into a std::string and print it back.\n\n### Input\nA single word.\n\n### Output\nPrint the word.",
    "input": "Hello", "output": "Hello"
  },
  {
    "num": 40, "title": "Concatenate Two Strings with a Space", "difficulty": "Easy", "category": "String Type",
    "tags": ["std::string", "Concatenation"],
    "desc": "Read two words and print them joined together with a space between them.\n\n### Input\nTwo words.\n\n### Output\nPrint the words joined with a space.",
    "input": "Hello World", "output": "Hello World"
  },
  {
    "num": 41, "title": "Find the Length of a String", "difficulty": "Easy", "category": "String Type",
    "tags": ["std::string", "length()"],
    "desc": "Read a word and print the number of characters it contains.\n\n### Input\nA single word.\n\n### Output\nPrint the length.",
    "input": "Programming", "output": "11"
  },
  {
    "num": 42, "title": "Access a Character at a Given Index", "difficulty": "Easy", "category": "String Type",
    "tags": ["std::string", "Indexing"],
    "desc": "Read a word and an index, and print the character at that index (0-based).\n\n### Input\nA word and an integer index.\n\n### Output\nPrint the character at that index.",
    "input": "Hello 1", "output": "e"
  },
  {
    "num": 43, "title": "Compare Two Strings for Equality", "difficulty": "Easy", "category": "String Type",
    "tags": ["std::string", "Comparison"],
    "desc": "Read two words and print whether they are equal.\n\n### Input\nTwo words.\n\n### Output\nPrint 'Equal' or 'Not Equal'.",
    "input": "cat cat", "output": "Equal"
  },
  {
    "num": 44, "title": "Convert a String to Uppercase", "difficulty": "Medium", "category": "String Type",
    "tags": ["std::string", "Manipulation"],
    "desc": "Read a word and print it entirely in uppercase.\n\n### Input\nA single word.\n\n### Output\nPrint the uppercase version.",
    "input": "hello", "output": "HELLO"
  },
  {
    "num": 45, "title": "Reverse a String", "difficulty": "Medium", "category": "String Type",
    "tags": ["std::string", "Manipulation"],
    "desc": "Read a word and print it reversed.\n\n### Input\nA single word.\n\n### Output\nPrint the reversed word.",
    "input": "world", "output": "dlrow"
  },
  {
    "num": 46, "title": "Find a Substring's Starting Position", "difficulty": "Medium", "category": "String Type",
    "tags": ["std::string", "find()"],
    "desc": "Read a word and a substring, and print the index at which the substring first appears.\n\n### Input\nA word and a substring.\n\n### Output\nPrint the starting index of the substring.",
    "input": "programming gram", "output": "3"
  },
  {
    "num": 47, "title": "Append a Character to a String", "difficulty": "Easy", "category": "String Type",
    "tags": ["std::string", "Modification"],
    "desc": "Read a word and a character, and print the word with the character appended.\n\n### Input\nA word and a character.\n\n### Output\nPrint the word with the character added at the end.",
    "input": "Cat s", "output": "Cats"
  },
  {
    "num": 48, "title": "Erase Part of a String", "difficulty": "Medium", "category": "String Type",
    "tags": ["std::string", "erase()"],
    "desc": "Read a word and an index, and print the word with everything from that index onward removed.\n\n### Input\nA word and an integer index.\n\n### Output\nPrint the word truncated at that index.",
    "input": "HelloWorld 5", "output": "Hello"
  },

  # 06 Type Modifiers (49-56)
  {
    "num": 49, "title": "Declare an unsigned int and Print It", "difficulty": "Easy", "category": "Type Modifiers",
    "tags": ["unsigned int"],
    "desc": "Read a non-negative integer into an unsigned int and print it.\n\n### Input\nA single non-negative integer.\n\n### Output\nPrint the value.",
    "input": "500", "output": "500"
  },
  {
    "num": 50, "title": "Behavior of unsigned int Underflow", "difficulty": "Medium", "category": "Type Modifiers",
    "tags": ["unsigned int", "Overflow"],
    "desc": "Subtract 1 from an unsigned int initialized to 0 and print the resulting (wrapped-around) value.\n\n### Input\nNo input.\n\n### Output\nPrint the value of 0u - 1.",
    "input": "", "output": "4294967295"
  },
  {
    "num": 51, "title": "Print the Range of a signed char", "difficulty": "Easy", "category": "Type Modifiers",
    "tags": ["signed char", "climits"],
    "desc": "Print the minimum and maximum values a signed char can hold.\n\n### Input\nNo input.\n\n### Output\n-128 127",
    "input": "", "output": "-128 127"
  },
  {
    "num": 52, "title": "Print the Range of an unsigned char", "difficulty": "Easy", "category": "Type Modifiers",
    "tags": ["unsigned char", "climits"],
    "desc": "Print the minimum and maximum values an unsigned char can hold.\n\n### Input\nNo input.\n\n### Output\n0 255",
    "input": "", "output": "0 255"
  },
  {
    "num": 53, "title": "Use const with an int", "difficulty": "Easy", "category": "Type Modifiers",
    "tags": ["const", "int"],
    "desc": "Declare a const int, initialize it from input, and print its value.\n\n### Input\nA single integer N.\n\n### Output\nPrint N.",
    "input": "10", "output": "10"
  },
  {
    "num": 54, "title": "Signed vs Unsigned Comparison Pitfall", "difficulty": "Hard", "category": "Type Modifiers",
    "tags": ["signed/unsigned", "Comparison Pitfalls"],
    "desc": "Compare a signed -1 with an unsigned 1 and print the (surprising) result.\n\n### Input\nNo input.\n\n### Output\nPrint 'true' or 'false' for the comparison (-1 < 1u).",
    "input": "", "output": "false"
  },
  {
    "num": 55, "title": "Declare an unsigned long and Print It", "difficulty": "Easy", "category": "Type Modifiers",
    "tags": ["unsigned long"],
    "desc": "Read a large non-negative integer into an unsigned long and print it.\n\n### Input\nA single large non-negative integer.\n\n### Output\nPrint the value.",
    "input": "4000000000", "output": "4000000000"
  },
  {
    "num": 56, "title": "Combine const and unsigned Modifiers", "difficulty": "Easy", "category": "Type Modifiers",
    "tags": ["const", "unsigned"],
    "desc": "Declare a const unsigned int, initialize it from input, and print its value.\n\n### Input\nA single non-negative integer.\n\n### Output\nPrint the value.",
    "input": "7", "output": "7"
  },

  # 07 Literals (57-64)
  {
    "num": 57, "title": "Print an Integer Literal in Decimal", "difficulty": "Easy", "category": "Literals",
    "tags": ["Literals", "Decimal"],
    "desc": "Print the value of the decimal literal 100 directly in code.\n\n### Input\nNo input.\n\n### Output\nPrint 100.",
    "input": "", "output": "100"
  },
  {
    "num": 58, "title": "Print a Hexadecimal Literal's Decimal Value", "difficulty": "Medium", "category": "Literals",
    "tags": ["Literals", "Hexadecimal"],
    "desc": "Print the decimal value of the hexadecimal literal 0xFF.\n\n### Input\nNo input.\n\n### Output\nPrint the decimal equivalent.",
    "input": "", "output": "255"
  },
  {
    "num": 59, "title": "Print an Octal Literal's Decimal Value", "difficulty": "Medium", "category": "Literals",
    "tags": ["Literals", "Octal"],
    "desc": "Print the decimal value of the octal literal 010.\n\n### Input\nNo input.\n\n### Output\nPrint the decimal equivalent.",
    "input": "", "output": "8"
  },
  {
    "num": 60, "title": "Print a Binary Literal's Decimal Value", "difficulty": "Medium", "category": "Literals",
    "tags": ["Literals", "Binary"],
    "desc": "Print the decimal value of the binary literal 0b101.\n\n### Input\nNo input.\n\n### Output\nPrint the decimal equivalent.",
    "input": "", "output": "5"
  },
  {
    "num": 61, "title": "Print a Character Literal's ASCII Value", "difficulty": "Easy", "category": "Literals",
    "tags": ["Literals", "char"],
    "desc": "Print the ASCII value of the character literal 'a'.\n\n### Input\nNo input.\n\n### Output\nPrint the ASCII value.",
    "input": "", "output": "97"
  },
  {
    "num": 62, "title": "Print a Floating-Point Literal with the f Suffix", "difficulty": "Easy", "category": "Literals",
    "tags": ["Literals", "float"],
    "desc": "Print the value of the float literal 3.5f.\n\n### Input\nNo input.\n\n### Output\nPrint 3.5.",
    "input": "", "output": "3.5"
  },
  {
    "num": 63, "title": "Print a String Literal's Length", "difficulty": "Easy", "category": "Literals",
    "tags": ["Literals", "std::string"],
    "desc": "Print the length of the string literal 'Hello'.\n\n### Input\nNo input.\n\n### Output\nPrint its length.",
    "input": "", "output": "5"
  },
  {
    "num": 64, "title": "Use Digit Separators in a Large Literal", "difficulty": "Easy", "category": "Literals",
    "tags": ["Literals", "Digit Separators"],
    "desc": "Print the value of the literal 1'000'000, which uses digit separators for readability.\n\n### Input\nNo input.\n\n### Output\nPrint 1000000.",
    "input": "", "output": "1000000"
  },

  # 08 sizeof & Type Ranges (65-72)
  {
    "num": 65, "title": "Print sizeof for All Basic Types", "difficulty": "Easy", "category": "sizeof & Type Ranges",
    "tags": ["sizeof", "All Types"],
    "desc": "Print the size in bytes of int, float, double, char and bool.\n\n### Input\nNo input.\n\n### Output\nint:4 float:4 double:8 char:1 bool:1",
    "input": "", "output": "int:4 float:4 double:8 char:1 bool:1"
  },
  {
    "num": 66, "title": "Print the Range of unsigned int", "difficulty": "Easy", "category": "sizeof & Type Ranges",
    "tags": ["unsigned int", "climits"],
    "desc": "Print the minimum and maximum values an unsigned int can hold.\n\n### Input\nNo input.\n\n### Output\n0 4294967295",
    "input": "", "output": "0 4294967295"
  },
  {
    "num": 67, "title": "Print the Range of long long", "difficulty": "Easy", "category": "sizeof & Type Ranges",
    "tags": ["long long", "climits"],
    "desc": "Print the minimum and maximum values a long long can hold.\n\n### Input\nNo input.\n\n### Output\n-9223372036854775808 9223372036854775807",
    "input": "", "output": "-9223372036854775808 9223372036854775807"
  },
  {
    "num": 68, "title": "Print Decimal Digits of Precision for float", "difficulty": "Medium", "category": "sizeof & Type Ranges",
    "tags": ["numeric_limits", "float"],
    "desc": "Use std::numeric_limits<float>::digits10 to print how many reliable decimal digits a float can represent.\n\n### Input\nNo input.\n\n### Output\n6",
    "input": "", "output": "6"
  },
  {
    "num": 69, "title": "Print Decimal Digits of Precision for double", "difficulty": "Medium", "category": "sizeof & Type Ranges",
    "tags": ["numeric_limits", "double"],
    "desc": "Use std::numeric_limits<double>::digits10 to print how many reliable decimal digits a double can represent.\n\n### Input\nNo input.\n\n### Output\n15",
    "input": "", "output": "15"
  },
  {
    "num": 70, "title": "Compare Sizes of int and int Pointer", "difficulty": "Medium", "category": "sizeof & Type Ranges",
    "tags": ["sizeof", "Pointers"],
    "desc": "Print the size of an int and the size of an int pointer on this (64-bit) system.\n\n### Input\nNo input.\n\n### Output\nint:4 pointer:8",
    "input": "", "output": "int:4 pointer:8"
  },
  {
    "num": 71, "title": "Print the Number of Bits in an int", "difficulty": "Easy", "category": "sizeof & Type Ranges",
    "tags": ["sizeof", "Bits"],
    "desc": "Print the total number of bits in an int (sizeof(int) * 8).\n\n### Input\nNo input.\n\n### Output\n32",
    "input": "", "output": "32"
  },
  {
    "num": 72, "title": "Total Memory for an Array of 10 ints", "difficulty": "Easy", "category": "sizeof & Type Ranges",
    "tags": ["sizeof", "Arrays"],
    "desc": "Print the total number of bytes an array of 10 ints would occupy.\n\n### Input\nNo input.\n\n### Output\n40",
    "input": "", "output": "40"
  },

  # 09 Type Conversion Basics (73-80)
  {
    "num": 73, "title": "Convert int to float Implicitly", "difficulty": "Medium", "category": "Type Conversion Basics",
    "tags": ["Implicit Conversion"],
    "desc": "Read two integers and divide them using a float context so the division is not truncated.\n\n### Input\nTwo integers a and b.\n\n### Output\nPrint a / b as a float.",
    "input": "5 2", "output": "2.5"
  },
  {
    "num": 74, "title": "Convert float to int Explicitly", "difficulty": "Easy", "category": "Type Conversion Basics",
    "tags": ["Explicit Conversion", "Truncation"],
    "desc": "Read a float value and print it truncated to an int.\n\n### Input\nA decimal number.\n\n### Output\nPrint the truncated integer value.",
    "input": "9.9", "output": "9"
  },
  {
    "num": 75, "title": "Convert char to int Explicitly", "difficulty": "Easy", "category": "Type Conversion Basics",
    "tags": ["Explicit Conversion", "char"],
    "desc": "Read a character and print its ASCII value using an explicit cast.\n\n### Input\nA single character.\n\n### Output\nPrint the ASCII value.",
    "input": "A", "output": "65"
  },
  {
    "num": 76, "title": "Convert int to char Explicitly", "difficulty": "Easy", "category": "Type Conversion Basics",
    "tags": ["Explicit Conversion", "char"],
    "desc": "Read an integer ASCII code and print the corresponding character using an explicit cast.\n\n### Input\nA single integer (valid ASCII code).\n\n### Output\nPrint the character.",
    "input": "98", "output": "b"
  },
  {
    "num": 77, "title": "Convert bool to int", "difficulty": "Easy", "category": "Type Conversion Basics",
    "tags": ["Conversion", "bool"],
    "desc": "Read the word true or false into a bool and print it as an integer.\n\n### Input\nThe word 'true' or 'false'.\n\n### Output\nPrint 1 for true, 0 for false.",
    "input": "true", "output": "1"
  },
  {
    "num": 78, "title": "Convert int to bool", "difficulty": "Easy", "category": "Type Conversion Basics",
    "tags": ["Conversion", "bool"],
    "desc": "Read an integer and print whether it converts to true or false as a bool (0 is false, anything else is true).\n\n### Input\nA single integer.\n\n### Output\nPrint 'true' or 'false'.",
    "input": "5", "output": "true"
  },
  {
    "num": 79, "title": "Convert double to float", "difficulty": "Medium", "category": "Type Conversion Basics",
    "tags": ["Conversion", "Precision Loss"],
    "desc": "Read a double with many decimal digits, convert it to float, and print it using default precision.\n\n### Input\nA decimal number with many digits.\n\n### Output\nPrint the value after conversion to float.",
    "input": "3.14159265358979", "output": "3.14159"
  },
  {
    "num": 80, "title": "Convert a String to an Integer", "difficulty": "Easy", "category": "Type Conversion Basics",
    "tags": ["stoi", "Conversion"],
    "desc": "Read a numeric string and print its integer value using stoi.\n\n### Input\nA string of digits.\n\n### Output\nPrint the converted integer.",
    "input": "456", "output": "456"
  },

  # 10 Choosing the Right Data Type (81-88)
  {
    "num": 81, "title": "Choose a Data Type for a Person's Age", "difficulty": "Easy", "category": "Choosing Right Data Type",
    "tags": ["Type Selection", "int"],
    "desc": "Read a person's age and print it stored as an int, since ages are small whole numbers.\n\n### Input\nA single integer age.\n\n### Output\nStored as int: 25",
    "input": "25", "output": "Stored as int: 25"
  },
  {
    "num": 82, "title": "Choose a Data Type for Money with Decimals", "difficulty": "Easy", "category": "Choosing Right Data Type",
    "tags": ["Type Selection", "double"],
    "desc": "Read a monetary amount and print it stored as a double, since money often needs decimal precision.\n\n### Input\nA decimal amount.\n\n### Output\nStored as double: 99.99",
    "input": "99.99", "output": "Stored as double: 99.99"
  },
  {
    "num": 83, "title": "Choose a Data Type for a Single Grade Letter", "difficulty": "Easy", "category": "Choosing Right Data Type",
    "tags": ["Type Selection", "char"],
    "desc": "Read a single grade letter and print it stored as a char.\n\n### Input\nA single letter.\n\n### Output\nStored as char: A",
    "input": "A", "output": "Stored as char: A"
  },
  {
    "num": 84, "title": "Choose a Data Type for a Yes/No Answer", "difficulty": "Easy", "category": "Choosing Right Data Type",
    "tags": ["Type Selection", "bool"],
    "desc": "Read a 1 or 0 answer and print it stored as a bool.\n\n### Input\nA single integer, 0 or 1.\n\n### Output\nStored as bool: true",
    "input": "1", "output": "Stored as bool: true"
  },
  {
    "num": 85, "title": "Choose a Data Type for a Large Population Count", "difficulty": "Easy", "category": "Choosing Right Data Type",
    "tags": ["Type Selection", "long long"],
    "desc": "Read a large population number and print it stored as a long long, since it exceeds normal int range.\n\n### Input\nA large integer.\n\n### Output\nStored as long long: 8000000000",
    "input": "8000000000", "output": "Stored as long long: 8000000000"
  },
  {
    "num": 86, "title": "Choose a Data Type for a Full Name", "difficulty": "Easy", "category": "Choosing Right Data Type",
    "tags": ["Type Selection", "std::string"],
    "desc": "Read a full name and print it stored as a std::string.\n\n### Input\nA full name (may contain spaces).\n\n### Output\nStored as string: Aarav Sharma",
    "input": "Aarav Sharma", "output": "Stored as string: Aarav Sharma"
  },
  {
    "num": 87, "title": "Choose a Data Type for a Fractional Temperature", "difficulty": "Easy", "category": "Choosing Right Data Type",
    "tags": ["Type Selection", "float"],
    "desc": "Read a temperature with decimal precision and print it stored as a float.\n\n### Input\nA decimal temperature.\n\n### Output\nStored as float: 36.60",
    "input": "36.6", "output": "Stored as float: 36.60"
  },
  {
    "num": 88, "title": "Choose a Data Type for an Alphanumeric Product ID", "difficulty": "Easy", "category": "Choosing Right Data Type",
    "tags": ["Type Selection", "std::string"],
    "desc": "Read a product ID containing both letters and digits and print it stored as a std::string.\n\n### Input\nAn alphanumeric product ID.\n\n### Output\nStored as string: PID2026",
    "input": "PID2026", "output": "Stored as string: PID2026"
  },

  # 11 Mixed Data Type Expressions (89-96)
  {
    "num": 89, "title": "Combine int and char in One Expression", "difficulty": "Medium", "category": "Mixed Data Type Expressions",
    "tags": ["Mixed Types", "Arithmetic"],
    "desc": "Read an integer and a character, and print the result of adding the integer to the character's ASCII value.\n\n### Input\nAn integer and a character.\n\n### Output\n70",
    "input": "5 A", "output": "70"
  },
  {
    "num": 90, "title": "Determine the Result Type of int / double", "difficulty": "Medium", "category": "Mixed Data Type Expressions",
    "tags": ["Mixed Types", "Division"],
    "desc": "Read an integer and a double and print the result of dividing the integer by the double.\n\n### Input\nAn integer and a decimal number.\n\n### Output\n3.5",
    "input": "7 2.0", "output": "3.5"
  },
  {
    "num": 91, "title": "Mixed Arithmetic with bool in an Expression", "difficulty": "Medium", "category": "Mixed Data Type Expressions",
    "tags": ["Mixed Types", "bool"],
    "desc": "Read an integer and a bool (as 0/1), and print the result of adding them together.\n\n### Input\nAn integer and an integer (0 or 1) representing a bool.\n\n### Output\n6",
    "input": "5 1", "output": "6"
  },
  {
    "num": 92, "title": "Concatenate a String with a Converted Number", "difficulty": "Medium", "category": "Mixed Data Type Expressions",
    "tags": ["Mixed Types", "to_string"],
    "desc": "Read a label and a number, convert the number to a string using to_string, and print them concatenated.\n\n### Input\nA label word and an integer.\n\n### Output\nScore: 90",
    "input": "Score 90", "output": "Score: 90"
  },
  {
    "num": 93, "title": "Compare an int and a float for Equality", "difficulty": "Easy", "category": "Mixed Data Type Expressions",
    "tags": ["Mixed Types", "Comparison"],
    "desc": "Read an integer and a float and print whether they are numerically equal.\n\n### Input\nAn integer and a decimal number.\n\n### Output\nEqual",
    "input": "5 5.0", "output": "Equal"
  },
  {
    "num": 94, "title": "Store One Value of Every Basic Type", "difficulty": "Medium", "category": "Mixed Data Type Expressions",
    "tags": ["Mixed Types", "Multiple Variables"],
    "desc": "Read an int, a float and a char, and print all three values separated by spaces.\n\n### Input\nAn integer, a decimal number, and a character.\n\n### Output\n5 3.5 A",
    "input": "5 3.5 A", "output": "5 3.5 A"
  },
  {
    "num": 95, "title": "Mixed Integer and Character Arithmetic Result", "difficulty": "Medium", "category": "Mixed Data Type Expressions",
    "tags": ["Mixed Types", "char Arithmetic"],
    "desc": "Read an ASCII code and an offset, add them, and print the resulting character.\n\n### Input\nAn integer ASCII code and an integer offset.\n\n### Output\nC",
    "input": "65 2", "output": "C"
  },
  {
    "num": 96, "title": "Determine the Type of int * float", "difficulty": "Easy", "category": "Mixed Data Type Expressions",
    "tags": ["Mixed Types", "Multiplication"],
    "desc": "Read an integer and a float, multiply them, and print the result.\n\n### Input\nAn integer and a decimal number.\n\n### Output\n10",
    "input": "4 2.5", "output": "10"
  },

  # 12 Final Data Type Challenges (97-100)
  {
    "num": 97, "title": "Build a Record Using Every Basic Data Type", "difficulty": "Hard", "category": "Final Data Type Challenges",
    "tags": ["Mixed Types", "Records"],
    "desc": "Read a name (string), age (int), height (double), grade (char), and pass status (bool as 0/1). Print a formatted record using all five values.\n\n### Input\nA name, an integer, a decimal, a character, and 0/1.\n\n### Output\nName: Aarav, Age: 21, Height: 5.8, Grade: A, Passed: true",
    "input": "Aarav 21 5.8 A 1", "output": "Name: Aarav, Age: 21, Height: 5.8, Grade: A, Passed: true"
  },
  {
    "num": 98, "title": "Detect the Most Suitable Integer Type for a Value", "difficulty": "Medium", "category": "Final Data Type Challenges",
    "tags": ["Type Selection", "Range Checking"],
    "desc": "Read a large number and determine whether it fits within int range or requires long long, printing the result.\n\n### Input\nA single integer (possibly very large).\n\n### Output\nNeeds: long long",
    "input": "5000000000", "output": "Needs: long long"
  },
  {
    "num": 99, "title": "Simulate a Type Promotion Chain", "difficulty": "Medium", "category": "Final Data Type Challenges",
    "tags": ["Type Promotion", "Mixed Arithmetic"],
    "desc": "Read a character and an integer, add the character's ASCII value to the integer, and print the resulting value.\n\n### Input\nA character and an integer.\n\n### Output\n75",
    "input": "A 10", "output": "75"
  },
  {
    "num": 100, "title": "Final Challenge - Full Data Type Showcase", "difficulty": "Hard", "category": "Final Data Type Challenges",
    "tags": ["Mixed Types", "Final Challenge"],
    "desc": "Read a name (string), age (int), height (double), grade (char), and active status (0/1 as bool). Print a full multi-line showcase labeling each value with its type.\n\n### Input\nA name, an integer, a decimal, a character, and 0/1.\n\n### Output\nName: Riya (string)\nAge: 19 (int)\nHeight: 5.5 (double)\nGrade: F (char)\nActive: true (bool)",
    "input": "Riya 19 5.5 F 1", "output": "Name: Riya (string)\nAge: 19 (int)\nHeight: 5.5 (double)\nGrade: F (char)\nActive: true (bool)"
  }
]

all_problems = []
sql_inserts = []

# Book 1: Pattern Printing Mastery (1..100)
for idx, p in enumerate(pattern_problems, 1):
    num_str = f"{idx:03d}"
    uuid_str = f"00000000-0000-4000-8000-{idx:012d}"
    slug = f"pattern-{num_str}-{p['title'].lower().replace(' ', '-').replace('/', '-').replace('&', 'and')}"
    first_input = p['input'].split()[0] if p['input'] else '5'
    starter_templates = {
        "cpp": f"#include <iostream>\nusing namespace std;\n\n// Pattern #{num_str}: {p['title']}\nint main() {{\n    int n = {first_input};\n    // Write your pattern code here\n    return 0;\n}}\n",
        "python": f"# Pattern #{num_str}: {p['title']}\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve({first_input})\n",
        "javascript": f"// Pattern #{num_str}: {p['title']}\nfunction solve(n) {{\n    // Write your pattern code here\n}}\n\nsolve({first_input});\n",
        "java": f"import java.util.*;\n\npublic class Solution {{\n    public static void main(String[] args) {{\n        int n = {first_input};\n        // Write your pattern code here\n    }}\n}}\n"
    }
    all_problems.append({
        "id": uuid_str,
        "book": "patterns",
        "order_index": idx,
        "title": f"#{num_str} {p['title']}",
        "slug": slug,
        "description": p["desc"],
        "difficulty": p["difficulty"],
        "category": p["category"],
        "tags": p["tags"] + ["Pattern Printing"],
        "source": "built_in",
        "status": "not_started",
        "sample_test_cases": [{"input": p["input"], "output": p["output"], "explanation": f"Sample for {p['title']}"}],
        "starter_templates": starter_templates,
        "created_at": f"2026-01-01T{idx//3600:02d}:{(idx%3600)//60:02d}:{idx%60:02d}Z"
    })

# Book 2: Loop Mastery (1..100)
for idx, p in enumerate(loop_problems, 1):
    num_str = f"{idx:03d}"
    uuid_idx = idx + 100
    uuid_str = f"00000000-0000-4000-8000-{uuid_idx:012d}"
    slug = f"loop-{num_str}-{p['title'].lower().replace(' ', '-').replace('/', '-').replace('&', 'and')}"
    first_input = p['input'].split()[0] if p['input'] else '5'
    starter_templates = {
        "cpp": f"#include <iostream>\nusing namespace std;\n\n// Loop Problem #{num_str}: {p['title']}\nint main() {{\n    // Write your loop code here\n    return 0;\n}}\n",
        "python": f"# Loop Problem #{num_str}: {p['title']}\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n",
        "javascript": f"// Loop Problem #{num_str}: {p['title']}\nfunction solve() {{\n    // Write your loop code here\n}}\n\nsolve();\n",
        "java": f"import java.util.*;\n\npublic class Solution {{\n    public static void main(String[] args) {{\n        // Write your loop code here\n    }}\n}}\n"
    }
    diff = "Medium" if p["difficulty"] == "Moderate" else p["difficulty"]
    all_problems.append({
        "id": uuid_str,
        "book": "loops",
        "order_index": idx,
        "title": f"#{num_str} {p['title']}",
        "slug": slug,
        "description": p["desc"],
        "difficulty": diff,
        "category": p["category"],
        "tags": p["tags"] + ["Loop Mastery"],
        "source": "built_in",
        "status": "not_started",
        "sample_test_cases": [{"input": p["input"], "output": p["output"], "explanation": f"Sample for {p['title']}"}],
        "starter_templates": starter_templates,
        "created_at": f"2026-01-02T{idx//3600:02d}:{(idx%3600)//60:02d}:{idx%60:02d}Z"
    })

# Book 3: Variables Mastery (1..100)
for idx, p in enumerate(variables_problems, 1):
    num_str = f"{idx:03d}"
    uuid_idx = idx + 200
    uuid_str = f"00000000-0000-4000-8000-{uuid_idx:012d}"
    slug = f"var-{num_str}-{p['title'].lower().replace(' ', '-').replace('/', '-').replace('&', 'and')}"
    starter_templates = {
        "cpp": f"#include <iostream>\nusing namespace std;\n\n// Variable Problem #{num_str}: {p['title']}\nint main() {{\n    // Write your code here\n    return 0;\n}}\n",
        "python": f"# Variable Problem #{num_str}: {p['title']}\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n",
        "javascript": f"// Variable Problem #{num_str}: {p['title']}\nfunction solve() {{\n    // Write your code here\n}}\n\nsolve();\n",
        "java": f"import java.util.*;\n\npublic class Solution {{\n    public static void main(String[] args) {{\n        // Write your code here\n    }}\n}}\n"
    }
    diff = "Medium" if p["difficulty"] == "Moderate" else p["difficulty"]
    all_problems.append({
        "id": uuid_str,
        "book": "variables",
        "order_index": idx,
        "title": f"#{num_str} {p['title']}",
        "slug": slug,
        "description": p["desc"],
        "difficulty": diff,
        "category": p["category"],
        "tags": p["tags"] + ["Variables Mastery"],
        "source": "built_in",
        "status": "not_started",
        "sample_test_cases": [{"input": p["input"], "output": p["output"], "explanation": f"Sample for {p['title']}"}],
        "starter_templates": starter_templates,
        "created_at": f"2026-01-03T{idx//3600:02d}:{(idx%3600)//60:02d}:{idx%60:02d}Z"
    })

# Book 4: Data Types Mastery (1..100)
for idx, p in enumerate(datatypes_problems, 1):
    num_str = f"{idx:03d}"
    uuid_idx = idx + 300
    uuid_str = f"00000000-0000-4000-8000-{uuid_idx:012d}"
    slug = f"dtype-{num_str}-{p['title'].lower().replace(' ', '-').replace('/', '-').replace('&', 'and')}"
    starter_templates = {
        "cpp": f"#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #{num_str}: {p['title']}\nint main() {{\n    // Write your code here\n    return 0;\n}}\n",
        "python": f"# Data Types Problem #{num_str}: {p['title']}\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n",
        "javascript": f"// Data Types Problem #{num_str}: {p['title']}\nfunction solve() {{\n    // Write your code here\n}}\n\nsolve();\n",
        "java": f"import java.util.*;\n\npublic class Solution {{\n    public static void main(String[] args) {{\n        // Write your code here\n    }}\n}}\n"
    }
    diff = "Medium" if p["difficulty"] == "Moderate" else p["difficulty"]
    all_problems.append({
        "id": uuid_str,
        "book": "datatypes",
        "order_index": idx,
        "title": f"#{num_str} {p['title']}",
        "slug": slug,
        "description": p["desc"],
        "difficulty": diff,
        "category": p["category"],
        "tags": p["tags"] + ["Data Types Mastery"],
        "source": "built_in",
        "status": "not_started",
        "sample_test_cases": [{"input": p["input"], "output": p["output"], "explanation": f"Sample for {p['title']}"}],
        "starter_templates": starter_templates,
        "created_at": f"2026-01-04T{idx//3600:02d}:{(idx%3600)//60:02d}:{idx%60:02d}Z"
    })

# SQL Inserts
for p in all_problems:
    tags_sql = "array[" + ", ".join([f"'{t}'" for t in p['tags']]) + "]::text[]"
    desc_sql = p['description'].replace("'", "''")
    title_sql = p['title'].replace("'", "''")
    cases_json = json.dumps(p['sample_test_cases']).replace("'", "''")
    templates_json = json.dumps(p['starter_templates']).replace("'", "''")

    sql_row = f"""(
  '{p['id']}',
  '{p['book']}',
  {p['order_index']},
  '{title_sql}',
  '{p['slug']}',
  '{desc_sql}',
  '{p['difficulty']}',
  '{p['category']}',
  {tags_sql},
  'built_in',
  '{cases_json}'::jsonb,
  '{templates_json}'::jsonb
)"""
    sql_inserts.append(sql_row)

# Write TypeScript file
with open('src/lib/allProblems.ts', 'w') as f:
    f.write("import { Problem } from '../types/problem';\n\n")
    f.write(f"export const ALL_PROBLEMS: Problem[] = {json.dumps(all_problems, indent=2)};\n")

# Write complete SQL insert file
with open('supabase/insert_all_problems.sql', 'w') as f:
    f.write("-- ==============================================================================\n")
    f.write("-- 400 COMPLETE PRACTICE PROBLEMS ACROSS 4 OFFICIAL WORKBOOKS\n")
    f.write("-- ==============================================================================\n\n")
    f.write("insert into public.problems (id, book, order_index, title, slug, description, difficulty, category, tags, source, sample_test_cases, starter_templates)\nvalues\n")
    f.write(",\n".join(sql_inserts))
    f.write("\non conflict (id) do update set\n")
    f.write("  book = excluded.book,\n  order_index = excluded.order_index,\n  title = excluded.title,\n  description = excluded.description,\n  difficulty = excluded.difficulty,\n  category = excluded.category,\n  tags = excluded.tags,\n  sample_test_cases = excluded.sample_test_cases,\n  starter_templates = excluded.starter_templates;\n")

print(f"Generated {len(all_problems)} total problems across all 4 official workbooks!")
