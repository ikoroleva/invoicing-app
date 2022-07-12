import axios from 'axios';
import React, { useState, useContext } from 'react';
import { loadUser } from '../actions/auth';
import UserContext from '../context/UserContext';

export default function Login() {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const { setUser } = useContext(UserContext);

    const handleSubmit = async (event) => {

        event.preventDefault();

        const response = await axios.post('/login', values);
        const response_data = response.data;

        if (typeof response_data === 'string') {
            return console.log(response_data)
        }

        const data = await loadUser()

        setUser(data)

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
        <form action="/login" method="post" onSubmit={handleSubmit}>
            <h1>
                Login
            </h1>

            <span>Email</span>
            <input type="email" autoComplete='off' name="email" value={values.email} onChange={handleChange} />

            <span>Password</span>
            <input type="password" autoComplete='off' name="password" value={values.password} onChange={handleChange} />

            <button>Login</button>

        </form>
    );
}