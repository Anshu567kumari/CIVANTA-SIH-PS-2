import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import { trendData, categoryData, resolutionData } from "../../data/mockData";

const responseTime = [
  { day: "Mon", time: 5.2 },
  { day: "Tue", time: 4.8 },
  { day: "Wed", time: 4.1 },
  { day: "Thu", time: 3.9 },
  { day: "Fri", time: 4.4 },
  { day: "Sat", time: 3.2 },
  { day: "Sun", time: 3.0 },
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          Analytics
        </h1>
        <p className="text-sm text-slate-500">
          Data-driven insights across the platform.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { k: "Total Submissions", v: "8,430", d: "+8.1%" },
          { k: "Resolution Rate", v: "84.3%", d: "+2.4%" },
          { k: "Avg. Response", v: "4.2 hrs", d: "-18%" },
          { k: "Active Users", v: "24,812", d: "+12.4%" },
        ].map((x) => (
          <Card key={x.k} className="p-5">
            <div className="text-xs text-slate-500">{x.k}</div>
            <div className="mt-1 text-2xl font-extrabold text-slate-900">
              {x.v}
            </div>
            <Badge tone="emerald">{x.d}</Badge>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-bold text-slate-900 mb-4">Submission Trends</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData}>
                <defs>
                  <linearGradient id="ga" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#6366f1" stopOpacity={0.3} />
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
                  fill="url(#ga)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-bold text-slate-900 mb-4">Resolution Rate</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={resolutionData}
                  innerRadius={60}
                  outerRadius={95}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {resolutionData.map((e, i) => (
                    <Cell key={i} fill={e.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-bold text-slate-900 mb-4">
            Category Distribution
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#e2e8f0"
                  vertical={false}
                />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    borderRadius: 12,
                    border: "1px solid #e2e8f0",
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="value" fill="#6366f1" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-bold text-slate-900 mb-4">
            Response Time (hours)
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={responseTime}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#e2e8f0"
                  vertical={false}
                />
                <XAxis dataKey="day" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    borderRadius: 12,
                    border: "1px solid #e2e8f0",
                    fontSize: 12,
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="time"
                  stroke="#10b981"
                  strokeWidth={2.5}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="font-bold text-slate-900 mb-4">Geographic Insights</h3>
        <div className="relative h-72 rounded-xl bg-linear-to-br from-slate-100 to-slate-200 border border-slate-200 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-60" />
          {[
            { t: "28%", l: "top-1/4 left-1/4" },
            { t: "18%", l: "top-1/3 left-1/2" },
            { t: "15%", l: "top-1/2 left-2/3" },
            { t: "12%", l: "top-2/3 left-1/3" },
          ].map((p, i) => (
            <div
              key={i}
              className={`absolute ${p.l} -translate-x-1/2 -translate-y-1/2`}
            >
              <div className="h-16 w-16 rounded-full bg-brand-500/20 animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-brand-700">
                {p.t}
              </div>
            </div>
          ))}
          <div className="absolute bottom-3 left-3 text-xs bg-white/90 px-2 py-1 rounded-md">
            Connect Mapbox / Google Maps for live heatmap
          </div>
        </div>
      </Card>
    </div>
  );
}
