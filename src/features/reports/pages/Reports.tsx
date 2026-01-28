import "./Reports.css";

const Reports = () => {
  const reports = [
    { id: 1, name: "Monthly Sales Report", date: "2024-01-31", type: "sales", size: "2.4 MB" },
    { id: 2, name: "Q4 Performance Analysis", date: "2024-01-15", type: "performance", size: "1.8 MB" },
    { id: 3, name: "User Activity Summary", date: "2024-02-01", type: "activity", size: "3.2 MB" },
    { id: 4, name: "Financial Overview", date: "2024-01-28", type: "financial", size: "4.1 MB" },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Reports</h1>
          <p className="page-subtitle">View and download your generated reports</p>
        </div>
        <button className="btn-primary-action">+ Generate Report</button>
      </div>

      <div className="reports-filters">
        <select className="filter-select">
          <option>All Types</option>
          <option>Sales</option>
          <option>Performance</option>
          <option>Activity</option>
          <option>Financial</option>
        </select>
        <select className="filter-select">
          <option>All Time</option>
          <option>Last Week</option>
          <option>Last Month</option>
          <option>Last Quarter</option>
        </select>
      </div>

      <div className="reports-grid">
        {reports.map((report) => (
          <div key={report.id} className="report-card">
            <div className="report-icon">
              {report.type === "sales" && "📊"}
              {report.type === "performance" && "📈"}
              {report.type === "activity" && "📱"}
              {report.type === "financial" && "💰"}
            </div>
            <div className="report-content">
              <h3>{report.name}</h3>
              <div className="report-meta">
                <span className="report-date">{report.date}</span>
                <span className="report-size">{report.size}</span>
              </div>
            </div>
            <div className="report-actions">
              <button className="report-action-btn" title="Download">⬇️</button>
              <button className="report-action-btn" title="View">👁️</button>
              <button className="report-action-btn" title="Share">📤</button>
            </div>
          </div>
        ))}
      </div>

      <div className="reports-summary">
        <h2>Report Statistics</h2>
        <div className="summary-grid">
          <div className="summary-card">
            <span className="summary-label">Total Reports</span>
            <span className="summary-value">24</span>
          </div>
          <div className="summary-card">
            <span className="summary-label">This Month</span>
            <span className="summary-value">8</span>
          </div>
          <div className="summary-card">
            <span className="summary-label">Total Size</span>
            <span className="summary-value">45.2 MB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
