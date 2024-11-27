// Mostriamo in due liste diverse gli elementi dell’array tasks. Nella prima lista mostriamo solo i task (title, priority e estimatedTime) che hanno stato “backlog” o “in_progress”. Nella seconda lista mostriamo i task che hanno stato “completed”. Infine riprodurre il layout lasciato in allegato.
// BONUS
// Mostrare lo stato di ogni task in un piccolo tag di fianco al titolo, associando però ad ogni stato un colore diverso.

import { useState } from "react";
import "./App.css";
import { tasks } from "./data.js";

const completedTasks = tasks.filter((task) => task.state === "completed");
const ongoingTasks = tasks.filter(
  (task) => task.state === "in_progress" || task.state === "backlog"
);

function App() {
  const [count, setCount] = useState(0);

  return <></>;
}

export default App;
