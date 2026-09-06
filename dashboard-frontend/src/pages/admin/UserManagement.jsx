import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import { Search, MoreVertical } from "lucide-react";

const users = [
  {
    id: "U-1001",
    name: "Aarav Sharma",
    email: "aarav@example.com",
    role: "Citizen",
    status: "Active",
    submissions: 12,
    joined: "2026-08-01",
  },
  {
    id: "U-1002",
    name: "Neha Singh",
    email: "neha@example.com",
    role: "Citizen",
    status: "Active",
    submissions: 8,
    joined: "2026-08-05",
  },
  {
    id: "U-1003",
    name: "Ravi Kumar",
    email: "ravi@example.com",
    role: "Officer",
    status: "Active",
    submissions: 0,
    joined: "2026-07-20",
  },
  {
    id: "U-1004",
    name: "Meera Nair",
    email: "meera@example.com",
    role: "Citizen",
    status: "Inactive",
    submissions: 3,
    joined: "2026-08-12",
  },
];

export default function UserManagement() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          User Management
        </h1>
        <p className="text-sm text-slate-500">
          Manage citizens, officers and administrators.
        </p>
      </div>
      <Card className="p-4 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 bg-slate-100 rounded-xl px-3 py-2 flex-1 min-w-[200px]">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            placeholder="Search users…"
            className="bg-transparent outline-none text-sm flex-1"
          />
        </div>
        <select className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm">
          <option>All roles</option>
          <option>Citizen</option>
          <option>Officer</option>
          <option>Admin</option>
        </select>
      </Card>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[800px]">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
              <tr>
                <th className="text-left px-5 py-3">User</th>
                <th className="text-left px-5 py-3">Role</th>
                <th className="text-left px-5 py-3">Status</th>
                <th className="text-left px-5 py-3">Submissions</th>
                <th className="text-left px-5 py-3">Joined</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {users.map((u) => (
                <tr key={u.id} className="hover:bg-slate-50">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-linear-to-br from-brand-500 to-indigo-600 text-white flex items-center justify-center font-semibold text-xs">
                        {u.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">
                          {u.name}
                        </div>
                        <div className="text-xs text-slate-500">{u.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-slate-600">{u.role}</td>
                  <td className="px-5 py-3">
                    <Badge tone={u.status === "Active" ? "emerald" : "slate"}>
                      {u.status}
                    </Badge>
                  </td>
                  <td className="px-5 py-3 text-slate-700">{u.submissions}</td>
                  <td className="px-5 py-3 text-slate-500">{u.joined}</td>
                  <td className="px-5 py-3 text-right">
                    <button className="p-2 rounded-lg hover:bg-slate-100">
                      <MoreVertical className="h-4 w-4 text-slate-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
