import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  FilePlus2,
  ListChecks,
  MapPinned,
  Bell,
  User,
  LifeBuoy,
  LogOut,
  X,
} from "lucide-react";
import Logo from "../ui/Logo";
import { useAuth } from "../../context/AuthContext";

const items = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/submit", label: "Submit Report", icon: FilePlus2 },
  { to: "/my-submissions", label: "My Submissions", icon: ListChecks },
  { to: "/my-submissions", label: "Track Status", icon: MapPinned },
  { to: "/notifications", label: "Notifications", icon: Bell },
  { to: "/profile", label: "Profile", icon: User },
  { to: "/help", label: "Help & Support", icon: LifeBuoy },
];

export default function UserSidebar({ open, onClose }) {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const link = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${
      isActive
        ? "bg-brand-50 text-brand-700"
        : "text-slate-600 hover:bg-slate-100"
    }`;

  const content = (
    <>
      <div className="p-5 border-b border-slate-200 flex items-center justify-between">
        <Logo />
        <button
          className="md:hidden p-1.5 rounded-lg hover:bg-slate-100"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <nav className="p-3 flex flex-col gap-1 flex-1 overflow-y-auto">
        {items.map((it) => (
          <NavLink
            key={it.to + it.label}
            to={it.to}
            onClick={onClose}
            className={link}
          >
            <it.icon className="h-4.5 w-4.5" />
            <span>{it.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="p-3 border-t border-slate-200">
        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-rose-600 hover:bg-rose-50 w-full"
        >
          <LogOut className="h-4 w-4" /> Logout
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop */}
      <aside className="hidden md:flex w-64 shrink-0 bg-white border-r border-slate-200 flex-col h-screen sticky top-0">
        {content}
      </aside>
      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-slate-900/40" onClick={onClose} />
          <aside className="relative w-72 bg-white flex flex-col h-full">
            {content}
          </aside>
        </div>
      )}
    </>
  );
}
