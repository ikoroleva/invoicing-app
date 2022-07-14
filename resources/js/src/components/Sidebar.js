import home from "/images/home.svg";
import document from "/images/document.svg";
import people from '/images/people.svg';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';
import React, { Fragment, useContext } from 'react';


const Sidebar = () => {
    const { user } = useContext(UserContext)
    return (
        <aside>

            {user &&
                <div className="navs">
                    <Link to="/dashboard"><img src={home} alt="home icon" /></Link>
                    <img src={document} alt="document icon" />
                    {/* <Link to={`./clients/${number}`}><img src={people} alt="users icon" /></Link> */}
                </div>
            }


            {/* <h3>
                user
            </h3> */}
        </aside>
    );
}

export default Sidebar;