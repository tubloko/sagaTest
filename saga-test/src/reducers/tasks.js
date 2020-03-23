import {
    ADD_TASK_LOADING,
    CHECK_TASK_LOADING,
    DELETE_TASK_LOADING,
    FETCH_TASKS_LOADING,
    FETCH_TASKS_SUCCESS,
} from "../actionType/tasksType";

const initialStateLoading = {
    error: null
};

const tasks = (state = [], action) => {
    switch (action.type) {
        case FETCH_TASKS_SUCCESS:
            return action.payload;

        default:
            return state;
    }
};

const taskLoading = (state = initialStateLoading, action) => {
    switch (action.type) {
        case FETCH_TASKS_LOADING:
            return {
                isLoading: true
            };
        case ADD_TASK_LOADING:
            console.log({...state});
            return {
                ...state,
                isAdding: true
            };
        case CHECK_TASK_LOADING:
            return {
                ...state,
                isUpdating: true
            };
        case DELETE_TASK_LOADING:
            return {
                ...state,
                isDeleting: true
            };

        default:
            return state
    }
};

export {
    tasks,
    taskLoading,
}
