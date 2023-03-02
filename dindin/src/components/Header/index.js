import './style.css';
import logo from '../../assets/logo.svg';
import logout from '../../assets/logout.svg';

export default function Header() {

    return (
        <header>
            <div className='header-left'>
                <img src={logo} alt='logo' />
                <h4>Dindin</h4>
            </div>

            <div className='header-right'>
                {window.location.pathname === '/home' && <a href='/'><img src={logout} alt='logout' /></a>}
            </div>
        </header>
    )
}