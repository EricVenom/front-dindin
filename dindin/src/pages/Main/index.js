import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Header from '../../components/Header';
import Home from "../Home";
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import './style.css';

function ProtectedRoutes({ redirectTo }) {
    const isAuth = true;
    return isAuth ? <Outlet /> : <Navigate to={redirectTo} />;
}

export default function Main() {
    return (
        <>
            <Header>

            </Header>

            <div className='container'>

                <Routes>
                    <Route path='/'>
                        <Route path='/' element={<SignIn />} />
                        <Route path='/login' element={<SignIn />} />
                    </Route>

                    <Route path='/signup' element={<SignUp />} />

                    <Route element={<ProtectedRoutes redirectTo={'/login'} />}>
                        <Route path='/home' element={<Home />} />
                    </Route>

                    <Route path='*' element={<h1>404 - Not found</h1>} />
                </Routes>
            </div>
        </>
    )
};