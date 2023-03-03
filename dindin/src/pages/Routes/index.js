import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Header from '../../components/Header';
import Home from "../Home";
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import './style.css';


export default function MainRoutes() {
    function ProtectedRoutes({ redirectTo }) {
        const isLoggedIn = localStorage.token
        return isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} />;
    }

    return (
        <>
            <Header user='hi' />

            <div className='container'>

                <Routes>

                    <Route path='/' element={<SignIn />} />

                    <Route path='/signup' element={<SignUp />} />

                    <Route element={<ProtectedRoutes redirectTo={'/'} />}>
                        <Route path='/home' element={<Home />} />
                    </Route>

                    <Route path='*' element={<h1 style={{ color: 'white' }}>404 - Not found</h1>} />
                </Routes>
            </div>
        </>
    )
};