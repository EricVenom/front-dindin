import './style.css';
import logo from '../../assets/logo.svg';
import logout from '../../assets/logout.svg';
import profile from '../../assets/profile.svg';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EditProfile from '../EditProfile';

export default function Header({ username }) {
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem('token');
        navigate('/');
    }

    const [activeModal, setActiveModal] = useState(false);
    const [user, setUser] = useState(username);

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
                            onClick={() => setActiveModal(true)}
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
            {activeModal && <EditProfile active={setActiveModal} setUser={setUser} />}
        </header >
    )
}