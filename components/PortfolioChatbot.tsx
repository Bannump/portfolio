"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const SUGGESTIONS = [
  "What is your experience in distributed systems?",
  "Tell me about your RAG project.",
  "What cloud and DevOps skills do you have?",
  "Experience with Kubernetes or AWS?",
];

export default function PortfolioChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = useCallback(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    if (open && messages.length > 0) scrollToBottom();
  }, [open, messages.length, scrollToBottom]);

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    inputRef.current?.focus();
    return () => {
      previouslyFocused?.focus();
    };
  }, [open]);

  const send = useCallback(async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      const answer =
        res.ok && data.answer
          ? data.answer
          : data.error || "Sorry, something went wrong. Please try again.";
      const assistantMsg: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: answer,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "Unable to get a response. Please check your connection and try again.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  }, [input, loading]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const handleSuggestion = (q: string) => {
    setInput(q);
    inputRef.current?.focus();
  };

  return (
    <>
      {/* Extended FAB: label beside icon (industry-standard pattern) */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 flex h-14 items-center gap-3 rounded-full bg-accent py-3 pl-4 pr-3 text-background shadow-lg shadow-accent/30 transition-all hover:scale-[1.02] hover:shadow-accent/40 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
        aria-label={open ? "Close chat" : "Ask about my experience and projects"}
        aria-expanded={open}
      >
        <span className="hidden font-mono text-sm font-semibold whitespace-nowrap sm:inline">
          Ask about my experience and projects
        </span>
        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-background/20">
          {open ? (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </span>
      </button>

      {/* Chat panel */}
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Chat about Saratchandra's experience and projects"
          className="fixed bottom-24 right-6 z-50 flex w-[min(calc(100vw-3rem),400px)] flex-col overflow-hidden rounded-lg border border-accent/20 bg-background shadow-xl shadow-accent/10"
        >
          <div className="border-b border-accent/20 bg-black/50 px-4 py-3">
            <h2 className="font-mono text-sm font-semibold text-accent">
              Ask about my experience & projects
            </h2>
            <p className="mt-0.5 text-xs text-foreground/70">
              e.g. distributed systems, RAG, cloud, Kubernetes
            </p>
          </div>

          <div
            ref={listRef}
            className="flex-1 space-y-3 overflow-y-auto p-4 text-sm"
            style={{ maxHeight: "min(60vh, 360px)" }}
          >
            {messages.length === 0 && (
              <div className="space-y-2">
                <p className="text-foreground/80">
                  Ask anything about Saratchandra—experience, projects, or skills.
                </p>
                <p className="text-xs text-foreground/60">Suggestions:</p>
                <ul className="flex flex-wrap gap-2">
                  {SUGGESTIONS.map((q) => (
                    <li key={q}>
                      <button
                        type="button"
                        onClick={() => handleSuggestion(q)}
                        className="rounded border border-accent/30 bg-accent/5 px-2 py-1 text-left text-xs text-foreground hover:border-accent/50 hover:bg-accent/10 focus:outline-none focus:ring-1 focus:ring-accent"
                      >
                        {q}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg px-3 py-2 ${
                    m.role === "user"
                      ? "bg-accent text-background"
                      : "border border-accent/20 bg-black/50 text-foreground"
                  }`}
                >
                  <p className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                    {m.content}
                  </p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="rounded-lg border border-accent/20 bg-black/50 px-3 py-2">
                  <span className="font-mono text-xs text-foreground/70">Thinking…</span>
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-accent/20 p-3">
            <div className="flex gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about experience, projects, skills…"
                rows={2}
                className="min-h-[44px] w-full resize-none rounded border border-accent/20 bg-black/50 px-3 py-2 font-mono text-sm text-foreground placeholder:text-foreground/50 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent"
                aria-label="Your question"
                disabled={loading}
              />
              <button
                type="button"
                onClick={send}
                disabled={loading || !input.trim()}
                className="self-end rounded bg-accent px-3 py-2 font-mono text-sm font-semibold text-background transition-opacity hover:opacity-90 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
                aria-label="Send message"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
