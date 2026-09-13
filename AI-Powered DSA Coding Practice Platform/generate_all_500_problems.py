import json

from generate_100_problems import raw_problems_data as pattern_problems
from generate_all_200_problems import loop_problems
from generate_all_400_problems import variables_problems, datatypes_problems

# Define Book 5: User Input Mastery (100 Problems)
userinput_problems = [
  # 01 Basic Single-Value Input (1-8)
  {
    "num": 1, "title": "Read and Print an Integer", "difficulty": "Easy", "category": "Basic Single-Value Input",
    "tags": ["cin", "Basic Input"],
    "desc": "Read a single integer using cin and print it back.\n\n### Input\nA single integer N.\n\n### Output\nPrint N.",
    "input": "15", "output": "15"
  },
  {
    "num": 2, "title": "Read and Print a Float", "difficulty": "Easy", "category": "Basic Single-Value Input",
    "tags": ["cin", "Basic Input", "Float"],
    "desc": "Read a single float using cin and print it with 2 decimal places.\n\n### Input\nA single decimal number.\n\n### Output\nPrint the value with 2 decimal places.",
    "input": "3.5", "output": "3.50"
  },
  {
    "num": 3, "title": "Read and Print a Character", "difficulty": "Easy", "category": "Basic Single-Value Input",
    "tags": ["cin", "char Input"],
    "desc": "Read a single character using cin and print it back.\n\n### Input\nA single character.\n\n### Output\nPrint the character.",
    "input": "Z", "output": "Z"
  },
  {
    "num": 4, "title": "Read and Print a Double", "difficulty": "Easy", "category": "Basic Single-Value Input",
    "tags": ["cin", "double Input"],
    "desc": "Read a double using cin and print it using default precision.\n\n### Input\nA decimal number.\n\n### Output\nPrint the value.",
    "input": "2.71828", "output": "2.71828"
  },
  {
    "num": 5, "title": "Read a Boolean Using boolalpha", "difficulty": "Medium", "category": "Basic Single-Value Input",
    "tags": ["cin", "bool", "boolalpha"],
    "desc": "Use std::boolalpha so cin can read the words true/false directly into a bool, then print it back.\n\n### Input\nThe word 'true' or 'false'.\n\n### Output\nPrint the value read.",
    "input": "true", "output": "true"
  },
  {
    "num": 6, "title": "Read a Long Long Value", "difficulty": "Easy", "category": "Basic Single-Value Input",
    "tags": ["cin", "long long"],
    "desc": "Read a large integer into a long long variable using cin and print it.\n\n### Input\nA large integer.\n\n### Output\nPrint the value.",
    "input": "987654321012", "output": "987654321012"
  },
  {
    "num": 7, "title": "Read an Integer and Print Its Double", "difficulty": "Easy", "category": "Basic Single-Value Input",
    "tags": ["cin", "Arithmetic"],
    "desc": "Read an integer using cin and print twice its value.\n\n### Input\nA single integer N.\n\n### Output\nPrint 2 * N.",
    "input": "7", "output": "14"
  },
  {
    "num": 8, "title": "Read an Integer and Print Its Square", "difficulty": "Easy", "category": "Basic Single-Value Input",
    "tags": ["cin", "Arithmetic"],
    "desc": "Read an integer using cin and print its square.\n\n### Input\nA single integer N.\n\n### Output\nPrint N * N.",
    "input": "6", "output": "36"
  },

  # 02 Reading Multiple Values on One Line (9-16)
  {
    "num": 9, "title": "Read Two Integers and Print Their Sum", "difficulty": "Easy", "category": "Multiple Values on Line",
    "tags": ["cin", "Multiple Values"],
    "desc": "Read two integers separated by a space and print their sum.\n\n### Input\nTwo integers a and b.\n\n### Output\nPrint a + b.",
    "input": "4 5", "output": "9"
  },
  {
    "num": 10, "title": "Read Three Integers and Print Their Product", "difficulty": "Easy", "category": "Multiple Values on Line",
    "tags": ["cin", "Multiple Values"],
    "desc": "Read three integers and print their product.\n\n### Input\nThree integers.\n\n### Output\nPrint their product.",
    "input": "2 3 4", "output": "24"
  },
  {
    "num": 11, "title": "Read Two Integers and Print the Larger", "difficulty": "Easy", "category": "Multiple Values on Line",
    "tags": ["cin", "Comparison"],
    "desc": "Read two integers and print whichever is larger.\n\n### Input\nTwo integers a and b.\n\n### Output\nPrint the larger value.",
    "input": "8 3", "output": "8"
  },
  {
    "num": 12, "title": "Read Two Floats and Print Their Average", "difficulty": "Easy", "category": "Multiple Values on Line",
    "tags": ["cin", "Multiple Values"],
    "desc": "Read two floats and print their average with 2 decimal places.\n\n### Input\nTwo decimal numbers.\n\n### Output\nPrint their average with 2 decimal places.",
    "input": "4.0 6.0", "output": "5.00"
  },
  {
    "num": 13, "title": "Read Four Integers and Print Their Sum", "difficulty": "Easy", "category": "Multiple Values on Line",
    "tags": ["cin", "Multiple Values"],
    "desc": "Read four integers on one line and print their sum.\n\n### Input\nFour integers.\n\n### Output\nPrint their sum.",
    "input": "1 2 3 4", "output": "10"
  },
  {
    "num": 14, "title": "Read Mixed Types on One Line", "difficulty": "Medium", "category": "Multiple Values on Line",
    "tags": ["cin", "Mixed Types"],
    "desc": "Read an integer, a character, and a float (in that order) from one line and print them with labels.\n\n### Input\nAn integer, a character, and a decimal number.\n\n### Output\nPrint 'Int: X, Char: Y, Float: Z'.",
    "input": "5 A 2.5", "output": "Int: 5, Char: A, Float: 2.5"
  },
  {
    "num": 15, "title": "Read Two Integers and Print Quotient and Remainder", "difficulty": "Easy", "category": "Multiple Values on Line",
    "tags": ["cin", "Division/Modulus"],
    "desc": "Read two integers and print both the integer quotient and the remainder of the first divided by the second.\n\n### Input\nTwo integers a and b.\n\n### Output\nQuotient: X, Remainder: Y",
    "input": "17 4", "output": "Quotient: 4, Remainder: 1"
  },
  {
    "num": 16, "title": "Read Coordinates and Print as a Pair", "difficulty": "Easy", "category": "Multiple Values on Line",
    "tags": ["cin", "Formatting"],
    "desc": "Read two integers representing x and y coordinates and print them as an ordered pair.\n\n### Input\nTwo integers x and y.\n\n### Output\nPrint '(x, y)'.",
    "input": "3 4", "output": "(3, 4)"
  },

  # 03 Reading Different Data Types (17-26)
  {
    "num": 17, "title": "Read an int and a double, Print Their Sum", "difficulty": "Easy", "category": "Reading Different Types",
    "tags": ["cin", "Type Promotion"],
    "desc": "Read an integer and a double and print their sum.\n\n### Input\nAn integer and a decimal number.\n\n### Output\nPrint their sum.",
    "input": "3 2.5", "output": "5.5"
  },
  {
    "num": 18, "title": "Read a char and an int, Repeat the Char", "difficulty": "Medium", "category": "Reading Different Types",
    "tags": ["cin", "Mixed Types"],
    "desc": "Read a character and an integer N, then print the character repeated N times.\n\n### Input\nA character and an integer N.\n\n### Output\nPrint the character repeated N times.",
    "input": "A 4", "output": "AAAA"
  },
  {
    "num": 19, "title": "Read 1/0 as a Boolean", "difficulty": "Easy", "category": "Reading Different Types",
    "tags": ["cin", "bool"],
    "desc": "Read an integer (0 or 1) into a bool variable and print it as true/false.\n\n### Input\nA single integer, 0 or 1.\n\n### Output\nPrint 'true' or 'false'.",
    "input": "0", "output": "false"
  },
  {
    "num": 20, "title": "Read an Unsigned Integer", "difficulty": "Easy", "category": "Reading Different Types",
    "tags": ["cin", "unsigned int"],
    "desc": "Read a non-negative integer into an unsigned int variable and print it.\n\n### Input\nA single non-negative integer.\n\n### Output\nPrint the value.",
    "input": "300", "output": "300"
  },
  {
    "num": 21, "title": "Read a Short Integer", "difficulty": "Easy", "category": "Reading Different Types",
    "tags": ["cin", "short"],
    "desc": "Read an integer into a short variable and print it.\n\n### Input\nA single integer within short range.\n\n### Output\nPrint the value.",
    "input": "120", "output": "120"
  },
  {
    "num": 22, "title": "Read a Hexadecimal Value", "difficulty": "Medium", "category": "Reading Different Types",
    "tags": ["cin", "std::hex"],
    "desc": "Use std::hex so cin interprets the input as a hexadecimal number, then print its decimal value.\n\n### Input\nA hexadecimal number (no 0x prefix).\n\n### Output\nPrint the equivalent decimal value.",
    "input": "1F", "output": "31"
  },
  {
    "num": 23, "title": "Read an Octal Value", "difficulty": "Medium", "category": "Reading Different Types",
    "tags": ["cin", "std::oct"],
    "desc": "Use std::oct so cin interprets the input as an octal number, then print its decimal value.\n\n### Input\nAn octal number.\n\n### Output\nPrint the equivalent decimal value.",
    "input": "17", "output": "15"
  },
  {
    "num": 24, "title": "Read a Negative Integer and Print Its Absolute Value", "difficulty": "Easy", "category": "Reading Different Types",
    "tags": ["cin", "abs"],
    "desc": "Read a (possibly negative) integer and print its absolute value.\n\n### Input\nA single integer.\n\n### Output\nPrint its absolute value.",
    "input": "-8", "output": "8"
  },
  {
    "num": 25, "title": "Read Two Doubles and Print Their Difference", "difficulty": "Easy", "category": "Reading Different Types",
    "tags": ["cin", "double Arithmetic"],
    "desc": "Read two doubles and print their difference with 2 decimal places.\n\n### Input\nTwo decimal numbers a and b.\n\n### Output\nPrint a - b with 2 decimal places.",
    "input": "5.75 2.25", "output": "3.50"
  },
  {
    "num": 26, "title": "Read a Very Large Number and Double It", "difficulty": "Easy", "category": "Reading Different Types",
    "tags": ["cin", "long long"],
    "desc": "Read a large number into a long long variable and print double its value.\n\n### Input\nA large integer.\n\n### Output\nPrint 2 * the value.",
    "input": "5000000000", "output": "10000000000"
  },

  # 04 String Input - cin vs getline (27-36)
  {
    "num": 27, "title": "Read a Single Word Using cin", "difficulty": "Easy", "category": "cin vs getline",
    "tags": ["cin", "String Input"],
    "desc": "Read a single word (no spaces) into a std::string using cin and print it.\n\n### Input\nA single word.\n\n### Output\nPrint the word.",
    "input": "Hello", "output": "Hello"
  },
  {
    "num": 28, "title": "Read a Full Line Using getline", "difficulty": "Easy", "category": "cin vs getline",
    "tags": ["getline", "String Input"],
    "desc": "Read an entire line, including spaces, using getline and print it.\n\n### Input\nA line of text.\n\n### Output\nPrint the line exactly as entered.",
    "input": "Hello World", "output": "Hello World"
  },
  {
    "num": 29, "title": "Read a Full Name and Greet", "difficulty": "Easy", "category": "cin vs getline",
    "tags": ["getline", "String Input"],
    "desc": "Read a full name (which may contain spaces) using getline and print a greeting.\n\n### Input\nA full name.\n\n### Output\nPrint 'Hello, <name>!'",
    "input": "Aarav Kumar", "output": "Hello, Aarav Kumar!"
  },
  {
    "num": 30, "title": "Read Two Words Using cin", "difficulty": "Easy", "category": "cin vs getline",
    "tags": ["cin", "Whitespace Splitting"],
    "desc": "Read two words separated by a space using two cin >> reads and print each on its own line.\n\n### Input\nTwo words.\n\n### Output\nPrint the first word, then the second, each on its own line.",
    "input": "Good Morning", "output": "Good\nMorning"
  },
  {
    "num": 31, "title": "Compare cin and getline on the Same Line", "difficulty": "Medium", "category": "cin vs getline",
    "tags": ["cin vs getline"],
    "desc": "Given a line with multiple words, show what cin >> reads (just the first word) versus what getline reads (the whole line).\n\n### Input\nA line of text.\n\n### Output\ncin: FirstWord\ngetline: FullLine",
    "input": "Hello World", "output": "cin: Hello\ngetline: Hello World"
  },
  {
    "num": 32, "title": "Read a Sentence and Count Its Length", "difficulty": "Easy", "category": "cin vs getline",
    "tags": ["getline", "String Length"],
    "desc": "Read a line of text using getline and print the number of characters in it.\n\n### Input\nA line of text.\n\n### Output\nPrint the character count.",
    "input": "I love C++", "output": "10"
  },
  {
    "num": 33, "title": "Read a Line and Convert to Uppercase", "difficulty": "Medium", "category": "cin vs getline",
    "tags": ["getline", "String Manipulation"],
    "desc": "Read a line using getline and print it entirely in uppercase.\n\n### Input\nA line of text.\n\n### Output\nPrint the uppercase version.",
    "input": "hello world", "output": "HELLO WORLD"
  },
  {
    "num": 34, "title": "Read a Line and Print It Reversed", "difficulty": "Medium", "category": "cin vs getline",
    "tags": ["getline", "String Manipulation"],
    "desc": "Read a line using getline and print its characters in reverse order.\n\n### Input\nA line of text (no spaces).\n\n### Output\nPrint the reversed text.",
    "input": "abcd", "output": "dcba"
  },
  {
    "num": 35, "title": "Read a Line and Count the Words", "difficulty": "Medium", "category": "cin vs getline",
    "tags": ["getline", "Word Counting"],
    "desc": "Read a line using getline and count how many space-separated words it contains.\n\n### Input\nA line of text.\n\n### Output\nPrint the word count.",
    "input": "I love coding in C++", "output": "5"
  },
  {
    "num": 36, "title": "Read a Full Address Line", "difficulty": "Easy", "category": "cin vs getline",
    "tags": ["getline", "String Input"],
    "desc": "Read a full address (which may include commas) using getline and print it unchanged.\n\n### Input\nAn address line.\n\n### Output\nPrint the address exactly as entered.",
    "input": "221B Baker Street, London", "output": "221B Baker Street, London"
  },

  # 05 Input Validation & Error Handling (37-44)
  {
    "num": 37, "title": "Check if Input Failed", "difficulty": "Medium", "category": "Validation & Error Handling",
    "tags": ["cin.fail()", "Validation"],
    "desc": "Attempt to read an integer; if the input is not a valid number, cin.fail() becomes true. Print a message accordingly.\n\n### Input\nA token that is not a valid integer.\n\n### Output\nPrint 'Invalid input!' when the read fails.",
    "input": "abc", "output": "Invalid input!"
  },
  {
    "num": 38, "title": "Confirm a Valid Numeric Input", "difficulty": "Easy", "category": "Validation & Error Handling",
    "tags": ["cin", "Validation"],
    "desc": "Read an integer and, since it is valid, print a confirmation message with its value.\n\n### Input\nA single valid integer.\n\n### Output\nPrint 'Valid input: N'.",
    "input": "25", "output": "Valid input: 25"
  },
  {
    "num": 39, "title": "Validate That a Number Is Positive", "difficulty": "Easy", "category": "Validation & Error Handling",
    "tags": ["Validation", "Conditionals"],
    "desc": "Read an integer and check whether it is positive; print an appropriate message.\n\n### Input\nA single integer.\n\n### Output\nPrint 'Please enter a positive number.' if not positive, otherwise print the number.",
    "input": "-5", "output": "Please enter a positive number."
  },
  {
    "num": 40, "title": "Validate a Number Is Within a Range", "difficulty": "Medium", "category": "Validation & Error Handling",
    "tags": ["Validation", "Range Check"],
    "desc": "Read an integer and check whether it lies between 1 and 100 (inclusive).\n\n### Input\nA single integer.\n\n### Output\nPrint 'Out of range!' if outside 1-100, otherwise print the number.",
    "input": "150", "output": "Out of range!"
  },
  {
    "num": 41, "title": "Detect Non-Numeric Input", "difficulty": "Medium", "category": "Validation & Error Handling",
    "tags": ["cin.fail()", "Validation"],
    "desc": "Attempt to read an integer; if it fails because the input wasn't numeric, print a friendly message.\n\n### Input\nA non-numeric token.\n\n### Output\nPrint 'That is not a number.' on failure.",
    "input": "abc", "output": "That is not a number."
  },
  {
    "num": 42, "title": "Accept and Confirm Valid Input", "difficulty": "Easy", "category": "Validation & Error Handling",
    "tags": ["Validation"],
    "desc": "Read an integer that is known to be valid and print it back with a confirmation label.\n\n### Input\nA single valid integer.\n\n### Output\nPrint 'You entered: N'.",
    "input": "42", "output": "You entered: 42"
  },
  {
    "num": 43, "title": "Validate That a Number Is Even", "difficulty": "Medium", "category": "Validation & Error Handling",
    "tags": ["Validation", "Modulus"],
    "desc": "Read an integer and check whether it is even; print an appropriate message if it isn't.\n\n### Input\nA single integer.\n\n### Output\nPrint 'Please enter an even number.' if odd, otherwise print the number.",
    "input": "7", "output": "Please enter an even number."
  },
  {
    "num": 44, "title": "Sum a Fixed Set of Values from Input", "difficulty": "Easy", "category": "Validation & Error Handling",
    "tags": ["cin", "Loop Input"],
    "desc": "Read three integers and print their total sum.\n\n### Input\nThree integers.\n\n### Output\nPrint 'Sum: X'.",
    "input": "1 2 3", "output": "Sum: 6"
  },

  # 06 Character Input (45-52)
  {
    "num": 45, "title": "Read a Character Using cin.get()", "difficulty": "Easy", "category": "Character Input",
    "tags": ["cin.get()", "char Input"],
    "desc": "Read a single character using cin.get() and print it back.\n\n### Input\nA single character.\n\n### Output\nPrint the character.",
    "input": "X", "output": "X"
  },
  {
    "num": 46, "title": "Check If a Character Is a Vowel", "difficulty": "Medium", "category": "Character Input",
    "tags": ["char Input", "Conditionals"],
    "desc": "Read a character and print whether it is a vowel or a consonant.\n\n### Input\nA single lowercase letter.\n\n### Output\nPrint 'Vowel' or 'Consonant'.",
    "input": "e", "output": "Vowel"
  },
  {
    "num": 47, "title": "Convert a Character's Case", "difficulty": "Easy", "category": "Character Input",
    "tags": ["char Input", "toupper/tolower"],
    "desc": "Read a lowercase letter and print its uppercase equivalent.\n\n### Input\nA single lowercase letter.\n\n### Output\nPrint the uppercase letter.",
    "input": "g", "output": "G"
  },
  {
    "num": 48, "title": "Check If a Character Is a Digit", "difficulty": "Easy", "category": "Character Input",
    "tags": ["char Input", "isdigit"],
    "desc": "Read a character and print whether it is a digit.\n\n### Input\nA single character.\n\n### Output\nPrint 'Digit' or 'Not a digit'.",
    "input": "7", "output": "Digit"
  },
  {
    "num": 49, "title": "Check If a Character Is Alphabetic", "difficulty": "Easy", "category": "Character Input",
    "tags": ["char Input", "isalpha"],
    "desc": "Read a character and print whether it is alphabetic.\n\n### Input\nA single character.\n\n### Output\nPrint 'Alphabetic' or 'Not alphabetic'.",
    "input": "$", "output": "Not alphabetic"
  },
  {
    "num": 50, "title": "Read Multiple Characters in a Loop", "difficulty": "Medium", "category": "Character Input",
    "tags": ["char Input", "Loops"],
    "desc": "Read a short word one character at a time using a loop and print each character on its own line.\n\n### Input\nA word with no spaces.\n\n### Output\nPrint each character on its own line.",
    "input": "abc", "output": "a\nb\nc"
  },
  {
    "num": 51, "title": "Print the Next Character in the Alphabet", "difficulty": "Easy", "category": "Character Input",
    "tags": ["char Input", "ASCII Arithmetic"],
    "desc": "Read a lowercase letter and print the letter that comes after it.\n\n### Input\nA single lowercase letter (not z).\n\n### Output\nPrint the next letter.",
    "input": "y", "output": "z"
  },
  {
    "num": 52, "title": "Count Occurrences of a Character in a Line", "difficulty": "Medium", "category": "Character Input",
    "tags": ["getline", "char Input", "Counting"],
    "desc": "Read a line of text, then read a character, and count how many times that character appears in the line.\n\n### Input\nA line of text, then a single character.\n\n### Output\nPrint the count.",
    "input": "banana\na", "output": "3"
  },

  # 07 Loop-Based Input (53-62)
  {
    "num": 53, "title": "Read N Integers and Print Their Sum", "difficulty": "Easy", "category": "Loop-Based Input",
    "tags": ["Loop Input", "Accumulation"],
    "desc": "Read an integer N, then read N integers, and print their total sum.\n\n### Input\nAn integer N, followed by N integers.\n\n### Output\nPrint the sum of the N integers.",
    "input": "3\n1 2 3", "output": "6"
  },
  {
    "num": 54, "title": "Read N Integers and Print the Largest", "difficulty": "Easy", "category": "Loop-Based Input",
    "tags": ["Loop Input", "Comparison"],
    "desc": "Read an integer N, then read N integers, and print the largest one.\n\n### Input\nAn integer N, followed by N integers.\n\n### Output\nPrint the maximum value.",
    "input": "4\n5 9 2 7", "output": "9"
  },
  {
    "num": 55, "title": "Read N Integers and Print the Smallest", "difficulty": "Easy", "category": "Loop-Based Input",
    "tags": ["Loop Input", "Comparison"],
    "desc": "Read an integer N, then read N integers, and print the smallest one.\n\n### Input\nAn integer N, followed by N integers.\n\n### Output\nPrint the minimum value.",
    "input": "4\n5 9 2 7", "output": "2"
  },
  {
    "num": 56, "title": "Read N Integers and Print Their Average", "difficulty": "Easy", "category": "Loop-Based Input",
    "tags": ["Loop Input", "Average"],
    "desc": "Read an integer N, then read N integers, and print their average as an integer.\n\n### Input\nAn integer N, followed by N integers.\n\n### Output\nPrint the average.",
    "input": "4\n2 4 6 8", "output": "5"
  },
  {
    "num": 57, "title": "Read N Floats and Print Their Sum", "difficulty": "Easy", "category": "Loop-Based Input",
    "tags": ["Loop Input", "double"],
    "desc": "Read an integer N, then read N floats, and print their sum with 2 decimal places.\n\n### Input\nAn integer N, followed by N decimal numbers.\n\n### Output\nPrint the sum with 2 decimal places.",
    "input": "3\n1.5 2.5 3.0", "output": "7.00"
  },
  {
    "num": 58, "title": "Read N Names Using getline in a Loop", "difficulty": "Medium", "category": "Loop-Based Input",
    "tags": ["Loop Input", "getline"],
    "desc": "Read an integer N, then read N names (one per line) using getline, and print each name.\n\n### Input\nAn integer N, followed by N lines of text.\n\n### Output\nPrint each name on its own line.",
    "input": "2\nAarav\nRiya", "output": "Aarav\nRiya"
  },
  {
    "num": 59, "title": "Count Even Numbers Among N Inputs", "difficulty": "Easy", "category": "Loop-Based Input",
    "tags": ["Loop Input", "Counting"],
    "desc": "Read an integer N, then read N integers, and count how many of them are even.\n\n### Input\nAn integer N, followed by N integers.\n\n### Output\nPrint the count of even numbers.",
    "input": "5\n1 2 3 4 5", "output": "2"
  },
  {
    "num": 60, "title": "Read N Integers and Print Them Reversed", "difficulty": "Medium", "category": "Loop-Based Input",
    "tags": ["Loop Input", "Arrays"],
    "desc": "Read an integer N, then read N integers, and print them in reverse order on one line.\n\n### Input\nAn integer N, followed by N integers.\n\n### Output\nPrint the values in reverse order, space-separated.",
    "input": "4\n1 2 3 4", "output": "4 3 2 1"
  },
  {
    "num": 61, "title": "Read N Integers and Print Only the Positive Ones", "difficulty": "Medium", "category": "Loop-Based Input",
    "tags": ["Loop Input", "Filtering"],
    "desc": "Read an integer N, then read N integers, and print only the positive ones on one line.\n\n### Input\nAn integer N, followed by N integers.\n\n### Output\nPrint the positive values, space-separated.",
    "input": "5\n-1 2 -3 4 5", "output": "2 4 5"
  },
  {
    "num": 62, "title": "Read N Pairs and Print Each Sum", "difficulty": "Medium", "category": "Loop-Based Input",
    "tags": ["Loop Input", "Multiple Values"],
    "desc": "Read an integer N, then read N pairs of integers, printing the sum of each pair on its own line.\n\n### Input\nAn integer N, followed by N pairs of integers.\n\n### Output\nPrint each pair's sum on its own line.",
    "input": "2\n1 2\n3 4", "output": "3\n7"
  },

  # 08 Mixed Input Formats (63-70)
  {
    "num": 63, "title": "Read an Integer Then a Full Line", "difficulty": "Medium", "category": "Mixed Input Formats",
    "tags": ["cin.ignore()", "Mixed Input"],
    "desc": "Read an integer, then correctly read the full line of text that follows it (handling the leftover newline).\n\n### Input\nAn integer, then a line of text.\n\n### Output\nPrint the integer, then the line, each on its own line.",
    "input": "5\nHello World", "output": "5\nHello World"
  },
  {
    "num": 64, "title": "Read a Character Then an Integer", "difficulty": "Easy", "category": "Mixed Input Formats",
    "tags": ["cin", "Whitespace Skipping"],
    "desc": "Read a character, then an integer, from input separated by a space.\n\n### Input\nA character and an integer, space-separated.\n\n### Output\nPrint the character, then the integer, each on its own line.",
    "input": "A 5", "output": "A\n5"
  },
  {
    "num": 65, "title": "Read Numbers With Extra Spaces Between Them", "difficulty": "Easy", "category": "Mixed Input Formats",
    "tags": ["cin", "Whitespace Skipping"],
    "desc": "Read three integers even though they are separated by extra spaces, and print their sum.\n\n### Input\nThree integers separated by varying amounts of whitespace.\n\n### Output\nPrint their sum.",
    "input": "3   7   2", "output": "12"
  },
  {
    "num": 66, "title": "Read a Line Containing a Tab Character", "difficulty": "Medium", "category": "Mixed Input Formats",
    "tags": ["getline", "Whitespace Preservation"],
    "desc": "Read a line that contains a tab character using getline and print it unchanged.\n\n### Input\nA line of text containing a tab.\n\n### Output\nPrint the line exactly as entered.",
    "input": "Hello\tWorld", "output": "Hello\tWorld"
  },
  {
    "num": 67, "title": "Skip Leading Whitespace Before a Number", "difficulty": "Easy", "category": "Mixed Input Formats",
    "tags": ["cin", "Whitespace Skipping"],
    "desc": "Read an integer even though it is preceded by leading spaces, and print it.\n\n### Input\nAn integer with leading spaces.\n\n### Output\nPrint the integer.",
    "input": "   42", "output": "42"
  },
  {
    "num": 68, "title": "Read Two Lines Sequentially", "difficulty": "Easy", "category": "Mixed Input Formats",
    "tags": ["getline", "Sequential Input"],
    "desc": "Read two separate lines of text using getline and print both.\n\n### Input\nTwo lines of text.\n\n### Output\nPrint the first line, then the second, each on its own line.",
    "input": "Line One\nLine Two", "output": "Line One\nLine Two"
  },
  {
    "num": 69, "title": "Read an Integer Immediately Followed by a Character", "difficulty": "Medium", "category": "Mixed Input Formats",
    "tags": ["cin", "Token Parsing"],
    "desc": "Read an integer and a character even though they appear with no space between them.\n\n### Input\nA digit sequence immediately followed by a letter.\n\n### Output\nPrint the integer, then the character, each on its own line.",
    "input": "5X", "output": "5\nX"
  },
  {
    "num": 70, "title": "Combine cin and getline Safely", "difficulty": "Medium", "category": "Mixed Input Formats",
    "tags": ["cin.ignore()", "Mixed Input"],
    "desc": "Read an integer using cin, then safely read the following line of text using getline.\n\n### Input\nAn integer, then a line of text.\n\n### Output\nPrint the integer, then the line, each on its own line.",
    "input": "3\nHello", "output": "3\nHello"
  },

  # 09 getline with Delimiters (71-78)
  {
    "num": 71, "title": "Split a Line by Commas Using getline", "difficulty": "Medium", "category": "getline with Delimiters",
    "tags": ["getline", "Delimiter"],
    "desc": "Read a comma-separated line and print each item on its own line using getline with ',' as the delimiter.\n\n### Input\nA comma-separated line.\n\n### Output\nPrint each item on its own line.",
    "input": "apple,banana,cherry", "output": "apple\nbanana\ncherry"
  },
  {
    "num": 72, "title": "Count Items in a Comma-Separated Line", "difficulty": "Medium", "category": "getline with Delimiters",
    "tags": ["getline", "Delimiter", "Counting"],
    "desc": "Read a comma-separated line and print how many items it contains.\n\n### Input\nA comma-separated line.\n\n### Output\nPrint the item count.",
    "input": "a,b,c,d", "output": "4"
  },
  {
    "num": 73, "title": "Split a Line by a Custom Delimiter", "difficulty": "Medium", "category": "getline with Delimiters",
    "tags": ["getline", "Delimiter"],
    "desc": "Read a line separated by semicolons and print each item on its own line.\n\n### Input\nA semicolon-separated line.\n\n### Output\nPrint each item on its own line.",
    "input": "one;two;three", "output": "one\ntwo\nthree"
  },
  {
    "num": 74, "title": "Read a Key-Value Pair Separated by a Colon", "difficulty": "Medium", "category": "getline with Delimiters",
    "tags": ["getline", "Delimiter"],
    "desc": "Read a line in the form key:value and print the key and value separately.\n\n### Input\nA line in the form key:value.\n\n### Output\nKey: Name, Value: Aarav",
    "input": "Name:Aarav", "output": "Key: Name, Value: Aarav"
  },
  {
    "num": 75, "title": "Extract the First and Last Word of a Line", "difficulty": "Medium", "category": "getline with Delimiters",
    "tags": ["getline", "String Parsing"],
    "desc": "Read a line using getline and print its first and last words.\n\n### Input\nA line of text with multiple words.\n\n### Output\nFirst: The, Last: fox",
    "input": "The quick brown fox", "output": "First: The, Last: fox"
  },
  {
    "num": 76, "title": "Read a CSV Line and Print One Field", "difficulty": "Medium", "category": "getline with Delimiters",
    "tags": ["getline", "Delimiter", "CSV"],
    "desc": "Read a comma-separated line representing id,name,score and print just the name.\n\n### Input\nA line in the form id,name,score.\n\n### Output\nPrint the name field.",
    "input": "101,Riya,90", "output": "Riya"
  },
  {
    "num": 77, "title": "Merge a Field From Multiple Delimited Lines", "difficulty": "Hard", "category": "getline with Delimiters",
    "tags": ["getline", "Delimiter", "Loop Input"],
    "desc": "Read two comma-separated lines, each in the form id,name, and print the two names separated by a space.\n\n### Input\nTwo lines, each in the form id,name.\n\n### Output\nPrint both names separated by a space.",
    "input": "1,Aarav\n2,Riya", "output": "Aarav Riya"
  },
  {
    "num": 78, "title": "Parse a Date String", "difficulty": "Medium", "category": "getline with Delimiters",
    "tags": ["getline", "Delimiter", "Parsing"],
    "desc": "Read a date string in the form DD-MM-YYYY and print each part with a label.\n\n### Input\nA date string in the form DD-MM-YYYY.\n\n### Output\nDay: 15, Month: 08, Year: 2026",
    "input": "15-08-2026", "output": "Day: 15, Month: 08, Year: 2026"
  },

  # 10 Input Buffer Issues - cin.ignore() (79-86)
  {
    "num": 79, "title": "Read an Integer Then a Line Correctly", "difficulty": "Medium", "category": "cin.ignore() Buffer Issues",
    "tags": ["cin.ignore()", "Buffer Handling"],
    "desc": "Read an integer, use cin.ignore() to discard the leftover newline, then read the following line correctly.\n\n### Input\nAn integer, then a line of text.\n\n### Output\nPrint the integer, then the line, each on its own line.",
    "input": "5\nHello", "output": "5\nHello"
  },
  {
    "num": 80, "title": "Use cin.ignore() to Skip to the Next Line", "difficulty": "Easy", "category": "cin.ignore() Buffer Issues",
    "tags": ["cin.ignore()", "Buffer Handling"],
    "desc": "Read an integer, skip past the rest of that line using cin.ignore(), then read the next full line.\n\n### Input\nAn integer, then a line of text.\n\n### Output\nPrint the integer, then the line, each on its own line.",
    "input": "10\nWorld", "output": "10\nWorld"
  },
  {
    "num": 81, "title": "Clear the Entire Input Buffer", "difficulty": "Medium", "category": "cin.ignore() Buffer Issues",
    "tags": ["cin.ignore()", "numeric_limits"],
    "desc": "Read an integer and use cin.ignore() with numeric_limits to discard any remaining characters on that line before reading the next line.\n\n### Input\nAn integer, then a line of text.\n\n### Output\nPrint the integer, then the line, each on its own line.",
    "input": "7\nTest Line", "output": "7\nTest Line"
  },
  {
    "num": 82, "title": "Read Multiple Lines After a Count in a Loop", "difficulty": "Medium", "category": "cin.ignore() Buffer Issues",
    "tags": ["cin.ignore()", "Loop Input"],
    "desc": "Read an integer N, then correctly read N following lines of text.\n\n### Input\nAn integer N, followed by N lines.\n\n### Output\nPrint each line on its own line.",
    "input": "2\nLine1\nLine2", "output": "Line1\nLine2"
  },
  {
    "num": 83, "title": "Read a Mixed Age and Name Record", "difficulty": "Medium", "category": "cin.ignore() Buffer Issues",
    "tags": ["cin.ignore()", "Mixed Input"],
    "desc": "Read an integer age, then a full name on the next line, and print both with labels.\n\n### Input\nAn integer, then a name on the following line.\n\n### Output\nAge: 21, Name: John Doe",
    "input": "21\nJohn Doe", "output": "Age: 21, Name: John Doe"
  },
  {
    "num": 84, "title": "Fix a Skipped Input Caused by a Leftover Newline", "difficulty": "Medium", "category": "cin.ignore() Buffer Issues",
    "tags": ["cin.ignore()", "Buffer Handling"],
    "desc": "Read an integer, correctly clear the input buffer, then read a following word without it being skipped.\n\n### Input\nAn integer, then a word on the next line.\n\n### Output\nPrint the integer, then the word, each on its own line.",
    "input": "3\nApple", "output": "3\nApple"
  },
  {
    "num": 85, "title": "Read a Character, Then a Line", "difficulty": "Medium", "category": "cin.ignore() Buffer Issues",
    "tags": ["cin.ignore()", "Mixed Input"],
    "desc": "Read a single confirmation character, then correctly read the line that follows.\n\n### Input\nA character, then a line of text.\n\n### Output\nPrint the character, then the line, each on its own line.",
    "input": "Y\nConfirmed", "output": "Y\nConfirmed"
  },
  {
    "num": 86, "title": "Read Multiple int+string Records", "difficulty": "Hard", "category": "cin.ignore() Buffer Issues",
    "tags": ["cin.ignore()", "Loop Input", "Records"],
    "desc": "Read two records, each consisting of an integer and a name on the same line, and print them combined.\n\n### Input\nTwo lines, each in the form: integer name.\n\n### Output\nPrint each record as 'id-name' on its own line.",
    "input": "1 Aarav\n2 Riya", "output": "1-Aarav\n2-Riya"
  },

  # 11 Real-World Input Scenarios (87-96)
  {
    "num": 87, "title": "Simple Login Check", "difficulty": "Medium", "category": "Real-World Input Scenarios",
    "tags": ["Real-World", "String Comparison"],
    "desc": "Read a username and a password and print whether access is granted (username must be 'admin' and password '1234').\n\n### Input\nA username and a password.\n\n### Output\nAccess Granted",
    "input": "admin 1234", "output": "Access Granted"
  },
  {
    "num": 88, "title": "Simple Calculator From Input", "difficulty": "Medium", "category": "Real-World Input Scenarios",
    "tags": ["Real-World", "Mixed Input"],
    "desc": "Read two numbers and an operator (+, -, *, or /) and print the result of applying it.\n\n### Input\nTwo integers and an operator character.\n\n### Output\nPrint the computed result.",
    "input": "6 3 +", "output": "9"
  },
  {
    "num": 89, "title": "Formatted Receipt Line", "difficulty": "Easy", "category": "Real-World Input Scenarios",
    "tags": ["Real-World", "String + double"],
    "desc": "Read a product name and price and print a formatted receipt line.\n\n### Input\nA product name and a decimal price.\n\n### Output\nPen - $10.50",
    "input": "Pen 10.50", "output": "Pen - $10.50"
  },
  {
    "num": 90, "title": "Student Average From Input", "difficulty": "Easy", "category": "Real-World Input Scenarios",
    "tags": ["Real-World", "Loop Input"],
    "desc": "Read a student's name and 3 marks, and print the student's average.\n\n### Input\nA name and three integer marks.\n\n### Output\nRiya's Average: 80",
    "input": "Riya 80 90 70", "output": "Riya's Average: 80"
  },
  {
    "num": 91, "title": "Sum Values Until a Sentinel Is Entered", "difficulty": "Medium", "category": "Real-World Input Scenarios",
    "tags": ["Real-World", "Sentinel-Controlled Loop"],
    "desc": "Read integers one at a time and add them to a running total until -1 is entered, then print the total.\n\n### Input\nA sequence of integers ending in -1.\n\n### Output\nTotal: 60",
    "input": "10 20 30 -1", "output": "Total: 60"
  },
  {
    "num": 92, "title": "Simple To-Do Item", "difficulty": "Easy", "category": "Real-World Input Scenarios",
    "tags": ["Real-World", "getline"],
    "desc": "Read a task description and a priority level and print them formatted together.\n\n### Input\nA task description and a priority word.\n\n### Output\nTask: Buy groceries [High]",
    "input": "Buy groceries High", "output": "Task: Buy groceries [High]"
  },
  {
    "num": 93, "title": "Calculate Age From Birth Year", "difficulty": "Easy", "category": "Real-World Input Scenarios",
    "tags": ["Real-World", "Arithmetic"],
    "desc": "Read a birth year and the current year, and print the calculated age.\n\n### Input\nA birth year and the current year.\n\n### Output\nAge: 21",
    "input": "2005 2026", "output": "Age: 21"
  },
  {
    "num": 94, "title": "Feedback Rating Message", "difficulty": "Medium", "category": "Real-World Input Scenarios",
    "tags": ["Real-World", "Conditionals"],
    "desc": "Read a rating from 1 to 5 and print a matching feedback message (5 = Excellent!).\n\n### Input\nA single integer rating from 1 to 5.\n\n### Output\nExcellent!",
    "input": "5", "output": "Excellent!"
  },
  {
    "num": 95, "title": "Read Two Lines and Print Both", "difficulty": "Easy", "category": "Real-World Input Scenarios",
    "tags": ["Real-World", "getline"],
    "desc": "Read two lines of feedback text and print both.\n\n### Input\nTwo lines of text.\n\n### Output\nHello\nWorld",
    "input": "Hello\nWorld", "output": "Hello\nWorld"
  },
  {
    "num": 96, "title": "Build a Contact Entry", "difficulty": "Medium", "category": "Real-World Input Scenarios",
    "tags": ["Real-World", "Mixed Input"],
    "desc": "Read a name, phone number, and email, and print them as a formatted contact entry.\n\n### Input\nA name, a phone number, and an email.\n\n### Output\nName: Aarav, Phone: 9876543210, Email: aarav@mail.com",
    "input": "Aarav 9876543210 aarav@mail.com", "output": "Name: Aarav, Phone: 9876543210, Email: aarav@mail.com"
  },

  # 12 Final Input Challenges (97-100)
  {
    "num": 97, "title": "Parse a Full CSV Record", "difficulty": "Hard", "category": "Final Input Challenges",
    "tags": ["getline", "Delimiter", "Final Challenge"],
    "desc": "Read a comma-separated record in the form id,name,score and print each field with a label.\n\n### Input\nA line in the form id,name,score.\n\n### Output\nID: 7, Name: Neha, Score: 88",
    "input": "7,Neha,88", "output": "ID: 7, Name: Neha, Score: 88"
  },
  {
    "num": 98, "title": "Find the Topper From N Student Records", "difficulty": "Hard", "category": "Final Input Challenges",
    "tags": ["Loop Input", "Records", "Comparison"],
    "desc": "Read N student records, each with a name and a score, and print the name of the student with the highest score.\n\n### Input\nAn integer N, followed by N lines each with a name and a score.\n\n### Output\nTopper: Riya",
    "input": "2\nAarav 80\nRiya 90", "output": "Topper: Riya"
  },
  {
    "num": 99, "title": "Mini Input-Validated Login", "difficulty": "Medium", "category": "Final Input Challenges",
    "tags": ["Validation", "String Comparison"],
    "desc": "Read a username and password and print whether the login succeeded, using fixed valid credentials.\n\n### Input\nA username and a password.\n\n### Output\nLogin Successful",
    "input": "admin admin123", "output": "Login Successful"
  },
  {
    "num": 100, "title": "Final Challenge - Complete Order Form", "difficulty": "Hard", "category": "Final Input Challenges",
    "tags": ["Mixed Types", "Final Challenge"],
    "desc": "Read a customer name, an item name, a quantity, and a unit price, then print an order summary and the total bill.\n\n### Input\nA name, an item name, a quantity, and a unit price.\n\n### Output\nOrder: Aarav ordered 3 x Pen\nTotal: 30",
    "input": "Aarav Pen 3 10", "output": "Order: Aarav ordered 3 x Pen\nTotal: 30"
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
        "starter_templates": {
            "cpp": f"#include <iostream>\nusing namespace std;\n\n// Pattern #{num_str}: {p['title']}\nint main() {{\n    int n = {first_input};\n    // Write your pattern code here\n    return 0;\n}}\n",
            "python": f"# Pattern #{num_str}: {p['title']}\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve({first_input})\n",
            "javascript": f"// Pattern #{num_str}: {p['title']}\nfunction solve(n) {{\n    // Write your pattern code here\n}}\n\nsolve({first_input});\n",
            "java": f"import java.util.*;\n\npublic class Solution {{\n    public static void main(String[] args) {{\n        int n = {first_input};\n        // Write your pattern code here\n    }}\n}}\n"
        },
        "created_at": f"2026-01-01T{idx//3600:02d}:{(idx%3600)//60:02d}:{idx%60:02d}Z"
    })

# Book 2: Loop Mastery (1..100)
for idx, p in enumerate(loop_problems, 1):
    num_str = f"{idx:03d}"
    uuid_idx = idx + 100
    uuid_str = f"00000000-0000-4000-8000-{uuid_idx:012d}"
    slug = f"loop-{num_str}-{p['title'].lower().replace(' ', '-').replace('/', '-').replace('&', 'and')}"
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
        "starter_templates": {
            "cpp": f"#include <iostream>\nusing namespace std;\n\n// Loop Problem #{num_str}: {p['title']}\nint main() {{\n    // Write your loop code here\n    return 0;\n}}\n",
            "python": f"# Loop Problem #{num_str}: {p['title']}\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n",
            "javascript": f"// Loop Problem #{num_str}: {p['title']}\nfunction solve() {{\n    // Write your loop code here\n}}\n\nsolve();\n",
            "java": f"import java.util.*;\n\npublic class Solution {{\n    public static void main(String[] args) {{\n        // Write your loop code here\n    }}\n}}\n"
        },
        "created_at": f"2026-01-02T{idx//3600:02d}:{(idx%3600)//60:02d}:{idx%60:02d}Z"
    })

# Book 3: Variables Mastery (1..100)
for idx, p in enumerate(variables_problems, 1):
    num_str = f"{idx:03d}"
    uuid_idx = idx + 200
    uuid_str = f"00000000-0000-4000-8000-{uuid_idx:012d}"
    slug = f"var-{num_str}-{p['title'].lower().replace(' ', '-').replace('/', '-').replace('&', 'and')}"
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
        "starter_templates": {
            "cpp": f"#include <iostream>\nusing namespace std;\n\n// Variable Problem #{num_str}: {p['title']}\nint main() {{\n    // Write your code here\n    return 0;\n}}\n",
            "python": f"# Variable Problem #{num_str}: {p['title']}\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n",
            "javascript": f"// Variable Problem #{num_str}: {p['title']}\nfunction solve() {{\n    // Write your code here\n}}\n\nsolve();\n",
            "java": f"import java.util.*;\n\npublic class Solution {{\n    public static void main(String[] args) {{\n        // Write your code here\n    }}\n}}\n"
        },
        "created_at": f"2026-01-03T{idx//3600:02d}:{(idx%3600)//60:02d}:{idx%60:02d}Z"
    })

# Book 4: Data Types Mastery (1..100)
for idx, p in enumerate(datatypes_problems, 1):
    num_str = f"{idx:03d}"
    uuid_idx = idx + 300
    uuid_str = f"00000000-0000-4000-8000-{uuid_idx:012d}"
    slug = f"dtype-{num_str}-{p['title'].lower().replace(' ', '-').replace('/', '-').replace('&', 'and')}"
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
        "starter_templates": {
            "cpp": f"#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #{num_str}: {p['title']}\nint main() {{\n    // Write your code here\n    return 0;\n}}\n",
            "python": f"# Data Types Problem #{num_str}: {p['title']}\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n",
            "javascript": f"// Data Types Problem #{num_str}: {p['title']}\nfunction solve() {{\n    // Write your code here\n}}\n\nsolve();\n",
            "java": f"import java.util.*;\n\npublic class Solution {{\n    public static void main(String[] args) {{\n        // Write your code here\n    }}\n}}\n"
        },
        "created_at": f"2026-01-04T{idx//3600:02d}:{(idx%3600)//60:02d}:{idx%60:02d}Z"
    })

# Book 5: User Input Mastery (1..100)
for idx, p in enumerate(userinput_problems, 1):
    num_str = f"{idx:03d}"
    uuid_idx = idx + 400
    uuid_str = f"00000000-0000-4000-8000-{uuid_idx:012d}"
    slug = f"input-{num_str}-{p['title'].lower().replace(' ', '-').replace('/', '-').replace('&', 'and')}"
    diff = "Medium" if p["difficulty"] == "Moderate" else p["difficulty"]
    all_problems.append({
        "id": uuid_str,
        "book": "userinput",
        "order_index": idx,
        "title": f"#{num_str} {p['title']}",
        "slug": slug,
        "description": p["desc"],
        "difficulty": diff,
        "category": p["category"],
        "tags": p["tags"] + ["User Input Mastery"],
        "source": "built_in",
        "status": "not_started",
        "sample_test_cases": [{"input": p["input"], "output": p["output"], "explanation": f"Sample for {p['title']}"}],
        "starter_templates": {
            "cpp": f"#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #{num_str}: {p['title']}\nint main() {{\n    // Write your input handling code here\n    return 0;\n}}\n",
            "python": f"# User Input Problem #{num_str}: {p['title']}\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n",
            "javascript": f"// User Input Problem #{num_str}: {p['title']}\nfunction solve() {{\n    // Write your code here\n}}\n\nsolve();\n",
            "java": f"import java.util.*;\n\npublic class Solution {{\n    public static void main(String[] args) {{\n        // Write your code here\n    }}\n}}\n"
        },
        "created_at": f"2026-01-05T{idx//3600:02d}:{(idx%3600)//60:02d}:{idx%60:02d}Z"
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
    f.write("-- 500 COMPLETE PRACTICE PROBLEMS ACROSS 5 OFFICIAL WORKBOOKS\n")
    f.write("-- ==============================================================================\n\n")
    f.write("insert into public.problems (id, book, order_index, title, slug, description, difficulty, category, tags, source, sample_test_cases, starter_templates)\nvalues\n")
    f.write(",\n".join(sql_inserts))
    f.write("\non conflict (id) do update set\n")
    f.write("  book = excluded.book,\n  order_index = excluded.order_index,\n  title = excluded.title,\n  description = excluded.description,\n  difficulty = excluded.difficulty,\n  category = excluded.category,\n  tags = excluded.tags,\n  sample_test_cases = excluded.sample_test_cases,\n  starter_templates = excluded.starter_templates;\n")

print(f"Generated {len(all_problems)} total problems across all 5 official workbooks!")
