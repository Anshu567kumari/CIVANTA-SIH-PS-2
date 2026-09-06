import { useState } from "react";
import Card from "../../components/ui/Card";
import { Search, ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How do I submit a report?",
    a: "Go to Dashboard → Submit Report and follow the 4-step form.",
  },
  {
    q: "Which languages are supported?",
    a: "English, Hindi, Bengali, Marathi, Tamil and Telugu — more coming soon.",
  },
  {
    q: "How long does resolution take?",
    a: "Most issues are acknowledged within 24 hours and resolved within 48–72 hours.",
  },
  {
    q: "Can I track my submission?",
    a: "Yes. Visit My Submissions or click Track Submission from the dashboard.",
  },
];

export default function Help() {
  const [open, setOpen] = useState(0);
  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
        Help & Support
      </h1>
      <Card className="p-4 flex items-center gap-2 bg-slate-100">
        <Search className="h-4 w-4 text-slate-400" />
        <input
          placeholder="Search help articles…"
          className="bg-transparent outline-none text-sm flex-1"
        />
      </Card>
      <Card className="divide-y divide-slate-100">
        {faqs.map((f, i) => (
          <div key={i}>
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <span className="font-semibold text-slate-900">{f.q}</span>
              <ChevronDown
                className={`h-4 w-4 text-slate-400 transition ${open === i ? "rotate-180" : ""}`}
              />
            </button>
            {open === i && (
              <div className="px-4 pb-4 text-sm text-slate-600">{f.a}</div>
            )}
          </div>
        ))}
      </Card>
    </div>
  );
}
