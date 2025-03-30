import React, { useContext, useEffect } from "react";
import { TaskContext } from "../context/taskContext";
import PropTypes from "prop-types";
import {
  deleteTask,
  disabledTask,
  editTasks,
  resetEditTask,
} from "../util/utils";

const ButtonsEE = ({ element }) => {
  const { tasks, setTasks } = useContext(TaskContext);
  const { tasksData, defaultView } = tasks;

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-primary me-2"
        disabled={disabledTask(defaultView, element)}
        onClick={() => {
          setTasks(resetEditTask(tasksData));
          setTasks({
            ...tasks,
            defaultView: false,
            tasksData: editTasks(tasksData, element),
          });
        }}
      >
        Editar
      </button>
      <button
        type="button"
        className="btn btn-outline-dark"
        disabled={disabledTask(defaultView, element)}
        onClick={() => {
          setTasks({
            ...tasks,
            tasksData: deleteTask(tasksData, element),
          });
        }}
      >
        Eliminar
      </button>
    </>
  );
};

ButtonsEE.prototype = {
  element: PropTypes.object,
};

export default ButtonsEE;
