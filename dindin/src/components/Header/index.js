import './style.css';
import logo from '../../assets/logo.svg';

export default function Header() {
    return (
        <header>
            <div className='header-left'>
                <img src={logo} alt='logo' />
                <h4>Dindin</h4>
            </div>

            <div className='header-right'>

            </div>
        </header>
    )
}