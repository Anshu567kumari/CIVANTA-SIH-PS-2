import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../ui/Logo";
import LanguageSelector from "./LanguageSelector";
import Button from "../ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const link = ({ isActive }) =>
    `text-sm font-medium transition ${isActive ? "text-brand-600" : "text-slate-700 hover:text-brand-600"}`;

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center gap-4">
        <Link to="/">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-7 ml-6">
          <NavLink to="/" end className={link}>
            Home
          </NavLink>
          <NavLink to="/about" className={link}>
            About
          </NavLink>
          <NavLink to="/features" className={link}>
            Features
          </NavLink>
          <NavLink to="/how-it-works" className={link}>
            How it works
          </NavLink>
          <NavLink to="/impact" className={link}>
            Impact
          </NavLink>
          <NavLink to="/contact" className={link}>
            Contact
          </NavLink>
        </nav>
        <div className="flex-1" />
        <div className="hidden md:flex items-center gap-2">
          <LanguageSelector />
          <Link to="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link to="/register">
            <Button>Get Started</Button>
          </Link>
        </div>
        <button
          className="md:hidden p-2 rounded-lg hover:bg-slate-100"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 flex flex-col gap-1">
            {[
              "/",
              "/about",
              "/features",
              "/how-it-works",
              "/impact",
              "/contact",
            ].map((p, i) => (
              <Link
                key={p}
                to={p}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-slate-700"
              >
                {
                  [
                    "Home",
                    "About",
                    "Features",
                    "How it works",
                    "Impact",
                    "Contact",
                  ][i]
                }
              </Link>
            ))}
            <div className="flex gap-2 mt-3">
              <LanguageSelector />
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="flex-1"
              >
                <Button variant="secondary" className="w-full">
                  Login
                </Button>
              </Link>
              <Link
                to="/register"
                onClick={() => setOpen(false)}
                className="flex-1"
              >
                <Button className="w-full">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
