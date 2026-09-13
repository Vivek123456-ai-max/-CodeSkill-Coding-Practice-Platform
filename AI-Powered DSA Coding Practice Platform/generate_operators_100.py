import json

raw_problems_data = [
    # 01 Arithmetic Operators (1-10)
    (1, "Add Two Numbers Using +", "Arithmetic Operators", "Easy", ["Arithmetic", "Addition", "Operators"], "5 3", "8", "Read two integers and print their sum using the + operator.", "int a, b; cin >> a >> b; cout << (a + b);"),
    (2, "Subtract Two Numbers Using -", "Arithmetic Operators", "Easy", ["Arithmetic", "Subtraction", "Operators"], "10 4", "6", "Read two integers and print their difference using the - operator.", "int a, b; cin >> a >> b; cout << (a - b);"),
    (3, "Multiply Two Numbers Using *", "Arithmetic Operators", "Easy", ["Arithmetic", "Multiplication", "Operators"], "6 7", "42", "Read two integers and print their product using the * operator.", "int a, b; cin >> a >> b; cout << (a * b);"),
    (4, "Divide Two Numbers Using /", "Arithmetic Operators", "Easy", ["Arithmetic", "Division", "Operators"], "20 4", "5", "Read two integers and print the result of integer division using the / operator.", "int a, b; cin >> a >> b; cout << (a / b);"),
    (5, "Find the Remainder Using %", "Arithmetic Operators", "Easy", ["Arithmetic", "Modulus", "Operators"], "17 5", "2", "Read two integers and print the remainder using the % operator.", "int a, b; cin >> a >> b; cout << (a % b);"),
    (6, "Combine +, -, * and / in One Expression", "Arithmetic Operators", "Medium", ["Arithmetic", "Precedence", "Expressions"], "2 3 4", "14", "Read three integers a, b and c and print the result of a + b * c, relying on standard precedence.", "int a, b, c; cin >> a >> b >> c; cout << (a + b * c);"),
    (7, "Unary Minus Operator", "Unary Operators", "Easy", ["Unary", "Negation", "Operators"], "7", "-7", "Read an integer and print its negation using the unary minus operator.", "int n; cin >> n; cout << (-n);"),
    (8, "Unary Plus Operator", "Unary Operators", "Easy", ["Unary", "Operators"], "-5", "-5", "Read an integer and print the result of applying the unary plus operator to it.", "int n; cin >> n; cout << (+n);"),
    (9, "Float Division Using /", "Arithmetic Operators", "Easy", ["Division", "Float", "Type Casting"], "7 2", "3.5", "Read two integers, divide them in a floating-point context, and print the precise result.", "double a, b; cin >> a >> b; cout << (a / b);"),
    (10, "Chained Arithmetic Operations", "Arithmetic Operators", "Medium", ["Precedence", "Chaining", "Arithmetic"], "10 2 3", "8", "Read three integers a, b and c and print the result of a / b + c.", "int a, b, c; cin >> a >> b >> c; cout << (a / b + c);"),

    # 02 Assignment Operators (11-18)
    (11, "Simple Assignment Operator", "Assignment Operators", "Easy", ["Assignment", "Variables", "Operators"], "15", "15", "Read an integer and assign it to a variable using =, then print it.", "int n; cin >> n; int a = n; cout << a;"),
    (12, "Addition Assignment +=", "Assignment Operators", "Easy", ["Compound Assignment", "Addition", "Operators"], "10 5", "15", "Read two integers a and b, apply a += b, and print the result.", "int a, b; cin >> a >> b; a += b; cout << a;"),
    (13, "Subtraction Assignment -=", "Assignment Operators", "Easy", ["Compound Assignment", "Subtraction", "Operators"], "10 3", "7", "Read two integers a and b, apply a -= b, and print the result.", "int a, b; cin >> a >> b; a -= b; cout << a;"),
    (14, "Multiplication Assignment *=", "Assignment Operators", "Easy", ["Compound Assignment", "Multiplication", "Operators"], "4 5", "20", "Read two integers a and b, apply a *= b, and print the result.", "int a, b; cin >> a >> b; a *= b; cout << a;"),
    (15, "Division Assignment /=", "Assignment Operators", "Easy", ["Compound Assignment", "Division", "Operators"], "20 4", "5", "Read two integers a and b, apply a /= b, and print the result.", "int a, b; cin >> a >> b; a /= b; cout << a;"),
    (16, "Modulus Assignment %=", "Assignment Operators", "Easy", ["Compound Assignment", "Modulus", "Operators"], "17 5", "2", "Read two integers a and b, apply a %= b, and print the result.", "int a, b; cin >> a >> b; a %= b; cout << a;"),
    (17, "Chained Assignment", "Assignment Operators", "Medium", ["Chaining", "Assignment", "Operators"], "8", "8 8 8", "Read a single integer and assign it to three variables a, b and c in one chained statement, then print all three.", "int n; cin >> n; int a, b, c; a = b = c = n; cout << a << ' ' << b << ' ' << c;"),
    (18, "Combine Multiple Compound Assignments", "Assignment Operators", "Medium", ["Sequencing", "Compound Assignment", "Operators"], "10", "30", "Read an integer a. Apply a += 5, then apply a *= 2 to the new value, and print the final result.", "int a; cin >> a; a += 5; a *= 2; cout << a;"),

    # 03 Relational Operators (19-28)
    (19, "Equal To ==", "Relational Operators", "Easy", ["Equality", "Comparison", "Boolean"], "5 5", "true", "Read two integers and print whether they are equal using ==.", "int a, b; cin >> a >> b; cout << (a == b ? \"true\" : \"false\");"),
    (20, "Not Equal To !=", "Relational Operators", "Easy", ["Inequality", "Comparison", "Boolean"], "5 6", "true", "Read two integers and print whether they are not equal using !=.", "int a, b; cin >> a >> b; cout << (a != b ? \"true\" : \"false\");"),
    (21, "Greater Than >", "Relational Operators", "Easy", ["Comparison", "Greater Than", "Boolean"], "8 3", "true", "Read two integers and print whether the first is greater than the second.", "int a, b; cin >> a >> b; cout << (a > b ? \"true\" : \"false\");"),
    (22, "Less Than <", "Relational Operators", "Easy", ["Comparison", "Less Than", "Boolean"], "3 8", "true", "Read two integers and print whether the first is less than the second.", "int a, b; cin >> a >> b; cout << (a < b ? \"true\" : \"false\");"),
    (23, "Greater Than or Equal To >=", "Relational Operators", "Easy", ["Comparison", "Greater Equal", "Boolean"], "5 5", "true", "Read two integers and print whether the first is greater than or equal to the second.", "int a, b; cin >> a >> b; cout << (a >= b ? \"true\" : \"false\");"),
    (24, "Less Than or Equal To <=", "Relational Operators", "Easy", ["Comparison", "Less Equal", "Boolean"], "4 5", "true", "Read two integers and print whether the first is less than or equal to the second.", "int a, b; cin >> a >> b; cout << (a <= b ? \"true\" : \"false\");"),
    (25, "Compare Two Floats for Equality", "Relational Operators", "Medium", ["Float", "Comparison", "Precision"], "2.5 2.5", "true", "Read two float values and print whether they are equal.", "double a, b; cin >> a >> b; cout << (a == b ? \"true\" : \"false\");"),
    (26, "Compare Two Characters", "Relational Operators", "Easy", ["Char", "ASCII", "Comparison"], "a b", "true", "Read two characters and print whether the first comes before the second alphabetically.", "char a, b; cin >> a >> b; cout << (a < b ? \"true\" : \"false\");"),
    (27, "Evaluate a Chained Comparison", "Relational Operators", "Hard", ["Evaluation Order", "Boolean Arithmetic", "Precedence"], "0", "true", "Print the result of the expression (1 < 2) < 3, showing how relational results (0/1) are compared next.", "cout << (((1 < 2) < 3) ? \"true\" : \"false\");"),
    (28, "Use a Relational Operator in a Condition", "Relational Operators", "Easy", ["Conditionals", "Relational", "Branching"], "15", "true", "Read an integer and print whether it is greater than 10.", "int n; cin >> n; cout << (n > 10 ? \"true\" : \"false\");"),

    # 04 Logical Operators (29-38)
    (29, "Logical AND &&", "Logical Operators", "Easy", ["Logical AND", "Boolean", "Truth Table"], "1 0", "false", "Read two integers (0 or 1) and print the result of their logical AND.", "int a, b; cin >> a >> b; cout << ((a && b) ? \"true\" : \"false\");"),
    (30, "Logical OR ||", "Logical Operators", "Easy", ["Logical OR", "Boolean", "Truth Table"], "0 1", "true", "Read two integers (0 or 1) and print the result of their logical OR.", "int a, b; cin >> a >> b; cout << ((a || b) ? \"true\" : \"false\");"),
    (31, "Logical NOT !", "Logical Operators", "Easy", ["Logical NOT", "Boolean", "Inversion"], "1", "false", "Read an integer (0 or 1) and print the result of applying logical NOT.", "int a; cin >> a; cout << ((!a) ? \"true\" : \"false\");"),
    (32, "Combine AND and OR", "Logical Operators", "Medium", ["Combined Logic", "Precedence", "Short-Circuit"], "5", "true", "Read an integer n and print the result of (n > 0 && n < 10) || n == 100.", "int n; cin >> n; cout << (((n > 0 && n < 10) || n == 100) ? \"true\" : \"false\");"),
    (33, "Short-Circuit Evaluation of &&", "Logical Operators", "Medium", ["Short-Circuit", "Safe Division", "Logical AND"], "0", "false", "Read an integer n and print the result of (n != 0 && 10 / n > 1), demonstrating that division is skipped when n is 0.", "int n; cin >> n; cout << ((n != 0 && 10 / n > 1) ? \"true\" : \"false\");"),
    (34, "Short-Circuit Evaluation of ||", "Logical Operators", "Medium", ["Short-Circuit", "Safe Operations", "Logical OR"], "1", "true", "Read an integer n and print the result of (n == 1 || (n > 0 && 10 / (n - 1) > 1)), demonstrating that the second part is skipped once the first is true.", "int n; cin >> n; cout << ((n == 1 || 10 > 1) ? \"true\" : \"false\");"),
    (35, "Logical Operators with Relational Operators", "Logical Operators", "Easy", ["Relational", "Logical", "Expressions"], "5 10", "true", "Read two integers a and b and print the result of (a < b && b > 0).", "int a, b; cin >> a >> b; cout << ((a < b && b > 0) ? \"true\" : \"false\");"),
    (36, "Multiple Logical Conditions Combined", "Logical Operators", "Medium", ["Range Check", "Age Verification", "Logical AND"], "20", "true", "Read an age and print whether it falls between 18 and 60 (inclusive) using logical AND.", "int age; cin >> age; cout << ((age >= 18 && age <= 60) ? \"true\" : \"false\");"),
    (37, "NOT of a Comparison", "Logical Operators", "Easy", ["Inversion", "Relational", "Logical NOT"], "5 5", "false", "Read two integers and print the result of NOT applied to their equality comparison.", "int a, b; cin >> a >> b; cout << ((!(a == b)) ? \"true\" : \"false\");"),
    (38, "Compare Two Booleans for Inequality", "Logical Operators", "Easy", ["Booleans", "XOR Concept", "Inequality"], "1 0", "true", "Read two integers (0 or 1) into bool variables and print whether they are different.", "int a, b; cin >> a >> b; bool b1 = a, b2 = b; cout << ((b1 != b2) ? \"true\" : \"false\");"),

    # 05 Bitwise Operators (39-50)
    (39, "Bitwise AND &", "Bitwise Operators", "Easy", ["Bitwise AND", "Masking", "Bits"], "6 3", "2", "Read two integers and print the result of a bitwise AND.", "int a, b; cin >> a >> b; cout << (a & b);"),
    (40, "Bitwise OR |", "Bitwise Operators", "Easy", ["Bitwise OR", "Setting Bits", "Bits"], "6 3", "7", "Read two integers and print the result of a bitwise OR.", "int a, b; cin >> a >> b; cout << (a | b);"),
    (41, "Bitwise XOR ^", "Bitwise Operators", "Easy", ["Bitwise XOR", "Flipping Bits", "Bits"], "6 3", "5", "Read two integers and print the result of a bitwise XOR.", "int a, b; cin >> a >> b; cout << (a ^ b);"),
    (42, "Bitwise NOT ~", "Bitwise Operators", "Medium", ["Bitwise NOT", "Two's Complement", "Inversion"], "5", "-6", "Read an integer and print the result of applying the bitwise NOT operator.", "int n; cin >> n; cout << (~n);"),
    (43, "Left Shift <<", "Bitwise Operators", "Easy", ["Left Shift", "Bit Manipulation", "Multiplication"], "3 2", "12", "Read an integer and a shift amount, and print the result of shifting left.", "int v, s; cin >> v >> s; cout << (v << s);"),
    (44, "Right Shift >>", "Bitwise Operators", "Easy", ["Right Shift", "Bit Manipulation", "Division"], "20 2", "5", "Read an integer and a shift amount, and print the result of shifting right.", "int v, s; cin >> v >> s; cout << (v >> s);"),
    (45, "Check If a Number Is Even Using Bitwise AND", "Bitwise Operators", "Medium", ["Parity Check", "Bitwise AND", "Performance"], "8", "Even", "Read an integer and use n & 1 to determine and print whether it is even or odd.", "int n; cin >> n; cout << ((n & 1) == 0 ? \"Even\" : \"Odd\");"),
    (46, "Swap Two Numbers Using XOR", "Bitwise Operators", "Medium", ["XOR Swap", "Trick", "Variables"], "6 11", "11 6", "Read two integers and swap their values using the XOR swap technique, then print the result.", "int a, b; cin >> a >> b; a ^= b; b ^= a; a ^= b; cout << a << ' ' << b;"),
    (47, "Multiply by 2 Using Left Shift", "Bitwise Operators", "Easy", ["Fast Math", "Left Shift", "Bitwise"], "5", "10", "Read an integer and print the result of shifting it left by 1 (equivalent to multiplying by 2).", "int n; cin >> n; cout << (n << 1);"),
    (48, "Divide by 2 Using Right Shift", "Bitwise Operators", "Easy", ["Fast Math", "Right Shift", "Bitwise"], "20", "10", "Read an integer and print the result of shifting it right by 1 (equivalent to integer division by 2).", "int n; cin >> n; cout << (n >> 1);"),
    (49, "Set a Specific Bit Using OR", "Bitwise Operators", "Medium", ["Bit Manipulation", "Bitmask", "OR"], "4 1", "6", "Read a number and a bit position, and print the number with that bit set to 1 using OR.", "int n, k; cin >> n >> k; cout << (n | (1 << k));"),
    (50, "Check a Specific Bit Using AND", "Bitwise Operators", "Medium", ["Bit Manipulation", "Bitmask", "AND"], "5 0", "1", "Read a number and a bit position, and print whether that bit is set (1) or not (0) using AND.", "int n, k; cin >> n >> k; cout << ((n >> k) & 1);"),

    # 06 Increment & Decrement Operators (51-58)
    (51, "Post-Increment Operator", "Increment Operators", "Medium", ["Postfix", "Increment", "Evaluation"], "5", "5\n6", "Read an integer a, print the value of a++ (its value before incrementing), then print a's new value.", "int a; cin >> a; cout << a++ << endl << a;"),
    (52, "Pre-Increment Operator", "Increment Operators", "Easy", ["Prefix", "Increment", "Evaluation"], "5", "6", "Read an integer a and print the value of ++a (its value after incrementing).", "int a; cin >> a; cout << ++a;"),
    (53, "Post-Decrement Operator", "Decrement Operators", "Medium", ["Postfix", "Decrement", "Evaluation"], "5", "5\n4", "Read an integer a, print the value of a-- (its value before decrementing), then print a's new value.", "int a; cin >> a; cout << a-- << endl << a;"),
    (54, "Pre-Decrement Operator", "Decrement Operators", "Easy", ["Prefix", "Decrement", "Evaluation"], "5", "4", "Read an integer a and print the value of --a (its value after decrementing).", "int a; cin >> a; cout << --a;"),
    (55, "Increment Inside an Expression", "Increment Operators", "Hard", ["Expression Evaluation", "Sequence Points", "Operators"], "3", "8", "Read an integer a. Compute b = ++a + a++ and print the final value of b.", "int a; cin >> a; int b = ++a + a++; cout << b;"),
    (56, "Decrement Inside a Loop Condition", "Decrement Operators", "Easy", ["Loops", "Decrement", "Countdown"], "3", "3\n2\n1", "Read an integer N and print a countdown from N to 1 using a decrement in the loop condition.", "int n; cin >> n; while(n > 0) { cout << n << endl; n--; }"),
    (57, "Difference Between Pre and Post in Print Statements", "Increment Operators", "Medium", ["Prefix vs Postfix", "Printing", "State"], "5", "Pre: 6\nPost: 5", "Read an integer a. Print the result of ++a on one line and the result of a++ (using a fresh copy of the original value) on the next.", "int a; cin >> a; int copy = a; cout << \"Pre: \" << ++a << endl; cout << \"Post: \" << copy++;"),
    (58, "Combine Increment with Compound Assignment", "Increment Operators", "Medium", ["Compound Assignment", "Increment", "Sequencing"], "5", "11", "Read an integer a. Apply a += 5, then apply a++, and print the final value.", "int a; cin >> a; a += 5; a++; cout << a;"),

    # 07 Ternary Operator (59-66)
    (59, "Find the Larger of Two Numbers Using Ternary", "Ternary Operator", "Easy", ["Conditional Operator", "Max", "Branching"], "7 3", "7", "Read two integers and print the larger one using the ternary operator.", "int a, b; cin >> a >> b; cout << (a > b ? a : b);"),
    (60, "Check Even or Odd Using Ternary", "Ternary Operator", "Easy", ["Parity", "Ternary Operator", "Strings"], "5", "Odd", "Read an integer and print \"Even\" or \"Odd\" using the ternary operator.", "int n; cin >> n; cout << (n % 2 == 0 ? \"Even\" : \"Odd\");"),
    (61, "Check Positive or Negative Using Ternary", "Ternary Operator", "Easy", ["Sign Check", "Ternary", "Logic"], "-3", "Negative", "Read an integer and print \"Positive\" or \"Negative\" using the ternary operator.", "int n; cin >> n; cout << (n >= 0 ? \"Positive\" : \"Negative\");"),
    (62, "Nested Ternary Operator for Grading", "Ternary Operator", "Medium", ["Nested Ternary", "Grading", "Branching"], "85", "B", "Read a score and print a grade (A for 90+, B for 80-89, otherwise C) using nested ternary operators.", "int score; cin >> score; cout << (score >= 90 ? \"A\" : score >= 80 ? \"B\" : \"C\");"),
    (63, "Absolute Value Using Ternary", "Ternary Operator", "Easy", ["Absolute Value", "Math", "Ternary"], "-9", "9", "Read an integer and print its absolute value using the ternary operator.", "int n; cin >> n; cout << (n < 0 ? -n : n);"),
    (64, "Check Vowel or Consonant Using Ternary", "Ternary Operator", "Medium", ["Characters", "Vowels", "Ternary"], "e", "Vowel", "Read a lowercase letter and print \"Vowel\" or \"Consonant\" using the ternary operator.", "char c; cin >> c; bool isVowel = (c=='a'||c=='e'||c=='i'||c=='o'||c=='u'); cout << (isVowel ? \"Vowel\" : \"Consonant\");"),
    (65, "Assign a Value Based on a Condition Using Ternary", "Ternary Operator", "Easy", ["Conditional Assignment", "Strings", "Ternary"], "15", "Minor", "Read an age and print \"Adult\" or \"Minor\" using the ternary operator.", "int age; cin >> age; string status = (age >= 18 ? \"Adult\" : \"Minor\"); cout << status;"),
    (66, "Chain Multiple Ternary Operators", "Ternary Operator", "Medium", ["Chained Ternary", "Multi-branch", "Logic"], "0", "Zero", "Read an integer and print \"Positive\", \"Negative\", or \"Zero\" using chained ternary operators.", "int n; cin >> n; cout << (n > 0 ? \"Positive\" : n < 0 ? \"Negative\" : \"Zero\");"),

    # 08 sizeof Operator (67-72)
    (67, "sizeof an int Variable", "sizeof Operator", "Easy", ["sizeof", "Memory", "Primitives"], "0", "4", "Declare an int variable and print the size returned by the sizeof operator.", "cout << sizeof(int);"),
    (68, "sizeof an Expression Result", "sizeof Operator", "Easy", ["sizeof", "Expression Type", "Compile-Time"], "0", "4", "Print the size of the result of the expression 2 + 3 using sizeof.", "cout << sizeof(2 + 3);"),
    (69, "sizeof a Character Literal", "sizeof Operator", "Easy", ["sizeof", "char", "Type Size"], "0", "1", "Print the size of the character literal 'a' using sizeof.", "cout << sizeof('a');"),
    (70, "sizeof a double Variable", "sizeof Operator", "Easy", ["sizeof", "double", "Floating Point"], "0", "8", "Declare a double variable and print the size returned by sizeof.", "cout << sizeof(double);"),
    (71, "sizeof an Array", "sizeof Operator", "Medium", ["sizeof", "Arrays", "Memory Layout"], "5", "20", "Declare an integer array of the given size and print its total size in bytes using sizeof.", "int n; cin >> n; cout << (n * sizeof(int));"),
    (72, "Combine sizeof Results", "sizeof Operator", "Easy", ["sizeof", "Arithmetic", "Memory"], "0", "5", "Print the sum of sizeof(int) and sizeof(char).", "cout << (sizeof(int) + sizeof(char));"),

    # 09 Operator Precedence & Associativity (73-80)
    (73, "Precedence of * over +", "Operator Precedence", "Medium", ["Precedence", "Multiplication", "Addition"], "2 3 4", "14", "Read three integers a, b and c and print the result of a + b * c, showing that * is evaluated first.", "int a, b, c; cin >> a >> b >> c; cout << (a + b * c);"),
    (74, "Parentheses Overriding Default Precedence", "Operator Precedence", "Easy", ["Parentheses", "Precedence", "Arithmetic"], "2 3 4", "20", "Read three integers a, b and c and print the result of (a + b) * c.", "int a, b, c; cin >> a >> b >> c; cout << ((a + b) * c);"),
    (75, "Precedence of Relational Over Logical", "Operator Precedence", "Medium", ["Relational vs Logical", "Precedence", "Boolean"], "5 10", "true", "Read two integers a and b and print the result of a < b && b > 0, showing relational operators are evaluated before &&.", "int a, b; cin >> a >> b; cout << (a < b && b > 0 ? \"true\" : \"false\");"),
    (76, "Precedence and Right-Associativity of Assignment", "Operator Precedence", "Medium", ["Right Associativity", "Assignment", "Chaining"], "5", "5 5", "Read a single integer and assign it to two variables using a = b = value, then print both.", "int n; cin >> n; int a, b; a = b = n; cout << a << ' ' << b;"),
    (77, "Precedence of Unary Minus Over Binary Operators", "Operator Precedence", "Medium", ["Unary Precedence", "Sign", "Arithmetic"], "5 3", "-2", "Read two integers a and b and print the result of -a + b.", "int a, b; cin >> a >> b; cout << (-a + b);"),
    (78, "Left-to-Right Associativity of * and /", "Operator Precedence", "Medium", ["Associativity", "Division", "Multiplication"], "8 2 2", "8", "Read three integers a, b and c and print the result of a / b * c, evaluated strictly left to right.", "int a, b, c; cin >> a >> b >> c; cout << (a / b * c);"),
    (79, "Precedence of Increment vs Addition", "Operator Precedence", "Medium", ["Postfix Increment", "Precedence", "Addition"], "5", "6", "Read an integer a and print the result of a++ + 1, using the original value of a in the addition.", "int a; cin >> a; cout << (a++ + 1);"),
    (80, "Precedence of Ternary Over Assignment", "Operator Precedence", "Medium", ["Ternary Precedence", "Assignment", "Operators"], "5", "5", "Read an integer a and assign x the result of (a > 0) ? a : -a using the ternary operator, then print x.", "int a; cin >> a; int x = (a > 0) ? a : -a; cout << x;"),

    # 10 Compound Expressions Combining Operators (81-88)
    (81, "Combine Arithmetic and Relational in One Expression", "Compound Expressions", "Medium", ["Mixed Operators", "Arithmetic", "Relational"], "5 3 2", "true", "Read three integers a, b and c and print the result of (a + b) > (c * 3).", "int a, b, c; cin >> a >> b >> c; cout << ((a + b) > (c * 3) ? \"true\" : \"false\");"),
    (82, "Combine Logical and Bitwise Operators", "Compound Expressions", "Medium", ["Logical vs Bitwise", "Combined", "Bitmask"], "6 3", "true", "Read two integers a and b and print the result of (a & b) > 0 && (a | b) > 0.", "int a, b; cin >> a >> b; cout << (((a & b) > 0 && (a | b) > 0) ? \"true\" : \"false\");"),
    (83, "Combine Ternary and Logical Operators", "Compound Expressions", "Medium", ["Ternary", "Logical AND", "Condition"], "15", "No", "Read an age and print \"Yes\" or \"No\" using a ternary operator whose condition combines two logical checks.", "int age; cin >> age; cout << ((age >= 18 && age <= 60) ? \"Yes\" : \"No\");"),
    (84, "Combine Increment and Relational Operators", "Compound Expressions", "Medium", ["Postfix Increment", "Relational", "Comparison"], "5", "true", "Read an integer a and print the result of a++ < 10, using the original value of a in the comparison.", "int a; cin >> a; cout << (a++ < 10 ? \"true\" : \"false\");"),
    (85, "Sequence of Compound Assignments", "Compound Expressions", "Medium", ["Compound Assignment", "Step-by-Step", "Variables"], "10", "13", "Read an integer a. Apply a += 5, then a -= 2, and print the final value.", "int a; cin >> a; a += 5; a -= 2; cout << a;"),
    (86, "Evaluate a Complex Boolean Expression", "Compound Expressions", "Hard", ["Complex Boolean", "Logic", "Truth Values"], "5 10 15", "true", "Read three integers a, b and c and print the result of ((a < b) && (b < c)) || (a > c).", "int a, b, c; cin >> a >> b >> c; cout << (((a < b && b < c) || (a > c)) ? \"true\" : \"false\");"),
    (87, "Combine Bitwise Shift with Arithmetic", "Compound Expressions", "Medium", ["Bitwise Shift", "Arithmetic", "Precedence"], "3", "13", "Read an integer n and print the result of (n << 2) + 1.", "int n; cin >> n; cout << ((n << 2) + 1);"),
    (88, "Evaluate an Expression with Mixed Operator Types", "Compound Expressions", "Easy", ["Mixed Operators", "Arithmetic", "Expressions"], "4 2", "10", "Read two integers a and b and print the result of a * b + b.", "int a, b; cin >> a >> b; cout << (a * b + b);"),

    # 11 Real-World Operator Applications (89-96)
    (89, "Calculate Total Price with Discount", "Real-World Applications", "Easy", ["Discount Calculation", "Arithmetic", "Real-World"], "500 10", "450", "Read a price and a discount percentage, and print the final price after applying the discount.", "int p, d; cin >> p >> d; cout << (p - (p * d / 100));"),
    (90, "Check If a Year Is a Leap Year", "Real-World Applications", "Medium", ["Leap Year", "Logical Operators", "Modulo"], "2024", "Leap Year", "Read a year and print whether it is a leap year using the standard leap-year rule with logical operators.", "int y; cin >> y; bool leap = (y % 4 == 0 && y % 100 != 0) || (y % 400 == 0); cout << (leap ? \"Leap Year\" : \"Not a Leap Year\");"),
    (91, "Validate Login Credentials Using Logical AND", "Real-World Applications", "Easy", ["Authentication", "Logical AND", "Security"], "admin 1234", "Access Granted", "Read a username and password and print whether access is granted (both must match fixed valid values).", "string u, p; cin >> u >> p; cout << (u == \"admin\" && p == \"1234\" ? \"Access Granted\" : \"Access Denied\");"),
    (92, "Calculate Grade Using Nested Ternary", "Real-World Applications", "Medium", ["Grading System", "Nested Ternary", "Real-World"], "92", "A", "Read a score and print a grade (A for 90+, B for 80-89, otherwise C) using nested ternary operators.", "int s; cin >> s; cout << (s >= 90 ? \"A\" : s >= 80 ? \"B\" : \"C\");"),
    (93, "Check Divisibility by Both 3 and 5", "Real-World Applications", "Easy", ["Divisibility", "Modulo", "Logical AND"], "15", "Yes", "Read an integer and print whether it is divisible by both 3 and 5.", "int n; cin >> n; cout << (n % 3 == 0 && n % 5 == 0 ? \"Yes\" : \"No\");"),
    (94, "Toggle a Boolean Flag Using NOT", "Real-World Applications", "Easy", ["Flag Toggle", "Logical NOT", "State Machine"], "1", "0", "Read a flag value (0 or 1) and print its toggled value using the NOT operator.", "int f; cin >> f; cout << (!f ? 1 : 0);"),
    (95, "Check Range Membership Using Relational and Logical Operators", "Real-World Applications", "Easy", ["Range Verification", "Logical AND", "Boundary"], "45", "In Range", "Read an integer and print whether it falls within the range 18 to 60 (inclusive).", "int n; cin >> n; cout << (n >= 18 && n <= 60 ? \"In Range\" : \"Out of Range\");"),
    (96, "Count Even Numbers Using Bitwise AND in a Loop", "Real-World Applications", "Medium", ["Loop", "Bitwise AND", "Counter"], "4\n1 2 3 4", "Even: 2", "Read N integers and count how many are even, checking each with the bitwise AND operator.", "int n; cin >> n; int count = 0; for(int i=0; i<n; i++) { int val; cin >> val; if((val & 1) == 0) count++; } cout << \"Even: \" << count;"),

    # 12 Final Operator Challenges (97-100)
    (97, "Build a Simple Calculator", "Final Challenges", "Medium", ["Calculator", "All Arithmetic", "Switch/Branching"], "6 3 *", "18", "Read two numbers and an operator (+, -, *, or /) and print the result of applying that operator.", "int a, b; char op; cin >> a >> b >> op; if(op=='+') cout<<a+b; else if(op=='-') cout<<a-b; else if(op=='*') cout<<a*b; else if(op=='/') cout<<a/b;"),
    (98, "Evaluate an Expression with Precedence, Logical and Ternary Combined", "Final Challenges", "Hard", ["Precedence", "Logical", "Ternary"], "5 3 2", "Big", "Read three integers a, b and c and print \"Big\" if a + b * c is greater than 10, otherwise print \"Small\", using the ternary operator.", "int a, b, c; cin >> a >> b >> c; cout << ((a + b * c > 10) ? \"Big\" : \"Small\");"),
    (99, "Simulate a Simple Access Control System", "Final Challenges", "Medium", ["Access Control", "Logical AND", "Real-World"], "20 1", "Access Granted", "Read an age and a flag indicating whether the person has valid ID (0 or 1), and print whether access is granted.", "int age, id; cin >> age >> id; cout << (age >= 18 && id == 1 ? \"Access Granted\" : \"Access Denied\");"),
    (100, "Final Challenge - Mini Expression Evaluator", "Final Challenges", "Hard", ["Expression Evaluator", "Relational", "Ternary"], "8 4 12", "Valid", "Read three integers a, b and c and print \"Valid\" if a + b equals c, otherwise print \"Invalid\", combining arithmetic, relational, and ternary operators.", "int a, b, c; cin >> a >> b >> c; cout << (a + b == c ? \"Valid\" : \"Invalid\");"),
]

print(f"Loaded {len(raw_problems_data)} operator problems successfully.")

operators_problems = []
for item in raw_problems_data:
    num, title, category, diff, tags, inp, outp, desc, cpp_body = item
    num_str = f"{num:03d}"
    
    prob_id = f"00000000-0000-4000-8000-0000000006{num:02d}"
    slug = f"op-{num_str}-" + title.lower().replace(" ", "-").replace("+", "plus").replace("-", "minus").replace("*", "star").replace("/", "slash").replace("%", "mod").replace("=", "eq").replace("&", "and").replace("|", "or").replace("^", "xor").replace("~", "not").replace("<", "lt").replace(">", "gt").replace("!", "not")
    
    # Format templates
    starter_templates = {
        "cpp": f"#include <iostream>\nusing namespace std;\n\n// Operator Problem #{num_str}: {title}\nint main() {{\n    // Write your solution here\n    return 0;\n}}\n",
        "python": f"# Operator Problem #{num_str}: {title}\ndef solve():\n    # Write your solution here\n    pass\n\nsolve()\n",
        "javascript": f"// Operator Problem #{num_str}: {title}\nfunction solve() {{\n    // Write your solution here\n}}\n\nsolve();\n",
        "java": f"import java.util.*;\n\npublic class Solution {{\n    public static void main(String[] args) {{\n        // Write your solution here\n    }}\n}}\n"
    }
    
    prob_obj = {
        "id": prob_id,
        "book": "operators",
        "order_index": num,
        "title": f"#{num_str} {title}",
        "slug": slug,
        "description": f"{desc}\n\n### Input\nSample format as specified in problem statement.\n\n### Output\nPrint expected result matching the sample testcase.",
        "difficulty": diff,
        "category": category,
        "tags": tags,
        "source": "built_in",
        "status": "not_started",
        "sample_test_cases": [
            {
                "input": inp,
                "output": outp,
                "explanation": f"Sample case for {title}"
            }
        ],
        "starter_templates": starter_templates,
        "created_at": f"2026-02-01T00:{num:02d}:00Z"
    }
    operators_problems.append(prob_obj)

# Load existing 500 problems from allProblems.ts
with open('src/lib/allProblems.ts', 'r') as f:
    text = f.read()

# Array starts after "= ["
target = "= ["
start_idx = text.find(target)
if start_idx != -1:
    json_start = start_idx + len(target) - 1
    json_end = text.rfind(']')
    existing_json_str = text[json_start:json_end+1]
    existing_problems = json.loads(existing_json_str)
    print(f"Parsed {len(existing_problems)} existing problems.")
    
    # Filter out any old operator problems if present
    filtered_existing = [p for p in existing_problems if p.get('book') != 'operators']
    
    combined = filtered_existing + operators_problems
    print(f"Total combined problems: {len(combined)}")
    
    prefix = "import { Problem } from '../types/problem';\n\nexport const ALL_PROBLEMS: Problem[] = "
    new_file_content = prefix + json.dumps(combined, indent=2) + ";\n"
    with open('src/lib/allProblems.ts', 'w') as f_out:
        f_out.write(new_file_content)
        
    print("src/lib/allProblems.ts updated successfully with 600 problems!")
