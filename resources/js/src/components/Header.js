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
            <HeaderLinks />
            <UserElement />

        </header>
    );
}

export default Header;