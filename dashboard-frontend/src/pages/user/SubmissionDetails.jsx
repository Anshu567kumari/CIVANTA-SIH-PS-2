import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Building2,
  Flag,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import { mockSubmissions, statuses } from "../../data/mockData";

export default function SubmissionDetails({ admin }) {
  const { id } = useParams();
  const sub = mockSubmissions.find((s) => s.id === id) || mockSubmissions[0];
  const currentIdx = statuses.indexOf(sub.status);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link
          to={admin ? "/admin/submissions" : "/my-submissions"}
          className="p-2 rounded-lg hover:bg-slate-100"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div>
          <div className="text-xs text-slate-500">Submission</div>
          <h1 className="text-xl md:text-2xl font-extrabold text-slate-900">
            #{sub.id}
          </h1>
        </div>
        <div className="ml-auto">
          <Badge tone="brand">{sub.status}</Badge>
        </div>
      </div>

      <Card className="p-6">
        <h2 className="font-bold text-slate-900">{sub.title}</h2>
        <p className="mt-2 text-sm text-slate-600">{sub.description}</p>

        <div className="mt-6 grid sm:grid-cols-4 gap-3">
          <Info icon={Building2} k="Department" v={sub.department} />
          <Info icon={MapPin} k="Location" v={sub.location} />
          <Info icon={Flag} k="Priority" v={sub.priority} />
          <Info icon={Clock} k="Last updated" v={sub.date} />
        </div>
      </Card>

      {/* Status timeline */}
      <Card className="p-6">
        <h3 className="font-bold text-slate-900 mb-6">Status Timeline</h3>
        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-slate-200" />
          <div className="space-y-6">
            {statuses.map((s, i) => {
              const done = i <= currentIdx;
              const hist = sub.history.find((h) => h.status === s);
              return (
                <div key={s} className="relative pl-12">
                  <div
                    className={`absolute left-0 top-0 h-8 w-8 rounded-full flex items-center justify-center ${done ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-400"}`}
                  >
                    {done ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      <span className="text-xs font-bold">{i + 1}</span>
                    )}
                  </div>
                  <div
                    className={`font-semibold ${done ? "text-slate-900" : "text-slate-400"}`}
                  >
                    {s}
                  </div>
                  {hist && (
                    <div className="text-xs text-slate-500 mt-0.5">
                      {hist.at} · {hist.note}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      {/* Comments */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <MessageSquare className="h-4 w-4 text-slate-500" />
          <h3 className="font-bold text-slate-900">Comments</h3>
        </div>
        <div className="space-y-3">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-slate-900">
                Field Officer
              </div>
              <div className="text-xs text-slate-400">2h ago</div>
            </div>
            <div className="mt-1 text-sm text-slate-600">
              Verified on-site. Crew will be dispatched tomorrow morning.
            </div>
          </div>
          <textarea
            rows="3"
            placeholder="Add a comment…"
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm"
          />
          <div className="flex justify-end">
            <Button>Add comment</Button>
          </div>
        </div>
      </Card>

      {admin && (
        <Card className="p-6">
          <h3 className="font-bold text-slate-900 mb-3">Admin Actions</h3>
          <div className="flex flex-wrap gap-2">
            <Button variant="secondary">Assign Department</Button>
            <Button variant="secondary">Update Status</Button>
            <Button variant="secondary">Add Internal Note</Button>
            <Button variant="danger">Escalate</Button>
          </div>
        </Card>
      )}
    </div>
  );
}

function Info({ icon: Icon, k, v }) {
  return (
    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
      <div className="flex items-center gap-1.5 text-xs text-slate-500">
        <Icon className="h-3.5 w-3.5" />
        {k}
      </div>
      <div className="mt-1 text-sm font-semibold text-slate-900 capitalize">
        {v}
      </div>
    </div>
  );
}
