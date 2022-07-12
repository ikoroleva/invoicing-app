import React, { Fragment, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserContext from '../context/UserContext';
import Login from '../pages/Login';
import Register from '../pages/Register';
import BrowserLinks from './BrowserLinks';
import About from '../pages/About';
import MainDashboard from '../pages/MainDashboard';

const MainContent = () => {

    const { user } = useContext(UserContext)

    return (
        <main>
            <Router>
                <BrowserLinks />
                <Routes>
                    {
                        user ? <Fragment>
                            <Route exact path="/about" element={<About />} />
                            <Route exact path="/dashboard" element={<MainDashboard/>} />
                        </Fragment> : 
                        <Fragment>
                            <Route exact path="/login" element={<Login />} />

                            <Route exact path="/register" element={<Register />} />
                        </Fragment>
                    }

                </Routes>

            </Router>
            <p>This is the main content</p>
        </main>
    );
}

export default MainContent;