import * as pdfjsLib from 'pdfjs-dist';
import { Problem, Difficulty } from '../types/problem';

// Configure pdfjs worker
if (typeof window !== 'undefined') {
  // Use unpkg / cdnjs fallback with standard worker
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;
}

export async function extractTextFromPDF(file: File): Promise<string> {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const loadingTask = pdfjsLib.getDocument({
      data: new Uint8Array(arrayBuffer),
      useWorkerFetch: false,
      isEvalSupported: false,
      useSystemFonts: true,
    });

    const pdf = await loadingTask.promise;
    let fullText = '';

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      
      let lastY: number | null = null;
      let pageStr = '';

      for (const item of textContent.items as any[]) {
        if (!item || typeof item.str !== 'string') continue;
        
        const currentY = item.transform ? item.transform[5] : null;
        
        // If Y coordinate drops significantly, it's a new line
        if (lastY !== null && currentY !== null && Math.abs(currentY - lastY) > 5) {
          pageStr += '\n';
        } else if (pageStr.length > 0 && !pageStr.endsWith('\n') && !pageStr.endsWith(' ')) {
          pageStr += ' ';
        }

        pageStr += item.str;
        lastY = currentY;
      }

      fullText += `\n--- Page ${i} ---\n` + pageStr + '\n\n';
    }

    return fullText.trim();
  } catch (err) {
    console.error('PDF extraction failed with pdfjs, falling back to FileReader text:', err);
    // Fallback
    try {
      return await file.text();
    } catch {
      throw new Error('Unable to read PDF text. Please copy & paste the questions text directly.');
    }
  }
}

export type SplitStrategy = 'auto' | 'numbered' | 'keywords' | 'markdown' | 'separator';

export function parseDSAQuestionsFromText(
  text: string,
  strategy: SplitStrategy = 'auto',
  customSeparator: string = '---'
): Partial<Problem>[] {
  const cleanText = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  if (!cleanText.trim()) return [];

  let rawBlocks: string[] = [];

  if (strategy === 'separator' && customSeparator) {
    rawBlocks = cleanText.split(customSeparator);
  } else if (strategy === 'numbered') {
    // Splits strictly on: \n 1. Title or \n 1) Title
    rawBlocks = cleanText.split(/(?=(?:^|\n)\s*\d+[\.\)]\s+[A-Za-z])/m);
  } else if (strategy === 'keywords') {
    // Splits strictly on: Problem 1:, Question 1:, Q1:, Task 1:
    rawBlocks = cleanText.split(/(?=(?:^|\n)\s*(?:Problem|Question|Task|Exercise|Q\.?)\s*\d*[:\.\s\-]+)/im);
  } else if (strategy === 'markdown') {
    // Splits on # or ## or ### headings
    rawBlocks = cleanText.split(/(?=(?:^|\n)\s*#{1,3}\s+)/m);
  } else {
    // AUTO DETECTION: Multi-strategy matching
    // 1. Try keyword split (Problem 1, Question 1, Q1, etc.)
    const keywordMatches = cleanText.split(/(?=(?:^|\n)\s*(?:Problem|Question|Task|Exercise|Q\.?)\s*\d*[:\.\s\-]+[A-Za-z0-9])/im);
    if (keywordMatches.length > 1) {
      rawBlocks = keywordMatches;
    } else {
      // 2. Try numbered split (1. Two Sum, 2. Reverse LinkedList)
      const numberedMatches = cleanText.split(/(?=(?:^|\n)\s*\d+[\.\)]\s+[A-Za-z])/m);
      if (numberedMatches.length > 1) {
        rawBlocks = numberedMatches;
      } else {
        // 3. Try Markdown / Heading split
        const headingMatches = cleanText.split(/(?=(?:^|\n)\s*#{1,3}\s+[A-Za-z])/m);
        if (headingMatches.length > 1) {
          rawBlocks = headingMatches;
        } else {
          // 4. Try page separators or double blank lines
          const pageMatches = cleanText.split(/(?=(?:^|\n)\s*--- Page \d+ ---\s*)/i);
          if (pageMatches.length > 1) {
            rawBlocks = pageMatches;
          } else {
            // Fallback to single block
            rawBlocks = [cleanText];
          }
        }
      }
    }
  }

  const problems: Partial<Problem>[] = [];

  rawBlocks.forEach((rawBlock, index) => {
    // Clean page header artifacts
    const block = rawBlock
      .replace(/--- Page \d+ ---/g, '')
      .replace(/^\s*[-=*_]{3,}\s*$/gm, '')
      .trim();

    if (!block || block.length < 15) return;

    const lines = block.split('\n').map((l) => l.trim()).filter(Boolean);
    if (lines.length === 0) return;

    // Determine Title from first 1-2 meaningful lines
    let rawTitle = lines[0];
    if (rawTitle.length < 5 && lines[1]) {
      rawTitle = `${rawTitle} ${lines[1]}`;
    }

    // Clean title prefix (e.g. "Problem 1: ", "1. ", "### ")
    const title = rawTitle
      .replace(/^(?:(?:Problem|Question|Task|Exercise|Q\.?)\s*\d*[:\.\s\-]*)/i, '')
      .replace(/^\d+[\.\)]\s*/, '')
      .replace(/^#{1,4}\s*/, '')
      .replace(/^[\*\-_:\s]+/, '')
      .slice(0, 100)
      .trim() || `Extracted Question ${index + 1}`;

    // Extract Difficulty
    let difficulty: Difficulty = 'Medium';
    if (/\b(?:easy|simple|basic)\b/i.test(block)) difficulty = 'Easy';
    else if (/\b(?:hard|difficult|advanced)\b/i.test(block)) difficulty = 'Hard';

    // Extract Category / Topic
    let category = 'Algorithms';
    if (/\b(?:tree|binary tree|bst|trie)\b/i.test(block)) category = 'Trees & BST';
    else if (/\b(?:graph|dfs|bfs|dijkstra|topological)\b/i.test(block)) category = 'Graphs';
    else if (/\b(?:dynamic programming|dp|memoization|knapsack)\b/i.test(block)) category = 'Dynamic Programming';
    else if (/\b(?:array|matrix|hashing|hash map|hash table)\b/i.test(block)) category = 'Arrays & Hashing';
    else if (/\b(?:linked list|node|doubly linked)\b/i.test(block)) category = 'Linked List';
    else if (/\b(?:stack|queue|monotonic stack)\b/i.test(block)) category = 'Stack & Queue';
    else if (/\b(?:two pointers|sliding window)\b/i.test(block)) category = 'Two Pointers & Sliding Window';
    else if (/\b(?:binary search|search space)\b/i.test(block)) category = 'Binary Search';

    // Extract sample inputs/outputs if present
    const sample_test_cases = extractTestCasesFromBlock(block);

    problems.push({
      title,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      description: block,
      difficulty,
      category,
      tags: [category, difficulty],
      source: 'pdf_upload',
      status: 'not_started',
      sample_test_cases: sample_test_cases.length > 0 ? sample_test_cases : [
        { input: 'Sample Input 1', output: 'Sample Output 1', explanation: 'Extracted from document' }
      ],
      starter_templates: {
        python: "class Solution:\n    def solve(self):\n        # Write your code here\n        pass\n",
        javascript: "function solve() {\n    // Write your code here\n}\n",
        cpp: "#include <iostream>\nusing namespace std;\n\nint main() {\n    return 0;\n}\n",
        java: "public class Solution {\n    public static void main(String[] args) {\n    }\n}\n"
      }
    });
  });

  return problems;
}

function extractTestCasesFromBlock(text: string): { input: string; output: string; explanation?: string }[] {
  const cases: { input: string; output: string; explanation?: string }[] = [];

  // Match: Input: ... Output: ...
  const regex = /(?:Input|Example\s*\d*|Testcase\s*\d*):\s*([^\n]+)[\s\S]*?(?:Output):\s*([^\n]+)/gi;
  let match;
  while ((match = regex.exec(text)) !== null) {
    if (match[1] && match[2]) {
      cases.push({
        input: match[1].trim(),
        output: match[2].trim(),
      });
    }
  }

  return cases;
}
