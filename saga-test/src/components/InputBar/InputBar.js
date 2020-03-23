import React, {useState} from "react";
import {connect} from 'react-redux';

import {addTaskLoading} from "../../actions/tasks";

const InputBar = ({dispatch}) => {

    const [task, setTask] = useState('');

    const handleSubmit = () => {
        dispatch(addTaskLoading(task));
        setTask('');
    };

    return (
        <form onSubmit={handleSubmit} className="input-group input-group-lg mt-3 mb-2 col-12">
            <input type="text" className="form-control"
                   id='name'
                   name='name'
                   placeholder="Just do it..."
                   value={task}
                   onChange={(e) => setTask(e.target.value)}/>
            <div className="input-group-prepend">
                <button className="input-group-text btn btn-secondary">Add Task</button>
            </div>
        </form>
    );
};

export default connect()(InputBar);
