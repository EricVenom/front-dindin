import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';

import api from '../../services/api';
import Header from '../../components/Header';
import Home from "../Home";
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import './style.css';

export default function Main() {
    const [user, setUser] = useState({ id: '', nome: '', email: '' })

    useEffect(() => {
        async function getLoggedUser() {
            try {
                const { data } = await api.get('/usuario', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });

                setUser({
                    id: data.id,
                    nome: data.nome,
                    email: data.email
                })
            } catch (error) {
                return error.message
            }
        }

        getLoggedUser();
    }, [])

    function ProtectedRoutes({ redirectTo }) {
        return user.id ? <Outlet /> : <Navigate to={redirectTo} />;
    }


    return (
        <>
            <Header>
                <span>{user.nome}</span>
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