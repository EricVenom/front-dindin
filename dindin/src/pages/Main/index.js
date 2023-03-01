import { Route, Routes } from "react-router-dom";
import Header from '../../components/Header';
import Home from "../Home";
import SignIn from '../SignIn';
import SignUp from '../SignUp';

import './style.css';

export default function Main() {
    return (
        <>
            <Header></Header>
            <div className='container'>

                <Routes>
                    <Route path='/'>
                        <Route path='/' element={<SignIn />} />
                        <Route path='/login' element={<SignIn />} />
                    </Route>

                    <Route path='/signup' element={<SignUp />} />

                    <Route path='/home' element={<Home />} />
                </Routes>
            </div>
        </>
    )
};