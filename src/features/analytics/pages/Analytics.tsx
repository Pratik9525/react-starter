import "./Analytics.css";

const Analytics = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Analytics</h1>
        <p className="page-subtitle">Deep insights into your data and performance</p>
      </div>

      <div className="analytics-filters">
        <select className="filter-select">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
          <option>Last year</option>
        </select>
        <select className="filter-select">
          <option>All Categories</option>
          <option>Sales</option>
          <option>Marketing</option>
          <option>Operations</option>
        </select>
      </div>

      <div className="analytics-grid">
        <div className="analytics-card large">
          <h2>Traffic Overview</h2>
          <div className="chart-container">
            <div className="chart-bars">
              {[65, 80, 45, 90, 70, 85, 95].map((height, index) => (
                <div key={index} className="chart-bar" style={{ height: `${height}%` }}></div>
              ))}
            </div>
          </div>
          <div className="chart-labels">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>

        <div className="analytics-card">
          <h3>Top Sources</h3>
          <div className="source-list">
            <div className="source-item">
              <span className="source-name">Direct</span>
              <span className="source-value">45%</span>
            </div>
            <div className="source-item">
              <span className="source-name">Social Media</span>
              <span className="source-value">30%</span>
            </div>
            <div className="source-item">
              <span className="source-name">Search Engine</span>
              <span className="source-value">20%</span>
            </div>
            <div className="source-item">
              <span className="source-name">Referral</span>
              <span className="source-value">5%</span>
            </div>
          </div>
        </div>

        <div className="analytics-card">
          <h3>Conversion Rate</h3>
          <div className="metric-large">3.24%</div>
          <div className="metric-change positive">+0.5% from last period</div>
        </div>

        <div className="analytics-card">
          <h3>Bounce Rate</h3>
          <div className="metric-large">42.1%</div>
          <div className="metric-change negative">+2.1% from last period</div>
        </div>
      </div>

      <div className="analytics-table-section">
        <h2>Detailed Metrics</h2>
        <div className="metrics-table">
          <div className="table-header">
            <span>Metric</span>
            <span>Value</span>
            <span>Change</span>
            <span>Trend</span>
          </div>
          <div className="table-row">
            <span>Page Views</span>
            <span>124,563</span>
            <span className="positive">+12.5%</span>
            <span>📈</span>
          </div>
          <div className="table-row">
            <span>Unique Visitors</span>
            <span>89,234</span>
            <span className="positive">+8.2%</span>
            <span>📈</span>
          </div>
          <div className="table-row">
            <span>Avg. Session Duration</span>
            <span>4m 32s</span>
            <span className="positive">+15.3%</span>
            <span>📈</span>
          </div>
          <div className="table-row">
            <span>Pages per Session</span>
            <span>3.2</span>
            <span className="negative">-2.1%</span>
            <span>📉</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
