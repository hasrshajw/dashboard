"use client";

import * as React from "react";
import { Sparkles, Mic, ArrowUp, LayoutPanelLeft } from "lucide-react";

export function AiOmnibar() {
  const [query, setQuery] = React.useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    alert(`Hostinger AI Agent: Processing "${query}"...`);
    setQuery("");
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-full max-w-xl px-4 pointer-events-none">
      <form
        onSubmit={handleSend}
        className="pointer-events-auto flex items-center justify-between gap-3 rounded-full border border-[#dadce0] bg-white px-4 py-2.5 shadow-xl shadow-black/10 backdrop-blur-md transition-all hover:border-[#673de6]/50 focus-within:border-[#673de6] focus-within:ring-2 focus-within:ring-[#673de6]/20"
      >
        {/* Left: Sparkle / AI Agent Icon */}
        <div className="flex items-center gap-2.5 flex-1">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ebe4ff] text-[#673de6]">
            <Sparkles className="h-3.5 w-3.5 fill-[#673de6]" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask me anything"
            className="w-full bg-transparent text-xs sm:text-sm text-[#1d1e20] placeholder-[#6d7081] focus:outline-none"
          />
        </div>

        {/* Right: Mic, Send Arrow, Panel Toggle */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={() => alert("Listening... Speak now")}
            className="flex h-7 w-7 items-center justify-center rounded-full text-[#6d7081] hover:text-[#1d1e20] hover:bg-[#f2f3f6] transition-colors cursor-pointer"
            title="Voice input"
          >
            <Mic className="h-4 w-4" />
          </button>

          <button
            type="submit"
            disabled={!query.trim()}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f2f3f6] text-[#6d7081] hover:bg-[#673de6] hover:text-white transition-all disabled:opacity-40 cursor-pointer"
            title="Submit query"
          >
            <ArrowUp className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => alert("Toggled AI Assistant side panel!")}
            className="flex h-7 w-7 items-center justify-center rounded-full text-[#6d7081] hover:text-[#1d1e20] hover:bg-[#f2f3f6] transition-colors cursor-pointer"
            title="Toggle panel"
          >
            <LayoutPanelLeft className="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
