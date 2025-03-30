import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/taskContext";
import ButtonsEE from "./buttonsEE.jsx";
import ButtonSave from "./buttonSave.jsx";
import { disabledTask, resetCheckTask } from "../util/utils.js";

const tableTask = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  const { tasksData, defaultView, tasksSearch} = tasks;
  const [dataTasks, setDataTasks] = useState([]);

  useEffect(() => {
    if (!tasksSearch?.length) {
      setDataTasks(tasksData);
    } else setDataTasks(tasksSearch);
  }, [tasksData, tasksSearch]);

  return (
    <div className="mt-3">
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">✅</th>
            <th scope="col">Tarea</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {dataTasks?.map((elem, index) => (
            <tr key={index} className={elem?.editTask ? "table-active" : ""}>
              <td>
                <input
                  type="checkbox"
                  name={`tarea-${index}`}
                  id={`tarea-${index}`}
                  disabled={disabledTask(defaultView, elem)}
                  checked={elem?.checkTask ?? false}
                  onChange={(e) => {
                    setTasks({
                      ...tasks,
                      tasksData: resetCheckTask(
                        tasksData,
                        elem,
                        e.target.checked
                      ),
                    });
                  }}
                />
              </td>
              <td>
                <p
                  className={`text ${
                    elem?.checkTask ? "text-decoration-line-through" : ""
                  }`}
                >
                  {elem?.nameTask}
                </p>
              </td>
              <td>
                {elem?.editTask ? <ButtonSave /> : <ButtonsEE element={elem} />}
              </td>
            </tr>
          ))}
          {!tasksData?.length && (
            <tr>
              <td colSpan="3" className="table-warning text-center">
                No tienes más tareas
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default tableTask;
