import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import createSagaMiddleware from "redux-saga";
import {createStore, applyMiddleware, compose, combineReducers} from "redux";

import App from "./components/App";
import rootSaga from "./sagas/rootSaga";
import filterReducer from "./reducers/filterReducer";
import {tasks, taskLoading} from "./reducers/tasks";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    combineReducers({
        tasks,
        taskLoading,
        filterReducer
    }),
    compose(
        applyMiddleware(sagaMiddleware),
    ),
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);
