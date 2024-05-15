import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import DeleteTaskButton from "./DeleteTaskButton";
import Checkbox from "./Checkbox";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, { text: newTask, completed: false }]);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="to-do-list">
      <h1>To Do List</h1>
      <AddTaskForm addTask={addTask} />
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <Checkbox
              isChecked={task.completed}
              onChange={() => toggleCompletion(index)}
            />
            <span className={task.completed ? "task completed" : "task"}>
              {task.text}
            </span>
            <DeleteTaskButton onClick={() => deleteTask(index)} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
