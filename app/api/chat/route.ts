import { NextResponse } from "next/server";
import {
  getPortfolioKnowledgeText,
  getPortfolioChunks,
} from "@/lib/portfolio-knowledge";

const SYSTEM_PROMPT = `You are a helpful assistant for Saratchandra Patnaik's portfolio. Answer questions about his work experience, projects, and skills using ONLY the information below. Be specific and direct. If the answer is not in the context, say so briefly and suggest the Experience or Projects sections.

Context:
`;

// Words that carry no signal for matching — filter before scoring
const STOPWORDS = new Set([
  "a", "an", "the", "and", "or", "but",
  "in", "on", "at", "to", "for", "of", "with", "by", "from", "into",
  "is", "are", "was", "were", "be", "been", "being",
  "has", "have", "had", "do", "does", "did",
  "will", "would", "could", "should", "may", "might", "can",
  "he", "she", "his", "her", "it", "its", "they", "them", "their",
  "we", "our", "you", "your", "my", "i",
  "what", "which", "who", "how", "when", "where", "why",
  "any", "some", "all", "no", "not", "also",
  "tell", "me", "us", "about", "please",
  "experience", "experienced", "expertise",
  "know", "knowing", "familiar",
  "use", "used", "using", "work", "worked", "working",
  "good", "great", "strong", "much", "more",
  "hi", "hello", "thanks", "thank",
]);

function normalizeForMatch(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/\+\+/g, "pp")   // c++ → cpp for matching
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1);
}

function scoreChunk(
  questionWords: string[],
  chunk: { text: string; keywords: string[] }
): number {
  const keywordSet = new Set(chunk.keywords.map((k) => k.toLowerCase().replace(/\+\+/g, "pp")));
  const textWords = new Set(normalizeForMatch(chunk.text));
  let score = 0;

  for (const w of questionWords) {
    if (keywordSet.has(w)) {
      score += 3; // exact keyword match — highest signal
    } else if (textWords.has(w)) {
      score += 1; // exact text match
    } else {
      for (const k of keywordSet) {
        if (k.length > 2 && (k.includes(w) || w.includes(k))) {
          score += 0.4;
          break;
        }
      }
    }
  }
  return score;
}

/** Keyword-based fallback when no OpenAI API key is set. */
function answerFromChunks(question: string): string {
  const chunks = getPortfolioChunks();
  const allWords = normalizeForMatch(question);
  const filtered = allWords.filter((w) => !STOPWORDS.has(w));
  // Fall back to unfiltered if stopwords removed everything meaningful
  const searchWords = filtered.length > 0 ? filtered : allWords;

  if (searchWords.length === 0) {
    return "You can ask me about Saratchandra's experience, projects, or skills — e.g. \"Does he know Python?\", \"Tell me about his Kubernetes experience\", or \"What is the RAG project?\"";
  }

  const scored = chunks
    .map((chunk) => ({ chunk, score: scoreChunk(searchWords, chunk) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);

  if (scored.length === 0) {
    return "I couldn't find specific information about that. Try asking about his skills (Python, AWS, Kubernetes, C++), his work at Amagi Media Labs, or his projects (RAG, Edge AI, GPU, UDP server).";
  }

  // Take top results, deduplicate by avoiding chunks with near-identical openings
  const seen = new Set<string>();
  const top: string[] = [];
  for (const { chunk } of scored) {
    const key = chunk.text.slice(0, 60);
    if (!seen.has(key) && top.length < 3) {
      seen.add(key);
      top.push(chunk.text);
    }
  }

  return top.join("\n\n");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = typeof body?.message === "string" ? body.message.trim() : "";
    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (apiKey) {
      const knowledge = getPortfolioKnowledgeText();
      const openai = await import("openai").then((m) => m.default);
      const client = new openai({ apiKey });
      const completion = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT + knowledge },
          { role: "user", content: message },
        ],
        max_tokens: 400,
        temperature: 0.3,
      });
      const content = completion.choices[0]?.message?.content?.trim();
      return NextResponse.json({ answer: content || answerFromChunks(message) });
    }

    return NextResponse.json({ answer: answerFromChunks(message) });
  } catch (err) {
    console.error("[chat API]", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
