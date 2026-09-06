import Logo from "../ui/Logo";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-slate-600 max-w-xs">
            Intelligent technology for faster, transparent and accessible public
            service delivery.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Platform</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <a className="hover:text-brand-600" href="/features">
                Features
              </a>
            </li>
            <li>
              <a className="hover:text-brand-600" href="/how-it-works">
                How it works
              </a>
            </li>
            <li>
              <a className="hover:text-brand-600" href="/impact">
                Impact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <a className="hover:text-brand-600" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-brand-600" href="/contact">
                Contact
              </a>
            </li>
            <li>
              <a className="hover:text-brand-600" href="/login">
                Sign in
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Connect</h4>
          <div className="mt-3 flex gap-3">
            <a
              className="h-9 w-9 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50"
              href="#"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              className="h-9 w-9 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50"
              href="#"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              className="h-9 w-9 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50"
              href="#"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-6 text-xs text-slate-500">
            © 2026 CIVANTA. Built for Smart India Hackathon.
          </p>
        </div>
      </div>
    </footer>
  );
}
