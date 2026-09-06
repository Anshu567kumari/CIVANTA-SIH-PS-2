import { Link } from "react-router-dom";
import { Search, Filter } from "lucide-react";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import { mockSubmissions } from "../../data/mockData";

const tone = (s) =>
  s === "Resolved"
    ? "emerald"
    : s === "In Progress"
      ? "brand"
      : s === "Assigned"
        ? "indigo"
        : s === "Verified"
          ? "brand"
          : "amber";

export default function MySubmissions() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            My Submissions
          </h1>
          <p className="text-sm text-slate-500">
            Track every report you've submitted.
          </p>
        </div>
      </div>

      <Card className="p-4 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 bg-slate-100 rounded-xl px-3 py-2 flex-1 min-w-[200px]">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            placeholder="Search by ID, title…"
            className="bg-transparent outline-none text-sm flex-1"
          />
        </div>
        <button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 text-sm hover:bg-slate-50">
          <Filter className="h-4 w-4" /> Filter
        </button>
      </Card>

      {/* Desktop table */}
      <Card className="hidden md:block overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
            <tr>
              <th className="text-left px-5 py-3">ID</th>
              <th className="text-left px-5 py-3">Title</th>
              <th className="text-left px-5 py-3">Category</th>
              <th className="text-left px-5 py-3">Location</th>
              <th className="text-left px-5 py-3">Priority</th>
              <th className="text-left px-5 py-3">Status</th>
              <th className="text-left px-5 py-3">Date</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {mockSubmissions.map((s) => (
              <tr key={s.id} className="hover:bg-slate-50">
                <td className="px-5 py-3 font-mono text-xs text-slate-600">
                  {s.id}
                </td>
                <td className="px-5 py-3 font-semibold text-slate-900">
                  {s.title}
                </td>
                <td className="px-5 py-3 text-slate-600 capitalize">
                  {s.category}
                </td>
                <td className="px-5 py-3 text-slate-600">{s.location}</td>
                <td className="px-5 py-3">
                  <Badge
                    tone={
                      s.priority === "High"
                        ? "rose"
                        : s.priority === "Medium"
                          ? "amber"
                          : "slate"
                    }
                  >
                    {s.priority}
                  </Badge>
                </td>
                <td className="px-5 py-3">
                  <Badge tone={tone(s.status)}>{s.status}</Badge>
                </td>
                <td className="px-5 py-3 text-slate-500">{s.date}</td>
                <td className="px-5 py-3 text-right">
                  <Link
                    to={`/submissions/${s.id}`}
                    className="text-brand-600 font-semibold hover:underline"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Mobile cards */}
      <div className="md:hidden grid gap-3">
        {mockSubmissions.map((s) => (
          <Link key={s.id} to={`/submissions/${s.id}`} className="block">
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-slate-500">{s.id}</span>
                <Badge tone={tone(s.status)}>{s.status}</Badge>
              </div>
              <div className="mt-2 font-semibold text-slate-900">{s.title}</div>
              <div className="mt-1 text-xs text-slate-500">
                {s.location} · {s.date}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
