import { Routes, Route, Navigate } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";

import Landing from "./pages/public/Landing";
import About from "./pages/public/About";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import UserDashboard from "./pages/user/Dashboard";
import Submit from "./pages/user/Submit";
import MySubmissions from "./pages/user/MySubmissions";
import SubmissionDetails from "./pages/user/SubmissionDetails";
import Notifications from "./pages/user/Notifications";
import Profile from "./pages/user/Profile";
import Help from "./pages/user/Help";

import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageSubmissions from "./pages/admin/ManageSubmissions";
import Analytics from "./pages/admin/Analytics";
import UserManagement from "./pages/admin/UserManagement";

import ProtectedRoute from "./routes/ProtectedRoute";
import AIAssistant from "./components/ai/AIAssistant";

import Features from "./pages/public/Features";
import Contact from "./pages/public/Contact";
import HowItWorks from "./pages/public/HowItWorks";
import Impact from "./pages/public/Impact";
export default function App() {
  return (
    <>
      <Routes>
        {/* Public */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/features" element={<Features />} />
          <Route path="/impact" element={<Impact
           />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* User */}
        <Route element={<ProtectedRoute />}>
          <Route element={<UserLayout />}>
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/my-submissions" element={<MySubmissions />} />
            <Route path="/submissions/:id" element={<SubmissionDetails />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/help" element={<Help />} />
          </Route>
        </Route>

        {/* Admin */}
        <Route element={<ProtectedRoute requiredRole="admin" />}>
          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/submissions" element={<ManageSubmissions />} />
            <Route
              path="/admin/submissions/:id"
              element={<SubmissionDetails admin />}
            />
            <Route path="/admin/analytics" element={<Analytics />} />
            <Route path="/admin/users" element={<UserManagement />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <AIAssistant />
    </>
  );
}
