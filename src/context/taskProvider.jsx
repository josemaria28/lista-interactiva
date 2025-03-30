import { useState } from "react";
import { TaskContext } from "./taskContext";

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState({defaultView: true});

  return (
    <TaskContext.Provider value={{tasks, setTasks}}>
      {children}
    </TaskContext.Provider>
  );
};
