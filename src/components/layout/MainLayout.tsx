import { Outlet, Link, useLocation } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import "./MainLayout.css";

const navItems = [
  { path: ROUTES.HOME, label: "Home", icon: "🏠" },
  { path: ROUTES.DASHBOARD, label: "Dashboard", icon: "📊" },
  { path: ROUTES.ANALYTICS, label: "Analytics", icon: "📈" },
  { path: ROUTES.PROJECTS, label: "Projects", icon: "📁" },
  { path: ROUTES.TASKS, label: "Tasks", icon: "✅" },
  { path: ROUTES.CALENDAR, label: "Calendar", icon: "📅" },
  { path: ROUTES.MESSAGES, label: "Messages", icon: "💬" },
  { path: ROUTES.SETTINGS, label: "Settings", icon: "⚙️" },
  { path: ROUTES.REPORTS, label: "Reports", icon: "📄" },
  { path: ROUTES.HELP, label: "Help & Support", icon: "❓" },
];

const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="main-layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2 className="sidebar-logo">MyApp</h2>
        </div>
        <nav className="sidebar-nav">
          <ul className="nav-list">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path} className="nav-item">
                  <Link
                    to={item.path}
                    className={`nav-link ${isActive ? "active" : ""}`}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-label">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="user-avatar">👤</div>
            <div className="user-info">
              <div className="user-name">John Doe</div>
              <div className="user-role">Administrator</div>
            </div>
          </div>
        </div>
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
