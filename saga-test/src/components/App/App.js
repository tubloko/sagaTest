import React, {useEffect} from "react";
import axios from 'axios';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';

import TasksList from "../TaskList";
import Login from "../Login";
import Register from "../Register";
import MainPage from "../MainPage";

import {tasksLoading} from '../../actions/tasks';
import {removeUserSession, getToken, setUserSession} from "../../utils/common";

import "./App.css";

const App = ({dispatch}) => {

    useEffect(() => {
        const token = getToken();
        if (!token) {
            return;
        }

        axios.get(`http://localhost:3001/checkToken?token=${token}`).then(response => {
            setUserSession(response.data.token, response.data.user);
        }).catch(error => {
            removeUserSession();
        });
    }, []);

    useEffect(() => {
        dispatch(tasksLoading());
    }, [dispatch]);

    const handleLogout = () => {
        removeUserSession();
    };

    console.log(getToken());

    return (
        <Router>
            <div className="container">
                <div className="row mt-2">
                    <div className="col-12">
                        <Link to='/'>
                            <button className="btn ml-3 float-left">Main</button>
                        </Link>
                        {
                            getToken() ? (
                                <Link to='/'>
                                    <button className="btn btn-success float-right"
                                            onClick={handleLogout}>log out
                                    </button>
                                </Link>
                            ) : (
                                <div>
                                    <Link to='/login'>
                                        <button className="btn btn-success ml-3 float-right">Sign in</button>
                                    </Link>
                                    <Link to='/register'>
                                        <button className="btn btn-success float-right">Register</button>
                                    </Link>
                                </div>)
                        }
                    </div>
                </div>
                <div className='row'>
                    <h1 className='col-12 text-center mt-3 mb-3'>todo do...do... .</h1>
                </div>
                <Route exact path='/' component={MainPage}/>
                <Route exact path='/login' render={() => <Login/>}/>
                <Route exact path='/register' component={Register}/>
                <Route render={(props) => getToken() ? (<TasksList/>)
                    : <Redirect to={{ pathname: '/login', state: { from: props.location } }}/>}/>
            </div>
        </Router>
    );
};

export default connect()(App);
