import HeaderLinks from './HeaderLinks';
import UserElement from './UserElement';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header>

            <div className='header-logo'>
                <Link to="home">
                    Logo</Link>
            </div>
            <div className='header-links-container'>
                <HeaderLinks />
                <UserElement />
            </div>

        </header>
    );
}

export default Header;