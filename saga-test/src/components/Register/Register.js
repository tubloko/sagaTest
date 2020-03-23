import React from "react";
import {useFormik} from "formik";
import axios from "axios";

const Register = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            password: '',
        },
        onSubmit: values => {
            const {name, password} = values;
            axios.post("http://127.0.0.1:3001/register", {name: name, password: password})
                .then(() => console.log('register success'))
                .catch(err => console.log(err));
        },
    });


    return (
            <form className='col-6' onSubmit={formik.handleSubmit}>
                <h2 className='mt-2 mb-2'>Register</h2>
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
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
    );
};

export default Register;
