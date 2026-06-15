import { useState, useEffect } from "react";

function TodoStorage() {

  const [task, setTask] = useState("");

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");

  const [tasks, setTasks] = useState(() => {

    const savedTasks =
      localStorage.getItem("tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [];

  });

  useEffect(() => {

    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );

  }, [tasks]);

  function addTask() {

    if (task.trim() === "") return;

    const newTask = {

      id: Date.now(),

      text: task,

      completed: false,

      createdAt:
        new Date().toLocaleString()

    };

    setTasks([
      ...tasks,
      newTask
    ]);

    setTask("");

  }

  function deleteTask(id) {

    setTasks(
      tasks.filter(
        task => task.id !== id
      )
    );

  }

  function toggleTask(id) {

    setTasks(
      tasks.map(task =>

        task.id === id
          ? {
              ...task,
              completed:
                !task.completed
            }
          : task

      )
    );

  }

  function clearAllTasks() {

    setTasks([]);

  }

  const completedTasks =
    tasks.filter(
      task => task.completed
    ).length;

  const pendingTasks =
    tasks.length - completedTasks;

  const progress =
    tasks.length === 0
      ? 0
      : Math.round(
          (
            completedTasks /
            tasks.length
          ) * 100
        );

  const filteredTasks =
    tasks.filter(task => {

      const matchesSearch =
        task.text
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      if (filter === "Completed") {

        return (
          task.completed &&
          matchesSearch
        );

      }

      if (filter === "Pending") {

        return (
          !task.completed &&
          matchesSearch
        );

      }

      return matchesSearch;

    });

  return (
    <div className="page">

      <h1>
        Todo Manager with LocalStorage
      </h1>

      <img
        src="/assets/img/todo.png"
        alt="Todo"
      />

      <p>
        This page demonstrates
        useState, useEffect and
        localStorage through a
        professional task manager.
      </p>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) =>
          setTask(e.target.value)
        }
        onKeyDown={(e) => {

          if (e.key === "Enter") {

            addTask();

          }

        }}
      />

      <button onClick={addTask}>
        Add Task
      </button>

      <button onClick={clearAllTasks}>
        Clear All
      </button>

      <h2>Task Statistics</h2>

      <div className="project-container">

        <div className="project-card">

          <h2>{tasks.length}</h2>

          <p>Total Tasks</p>

        </div>

        <div className="project-card">

          <h2>{completedTasks}</h2>

          <p>Completed</p>

        </div>

        <div className="project-card">

          <h2>{pendingTasks}</h2>

          <p>Pending</p>

        </div>

        <div className="project-card">

          <h2>{progress}%</h2>

          <p>Completion Rate</p>

        </div>

      </div>

      <h2>Search & Filter</h2>

      <input
        type="text"
        placeholder="Search tasks"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <div>

        <button
          onClick={() =>
            setFilter("All")
          }
        >
          All
        </button>

        <button
          onClick={() =>
            setFilter(
              "Completed"
            )
          }
        >
          Completed
        </button>

        <button
          onClick={() =>
            setFilter(
              "Pending"
            )
          }
        >
          Pending
        </button>

      </div>

      <h2>Task List</h2>

      <ul>

        {filteredTasks.map(
          (item) => (

            <li key={item.id}>

              <span
                style={{
                  textDecoration:
                    item.completed
                      ? "line-through"
                      : "none",
                  marginRight:
                    "10px"
                }}
              >
                {item.text}
              </span>

              <p>
                Created:
                {" "}
                {item.createdAt}
              </p>

              <button
                onClick={() =>
                  toggleTask(
                    item.id
                  )
                }
              >
                {item.completed
                  ? "Undo"
                  : "Complete"}
              </button>

              <button
                onClick={() =>
                  deleteTask(
                    item.id
                  )
                }
              >
                Delete
              </button>

            </li>

          )
        )}

      </ul>

      <h2>
        Features Demonstrated
      </h2>

      <ul>

        <li>useState Hook</li>

        <li>useEffect Hook</li>

        <li>localStorage</li>

        <li>Unique IDs</li>

        <li>Add Task</li>

        <li>Delete Task</li>

        <li>Complete Task</li>

        <li>Undo Task</li>

        <li>Search Tasks</li>

        <li>Filter Tasks</li>

        <li>Task Statistics</li>

        <li>Persistent Storage</li>

        <li>Dynamic Rendering</li>

      </ul>

    </div>
  );
}

export default TodoStorage;