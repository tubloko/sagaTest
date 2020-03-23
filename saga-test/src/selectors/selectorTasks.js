import { SHOW_ALL_TASK, SHOW_DONE_TASK, SHOW_ACTIVE_TASK } from "../actionType/tasksType";

export const selectFilterType = (state) => state.filterReducer;

export const selectByFilter = (state) => {

    const filter = selectFilterType(state);

    if(filter === SHOW_ALL_TASK){
        return state.tasks;
    } else if(filter === SHOW_ACTIVE_TASK){
        return state.tasks.filter(task => !task.done);
    } else if (filter === SHOW_DONE_TASK){
        return state.tasks.filter(task => task.done);
    }
};
