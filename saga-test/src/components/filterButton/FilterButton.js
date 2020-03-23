import React from "react";
import {connect} from 'react-redux';

import {
    changeFilterShowActive,
    changeFilterShowAll,
    changeFilterShowDone} from "../../actions/tasks";
import {SHOW_ACTIVE_TASK, SHOW_ALL_TASK, SHOW_DONE_TASK} from "../../actionType/tasksType";

const FilterButton = ({dispatch, filter}) => {

    return (
        <div className="btn-group">
            <button className={`btn btn-outline-success ${filter === SHOW_DONE_TASK ? 'active' : ''}`}
                    onClick={() => dispatch(changeFilterShowDone())}>DONE
            </button>
            <button className={`btn btn-outline-success ${filter === SHOW_ALL_TASK ? 'active' : ''}`}
                    onClick={() => dispatch(changeFilterShowAll())}>ALL
            </button>
            <button className={`btn btn-outline-success ${filter === SHOW_ACTIVE_TASK ? 'active' : ''}`}
                    onClick={() => dispatch(changeFilterShowActive())}>ACTIVE
            </button>
        </div>
    );
};

const mapStateToProps = (state => {
    return {
        filter: state.filter,
    }
});

export default connect(mapStateToProps)(FilterButton);
