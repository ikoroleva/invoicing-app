import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';


const BrowserLinks = () => {

    const { user } = useContext(UserContext)

    return (
        <div className="browser-links">
            {
                user ? <Fragment>
                    <Link to="/about">About</Link>
<<<<<<< HEAD
                    <Link to="/userdetails">User</Link>
=======
                    <Link to="/dashboard">Main Dashboard</Link>
>>>>>>> e02e142635a13749eefc608f4defdc79455d8f67
                </Fragment> : <Fragment>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </Fragment>
            }

        </div>
    );
}

export default BrowserLinks;