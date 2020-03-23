import {
  FETCH_TASKS_LOADING,
  FETCH_TASKS_SUCCESS,
  ADD_TASK_LOADING,
  DELETE_TASK_LOADING,
  CHECK_TASK_LOADING,
  SHOW_ACTIVE_TASK,
  SHOW_ALL_TASK,
  SHOW_DONE_TASK,
} from "../actionType/tasksType";

export const tasksLoading = () => ({type: FETCH_TASKS_LOADING});
export const tasksSuccess = (tasks) => ({type: FETCH_TASKS_SUCCESS, payload: tasks});
export const addTaskLoading = (task) => ({type: ADD_TASK_LOADING, task});
export const updateTaskLoading = (id, done) => ({type: CHECK_TASK_LOADING, payload: {id, done }});
export const deleteTaskLoading = (id) => ({type: DELETE_TASK_LOADING, id});
export const changeFilterShowAll = () => ({type: SHOW_ALL_TASK});
export const changeFilterShowDone = () => ({type: SHOW_DONE_TASK});
export const changeFilterShowActive = () => ({type: SHOW_ACTIVE_TASK});


