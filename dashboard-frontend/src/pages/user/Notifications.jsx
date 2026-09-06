import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import { Bell, CheckCircle2, Info, AlertTriangle } from "lucide-react";

const items = [
  {
    id: 1,
    type: "success",
    title: "CVT-10480 resolved",
    desc: "Your streetlight issue has been resolved.",
    time: "1h ago",
  },
  {
    id: 2,
    type: "info",
    title: "CVT-10482 in progress",
    desc: "Repair crew has been dispatched.",
    time: "3h ago",
  },
  {
    id: 3,
    type: "warning",
    title: "Action required",
    desc: "Please verify your email address.",
    time: "1d ago",
  },
  {
    id: 4,
    type: "info",
    title: "New feature",
    desc: "Multilingual support is now live.",
    time: "2d ago",
  },
];

export default function Notifications() {
  const iconFor = (t) =>
    t === "success" ? CheckCircle2 : t === "warning" ? AlertTriangle : Info;
  const toneFor = (t) =>
    t === "success" ? "emerald" : t === "warning" ? "amber" : "brand";
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          Notifications
        </h1>
        <p className="text-sm text-slate-500">
          Stay updated on your submissions and platform news.
        </p>
      </div>
      <Card className="divide-y divide-slate-100">
        {items.map((n) => {
          const Icon = iconFor(n.type);
          return (
            <div
              key={n.id}
              className="p-4 flex items-start gap-3 hover:bg-slate-50"
            >
              <div
                className={`h-9 w-9 rounded-xl flex items-center justify-center ${
                  n.type === "success"
                    ? "bg-emerald-50 text-emerald-600"
                    : n.type === "warning"
                      ? "bg-amber-50 text-amber-600"
                      : "bg-brand-50 text-brand-600"
                }`}
              >
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div className="font-semibold text-slate-900 text-sm">
                    {n.title}
                  </div>
                  <Badge tone={toneFor(n.type)}>{n.type}</Badge>
                </div>
                <div className="text-sm text-slate-600">{n.desc}</div>
                <div className="text-xs text-slate-400 mt-1">{n.time}</div>
              </div>
            </div>
          );
        })}
      </Card>
    </div>
  );
}
