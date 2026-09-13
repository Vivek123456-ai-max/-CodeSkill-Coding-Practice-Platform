with open('generate_all_200_problems.py', 'r') as f:
    content = f.read()

# Replace Moderate with Medium
content = content.replace('"difficulty": "Moderate"', '"difficulty": "Medium"')

with open('generate_all_200_problems.py', 'w') as f:
    f.write(content)

