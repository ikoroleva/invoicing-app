import UserContext from "../context/UserContext";
import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import About from "./About";

const UserElement = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="header-user-container">
            {user ? (
                <Fragment>
                    <About />
                </Fragment>
            ) : (
                <Fragment>
                    <Button variant="primary"><Link to="/login">Log in</Link></Button>
                    {/* <Link to="/register">Register</Link> */}
                </Fragment>
            )}
        </div>
    );
};

export default UserElement;
