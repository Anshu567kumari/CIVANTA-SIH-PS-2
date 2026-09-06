import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

const quickPrompts = [
  "How do I submit a report?",
  "Check my submission",
  "What services are available?",
  "Change language",
];

const replies = {
  "How do I submit a report?":
    "Go to your Dashboard → click **New Submission** → fill the 4-step form (info, location, evidence, review) → submit. You'll receive a CVT-XXXXX ID.",

  "Check my submission":
    "Open **My Submissions** from the sidebar, or paste your CVT-XXXXX ID in the search bar to see live status.",

  "What services are available?":
    "CIVANTA covers Roads, Water, Health, Education, Sanitation, Electricity, Safety and more. Choose a category while submitting.",

  "Change language":
    "Click the language icon (🌐) in the top bar and choose from English, हिन्दी, বাংলা, मराठी, தமிழ், తెలుగు.",
};

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! I'm **Civanta AI**. Ask me anything about the platform — submitting reports, tracking status, or finding services.",
    },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = (text) => {
    const q = (text || input).trim();
    if (!q) return;
    setMessages((m) => [...m, { from: "user", text: q }]);
    setInput("");
    setTimeout(() => {
      const reply =
        replies[q] ||
        "I can help with submissions, tracking, services and languages. Try one of the quick prompts below.";
      setMessages((m) => [...m, { from: "bot", text: reply }]);
    }, 500);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-90 w-[360px] max-w-[92vw] bg-white rounded-2xl shadow-card border border-slate-200 overflow-hidden flex flex-col"
            style={{ maxHeight: "min(560px, 80vh)" }}
          >
            <div className="p-4 bg-linear-to-br from-brand-600 to-indigo-600 text-white flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-white/15 flex items-center justify-center">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <div className="font-bold">Civanta AI</div>
                <div className="text-xs text-white/80">
                  Your intelligent assistant
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm ${
                      m.from === "user"
                        ? "bg-brand-600 text-white rounded-br-sm"
                        : "bg-white border border-slate-200 text-slate-800 rounded-bl-sm"
                    }`}
                    dangerouslySetInnerHTML={{
                      __html: m.text.replace(
                        /\*\*(.+?)\*\*/g,
                        "<strong>$1</strong>",
                      ),
                    }}
                  />
                </div>
              ))}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {quickPrompts.map((p) => (
                    <button
                      key={p}
                      onClick={() => send(p)}
                      className="text-xs px-3 py-1.5 rounded-full bg-white border border-slate-200 hover:border-brand-400 hover:text-brand-700"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              )}
              <div ref={endRef} />
            </div>

            <div className="p-3 border-t border-slate-200 bg-white flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask Civanta AI…"
                className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-brand-500"
              />
              <button
                onClick={() => send()}
                className="h-9 w-9 rounded-xl bg-brand-600 text-white flex items-center justify-center hover:bg-brand-700"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-90 h-14 w-14 rounded-full bg-linear-to-br from-brand-600 to-indigo-600 text-white shadow-lg flex items-center justify-center"
      >
        {open ? (
          <X className="h-5 w-5" />
        ) : (
          <MessageCircle className="h-5 w-5" />
        )}
      </motion.button>
    </>
  );
}
