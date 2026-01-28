import "./Home.css";

const Home = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Welcome Home</h1>
        <p className="page-subtitle">Your central hub for all activities</p>
      </div>

      <div className="home-grid">
        <div className="home-card">
          <div className="card-icon">📊</div>
          <h3>Quick Stats</h3>
          <p>View your dashboard metrics and key performance indicators at a glance.</p>
        </div>

        <div className="home-card">
          <div className="card-icon">📁</div>
          <h3>Recent Projects</h3>
          <p>Access your latest projects and continue where you left off.</p>
        </div>

        <div className="home-card">
          <div className="card-icon">✅</div>
          <h3>Pending Tasks</h3>
          <p>Check your to-do list and stay on top of your responsibilities.</p>
        </div>

        <div className="home-card">
          <div className="card-icon">💬</div>
          <h3>Messages</h3>
          <p>Stay connected with your team and respond to important messages.</p>
        </div>
      </div>

      <div className="home-activity">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          <div className="activity-item">
            <span className="activity-time">2 hours ago</span>
            <span className="activity-text">Completed task: "Update project documentation"</span>
          </div>
          <div className="activity-item">
            <span className="activity-time">5 hours ago</span>
            <span className="activity-text">Created new project: "Website Redesign"</span>
          </div>
          <div className="activity-item">
            <span className="activity-time">1 day ago</span>
            <span className="activity-text">Received message from John Smith</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
