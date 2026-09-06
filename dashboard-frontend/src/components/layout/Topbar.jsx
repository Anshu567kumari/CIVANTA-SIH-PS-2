import { Menu, Search, Bell } from "lucide-react";
import Logo from "../ui/Logo";
import LanguageSelector from "../navbar/LanguageSelector";

export default function Topbar({ onMenu, admin }) {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center gap-3 px-4 md:px-6 sticky top-0 z-30">
      <button
        onClick={onMenu}
        className="md:hidden p-2 rounded-lg hover:bg-slate-100"
      >
        <Menu className="h-5 w-5" />
      </button>
      <div className="md:hidden">
        <Logo size={28} />
      </div>
      <div className="hidden md:flex items-center gap-2 bg-slate-100 rounded-xl px-3 py-2 w-80">
        <Search className="h-4 w-4 text-slate-400" />
        <input
          placeholder="Search submissions, users…"
          className="bg-transparent outline-none text-sm flex-1 placeholder:text-slate-400"
        />
      </div>
      <div className="flex-1" />
      <LanguageSelector />
      <button className="relative p-2 rounded-lg hover:bg-slate-100">
        <Bell className="h-5 w-5 text-slate-600" />
        <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-rose-500" />
      </button>
      <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
        <div className="h-9 w-9 rounded-full bg-linear-to-br from-brand-500 to-indigo-600 text-white flex items-center justify-center font-semibold text-sm">
          {admin ? "A" : "U"}
        </div>
        <div className="hidden sm:block">
          <div className="text-sm font-semibold text-slate-900 leading-tight">
            {admin ? "Admin" : "Aarav Sharma"}
          </div>
          <div className="text-xs text-slate-500 leading-tight">
            {admin ? "admin@civanta.in" : "user@civanta.in"}
          </div>
        </div>
      </div>
    </header>
  );
}
