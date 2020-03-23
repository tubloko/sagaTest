import { SHOW_ACTIVE_TASK, SHOW_ALL_TASK, SHOW_DONE_TASK } from "../actionType/tasksType";

const initVisible = SHOW_ALL_TASK;

export default (state = initVisible, action) => {
    switch (action.type) {
        case SHOW_ALL_TASK: {
            return SHOW_ALL_TASK;
        }

        case SHOW_ACTIVE_TASK: {
            return SHOW_ACTIVE_TASK;
        }

        case SHOW_DONE_TASK: {
            return SHOW_DONE_TASK;
        }
        default: return state;
    }
}
