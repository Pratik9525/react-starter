import { Routes, Route } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "@/components/layout/MainLayout";
import Login from "@/features/auth/pages/Login";
import Home from "@/features/home/pages/Home";
import Dashboard from "@/features/dashboard/pages/Dashboard";
import Analytics from "@/features/analytics/pages/Analytics";
import Projects from "@/features/projects/pages/Projects";
import Tasks from "@/features/tasks/pages/Tasks";
import Calendar from "@/features/calendar/pages/Calendar";
import Messages from "@/features/messages/pages/Messages";
import Settings from "@/features/settings/pages/Settings";
import Reports from "@/features/reports/pages/Reports";
import Help from "@/features/help/pages/Help";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path={ROUTES.ANALYTICS} element={<Analytics />} />
          <Route path={ROUTES.PROJECTS} element={<Projects />} />
          <Route path={ROUTES.TASKS} element={<Tasks />} />
          <Route path={ROUTES.CALENDAR} element={<Calendar />} />
          <Route path={ROUTES.MESSAGES} element={<Messages />} />
          <Route path={ROUTES.SETTINGS} element={<Settings />} />
          <Route path={ROUTES.REPORTS} element={<Reports />} />
          <Route path={ROUTES.HELP} element={<Help />} />
        </Route>
      </Route>
    </Routes>
  );
}
