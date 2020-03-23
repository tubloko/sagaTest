import axios from 'axios';

export default class API {
    async fetchData() {
        const response = await fetch('http://localhost:3001/api/getAllTask', {mode: 'cors'});
        return await response.json();
    }

    deleteTask(action) {
         axios.post("http://127.0.0.1:3001/api/deleteTask", {id: action.id})
             .then(() => console.log('data was sent'))
             .catch((e) => console.log(e));
    }

    addTask(task) {
        axios.post('http://localhost:3001/api/addTask', {task: task})
            .then(() => console.log('data was sent'))
            .catch(e => console.log(e));
    }

    checkTask({payload}) {
        const {id, done} = payload;
        axios.post("http://127.0.0.1:3001/api/checkDone", {id: id, done: done})
            .then(() => console.log('data was sent'))
            .catch((e) => console.log(e));
    }
};
