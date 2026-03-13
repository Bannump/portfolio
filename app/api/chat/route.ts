import { NextResponse } from "next/server";
import {
  getPortfolioKnowledgeText,
  getPortfolioChunks,
} from "@/lib/portfolio-knowledge";

const SYSTEM_PROMPT = `You are a helpful assistant for Saratchandra Patnaik's portfolio. You answer questions about his work experience, projects, and skills using ONLY the following information. Be concise and accurate. If the answer is not in the context, say you don't have that information and suggest they check the Experience or Projects sections.

Context:
`;

function normalizeForMatch(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1);
}

function scoreChunk(questionWords: string[], chunk: { text: string; keywords: string[] }): number {
  const textWords = new Set([
    ...normalizeForMatch(chunk.text),
    ...chunk.keywords.map((k) => k.toLowerCase()),
  ]);
  let score = 0;
  for (const w of questionWords) {
    if (textWords.has(w)) score += 1;
    else {
      for (const t of textWords) {
        if (t.includes(w) || w.includes(t)) {
          score += 0.5;
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
  const questionWords = normalizeForMatch(question);
  if (questionWords.length === 0) {
    return "You can ask me about Saratchandra's experience, projects, or skills. For example: \"What is his experience in distributed systems?\" or \"Tell me about his RAG project.\"";
  }
  const scored = chunks
    .map((chunk) => ({ chunk, score: scoreChunk(questionWords, chunk) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);
  const top = scored.slice(0, 2).map((x) => x.chunk.text);
  if (top.length === 0) {
    return "I couldn't find specific information about that in Saratchandra's portfolio. Try asking about his experience at Amagi or Blueplanet, his projects (RAG, Edge AI, GPU, UDP), or his technical skills.";
  }
  return `Based on Saratchandra's portfolio:\n\n${top.join("\n\n")}`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = typeof body?.message === "string" ? body.message.trim() : "";
    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
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
      return NextResponse.json({
        answer: content || answerFromChunks(message),
      });
    }

    const answer = answerFromChunks(message);
    return NextResponse.json({ answer });
  } catch (err) {
    console.error("[chat API]", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
