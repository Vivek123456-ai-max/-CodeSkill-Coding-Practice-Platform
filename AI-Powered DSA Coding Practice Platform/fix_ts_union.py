with open('src/lib/allProblems.ts', 'r') as f:
    code = f.read()

# Replace "export const ALL_PROBLEMS: Problem[] = [" with "const rawProblems: any[] = ["
code = code.replace("export const ALL_PROBLEMS: Problem[] = [", "const rawProblems: any[] = [")
code = code + "\nexport const ALL_PROBLEMS: Problem[] = rawProblems as Problem[];\n"

with open('src/lib/allProblems.ts', 'w') as f:
    f.write(code)

print("Updated allProblems.ts to avoid TS2590 complex union expansion")
