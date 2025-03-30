import React, { useContext, useEffect } from "react";
import useFecth from "../hooks/useFecth";
import Loading from "./loading.jsx";
import TableTask from "./tableTask.jsx";
import { TaskContext } from "../context/taskContext.jsx";

const fetchTasks = "task.json";
// const fetchTasks = "https://pokeapi.co/api/v2/pokemon/ditto90";
// const fetchTasks = "https://pokeapi.co/api/v2/pokemon/ditto";

const listTask = () => {
  const { data, isLoading, hasError } = useFecth(fetchTasks);
  const { tasks, setTasks } = useContext(TaskContext);
  useEffect(() => {
    if (data) setTasks({ ...tasks, tasksData: data });
  }, [data]);

  return (
    <>{isLoading || hasError ? <Loading error={hasError} /> : <TableTask />}</>
  );
};

export default listTask;
