import "./Projects.css";

const Projects = () => {
  const projects = [
    { id: 1, name: "Website Redesign", status: "In Progress", progress: 65, dueDate: "2024-02-15" },
    { id: 2, name: "Mobile App Development", status: "Planning", progress: 20, dueDate: "2024-03-01" },
    { id: 3, name: "Marketing Campaign", status: "Completed", progress: 100, dueDate: "2024-01-30" },
    { id: 4, name: "API Integration", status: "In Progress", progress: 80, dueDate: "2024-02-20" },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Projects</h1>
          <p className="page-subtitle">Manage and track all your projects</p>
        </div>
        <button className="btn-primary-action">+ New Project</button>
      </div>

      <div className="projects-filters">
        <button className="filter-btn active">All</button>
        <button className="filter-btn">Active</button>
        <button className="filter-btn">Completed</button>
        <button className="filter-btn">On Hold</button>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h3>{project.name}</h3>
              <span className={`project-status status-${project.status.toLowerCase().replace(" ", "-")}`}>
                {project.status}
              </span>
            </div>
            
            <div className="project-progress">
              <div className="progress-header">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="project-footer">
              <div className="project-meta">
                <span className="meta-label">Due Date:</span>
                <span className="meta-value">{project.dueDate}</span>
              </div>
              <div className="project-actions">
                <button className="action-icon">👁️</button>
                <button className="action-icon">✏️</button>
                <button className="action-icon">🗑️</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
