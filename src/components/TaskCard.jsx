function TaskCard({ task, toggleTask }) {
  return (
    <div className="card p-3 mb-3 shadow-sm d-flex flex-row justify-content-between align-items-center">
      <div>
        <h6>{task.text}</h6>
      </div>

      <button
        className={`btn ${task.completed ? 'btn-success' : 'btn-outline-success'}`}
        onClick={() => toggleTask(task.id)}
      >
        {task.completed ? 'Completed' : 'Mark Done'}
      </button>
          </div>
  )
}

export default TaskCard