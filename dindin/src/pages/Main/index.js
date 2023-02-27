import Header from '../../components/Header';
import SignUp from '../SignUp';
import './style.css';

export default function Main() {
    return (
        <>
            <Header></Header>
            <div className='container'>
                <SignUp />
            </div>
        </>
    )
};