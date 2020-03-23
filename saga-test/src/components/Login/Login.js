import React, {useState} from "react";
import axios from 'axios';
import {useFormik} from 'formik';

import {setUserSession} from "../../utils/common";

const Login = (props) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const formik = useFormik({
        initialValues: {
            name: '',
            password: '',
        },
        onSubmit: values => {
            setLoading(true);
            setError(null);

            const {name, password} = values;
            axios.post("http://127.0.0.1:3001/login", {name: name, password: password})
                .then((response) => {
                    setLoading(false);
                    if (response.data.status === 401) {
                        throw response;
                    }
                    setUserSession(response.data.token, response.data.user);
                    props.history.push('/todoApp');
                }).catch(err => {
                    setLoading(false);
                    if (err.data.status === 401) setError(err.data.message);
                    else setError("Something went wrong.");
                });
        },
    });

    return (
        <form className='col-6 mt-5' onSubmit={formik.handleSubmit}>
            <div className="form-group">
                <label htmlFor='name'>Login</label>
                <input className="form-control" placeholder="Enter login"
                       id='name'
                       name='name'
                       required
                       onChange={formik.handleChange}
                       value={formik.values.name}/>
            </div>
            <div className="form-group">
                <label htmlFor='password'>Password</label>
                <input type='password' className="form-control" placeholder="Enter login"
                       id='password'
                       name='password'
                       required
                       onChange={formik.handleChange}
                       value={formik.values.password}/>
            </div>
            <p>{error && <><small style={{color: 'red'}}>{error}</small></>}</p>
            <button type="submit" className="btn btn-primary">{loading ? 'Loading...' : 'Login'}</button>
        </form>
    );
};

export default Login;
