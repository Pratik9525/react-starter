import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">Overview of your performance and metrics</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card stat-primary">
          <div className="stat-header">
            <h3>Total Revenue</h3>
            <span className="stat-icon">💰</span>
          </div>
          <div className="stat-value">$124,563</div>
          <div className="stat-change positive">+12.5% from last month</div>
        </div>

        <div className="stat-card stat-secondary">
          <div className="stat-header">
            <h3>Active Users</h3>
            <span className="stat-icon">👥</span>
          </div>
          <div className="stat-value">2,847</div>
          <div className="stat-change positive">+8.2% from last month</div>
        </div>

        <div className="stat-card stat-success">
          <div className="stat-header">
            <h3>Completed Tasks</h3>
            <span className="stat-icon">✅</span>
          </div>
          <div className="stat-value">342</div>
          <div className="stat-change positive">+15.3% from last month</div>
        </div>

        <div className="stat-card stat-warning">
          <div className="stat-header">
            <h3>Pending Items</h3>
            <span className="stat-icon">⏳</span>
          </div>
          <div className="stat-value">28</div>
          <div className="stat-change negative">-5.1% from last month</div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-chart">
          <h2>Performance Overview</h2>
          <div className="chart-placeholder">
            <p>📈 Chart visualization would go here</p>
            <p className="chart-note">This area would display your performance metrics over time</p>
          </div>
        </div>

        <div className="dashboard-sidebar">
          <div className="sidebar-section">
            <h3>Quick Actions</h3>
            <div className="action-list">
              <button className="action-btn">Create Project</button>
              <button className="action-btn">Add Task</button>
              <button className="action-btn">Generate Report</button>
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Upcoming Events</h3>
            <div className="event-list">
              <div className="event-item">
                <span className="event-date">Today</span>
                <span className="event-text">Team Meeting at 3 PM</span>
              </div>
              <div className="event-item">
                <span className="event-date">Tomorrow</span>
                <span className="event-text">Project Deadline</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
