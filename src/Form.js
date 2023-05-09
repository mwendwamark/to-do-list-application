import React, { useState, useEffect } from "react";
import "./Form.css";
import { FaTasks } from "react-icons/fa";

const Form = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask("");
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  return (
    <div className="form-container">
      <FaTasks className="home-icon-form" />
      <header>
        <h1>My To-Do List</h1>
      </header>
      <form onSubmit={handleSubmit} className="form-title">
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="What's on your list today..."
            value={task}
            onChange={handleChange}
            className="adding-a-task-list"
          />
          <button type="submit" className="add-button">
            Add
          </button>
        </div>
      </form>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-list-item">
            {task}
            <button
              onClick={() => handleDelete(index)}
              className="delete-button"
            >
              <svg className="trash-icon" viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M400 80h-96V48c0-26.51-21.49-48-48-48H192c-26.51 0-48 21.49-48 48v32H48C21.49 80 0 101.49 0 128v32c0 17.67 14.33 32 32 32h16.1l23.06 320.83C75.89 510.91 89.85 528 108.28 528h231.44c18.43 0 32.39-17.09 26.12-47.17L399.9 192H416c17.67 0 32-14.33 32-32v-32c0-26.51-21.49-48-48-48zM176 48h96v32h-96V48zm176 416H96l-19.05-266.67h329.11L352 464z"
                ></path>
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Form;
