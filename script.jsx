import "./App.css";

const stats = [
  { label: "Tasks Completed", value: "42", change: "+18%" },
  { label: "Focus Hours", value: "16.5", change: "+7%" },
  { label: "AI Actions", value: "128", change: "+24%" },
  { label: "Productivity Score", value: "91%", change: "+12%" },
];

const tasks = [
  { title: "Review landing page copy", status: "High", time: "10:30 AM" },
  { title: "Prepare client dashboard wireframe", status: "Medium", time: "12:00 PM" },
  { title: "Refactor analytics components", status: "High", time: "2:15 PM" },
  { title: "Send weekly progress summary", status: "Low", time: "4:45 PM" },
];

const suggestions = [
  "Summarize today’s meetings into action items.",
  "Block 90 minutes for deep work before 2 PM.",
  "Automate your weekly report draft.",
];

function App() {
  return (
    <main className="app">
      <aside className="sidebar">
        <h2>FlowAI</h2>

        <nav>
          <a className="active">Dashboard</a>
          <a>Tasks</a>
          <a>Calendar</a>
          <a>AI Assistant</a>
          <a>Reports</a>
          <a>Settings</a>
        </nav>
      </aside>

      <section className="content">
        <header className="topbar">
          <div>
            <p className="eyebrow">AI Productivity Dashboard</p>
            <h1>Good morning, Alex</h1>
          </div>

          <button>Generate Summary</button>
        </header>

        <section className="stats-grid">
          {stats.map((item) => (
            <article className="card stat-card" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <small>{item.change} this week</small>
            </article>
          ))}
        </section>

        <section className="dashboard-grid">
          <article className="card large-card">
            <div className="section-header">
              <h3>Today’s Tasks</h3>
              <button className="ghost">Add Task</button>
            </div>

            <div className="task-list">
              {tasks.map((task) => (
                <div className="task" key={task.title}>
                  <div>
                    <h4>{task.title}</h4>
                    <p>{task.time}</p>
                  </div>

                  <span className={`badge ${task.status.toLowerCase()}`}>
                    {task.status}
                  </span>
                </div>
              ))}
            </div>
          </article>

          <article className="card">
            <h3>Focus Timer</h3>
            <div className="timer">25:00</div>
            <p className="muted">Next session: Deep work sprint</p>

            <div className="button-row">
              <button>Start</button>
              <button className="ghost">Reset</button>
            </div>
          </article>

          <article className="card">
            <h3>AI Suggestions</h3>

            <div className="suggestions">
              {suggestions.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </article>

          <article className="card large-card">
            <div className="section-header">
              <h3>Weekly Productivity</h3>
              <p className="muted">Hours focused</p>
            </div>

            <div className="chart">
              {[45, 70, 55, 90, 76, 60, 82].map((height, index) => (
                <span key={index} style={{ height: `${height}%` }} />
              ))}
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}

export default App;