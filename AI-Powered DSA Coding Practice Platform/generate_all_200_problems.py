import json

# Load Book 1 (Pattern Printing Mastery)
from generate_100_problems import raw_problems_data as pattern_problems

# Define Book 2 (Loop Mastery: 100 Problems)
loop_problems = [
  # 01 Basic Loop Fundamentals (1-20)
  {
    "num": 1,
    "title": "Print Numbers from 1 to N",
    "difficulty": "Easy",
    "category": "Basic Loop Fundamentals",
    "tags": ["Basic Iteration", "Loops"],
    "desc": "Write a program to print all integers from 1 to N separated by a space.\n\n### Input\nA single integer N.\n\n### Output\nPrint all integers from 1 to N separated by a space.",
    "input": "5",
    "output": "1 2 3 4 5"
  },
  {
    "num": 2,
    "title": "Print Numbers from N to 1",
    "difficulty": "Easy",
    "category": "Basic Loop Fundamentals",
    "tags": ["Reverse Iteration", "Loops"],
    "desc": "Write a program to print all integers from N down to 1.\n\n### Input\nA single integer N.\n\n### Output\nPrint all integers from N down to 1 separated by a space.",
    "input": "5",
    "output": "5 4 3 2 1"
  },
  {
    "num": 3,
    "title": "Print Even Numbers up to N",
    "difficulty": "Easy",
    "category": "Basic Loop Fundamentals",
    "tags": ["for Loop", "Conditionals"],
    "desc": "Write a program to print all even numbers from 1 up to N.\n\n### Input\nA single integer N.\n\n### Output\nPrint all even numbers up to N separated by a space.",
    "input": "10",
    "output": "2 4 6 8 10"
  },
  {
    "num": 4,
    "title": "Print Odd Numbers up to N",
    "difficulty": "Easy",
    "category": "Basic Loop Fundamentals",
    "tags": ["for Loop", "Conditionals"],
    "desc": "Write a program to print all odd numbers from 1 up to N.\n\n### Input\nA single integer N.\n\n### Output\nPrint all odd numbers up to N separated by a space.",
    "input": "10",
    "output": "1 3 5 7 9"
  },
  {
    "num": 5,
    "title": "Sum of First N Natural Numbers",
    "difficulty": "Easy",
    "category": "Basic Loop Fundamentals",
    "tags": ["Accumulator", "Math"],
    "desc": "Write a program to calculate the sum of the first N natural numbers using a loop.\n\n### Input\nA single integer N.\n\n### Output\nPrint the total sum.",
    "input": "5",
    "output": "15"
  },
  {
    "num": 6,
    "title": "Print Numbers Divisible by 3",
    "difficulty": "Easy",
    "category": "Basic Loop Fundamentals",
    "tags": ["Conditional Looping", "Divisibility"],
    "desc": "Write a program to print all numbers from 1 to N that are divisible by 3.\n\n### Input\nA single integer N.\n\n### Output\nPrint numbers separated by a space.",
    "input": "15",
    "output": "3 6 9 12 15"
  },
  {
    "num": 7,
    "title": "Print Multiplication Table of N",
    "difficulty": "Easy",
    "category": "Basic Loop Fundamentals",
    "tags": ["for Loop", "Math"],
    "desc": "Write a program to print the multiplication table of a given number N (1 to 10).\n\n### Input\nA single integer N.\n\n### Output\nPrint products separated by a space.",
    "input": "4",
    "output": "4 8 12 16 20 24 28 32 36 40"
  },
  {
    "num": 8,
    "title": "Sum of N Numbers Entered by User",
    "difficulty": "Easy",
    "category": "Basic Loop Fundamentals",
    "tags": ["Accumulator", "Input Stream"],
    "desc": "Write a program to read N numbers one by one and calculate their sum using a loop.\n\n### Input\nFirst line integer N, followed by N integers.\n\n### Output\nPrint the total sum.",
    "input": "3\n2 4 6",
    "output": "12"
  },
  {
    "num": 9,
    "title": "Count Numbers Divisible by 5 in a Range",
    "difficulty": "Easy",
    "category": "Basic Loop Fundamentals",
    "tags": ["Counter", "Divisibility"],
    "desc": "Write a program to count how many numbers between 1 and N are divisible by 5.\n\n### Input\nA single integer N.\n\n### Output\nPrint the count.",
    "input": "23",
    "output": "4"
  },
  {
    "num": 10,
    "title": "Factorial of a Number",
    "difficulty": "Easy",
    "category": "Basic Loop Fundamentals",
    "tags": ["while Loop", "Math"],
    "desc": "Write a program to calculate the factorial of a number N using a while loop.\n\n### Input\nA single integer N.\n\n### Output\nPrint N! (factorial).",
    "input": "5",
    "output": "120"
  },
  {
    "num": 11,
    "title": "Print Squares of Numbers from 1 to N",
    "difficulty": "Easy",
    "category": "Basic Loop Fundamentals",
    "tags": ["for Loop", "Math"],
    "desc": "Write a program to print the square of every number from 1 to N.\n\n### Input\nA single integer N.\n\n### Output\nPrint squares separated by a space.",
    "input": "5",
    "output": "1 4 9 16 25"
  },
  {
    "num": 12,
    "title": "Product of First N Natural Numbers",
    "difficulty": "Medium",
    "category": "Basic Loop Fundamentals",
    "tags": ["Accumulator", "Product"],
    "desc": "Write a program to calculate the product of the first N natural numbers using a loop.\n\n### Input\nA single integer N.\n\n### Output\nPrint the product.",
    "input": "4",
    "output": "24"
  },
  {
    "num": 13,
    "title": "Print Numbers Using a while Loop",
    "difficulty": "Easy",
    "category": "Basic Loop Fundamentals",
    "tags": ["while Loop"],
    "desc": "Write a program to print numbers from 1 to N using only a while loop.\n\n### Input\nA single integer N.\n\n### Output\nPrint numbers separated by a space.",
    "input": "6",
    "output": "1 2 3 4 5 6"
  },
  {
    "num": 14,
    "title": "Print Numbers Using a do-while Loop",
    "difficulty": "Medium",
    "category": "Basic Loop Fundamentals",
    "tags": ["do-while Loop"],
    "desc": "Write a program to print numbers from 1 to N using a do-while loop, ensuring the body executes at least once.\n\n### Input\nA single integer N.\n\n### Output\nPrint numbers separated by a space.",
    "input": "4",
    "output": "1 2 3 4"
  },
  {
    "num": 15,
    "title": "Sum of Even Numbers up to N",
    "difficulty": "Medium",
    "category": "Basic Loop Fundamentals",
    "tags": ["Conditional Looping", "Sum"],
    "desc": "Write a program to calculate the sum of all even numbers from 1 to N.\n\n### Input\nA single integer N.\n\n### Output\nPrint the sum.",
    "input": "10",
    "output": "30"
  },
  {
    "num": 16,
    "title": "Sum of Odd Numbers up to N",
    "difficulty": "Medium",
    "category": "Basic Loop Fundamentals",
    "tags": ["Conditional Looping", "Sum"],
    "desc": "Write a program to calculate the sum of all odd numbers from 1 to N.\n\n### Input\nA single integer N.\n\n### Output\nPrint the sum.",
    "input": "10",
    "output": "25"
  },
  {
    "num": 17,
    "title": "Average of N Numbers",
    "difficulty": "Medium",
    "category": "Basic Loop Fundamentals",
    "tags": ["Accumulator", "Float/Double"],
    "desc": "Write a program to calculate the average of N numbers entered by the user using a loop.\n\n### Input\nFirst line integer N, followed by N integers.\n\n### Output\nPrint the average formatted with one decimal place.",
    "input": "4\n2 4 6 8",
    "output": "5.0"
  },
  {
    "num": 18,
    "title": "Power of a Number Using a Loop",
    "difficulty": "Medium",
    "category": "Basic Loop Fundamentals",
    "tags": ["for Loop", "Math"],
    "desc": "Write a program to calculate base raised to exponent using repeated multiplication in a loop, without using a built-in power function.\n\n### Input\nTwo integers: base and exponent.\n\n### Output\nPrint base^exponent.",
    "input": "2 5",
    "output": "32"
  },
  {
    "num": 19,
    "title": "Count Positive and Negative Numbers",
    "difficulty": "Medium",
    "category": "Basic Loop Fundamentals",
    "tags": ["Counter", "Conditionals"],
    "desc": "Write a program to read N numbers and count how many are positive and how many are negative.\n\n### Input\nFirst line integer N, followed by N integers.\n\n### Output\nPrint format: Positive: X, Negative: Y",
    "input": "5\n3 -2 -7 0 4",
    "output": "Positive: 2, Negative: 2"
  },
  {
    "num": 20,
    "title": "Print All Multiplication Tables from 1 to N",
    "difficulty": "Medium",
    "category": "Basic Loop Fundamentals",
    "tags": ["Nested Loops", "Tables"],
    "desc": "Write a program to print the multiplication tables of every number from 1 to N (1 to 10 each), introducing loops nested inside loops.\n\n### Input\nA single integer N.\n\n### Output\nTable of 1: 1 2 3 4 5 6 7 8 9 10\nTable of 2: 2 4 6 8 10 12 14 16 18 20",
    "input": "2",
    "output": "Table of 1: 1 2 3 4 5 6 7 8 9 10\nTable of 2: 2 4 6 8 10 12 14 16 18 20"
  },

  # 02 Digit Manipulation (21-40)
  {
    "num": 21,
    "title": "Count the Number of Digits",
    "difficulty": "Easy",
    "category": "Digit Manipulation",
    "tags": ["Digit Manipulation", "Counting"],
    "desc": "Write a program to count the total number of digits in a given number.\n\n### Input\nA single integer.\n\n### Output\nTotal digit count.",
    "input": "48213",
    "output": "5"
  },
  {
    "num": 22,
    "title": "Find the First Digit of a Number",
    "difficulty": "Easy",
    "category": "Digit Manipulation",
    "tags": ["Digit Manipulation", "Division"],
    "desc": "Write a program to find the first (leftmost) digit of a given number.\n\n### Input\nA single integer.\n\n### Output\nThe first digit.",
    "input": "48213",
    "output": "4"
  },
  {
    "num": 23,
    "title": "Find the Last Digit of a Number",
    "difficulty": "Easy",
    "category": "Digit Manipulation",
    "tags": ["Digit Manipulation", "Modulo"],
    "desc": "Write a program to find the last (rightmost) digit of a given number.\n\n### Input\nA single integer.\n\n### Output\nThe last digit.",
    "input": "48213",
    "output": "3"
  },
  {
    "num": 24,
    "title": "Sum of Digits of a Number",
    "difficulty": "Easy",
    "category": "Digit Manipulation",
    "tags": ["Digit Manipulation", "Sum"],
    "desc": "Write a program to calculate the sum of all digits of a given number.\n\n### Input\nA single integer.\n\n### Output\nSum of all digits.",
    "input": "1234",
    "output": "10"
  },
  {
    "num": 25,
    "title": "Product of Digits of a Number",
    "difficulty": "Medium",
    "category": "Digit Manipulation",
    "tags": ["Digit Manipulation", "Product"],
    "desc": "Write a program to calculate the product of all digits of a given number.\n\n### Input\nA single integer.\n\n### Output\nProduct of all digits.",
    "input": "1234",
    "output": "24"
  },
  {
    "num": 26,
    "title": "Find the Largest Digit in a Number",
    "difficulty": "Medium",
    "category": "Digit Manipulation",
    "tags": ["Digit Manipulation", "Max"],
    "desc": "Write a program to find the largest digit present in a given number.\n\n### Input\nA single integer.\n\n### Output\nThe largest digit.",
    "input": "48213",
    "output": "8"
  },
  {
    "num": 27,
    "title": "Find the Smallest Digit in a Number",
    "difficulty": "Medium",
    "category": "Digit Manipulation",
    "tags": ["Digit Manipulation", "Min"],
    "desc": "Write a program to find the smallest digit present in a given number.\n\n### Input\nA single integer.\n\n### Output\nThe smallest digit.",
    "input": "48213",
    "output": "1"
  },
  {
    "num": 28,
    "title": "Count Even Digits in a Number",
    "difficulty": "Medium",
    "category": "Digit Manipulation",
    "tags": ["Digit Manipulation", "Parity"],
    "desc": "Write a program to count how many digits in a given number are even.\n\n### Input\nA single integer.\n\n### Output\nCount of even digits.",
    "input": "48213",
    "output": "2"
  },
  {
    "num": 29,
    "title": "Count Odd Digits in a Number",
    "difficulty": "Medium",
    "category": "Digit Manipulation",
    "tags": ["Digit Manipulation", "Parity"],
    "desc": "Write a program to count how many digits in a given number are odd.\n\n### Input\nA single integer.\n\n### Output\nCount of odd digits.",
    "input": "48213",
    "output": "3"
  },
  {
    "num": 30,
    "title": "Find the Frequency of a Given Digit",
    "difficulty": "Medium",
    "category": "Digit Manipulation",
    "tags": ["Digit Manipulation", "Frequency"],
    "desc": "Write a program to count how many times a specific digit appears in a given number.\n\n### Input\nTwo integers: the number and the target digit.\n\n### Output\nFrequency count.",
    "input": "554523 5",
    "output": "3"
  },
  {
    "num": 31,
    "title": "Count the Number of Zeros in a Number",
    "difficulty": "Medium",
    "category": "Digit Manipulation",
    "tags": ["Digit Manipulation", "Zero Count"],
    "desc": "Write a program to count how many zero digits appear in a given number.\n\n### Input\nA single integer.\n\n### Output\nCount of zeros.",
    "input": "1002005",
    "output": "3"
  },
  {
    "num": 32,
    "title": "Reverse a Number",
    "difficulty": "Medium",
    "category": "Digit Manipulation",
    "tags": ["Number Reversal", "Math"],
    "desc": "Write a program to reverse the digits of a given number using a loop.\n\n### Input\nA single integer.\n\n### Output\nReversed number.",
    "input": "1234",
    "output": "4321"
  },
  {
    "num": 33,
    "title": "Check if a Number is a Palindrome",
    "difficulty": "Medium",
    "category": "Digit Manipulation",
    "tags": ["Palindrome", "Number Reversal"],
    "desc": "Write a program to check whether a given number reads the same forwards and backwards.\n\n### Input\nA single integer.\n\n### Output\nPrint 'Palindrome' or 'Not Palindrome'.",
    "input": "12321",
    "output": "Palindrome"
  },
  {
    "num": 34,
    "title": "Find the Second Largest Digit",
    "difficulty": "Medium",
    "category": "Digit Manipulation",
    "tags": ["Digit Manipulation", "Second Max"],
    "desc": "Write a program to find the second largest digit present in a given number.\n\n### Input\nA single integer.\n\n### Output\nThe second largest digit.",
    "input": "48213",
    "output": "4"
  },
  {
    "num": 35,
    "title": "Find the Second Smallest Digit",
    "difficulty": "Medium",
    "category": "Digit Manipulation",
    "tags": ["Digit Manipulation", "Second Min"],
    "desc": "Write a program to find the second smallest digit present in a given number.\n\n### Input\nA single integer.\n\n### Output\nThe second smallest digit.",
    "input": "48213",
    "output": "2"
  },
  {
    "num": 36,
    "title": "Sum of Digits at Even Positions",
    "difficulty": "Medium",
    "category": "Digit Manipulation",
    "tags": ["Digit Manipulation", "Position Sum"],
    "desc": "Write a program to calculate the sum of digits located at even positions (counting from the right, starting at position 1) in a given number.\n\n### Input\nA single integer.\n\n### Output\nPrint format: 1 + 2 = 3",
    "input": "48213",
    "output": "1 + 2 = 3"
  },
  {
    "num": 37,
    "title": "Sum of Digits at Odd Positions",
    "difficulty": "Medium",
    "category": "Digit Manipulation",
    "tags": ["Digit Manipulation", "Position Sum"],
    "desc": "Write a program to calculate the sum of digits located at odd positions (counting from the right, starting at position 1) in a given number.\n\n### Input\nA single integer.\n\n### Output\nPrint format: 3 + 8 + 4 = 15",
    "input": "48213",
    "output": "3 + 8 + 4 = 15"
  },
  {
    "num": 38,
    "title": "Remove the Last Digit of a Number",
    "difficulty": "Medium",
    "category": "Digit Manipulation",
    "tags": ["Digit Manipulation", "Integer Math"],
    "desc": "Write a program to reconstruct a number after removing its last digit, using loop-based integer operations.\n\n### Input\nA single integer.\n\n### Output\nReconstructed integer.",
    "input": "48213",
    "output": "4821"
  },
  {
    "num": 39,
    "title": "Check if Digits are in Increasing Order",
    "difficulty": "Medium",
    "category": "Digit Manipulation",
    "tags": ["Digit Manipulation", "Monotonicity"],
    "desc": "Write a program to check whether the digits of a given number appear in strictly increasing order from left to right.\n\n### Input\nA single integer.\n\n### Output\nPrint 'Yes' or 'No'.",
    "input": "13579",
    "output": "Yes"
  },
  {
    "num": 40,
    "title": "Swap the First and Last Digit of a Number",
    "difficulty": "Medium",
    "category": "Digit Manipulation",
    "tags": ["Digit Manipulation", "Transformation"],
    "desc": "Write a program to construct a new number by swapping the first and last digits of a given number.\n\n### Input\nA single integer.\n\n### Output\nThe transformed number.",
    "input": "48213",
    "output": "38214"
  },

  # 03 Number Properties (41-60)
  {
    "num": 41,
    "title": "Check if a Number is Prime",
    "difficulty": "Easy",
    "category": "Number Properties",
    "tags": ["Prime Numbers", "Number Theory"],
    "desc": "Write a program to check whether a given number is prime using a loop.\n\n### Input\nA single integer.\n\n### Output\nPrint 'Prime' or 'Not Prime'.",
    "input": "29",
    "output": "Prime"
  },
  {
    "num": 42,
    "title": "Print All Prime Numbers in a Range",
    "difficulty": "Medium",
    "category": "Number Properties",
    "tags": ["Prime Numbers", "Range"],
    "desc": "Write a program to print all prime numbers between two given limits.\n\n### Input\nTwo integers: lower and upper bound.\n\n### Output\nPrime numbers separated by space.",
    "input": "10 30",
    "output": "11 13 17 19 23 29"
  },
  {
    "num": 43,
    "title": "Count Prime Numbers in a Range",
    "difficulty": "Medium",
    "category": "Number Properties",
    "tags": ["Prime Numbers", "Counter"],
    "desc": "Write a program to count how many prime numbers exist between two given limits.\n\n### Input\nTwo integers: lower and upper bound.\n\n### Output\nTotal count of primes.",
    "input": "1 30",
    "output": "10"
  },
  {
    "num": 44,
    "title": "Sum of Prime Numbers in a Range",
    "difficulty": "Medium",
    "category": "Number Properties",
    "tags": ["Prime Numbers", "Sum"],
    "desc": "Write a program to calculate the sum of all prime numbers between two given limits.\n\n### Input\nTwo integers: lower and upper bound.\n\n### Output\nSum of primes.",
    "input": "1 20",
    "output": "77"
  },
  {
    "num": 45,
    "title": "Print All Factors of a Number",
    "difficulty": "Easy",
    "category": "Number Properties",
    "tags": ["Factors", "Divisors"],
    "desc": "Write a program to print all the factors of a given number.\n\n### Input\nA single integer.\n\n### Output\nFactors separated by space.",
    "input": "12",
    "output": "1 2 3 4 6 12"
  },
  {
    "num": 46,
    "title": "Count the Number of Factors",
    "difficulty": "Medium",
    "category": "Number Properties",
    "tags": ["Factors", "Counter"],
    "desc": "Write a program to count how many factors a given number has.\n\n### Input\nA single integer.\n\n### Output\nTotal factor count.",
    "input": "12",
    "output": "6"
  },
  {
    "num": 47,
    "title": "Sum of Factors of a Number",
    "difficulty": "Medium",
    "category": "Number Properties",
    "tags": ["Factors", "Sum"],
    "desc": "Write a program to calculate the sum of all factors of a given number.\n\n### Input\nA single integer.\n\n### Output\nSum of factors.",
    "input": "12",
    "output": "28"
  },
  {
    "num": 48,
    "title": "Find the Largest Proper Factor",
    "difficulty": "Medium",
    "category": "Number Properties",
    "tags": ["Factors", "Proper Divisor"],
    "desc": "Write a program to find the largest proper factor (a factor excluding the number itself) of a given number.\n\n### Input\nA single integer.\n\n### Output\nLargest proper factor.",
    "input": "36",
    "output": "18"
  },
  {
    "num": 49,
    "title": "Check if a Number is a Perfect Number",
    "difficulty": "Medium",
    "category": "Number Properties",
    "tags": ["Perfect Numbers", "Number Theory"],
    "desc": "Write a program to check whether a given number is a perfect number — equal to the sum of its proper divisors.\n\n### Input\nA single integer.\n\n### Output\nPrint 'Perfect' or 'Not Perfect'.",
    "input": "28",
    "output": "Perfect"
  },
  {
    "num": 50,
    "title": "Check if a Number is an Armstrong Number",
    "difficulty": "Medium",
    "category": "Number Properties",
    "tags": ["Armstrong Numbers", "Number Theory"],
    "desc": "Write a program to check whether a given number is an Armstrong number.\n\n### Input\nA single integer.\n\n### Output\nPrint 'Armstrong' or 'Not Armstrong'.",
    "input": "153",
    "output": "Armstrong"
  },
  {
    "num": 51,
    "title": "Print Armstrong Numbers in a Range",
    "difficulty": "Medium",
    "category": "Number Properties",
    "tags": ["Armstrong Numbers", "Range"],
    "desc": "Write a program to print all Armstrong numbers between two given limits.\n\n### Input\nTwo integers: lower and upper bound.\n\n### Output\nArmstrong numbers separated by space.",
    "input": "1 500",
    "output": "1 2 3 4 5 6 7 8 9 153 370 371 407"
  },
  {
    "num": 52,
    "title": "Check if a Number is a Strong Number",
    "difficulty": "Medium",
    "category": "Number Properties",
    "tags": ["Strong Numbers", "Factorials"],
    "desc": "Write a program to check whether a given number is a strong number — the sum of the factorials of its digits equals the number itself.\n\n### Input\nA single integer.\n\n### Output\nPrint 'Strong' or 'Not Strong'.",
    "input": "145",
    "output": "Strong"
  },
  {
    "num": 53,
    "title": "Check if a Number is a Harshad Number",
    "difficulty": "Medium",
    "category": "Number Properties",
    "tags": ["Harshad/Niven Numbers", "Divisibility"],
    "desc": "Write a program to check whether a given number is a Harshad (Niven) number — divisible by the sum of its digits.\n\n### Input\nA single integer.\n\n### Output\nPrint 'Harshad' or 'Not Harshad'.",
    "input": "18",
    "output": "Harshad"
  },
  {
    "num": 54,
    "title": "Check if a Number is an Automorphic Number",
    "difficulty": "Medium",
    "category": "Number Properties",
    "tags": ["Automorphic Numbers", "Squares"],
    "desc": "Write a program to check whether a given number is automorphic — its square ends with the number itself.\n\n### Input\nA single integer.\n\n### Output\nPrint 'Automorphic' or 'Not Automorphic'.",
    "input": "25",
    "output": "Automorphic"
  },
  {
    "num": 55,
    "title": "Check if a Number is a Neon Number",
    "difficulty": "Medium",
    "category": "Number Properties",
    "tags": ["Neon Numbers", "Digit Sum of Square"],
    "desc": "Write a program to check whether a given number is a Neon number — the sum of the digits of its square equals the number itself.\n\n### Input\nA single integer.\n\n### Output\nPrint 'Neon' or 'Not Neon'.",
    "input": "9",
    "output": "Neon"
  },
  {
    "num": 56,
    "title": "Check if a Number is a Spy Number",
    "difficulty": "Hard",
    "category": "Number Properties",
    "tags": ["Spy Numbers", "Sum vs Product"],
    "desc": "Write a program to check whether a given number is a Spy number — the sum of its digits equals the product of its digits.\n\n### Input\nA single integer.\n\n### Output\nPrint 'Spy' or 'Not Spy'.",
    "input": "1124",
    "output": "Spy"
  },
  {
    "num": 57,
    "title": "Check if a Number is a Happy Number",
    "difficulty": "Hard",
    "category": "Number Properties",
    "tags": ["Happy Numbers", "Cycle Detection"],
    "desc": "Write a program to check whether a given number is a Happy number — repeatedly summing the squares of its digits eventually reaches 1.\n\n### Input\nA single integer.\n\n### Output\nPrint 'Happy' or 'Not Happy'.",
    "input": "19",
    "output": "Happy"
  },
  {
    "num": 58,
    "title": "Check if a Number is a Disarium Number",
    "difficulty": "Hard",
    "category": "Number Properties",
    "tags": ["Disarium Numbers", "Positional Powers"],
    "desc": "Write a program to check whether a given number is a Disarium number — each digit raised to the power of its position sums to the number itself.\n\n### Input\nA single integer.\n\n### Output\nPrint 'Disarium' or 'Not Disarium'.",
    "input": "135",
    "output": "Disarium"
  },
  {
    "num": 59,
    "title": "Print Disarium Numbers in a Range",
    "difficulty": "Hard",
    "category": "Number Properties",
    "tags": ["Disarium Numbers", "Range"],
    "desc": "Write a program to print all Disarium numbers between two given limits.\n\n### Input\nTwo integers: lower and upper bound.\n\n### Output\nDisarium numbers separated by space.",
    "input": "1 200",
    "output": "1 2 3 4 5 6 7 8 9 89 135 175"
  },
  {
    "num": 60,
    "title": "Count Perfect Numbers in a Range",
    "difficulty": "Hard",
    "category": "Number Properties",
    "tags": ["Perfect Numbers", "Counter"],
    "desc": "Write a program to count how many perfect numbers exist between two given limits.\n\n### Input\nTwo integers: lower and upper bound.\n\n### Output\nCount of perfect numbers.",
    "input": "1 500",
    "output": "3"
  },

  # 04 GCD, LCM & Mathematical Logic (61-70)
  {
    "num": 61,
    "title": "Find the GCD of Two Numbers",
    "difficulty": "Easy",
    "category": "GCD, LCM & Math Logic",
    "tags": ["GCD", "Divisors"],
    "desc": "Write a program to find the greatest common divisor (GCD) of two numbers using a loop.\n\n### Input\nTwo integers.\n\n### Output\nThe GCD value.",
    "input": "24 36",
    "output": "12"
  },
  {
    "num": 62,
    "title": "Find GCD Using the Euclidean Algorithm",
    "difficulty": "Medium",
    "category": "GCD, LCM & Math Logic",
    "tags": ["GCD", "Euclidean Algorithm"],
    "desc": "Write a program to find the GCD of two numbers using the Euclidean algorithm implemented with a loop.\n\n### Input\nTwo integers.\n\n### Output\nThe GCD value.",
    "input": "48 18",
    "output": "6"
  },
  {
    "num": 63,
    "title": "Find the LCM of Two Numbers",
    "difficulty": "Medium",
    "category": "GCD, LCM & Math Logic",
    "tags": ["LCM", "Multiples"],
    "desc": "Write a program to find the least common multiple (LCM) of two numbers using a loop.\n\n### Input\nTwo integers.\n\n### Output\nThe LCM value.",
    "input": "4 6",
    "output": "12"
  },
  {
    "num": 64,
    "title": "Find the GCD of Three Numbers",
    "difficulty": "Medium",
    "category": "GCD, LCM & Math Logic",
    "tags": ["GCD", "Multiple Numbers"],
    "desc": "Write a program to find the GCD of three numbers using nested loop-based logic.\n\n### Input\nThree integers.\n\n### Output\nThe GCD of the three numbers.",
    "input": "12 18 24",
    "output": "6"
  },
  {
    "num": 65,
    "title": "Find the LCM of Three Numbers",
    "difficulty": "Medium",
    "category": "GCD, LCM & Math Logic",
    "tags": ["LCM", "Multiple Numbers"],
    "desc": "Write a program to find the LCM of three numbers using loop-based logic.\n\n### Input\nThree integers.\n\n### Output\nThe LCM of the three numbers.",
    "input": "4 6 8",
    "output": "24"
  },
  {
    "num": 66,
    "title": "Check if Two Numbers are Co-prime",
    "difficulty": "Medium",
    "category": "GCD, LCM & Math Logic",
    "tags": ["Co-prime Numbers", "GCD"],
    "desc": "Write a program to check whether two given numbers are co-prime — their GCD is 1.\n\n### Input\nTwo integers.\n\n### Output\nPrint 'Co-prime' or 'Not Co-prime'.",
    "input": "8 15",
    "output": "Co-prime"
  },
  {
    "num": 67,
    "title": "Print Common Factors of Two Numbers",
    "difficulty": "Medium",
    "category": "GCD, LCM & Math Logic",
    "tags": ["Common Factors", "Divisors"],
    "desc": "Write a program to print all common factors shared by two given numbers.\n\n### Input\nTwo integers.\n\n### Output\nCommon factors separated by space.",
    "input": "24 36",
    "output": "1 2 3 4 6 12"
  },
  {
    "num": 68,
    "title": "Count Common Factors of Two Numbers",
    "difficulty": "Medium",
    "category": "GCD, LCM & Math Logic",
    "tags": ["Common Factors", "Counter"],
    "desc": "Write a program to count how many common factors two given numbers share.\n\n### Input\nTwo integers.\n\n### Output\nCount of common factors.",
    "input": "24 36",
    "output": "6"
  },
  {
    "num": 69,
    "title": "Sum of Common Factors of Two Numbers",
    "difficulty": "Hard",
    "category": "GCD, LCM & Math Logic",
    "tags": ["Common Factors", "Sum"],
    "desc": "Write a program to calculate the sum of all common factors shared by two given numbers.\n\n### Input\nTwo integers.\n\n### Output\nSum of common factors.",
    "input": "24 36",
    "output": "28"
  },
  {
    "num": 70,
    "title": "Count Numbers Divisible by Both 3 and 5 in a Range",
    "difficulty": "Hard",
    "category": "GCD, LCM & Math Logic",
    "tags": ["Multiple Divisibility Conditions", "Range"],
    "desc": "Write a program to count how many numbers between two given limits are divisible by both 3 and 5.\n\n### Input\nTwo integers: lower and upper bound.\n\n### Output\nCount of numbers divisible by 15.",
    "input": "1 100",
    "output": "6"
  },

  # 05 Series & Sequences (71-85)
  {
    "num": 71,
    "title": "Print the Fibonacci Series up to N Terms",
    "difficulty": "Easy",
    "category": "Series & Sequences",
    "tags": ["Fibonacci", "Series"],
    "desc": "Write a program to print the first N terms of the Fibonacci series using a loop.\n\n### Input\nA single integer N.\n\n### Output\nFibonacci sequence terms separated by space.",
    "input": "8",
    "output": "0 1 1 2 3 5 8 13"
  },
  {
    "num": 72,
    "title": "Find the Nth Fibonacci Number",
    "difficulty": "Medium",
    "category": "Series & Sequences",
    "tags": ["Fibonacci", "Nth Term"],
    "desc": "Write a program to find the Nth term of the Fibonacci series without storing the full sequence.\n\n### Input\nA single integer N (1-indexed or 0-indexed as per N=10 -> 34).\n\n### Output\nThe Nth Fibonacci number.",
    "input": "10",
    "output": "34"
  },
  {
    "num": 73,
    "title": "Sum of the Fibonacci Series up to N Terms",
    "difficulty": "Medium",
    "category": "Series & Sequences",
    "tags": ["Fibonacci", "Sum"],
    "desc": "Write a program to calculate the sum of the first N terms of the Fibonacci series.\n\n### Input\nA single integer N.\n\n### Output\nSum of the first N terms.",
    "input": "8",
    "output": "33"
  },
  {
    "num": 74,
    "title": "Print an Arithmetic Sequence",
    "difficulty": "Easy",
    "category": "Series & Sequences",
    "tags": ["Mathematical Series", "AP"],
    "desc": "Write a program to print an arithmetic sequence given the first term, common difference, and number of terms.\n\n### Input\nThree integers: first term, common difference, terms.\n\n### Output\nSequence terms separated by space.",
    "input": "2 3 6",
    "output": "2 5 8 11 14 17"
  },
  {
    "num": 75,
    "title": "Sum of an Arithmetic Sequence",
    "difficulty": "Medium",
    "category": "Series & Sequences",
    "tags": ["Mathematical Series", "AP Sum"],
    "desc": "Write a program to calculate the sum of an arithmetic sequence given its first term, common difference, and number of terms.\n\n### Input\nThree integers: first term, common difference, terms.\n\n### Output\nTotal sum.",
    "input": "2 3 6",
    "output": "57"
  },
  {
    "num": 76,
    "title": "Print a Squares Series up to N Terms",
    "difficulty": "Easy",
    "category": "Series & Sequences",
    "tags": ["Mathematical Series", "Squares"],
    "desc": "Write a program to print the series of squares of the first N natural numbers.\n\n### Input\nA single integer N.\n\n### Output\nSquares separated by space.",
    "input": "5",
    "output": "1 4 9 16 25"
  },
  {
    "num": 77,
    "title": "Sum of Squares up to N",
    "difficulty": "Medium",
    "category": "Series & Sequences",
    "tags": ["Mathematical Series", "Sum"],
    "desc": "Write a program to calculate the sum of the squares of the first N natural numbers.\n\n### Input\nA single integer N.\n\n### Output\nSum of squares.",
    "input": "5",
    "output": "55"
  },
  {
    "num": 78,
    "title": "Print a Cubes Series up to N Terms",
    "difficulty": "Easy",
    "category": "Series & Sequences",
    "tags": ["Mathematical Series", "Cubes"],
    "desc": "Write a program to print the series of cubes of the first N natural numbers.\n\n### Input\nA single integer N.\n\n### Output\nCubes separated by space.",
    "input": "4",
    "output": "1 8 27 64"
  },
  {
    "num": 79,
    "title": "Sum of Cubes up to N",
    "difficulty": "Medium",
    "category": "Series & Sequences",
    "tags": ["Mathematical Series", "Sum"],
    "desc": "Write a program to calculate the sum of the cubes of the first N natural numbers.\n\n### Input\nA single integer N.\n\n### Output\nSum of cubes.",
    "input": "4",
    "output": "100"
  },
  {
    "num": 80,
    "title": "Print Triangular Numbers up to N Terms",
    "difficulty": "Medium",
    "category": "Series & Sequences",
    "tags": ["Mathematical Series", "Triangular Numbers"],
    "desc": "Write a program to print the first N triangular numbers using a loop.\n\n### Input\nA single integer N.\n\n### Output\nTriangular numbers separated by space.",
    "input": "5",
    "output": "1 3 6 10 15"
  },
  {
    "num": 81,
    "title": "Print a Geometric Sequence",
    "difficulty": "Medium",
    "category": "Series & Sequences",
    "tags": ["Mathematical Series", "GP"],
    "desc": "Write a program to print a geometric sequence given the first term, common ratio, and number of terms.\n\n### Input\nThree integers: first term, common ratio, terms.\n\n### Output\nGP terms separated by space.",
    "input": "2 3 5",
    "output": "2 6 18 54 162"
  },
  {
    "num": 82,
    "title": "Sum of a Geometric Sequence",
    "difficulty": "Medium",
    "category": "Series & Sequences",
    "tags": ["Mathematical Series", "GP Sum"],
    "desc": "Write a program to calculate the sum of a geometric sequence given its first term, common ratio, and number of terms.\n\n### Input\nThree integers: first term, common ratio, terms.\n\n### Output\nTotal GP sum.",
    "input": "2 3 5",
    "output": "242"
  },
  {
    "num": 83,
    "title": "Print a Series with Alternating Signs",
    "difficulty": "Medium",
    "category": "Series & Sequences",
    "tags": ["Alternating Series", "Sign Flipping"],
    "desc": "Write a program to print a series of the first N natural numbers with alternating positive and negative signs.\n\n### Input\nA single integer N.\n\n### Output\nAlternating sign series separated by space.",
    "input": "6",
    "output": "1 -2 3 -4 5 -6"
  },
  {
    "num": 84,
    "title": "Sum of a Fractional Series",
    "difficulty": "Hard",
    "category": "Series & Sequences",
    "tags": ["Fractional Series", "Harmonic"],
    "desc": "Write a program to calculate the sum of the series 1/1 + 1/2 + 1/3 + ... + 1/N using a loop.\n\n### Input\nA single integer N.\n\n### Output\nSum formatted to 3 decimal places.",
    "input": "4",
    "output": "2.083"
  },
  {
    "num": 85,
    "title": "Print a Series of Repeated Digits",
    "difficulty": "Hard",
    "category": "Series & Sequences",
    "tags": ["Repeated-Digit Series", "Concatenation"],
    "desc": "Write a program to print a series where each term repeats a digit an increasing number of times, such as 1, 22, 333, 4444, up to N terms.\n\n### Input\nA single integer N.\n\n### Output\nSeries terms separated by space.",
    "input": "4",
    "output": "1 22 333 4444"
  },

  # 06 Nested Loops & Basic Patterns (86-95)
  {
    "num": 86,
    "title": "Square Pattern",
    "difficulty": "Easy",
    "category": "Nested Loops & Basic Patterns",
    "tags": ["Nested Loops", "Squares"],
    "desc": "Write a program to print a solid square pattern of stars with side length N using nested loops.\n\n### Input\nA single integer N.\n\n### Output\nSquare pattern with spaces between stars.",
    "input": "4",
    "output": "* * * *\n* * * *\n* * * *\n* * * *"
  },
  {
    "num": 87,
    "title": "Rectangle Pattern",
    "difficulty": "Easy",
    "category": "Nested Loops & Basic Patterns",
    "tags": ["Nested Loops", "Rectangles"],
    "desc": "Write a program to print a solid rectangle pattern of stars with R rows and C columns using nested loops.\n\n### Input\nTwo integers: R rows and C columns.\n\n### Output\nRectangle pattern with spaces between stars.",
    "input": "3 6",
    "output": "* * * * * *\n* * * * * *\n* * * * * *"
  },
  {
    "num": 88,
    "title": "Increasing Star Triangle",
    "difficulty": "Easy",
    "category": "Nested Loops & Basic Patterns",
    "tags": ["Star Patterns", "Triangles"],
    "desc": "Write a program to print a right-angled triangle of stars where each row has one more star than the previous row.\n\n### Input\nA single integer N.\n\n### Output\nTriangle pattern with spaces between stars.",
    "input": "5",
    "output": "*\n* *\n* * *\n* * * *\n* * * * *"
  },
  {
    "num": 89,
    "title": "Decreasing Star Triangle",
    "difficulty": "Medium",
    "category": "Nested Loops & Basic Patterns",
    "tags": ["Star Patterns", "Inverted Triangles"],
    "desc": "Write a program to print an inverted right-angled triangle of stars where each row has one fewer star than the previous row.\n\n### Input\nA single integer N.\n\n### Output\nInverted triangle pattern with spaces between stars.",
    "input": "5",
    "output": "* * * * *\n* * * *\n* * *\n* *\n*"
  },
  {
    "num": 90,
    "title": "Increasing Number Triangle",
    "difficulty": "Medium",
    "category": "Nested Loops & Basic Patterns",
    "tags": ["Number Patterns", "Triangles"],
    "desc": "Write a program to print a triangle where each row lists increasing numbers starting from 1 up to the row number.\n\n### Input\nA single integer N.\n\n### Output\nNumber triangle.",
    "input": "4",
    "output": "1\n1 2\n1 2 3\n1 2 3 4"
  },
  {
    "num": 91,
    "title": "Repeated-Number Triangle",
    "difficulty": "Medium",
    "category": "Nested Loops & Basic Patterns",
    "tags": ["Number Patterns", "Triangles"],
    "desc": "Write a program to print a triangle where every number in a row equals the row number, repeated that many times.\n\n### Input\nA single integer N.\n\n### Output\nRepeated number triangle.",
    "input": "4",
    "output": "1\n2 2\n3 3 3\n4 4 4 4"
  },
  {
    "num": 92,
    "title": "Reverse Number Pattern",
    "difficulty": "Medium",
    "category": "Nested Loops & Basic Patterns",
    "tags": ["Number Patterns", "Reverse Triangles"],
    "desc": "Write a program to print a triangle where each row counts downward from the row number to 1.\n\n### Input\nA single integer N.\n\n### Output\nReverse number triangle.",
    "input": "4",
    "output": "1\n2 1\n3 2 1\n4 3 2 1"
  },
  {
    "num": 93,
    "title": "Reverse-Number Triangle",
    "difficulty": "Medium",
    "category": "Nested Loops & Basic Patterns",
    "tags": ["Number Patterns", "Reverse Triangles"],
    "desc": "Write a program to print a triangle where each row counts downward starting from N to (N minus the row index).\n\n### Input\nA single integer N.\n\n### Output\nReverse number triangle from N.",
    "input": "4",
    "output": "4 3 2 1\n4 3 2\n4 3\n4"
  },
  {
    "num": 94,
    "title": "Hollow Square Pattern",
    "difficulty": "Medium",
    "category": "Nested Loops & Basic Patterns",
    "tags": ["Hollow Patterns", "Boundary Logic"],
    "desc": "Write a program to print a hollow square of stars with side length N, printing stars only along the border.\n\n### Input\nA single integer N.\n\n### Output\nHollow square pattern.",
    "input": "5",
    "output": "* * * * *\n*       *\n*       *\n*       *\n* * * * *"
  },
  {
    "num": 95,
    "title": "Right-Aligned Triangle",
    "difficulty": "Medium",
    "category": "Nested Loops & Basic Patterns",
    "tags": ["Star Patterns", "Leading Spaces"],
    "desc": "Write a program to print a right-angled triangle of stars aligned to the right edge, using leading spaces to shift each row.\n\n### Input\nA single integer N.\n\n### Output\nRight-aligned triangle.",
    "input": "5",
    "output": "        *\n      * *\n    * * *\n  * * * *\n* * * * *"
  },

  # 07 Advanced Loop & Pattern Problems (96-100)
  {
    "num": 96,
    "title": "Centered Pyramid",
    "difficulty": "Hard",
    "category": "Advanced Loop & Pattern Problems",
    "tags": ["Pyramid Patterns", "Centered"],
    "desc": "Write a program to print a centered pyramid of stars with N rows, using leading spaces to center each row.\n\n### Input\nA single integer N.\n\n### Output\nCentered star pyramid.",
    "input": "5",
    "output": "    *\n   * *\n  * * *\n * * * *\n* * * * *"
  },
  {
    "num": 97,
    "title": "Inverted Centered Pyramid",
    "difficulty": "Hard",
    "category": "Advanced Loop & Pattern Problems",
    "tags": ["Pyramid Patterns", "Inverted"],
    "desc": "Write a program to print an inverted centered pyramid of stars with N rows, using leading spaces to center each row.\n\n### Input\nA single integer N.\n\n### Output\nInverted centered pyramid.",
    "input": "5",
    "output": "* * * * *\n * * * *\n  * * *\n   * *\n    *"
  },
  {
    "num": 98,
    "title": "Floyd's Triangle",
    "difficulty": "Hard",
    "category": "Advanced Loop & Pattern Problems",
    "tags": ["Advanced Patterns", "Continuous Numbering"],
    "desc": "Write a program to print Floyd's Triangle with N rows, where consecutive natural numbers fill each row continuing from the previous row.\n\n### Input\nA single integer N.\n\n### Output\nFloyd's triangle.",
    "input": "4",
    "output": "1\n2 3\n4 5 6\n7 8 9 10"
  },
  {
    "num": 99,
    "title": "Pascal's Triangle",
    "difficulty": "Hard",
    "category": "Advanced Loop & Pattern Problems",
    "tags": ["Advanced Patterns", "Pascal's Triangle"],
    "desc": "Write a program to print Pascal's Triangle with N rows, where each value is the sum of the two values above it.\n\n### Input\nA single integer N.\n\n### Output\nPascal's triangle.",
    "input": "5",
    "output": "    1\n   1 1\n  1 2 1\n 1 3 3 1\n1 4 6 4 1"
  },
  {
    "num": 100,
    "title": "Diamond Pattern",
    "difficulty": "Hard",
    "category": "Advanced Loop & Pattern Problems",
    "tags": ["Advanced Patterns", "Diamonds"],
    "desc": "Write a program to print a diamond pattern of stars with N rows in the upper half, combining a centered pyramid with its inverted mirror.\n\n### Input\nA single integer N.\n\n### Output\nCentered star diamond.",
    "input": "5",
    "output": "    *\n   * *\n  * * *\n * * * *\n* * * * *\n * * * *\n  * * *\n   * *\n    *"
  }
]

all_problems = []
sql_inserts = []

# Process Book 1 (1..100)
for p in pattern_problems:
    num_str = f"{p['num']:03d}"
    uuid_str = f"00000000-0000-4000-8000-{p['num']:012d}"
    slug = f"pattern-{num_str}-{p['title'].lower().replace(' ', '-').replace('/', '-').replace('&', 'and')}"
    
    first_input = p['input'].split()[0] if p['input'] else '5'
    starter_templates = {
        "cpp": f"#include <iostream>\nusing namespace std;\n\n// Problem P{num_str}: {p['title']}\nint main() {{\n    int n = {first_input};\n    // Write your code here\n    return 0;\n}}\n",
        "python": f"# Problem P{num_str}: {p['title']}\ndef solve(n: int):\n    # Write your code here\n    pass\n\nsolve({first_input})\n",
        "javascript": f"// Problem P{num_str}: {p['title']}\nfunction solve(n) {{\n    // Write your code here\n}}\n\nsolve({first_input});\n",
        "java": f"import java.util.*;\n\npublic class Solution {{\n    public static void main(String[] args) {{\n        int n = {first_input};\n        // Write your code here\n    }}\n}}\n"
    }

    sample_test_cases = [{"input": p["input"], "output": p["output"], "explanation": f"Sample for {p['title']}"}]

    prob_obj = {
        "id": uuid_str,
        "title": f"[Pattern #{num_str}] {p['title']}",
        "slug": slug,
        "description": p["desc"],
        "difficulty": p["difficulty"],
        "category": f"Pattern: {p['category']}",
        "tags": p["tags"] + ["Pattern Printing"],
        "source": "pdf_upload",
        "status": "not_started",
        "sample_test_cases": sample_test_cases,
        "starter_templates": starter_templates
    }
    all_problems.append(prob_obj)

# Process Book 2 (101..200)
for p in loop_problems:
    p_num = p['num'] + 100
    num_str = f"{p['num']:03d}"
    uuid_str = f"00000000-0000-4000-8000-{p_num:012d}"
    slug = f"loop-{num_str}-{p['title'].lower().replace(' ', '-').replace('/', '-').replace('&', 'and')}"

    first_input = p['input'].split()[0] if p['input'] else '5'
    starter_templates = {
        "cpp": f"#include <iostream>\nusing namespace std;\n\n// Problem L{num_str}: {p['title']}\nint main() {{\n    // Write your loop code here\n    return 0;\n}}\n",
        "python": f"# Problem L{num_str}: {p['title']}\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n",
        "javascript": f"// Problem L{num_str}: {p['title']}\nfunction solve() {{\n    // Write your loop code here\n}}\n\nsolve();\n",
        "java": f"import java.util.*;\n\npublic class Solution {{\n    public static void main(String[] args) {{\n        // Write your loop code here\n    }}\n}}\n"
    }

    sample_test_cases = [{"input": p["input"], "output": p["output"], "explanation": f"Sample for {p['title']}"}]

    prob_obj = {
        "id": uuid_str,
        "title": f"[Loop #{num_str}] {p['title']}",
        "slug": slug,
        "description": p["desc"],
        "difficulty": p["difficulty"],
        "category": f"Loop: {p['category']}",
        "tags": p["tags"] + ["Loop Mastery"],
        "source": "pdf_upload",
        "status": "not_started",
        "sample_test_cases": sample_test_cases,
        "starter_templates": starter_templates
    }
    all_problems.append(prob_obj)

# SQL Rows for all 200 problems
for p in all_problems:
    tags_sql = "array[" + ", ".join([f"'{t}'" for t in p['tags']]) + "]::text[]"
    desc_sql = p['description'].replace("'", "''")
    title_sql = p['title'].replace("'", "''")
    cases_json = json.dumps(p['sample_test_cases']).replace("'", "''")
    templates_json = json.dumps(p['starter_templates']).replace("'", "''")

    sql_row = f"""(
  '{p['id']}',
  '{title_sql}',
  '{p['slug']}',
  '{desc_sql}',
  '{p['difficulty']}',
  '{p['category']}',
  {tags_sql},
  'pdf_upload',
  '{cases_json}'::jsonb,
  '{templates_json}'::jsonb
)"""
    sql_inserts.append(sql_row)

# Write TypeScript file
with open('src/lib/allProblems.ts', 'w') as f:
    f.write("import { Problem } from '../types/problem';\n\n")
    f.write(f"export const ALL_PROBLEMS: Problem[] = {json.dumps(all_problems, indent=2)};\n")

with open('src/lib/all100Problems.ts', 'w') as f:
    f.write("import { Problem } from '../types/problem';\n")
    f.write("import { ALL_PROBLEMS } from './allProblems';\n\n")
    f.write("export const ALL_100_PROBLEMS: Problem[] = ALL_PROBLEMS;\n")

# Write complete SQL insert file
with open('supabase/insert_all_problems.sql', 'w') as f:
    f.write("-- ==============================================================================\n")
    f.write("-- 200 COMPLETE PRACTICE PROBLEMS (100 PATTERNS + 100 LOOPS)\n")
    f.write("-- ==============================================================================\n\n")
    f.write("insert into public.problems (id, title, slug, description, difficulty, category, tags, source, sample_test_cases, starter_templates)\nvalues\n")
    f.write(",\n".join(sql_inserts))
    f.write("\non conflict (id) do update set\n")
    f.write("  title = excluded.title,\n  description = excluded.description,\n  difficulty = excluded.difficulty,\n  category = excluded.category,\n  tags = excluded.tags,\n  sample_test_cases = excluded.sample_test_cases,\n  starter_templates = excluded.starter_templates;\n")

print(f"Generated {len(all_problems)} problems successfully in src/lib/allProblems.ts and supabase/insert_all_problems.sql")
