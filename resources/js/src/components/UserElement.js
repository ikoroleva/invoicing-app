import UserContext from '../context/UserContext';
import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';

import About from "./About";

const UserElement = () => {

    const { user } = useContext(UserContext)

    return (
        <div className='header-user-container'>
            {
                user ?
                    <Fragment>
                        <About />
                    </Fragment>
                    :
                    <Fragment>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </Fragment>
            }
        </div>
    );
}

export default UserElement;