// src/pages/Planner.jsx

import { useEffect, useState } from "react";

import TaskCard from "../components/TaskCard";

const Planner = () => {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks =
      JSON.parse(localStorage.getItem("tasks")) || [];

    setTasks(savedTasks);
  }, []);
 
  const addTask = () => {
    if (!task.trim()) return;

    const updatedTasks = [
      ...tasks,
      {
        id: Date.now(),
        text: task,
        completed: false,
      },
    ];

    setTasks(updatedTasks);

    localStorage.setItem(
      "tasks",
      JSON.stringify(updatedTasks)
    );

    setTask("");
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((item) =>
      item.id === id
        ? {
            ...item,
            completed: !item.completed,
          }
        : item
    );

    setTasks(updatedTasks);

    localStorage.setItem(
      "tasks",
      JSON.stringify(updatedTasks)
    );
  };

  return (
    <div className="container-fluid p-4">
      <h2 className="fw-bold mb-4">
        Daily Planner
      </h2>

      <div className="card shadow-sm border-0 p-4">
        <div className="d-flex gap-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add learning goal..."
            value={task}
            onChange={(e) =>
              setTask(e.target.value)
            }
          />

          <button
            className="btn btn-primary"
            onClick={addTask}
          >
            Add
          </button>
        </div>
      </div>

      <div className="mt-4">
        {tasks.map((item) => (
          <TaskCard
            key={item.id}
            task={item}
            toggleTask={toggleTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Planner;