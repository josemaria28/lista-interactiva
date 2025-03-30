import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/taskContext";
import { addTask, seachTasks, validSearch } from "../util/utils";

const Task = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  const { tasksData, errorSearch, tasksSearch } = tasks;
  const [valueAdd, setValueAdd] = useState("");
  const [valueSearch, setValueSearch] = useState("");

  useEffect(() => {
    if (valueSearch === "")
      setTasks({
        ...tasks,
        errorSearch: [],
        tasksSearch: [],
      });
  }, [valueSearch]);
  useEffect(() => {
    if (!!valueSearch)
      setTasks({
        ...tasks,
        tasksSearch: seachTasks(tasksData, valueSearch),
        errorSearch: [],
      });
  }, [tasksData]);
  useEffect(() => {
    if (!!tasksSearch)
      setTasks({
        ...tasks,
        errorSearch: validSearch(tasksSearch, valueSearch),
      });
  }, [tasksSearch]);

  const handleSubmitAdd = (event) => {
    event.preventDefault();
    if (valueAdd.length) {
      setTasks({
        ...tasks,
        tasksData: addTask(tasksData, valueAdd),
      });
    }
    setValueAdd("");
  };
  const handleSubmitSearch = (event) => {
    event.preventDefault();
    console.log(
      "Valido : ",
      validSearch(seachTasks(tasksData, valueSearch), valueSearch)
    );
    if (valueSearch?.length || tasksData?.length) {
      setTasks({
        ...tasks,
        errorSearch: validSearch(
          seachTasks(tasksData, valueSearch),
          valueSearch
        ),
        tasksSearch: seachTasks(tasksData, valueSearch),
      });
    }
  };

  return (
    <div className="row">
      <form className="col-6 mb-3" onSubmit={handleSubmitAdd}>
        <fieldset>
          <label htmlFor="fname" className="form-label">
            Tipo de tarea:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            name="fname"
            id="fname"
            placeholder="Tarea : Ir a por la compra."
            value={valueAdd}
            onChange={(e) => setValueAdd(e.target.value)}
          />
          <input
            type="submit"
            value="Añadir"
            className="btn btn-primary w-100"
            disabled={!valueAdd.length}
          />
        </fieldset>
      </form>
      <form className="col-6 mb-3" onSubmit={handleSubmitSearch}>
        <fieldset>
          <label htmlFor="fsearch" className="form-label">
            Buscar tarea:
            {errorSearch?.danger && tasksData?.length !== 0 && (
              <span className="text-danger"> No hay coincidencias</span>
            )}
            {errorSearch?.success && (
              <span className="text-success"> Hay coincidencias</span>
            )}
            {tasksData?.length === 0 && (
              <span className="text-danger"> No hay elementos a buscar.</span>
            )}
          </label>

          <input
            type="text"
            className={`form-control mb-3`}
            name="fsearch"
            id="fsearch"
            placeholder="Buscador por palabras."
            value={valueSearch}
            onChange={(e) => {
              setValueSearch(e.target.value);
            }}
          />
          <div>
            <input
              type="submit"
              value="Buscar"
              className="btn btn-primary col-6"
              disabled={!valueSearch?.length}
            />
            <input
              type="reset"
              value="Borrar"
              className="btn btn-danger col-6"
              disabled={!valueSearch?.length}
              onClick={() => {
                setValueSearch("");
              }}
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Task;
