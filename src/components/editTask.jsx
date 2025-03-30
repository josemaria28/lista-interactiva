import React, { useState, useContext, useEffect } from "react";
import { TaskContext } from "../context/taskContext";
import { getEditTask, saveTask } from "../util/utils";

const EditTask = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  const { tasksData } = tasks;
  const editElem = getEditTask(tasksData);
  const [valueAdd, setValueAdd] = useState(editElem);

  useEffect(() => {
    setValueAdd({...valueAdd, nameTask: editElem?.nameTask});
  }, [tasks]);

  const handleSubmitAdd = (event) => {
    event.preventDefault();
    if (valueAdd?.nameTask.length) {
      setTasks({
        ...tasks,
        defaultView: true,
        tasksData: saveTask(editElem, tasksData, valueAdd),
      });
    }
  };
  return (
    <form className="mb-3" onSubmit={handleSubmitAdd}>
      <fieldset>
        <label htmlFor="fname" className="form-label">
          Editar tarea:
        </label>
        <input
          type="text"
          className="form-control mb-3"
          name="fname"
          id="fname"
          value={valueAdd?.nameTask}
          onChange={(e) => setValueAdd({...valueAdd, nameTask: e.target.value})}
        />
        <input
          type="submit"
          value="Guardar"
          className="btn btn-primary w-100"
          disabled={!valueAdd?.nameTask.length}
        />
      </fieldset>
    </form>
  );
};

export default EditTask;
