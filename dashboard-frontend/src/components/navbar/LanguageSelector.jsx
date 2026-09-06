import { useState, useRef, useEffect } from "react";
import { Languages, ChevronDown } from "lucide-react";
import { useLanguage, LANGUAGES } from "../../context/LanguageContext";

export default function LanguageSelector() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1.5 px-3 py-2 text-sm rounded-lg border border-slate-200 hover:bg-slate-50"
      >
        <Languages className="h-4 w-4 text-slate-500" />
        <span className="font-medium">{current.native}</span>
        <ChevronDown className="h-4 w-4 text-slate-400" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-card py-1 z-50">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-sm hover:bg-slate-50 flex items-center justify-between ${lang === l.code ? "text-brand-600 font-semibold" : "text-slate-700"}`}
            >
              <span>{l.native}</span>
              <span className="text-xs text-slate-400">{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
