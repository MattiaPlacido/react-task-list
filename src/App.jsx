// Mostriamo in due liste diverse gli elementi dell’array tasks. Nella prima lista mostriamo solo i task (title, priority e estimatedTime) che hanno stato “backlog” o “in_progress”. Nella seconda lista mostriamo i task che hanno stato “completed”. Infine riprodurre il layout lasciato in allegato.
// BONUS
// Mostrare lo stato di ogni task in un piccolo tag di fianco al titolo, associando però ad ogni stato un colore diverso.

import { useState } from "react";
import "./App.css";
import { tasks } from "./data.js";

const completedTasks = tasks.filter((task) => task.state === "completed");
const currentTasks = tasks.filter(
  (task) => task.state === "in_progress" || task.state === "backlog"
);

function App() {
  const [completedTasksCount, setCompletedCount] = useState(
    completedTasks.length
  );
  const [currentTasksCount, setcurrentCount] = useState(currentTasks.length);

  const completedTasksComponent = () => (
    <>
      {completedTasks.map((task) => (
        <div className="component">
          <h4 key={task.id}>{task.title}</h4>
          <p>Priority: {task.priority}</p>
          <p>Est.time: {task.estimatedTime}</p>
        </div>
      ))}
    </>
  );

  const currentTasksComponent = () => (
    <>
      {currentTasks.map((task) => (
        <div className="component">
          <h4 key={task.id}>{task.title}</h4>
          <p>Priority: {task.priority}</p>
          <p>Est.time: {task.estimatedTime}</p>
        </div>
      ))}
    </>
  );

  return (
    <>
      <div className="header">
        <p>Task Manager</p>
      </div>
      <div className="body">
        <h2>Current Tasks ({currentTasksCount})</h2>
        <br></br>
        {currentTasksComponent()}
        <hr></hr>
        <h2>Completed Tasks ({completedTasksCount})</h2>
        <br></br>
        {completedTasksComponent()}
      </div>
    </>
  );
}

export default App;
