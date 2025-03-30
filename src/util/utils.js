export const editTasks = (obj, element) => {
  const position = obj.findIndex((el) => el === element);
  const newObj = obj.find((el) => el === element);
  newObj.editTask = true;
  obj[position] = newObj;
  return obj;
};

export const saveTask = (lastElement, obj, newElement) => {
  const dataResp = lastElement;
  const position = obj.findIndex((el) => el === lastElement);
  dataResp.editTask = false;
  dataResp.checkTask = false;
  obj[position] = dataResp;
  if(!obj.find((el) => el?.nameTask === newElement?.nameTask)){
    newElement.editTask = false;
    newElement.checkTask = false;
    obj[position] = newElement;

  }
  return obj;
};
export const deleteTask = (obj, element) => obj.filter((e) => e != element);

export const resetEditTask = (obj) =>
  obj.map((elem) => {
    elem.editTask = false;
  });

export const resetCheckTask = (obj, element, status = false) => {
  const position = obj.findIndex((el) => el === element);
  const newObj = obj.find((el) => el === element);
  newObj.checkTask = status;
  obj[position] = newObj;
  return obj;
};

export const addTask = (obj, elem) => {
  if (!obj.find((element) => element.nameTask === elem))
    return [...obj, { nameTask: elem, checkTask: false, editTask: false }];
  return obj;
};
export const searchTask = (obj, elem) => [
  ...obj,
  { nameTask: elem, checkTask: false, editTask: false },
];

export const disabledTask = (defaultView, elem) =>
  !defaultView && !elem?.editTask;

export const getEditTask = (obj) => obj.find((el) => el?.editTask);

export const seachTasks = (obj, searchName) => {
  return obj?.filter((element) => element?.nameTask?.includes(searchName));
};

export const validSearch = (objSearch, search) => {
  let objResp = {
    danger: false,
    success: false,
  };
  if (!!search?.length && !!objSearch?.length)
    objResp = {
      danger: false,
      success: true,
    };
  if (!!search?.length && !objSearch?.length)
    objResp = {
      danger: true,
      success: false,
    };
  return objResp;
};
