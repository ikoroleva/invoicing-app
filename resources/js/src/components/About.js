import React, { useState, useEffect, useContext } from 'react';
import { logout } from '../actions/auth';
import UserContext from '../context/UserContext';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';

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
            <Dropdown>
                <Dropdown.Toggle variant="Secondary">
                    {user.name} <br />
                    {user.email}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item as="button"><div><Link to={`/userdetails`}>User details</Link></div></Dropdown.Item>
                    <Dropdown.Item as="button" onClick={() => handleLogout()}>Log out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            {/* <h3>
                Hi, {user.name || 'N/A'}
            </h3>

            <p>
                Your email address is {user.email}
            </p>

            <button type="button" onClick={() => handleLogout()}>Log out</button> */}

        </article>
    );
}

export default About;