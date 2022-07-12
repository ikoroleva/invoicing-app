import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { loadUser } from '../actions/auth';
import UserContext from '../context/UserContext';

export default function Register(props) {

    const [values, setValues] = useState({
        email: '',
        name: '',
        password: '',
        password_confirmation: ''
    })

    const { setUser } = useContext(UserContext);

    const handleSubmit = async (event) => {

        event.preventDefault();

        const response = await axios.post('/register', values);
        const response_data = response.data;

        if (response_data) {
            return console.log(response_data)
        }

        const userData = await loadUser()

        setUser(userData)

    }

    const handleChange = (event) => {
        setValues(previous_values => {
            return ({
                ...previous_values,
                [event.target.name]: event.target.value
            });
        });
    }

    return (
        <form action="/register" method="post" onSubmit={handleSubmit}>

            <h1>
                Register
            </h1>

            <span>Name</span>

            <input type="text" autoComplete='off' name="name" value={values.name} onChange={handleChange} />

            <span>Email</span>

            <input type="email" autoComplete='off' name="email" value={values.email} onChange={handleChange} />

            <span>Password</span>

            <input type="password" autoComplete='off' name="password" value={values.password} onChange={handleChange} />

            <span>Password Confirmation</span>

            <input type="password" autoComplete='off' name="password_confirmation" value={values.password_confirmation} onChange={handleChange} />

            <button>Register</button>

        </form>
    );
}