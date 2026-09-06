import { createContext, useContext, useState, useCallback } from "react";
import { CheckCircle2, XCircle, Info, X } from "lucide-react";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const push = useCallback(
    ({ type = "info", title, message, duration = 3500 }) => {
      const id = Date.now() + Math.random();
      setToasts((t) => [...t, { id, type, title, message }]);
      setTimeout(
        () => setToasts((t) => t.filter((x) => x.id !== id)),
        duration,
      );
    },
    [],
  );

  const remove = (id) => setToasts((t) => t.filter((x) => x.id !== id));

  const icons = {
    success: <CheckCircle2 className="h-5 w-5 text-emerald-600" />,
    error: <XCircle className="h-5 w-5 text-rose-600" />,
    info: <Info className="h-5 w-5 text-brand-600" />,
  };

  return (
    <ToastContext.Provider value={{ push }}>
      {children}
      <div className="pointer-events-none fixed top-4 right-4 z-100 flex flex-col gap-2 w-[340px] max-w-[92vw]">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="pointer-events-auto bg-white border border-slate-200 shadow-card rounded-xl p-3 flex items-start gap-3 animate-fade-up"
          >
            <div className="mt-0.5">{icons[t.type]}</div>
            <div className="flex-1 min-w-0">
              {t.title && (
                <div className="font-semibold text-sm text-slate-900">
                  {t.title}
                </div>
              )}
              {t.message && (
                <div className="text-sm text-slate-600">{t.message}</div>
              )}
            </div>
            <button
              onClick={() => remove(t.id)}
              className="text-slate-400 hover:text-slate-700"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
