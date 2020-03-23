import {call, put, takeEvery} from "redux-saga/effects";
import {
    FETCH_TASKS_LOADING,
    DELETE_TASK_LOADING,
    ADD_TASK_LOADING,
    CHECK_TASK_LOADING
} from "../actionType/tasksType";
import {tasksSuccess} from "../actions/tasks";

import API from "../API/API";

const _API = new API();

function* fetchTasks() {
    const tasks = yield call(_API.fetchData);
    if (tasks) yield put(tasksSuccess(tasks));
}

function* deleteTask(action) {
    yield call(_API.deleteTask, action);
}

function* addTask(action) {
    yield call(_API.addTask, action.task);
}

function* updateTask(action) {
    yield call(_API.checkTask, action);
}

export function* watchFetchData() {
    yield takeEvery(FETCH_TASKS_LOADING, fetchTasks);
}

export function* watchDeleteData() {
    yield takeEvery(DELETE_TASK_LOADING, deleteTask);
}

export function* watchAddData() {
    yield takeEvery(ADD_TASK_LOADING, addTask);
}

export function* watchUpdateData() {
    yield takeEvery(CHECK_TASK_LOADING, updateTask);
}
