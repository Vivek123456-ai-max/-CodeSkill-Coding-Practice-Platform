import json

with open('src/lib/allProblems.ts') as f:
    text = f.read()
start = text.find('ALL_PROBLEMS: Problem[] = ') + len('ALL_PROBLEMS: Problem[] = ')
end = text.rfind('];') + 1
data = json.loads(text[start:end])

print(f"Total problems: {len(data)}")
for b in ['patterns', 'loops', 'variables', 'datatypes', 'userinput']:
    count = sum(1 for p in data if p.get('book') == b)
    print(f"Book {b}: {count} questions")
