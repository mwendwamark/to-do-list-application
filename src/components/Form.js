import React, { useState } from "react";
import ReminderComponent from "./Reminder";
import "./Form.css";
import { FaHome, FaTrash, FaEdit, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeIcon = () => (
  <Link to="/">
    <FaHome className="home-icon-form" data-text ="Home"/>
  </Link>
);

const Form = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, { text: task, done: false }]);
    setTask("");
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  const handleEdit = (index, newText) => {
    const newTasks = [...tasks];
    newTasks[index] = { text: newText, done: newTasks[index].done };
    setTasks(newTasks);
  };

  const handleDone = (index) => {
    const newTasks = [...tasks];
    newTasks[index] = { text: newTasks[index].text, done: true };
    setTasks(newTasks);
  };

  return (
    <div className="form-container">
      <HomeIcon />
      <div className="reminder-wrapper">
        <ReminderComponent />
      </div>

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
            <div className={`task-text ${task.done ? "done" : ""}`}>
              {task.text}
            </div>

            <div className="task-actions">
              <div className="dropdown">
                <div className="dropdown-menu">
                  <button
                    className="dropdown-menu-item-edit"
                    onClick={() => handleEdit(index, prompt("Enter new task"))}
                  >
                    <FaEdit className="form-edit-icon" />
                    <span className="edit-text">Edit</span>
                  </button>
                  <button
                    className="dropdown-menu-item-delete"
                    onClick={() => handleDelete(index)}
                  >
                    <FaTrash className="trash-icon" />
                    <span className="delete-text">Delete</span>
                  </button>
                  <button
                    className="dropdown-menu-item-done"
                    onClick={() => handleDone(index)}
                  >
                    <FaCheck className="check-icon" />
                    <span className="done-text">Done</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Form;
