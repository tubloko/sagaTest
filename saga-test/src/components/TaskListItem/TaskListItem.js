import React from "react";
import {connect} from 'react-redux';

import './TaskListItem.css';
import {deleteTaskLoading, updateTaskLoading} from "../../actions/tasks";
import {selectByFilter} from "../../selectors/selectorTasks";

const TaskListItem = ({tasksReducer, checkHandler, deleteTask}) => {

    console.log(tasksReducer);

    return (
        <form className='col-12'>
            <ul className="list-group-flush mt-3">
                {
                    tasksReducer.map(({taskId, done, task}) => (
                        <li className={`list-group-item taskListItem ${done ? 'done' : ''}`}
                            key={taskId}>

                            {task}
                            <button className='btn btn-outline-danger float-right'
                                    onClick={() => deleteTask(taskId)}>Delete
                            </button>
                            <button className="btn btn-outline-success float-right mr-3"
                                    onClick={() => checkHandler(taskId, done)}>Check
                            </button>
                        </li>
                    ))
                }
            </ul>
        </form>
    );
};

const mapStateToProps = (state) => {
    return {
        tasksReducer: selectByFilter(state)
    }
};

const mapDispatchToProps = (dispatch => {
    return {
        deleteTask: (id) => dispatch(deleteTaskLoading(id)),
        checkHandler: (taskId, done) => dispatch(updateTaskLoading(taskId, done)),
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskListItem);
