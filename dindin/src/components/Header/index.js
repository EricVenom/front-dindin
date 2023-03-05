import './style.css';
import logo from '../../assets/logo.svg';
import logout from '../../assets/logout.svg';
import profile from '../../assets/profile.svg';

import { useNavigate } from 'react-router-dom';

export default function Header({ user }) {
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem('token');
        navigate('/');
    }

    return (
        <header>
            <div className='header-left'>
                <img src={logo} alt='logo' onClick={() => navigate('/')} />
                <h4>Dindin</h4>
            </div>

            <div className='header-right'>
                {localStorage.getItem('token') &&
                    <>
                        <img
                            src={profile}
                            alt='profile icon'
                        />
                        <span>{user}</span>
                        <img
                            src={logout}
                            alt='logout icon'
                            onClick={() => handleLogout()}
                        />
                    </>
                }
            </div>
        </header >
    )
}