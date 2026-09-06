import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/UserSidebar";
import Topbar from "../components/layout/Topbar";
import { useState } from "react";

export default function UserLayout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar onMenu={() => setOpen(true)} />
        <main className="flex-1 p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
