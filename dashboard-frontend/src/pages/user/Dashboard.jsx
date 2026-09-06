import { Link } from "react-router-dom";
import {
  FilePlus2,
  ListChecks,
  Bell,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import { activityFeed, mockSubmissions, trendData } from "../../data/mockData";

const statusData = [
  { name: "Pending", value: 2, color: "#f59e0b" },
  { name: "In Progress", value: 1, color: "#6366f1" },
  { name: "Resolved", value: 5, color: "#10b981" },
];

const kpis = [
  {
    label: "Total Submissions",
    value: "8",
    delta: "+2 this week",
    icon: FilePlus2,
    tone: "brand",
  },
  {
    label: "Pending",
    value: "2",
    delta: "Needs attention",
    icon: Clock,
    tone: "amber",
  },
  {
    label: "In Progress",
    value: "1",
    delta: "Being worked on",
    icon: AlertCircle,
    tone: "indigo",
  },
  {
    label: "Resolved",
    value: "5",
    delta: "+1 today",
    icon: CheckCircle2,
    tone: "emerald",
  },
];

export default function UserDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Welcome back, Aarav 👋
          </h1>
          <p className="text-sm text-slate-500">
            Here's what's happening with your submissions today.
          </p>
        </div>
        <Link to="/submit">
          <Button>
            <FilePlus2 className="h-4 w-4" /> New Submission
          </Button>
        </Link>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <Card key={k.label} className="p-5">
            <div className="flex items-center justify-between">
              <div
                className={`h-10 w-10 rounded-xl flex items-center justify-center ${
                  k.tone === "brand"
                    ? "bg-brand-50 text-brand-600"
                    : k.tone === "amber"
                      ? "bg-amber-50 text-amber-600"
                      : k.tone === "indigo"
                        ? "bg-indigo-50 text-indigo-600"
                        : "bg-emerald-50 text-emerald-600"
                }`}
              >
                <k.icon className="h-5 w-5" />
              </div>
              <TrendingUp className="h-4 w-4 text-emerald-500" />
            </div>
            <div className="mt-4 text-2xl font-extrabold text-slate-900">
              {k.value}
            </div>
            <div className="text-xs text-slate-500">{k.label}</div>
            <div className="mt-2 text-[11px] text-slate-400">{k.delta}</div>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Activity */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-900">Recent Activity</h3>
            <Link
              to="/my-submissions"
              className="text-xs font-semibold text-brand-600 hover:underline"
            >
              View all
            </Link>
          </div>
          <div className="space-y-4">
            {activityFeed.map((a) => (
              <div key={a.id} className="flex items-start gap-3">
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${
                    a.type === "success"
                      ? "bg-emerald-50 text-emerald-600"
                      : a.type === "new"
                        ? "bg-brand-50 text-brand-600"
                        : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {a.type === "success" ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : a.type === "new" ? (
                    <FilePlus2 className="h-4 w-4" />
                  ) : (
                    <Clock className="h-4 w-4" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="text-sm text-slate-800">{a.text}</div>
                  <div className="text-xs text-slate-400">{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Status donut */}
        <Card className="p-6">
          <h3 className="font-bold text-slate-900">Submission Status</h3>
          <div className="h-56 mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  innerRadius={55}
                  outerRadius={80}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {statusData.map((e, i) => (
                    <Cell key={i} fill={e.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2 mt-2">
            {statusData.map((s) => (
              <div
                key={s.name}
                className="flex items-center justify-between text-sm"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: s.color }}
                  />
                  {s.name}
                </div>
                <span className="font-semibold text-slate-700">{s.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Trend chart */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-slate-900">
            Your Activity — Last 6 Months
          </h3>
          <Badge tone="brand">Trending up</Badge>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trendData}>
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#6366f1" stopOpacity={0.35} />
                  <stop offset="1" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#e2e8f0"
                vertical={false}
              />
              <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
              <YAxis stroke="#94a3b8" fontSize={12} />
              <Tooltip
                contentStyle={{
                  borderRadius: 12,
                  border: "1px solid #e2e8f0",
                  fontSize: 12,
                }}
              />
              <Area
                type="monotone"
                dataKey="submissions"
                stroke="#6366f1"
                strokeWidth={2}
                fill="url(#g1)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Quick actions */}
      <Card className="p-6">
        <h3 className="font-bold text-slate-900 mb-4">Quick Actions</h3>
        <div className="grid sm:grid-cols-3 gap-3">
          <Link to="/submit">
            <Button variant="secondary" className="w-full justify-start">
              <FilePlus2 className="h-4 w-4" /> Create New Submission
            </Button>
          </Link>
          <Link to="/my-submissions">
            <Button variant="secondary" className="w-full justify-start">
              <ListChecks className="h-4 w-4" /> Track Submission
            </Button>
          </Link>
          <Link to="/notifications">
            <Button variant="secondary" className="w-full justify-start">
              <Bell className="h-4 w-4" /> View Notifications
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
