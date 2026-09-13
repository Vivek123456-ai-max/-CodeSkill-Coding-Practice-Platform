with open('src/lib/aiTutor.ts', 'r') as f:
    text = f.read()

func_start = text.find('export async function askAIFollowUpQuestion(')
if func_start != -1:
    new_code = """export async function askAIFollowUpQuestion(
  problem: Problem,
  question: string,
  userCode: string,
  language: SupportedLanguage,
  history: ChatMessage[] = []
): Promise<string> {
  const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY || localStorage.getItem('gemini_api_key');
  const openAiApiKey = import.meta.env.VITE_OPENAI_API_KEY || localStorage.getItem('openai_api_key');

  const contextPrompt = `You are an expert DSA & C++ interactive tutor. A student is working on the problem "${problem.title}".
Category: ${problem.category}
Language: ${language}
Problem Description:
${problem.description}

Student's active code:
\\`\\`\\`${language}
${userCode || '// No code written yet'}
\\`\\`\\`

Conversation History:
${history.map(m => `${m.sender.toUpperCase()}: ${m.text}`).join('\\n')}

Student's Question: "${question}"

Provide a friendly, pedagogical, easy-to-understand explanation answering the question directly in Hinglish / English.`;

  if (geminiApiKey) {
    try {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: contextPrompt }] }]
        })
      });
      if (res.ok) {
        const data = await res.json();
        const resText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (resText) return resText;
      }
    } catch (e) {
      console.warn('Gemini chat follow-up notice:', e);
    }
  }

  if (openAiApiKey) {
    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openAiApiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [{ role: 'user', content: contextPrompt }]
        })
      });
      if (res.ok) {
        const data = await res.json();
        const resText = data.choices?.[0]?.message?.content;
        if (resText) return resText;
      }
    } catch (e) {
      console.warn('OpenAI chat follow-up notice:', e);
    }
  }

  const qLower = question.toLowerCase();
  if (qLower.includes('space') || qLower.includes('spacing')) {
    return `Is pattern me leading spaces row number par depend karti hain:\nspaces = N - i.\nOuter loop i = 1 to N me pehle space loop chalaayein:\nfor (int s = 1; s <= n - i; s++) cout << " ";`;
  } else if (qLower.includes('loop') || qLower.includes('for') || qLower.includes('while')) {
    return `Outer loop row count (i = 1 to N) ke liye hota hai aur inner loop column ya symbols (j = 1 to i) print karne ke liye hota hai.`;
  } else if (qLower.includes('error') || qLower.includes('bug') || qLower.includes('wrong')) {
    return `Code me common issues check karein:\n1. Kya loop ke baad cout << endl; lagaya hai?\n2. Kya space aur star ka count testcase se match kar raha hai?\n3. Test button dabakar expected vs actual output compare karein!`;
  }

  return `Is question ("${problem.title}") ko solve karne ke liye:\n1. Outer loop 1 se N tak chalaayein.\n2. Har row me expected formula ke according elements print karein.\n3. Har line ke end me newline (endl ya \\n) lagayein.`;
}
"""
    text = text[:func_start] + new_code
    with open('src/lib/aiTutor.ts', 'w') as f:
        f.write(text)
    print("Updated askAIFollowUpQuestion signature and return type successfully")
