import "./Tasks.css";

const Tasks = () => {
  const tasks = [
    { id: 1, title: "Review project proposal", priority: "high", dueDate: "Today", completed: false },
    { id: 2, title: "Update documentation", priority: "medium", dueDate: "Tomorrow", completed: false },
    { id: 3, title: "Team meeting preparation", priority: "high", dueDate: "Today", completed: true },
    { id: 4, title: "Code review", priority: "low", dueDate: "2024-02-10", completed: false },
    { id: 5, title: "Client presentation", priority: "high", dueDate: "2024-02-12", completed: false },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Tasks</h1>
          <p className="page-subtitle">Stay organized and track your to-do items</p>
        </div>
        <button className="btn-primary-action">+ New Task</button>
      </div>

      <div className="tasks-stats">
        <div className="stat-box">
          <span className="stat-number">{tasks.filter(t => !t.completed).length}</span>
          <span className="stat-label">Pending</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">{tasks.filter(t => t.completed).length}</span>
          <span className="stat-label">Completed</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">{tasks.filter(t => t.priority === "high" && !t.completed).length}</span>
          <span className="stat-label">High Priority</span>
        </div>
      </div>

      <div className="tasks-list">
        {tasks.map((task) => (
          <div key={task.id} className={`task-item ${task.completed ? "completed" : ""}`}>
            <input
              type="checkbox"
              checked={task.completed}
              className="task-checkbox"
              readOnly
            />
            <div className="task-content">
              <h3 className="task-title">{task.title}</h3>
              <div className="task-meta">
                <span className={`priority-badge priority-${task.priority}`}>
                  {task.priority}
                </span>
                <span className="task-due-date">Due: {task.dueDate}</span>
              </div>
            </div>
            <div className="task-actions">
              <button className="task-action-btn">✏️</button>
              <button className="task-action-btn">🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
