import React, { useContext } from "react";
import Task from "./task.jsx";
import ListTask from "./listTask.jsx";
// import { TaskProvider } from "../context/taskProvider.jsx";
import EditTask from "./editTask.jsx";
import { TaskContext } from "../context/taskContext.jsx";

const App = () => {
  const { tasks } = useContext(TaskContext);
  const { defaultView } = tasks;
  return (
      <div className="container mt-4">
        <h1>Lista de tareas:</h1>
        {defaultView ? <Task /> : <EditTask />}
        <ListTask />
      </div>
  );
};

export default App;
