import BrowserLinks from './BrowserLinks';
import wallet from '/images/wallet.svg';

const Header = () => {

    return (
        <header>

            <div className='header-logo'>
                <img src={wallet} alt="wallet icon" />
            </div>

        </header>
    );
}

export default Header;