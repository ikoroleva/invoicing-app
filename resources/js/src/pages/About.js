import React, { useState, useEffect, useContext } from 'react';
import { logout } from '../actions/auth';
import UserContext from '../context/UserContext';

const About = () => {

    const { user, setUser } = useContext(UserContext);

    const handleLogout = async () => {

        const res = await logout()

        if (res) {
            return console.log(res)
        }
        setUser(null)
    }


    if (!user) return null;

    return (
        <article>

            <h1>
                Hi, {user.name || 'N/A'}
            </h1>

            <p>
                Your email address is {user.email}
            </p>

            <button type="button" onClick={() => handleLogout()}>Log out</button>

        </article>
    );
}

export default About;