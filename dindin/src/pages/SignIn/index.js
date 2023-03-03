import './style.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError(false)
            setEmail('')
            setPassword('')
            await handleLogin()
        } catch (error) {
            console.log(error)
        }
    }

    async function handleLogin() {
        try {
            const { data } = await api.post('/login', {
                email,
                senha: password
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });

            localStorage.setItem('token', data.token);

            setTimeout(() => {
                navigate('/home')
            }, 1500);

        } catch (error) {
            setError(true)
            setErrorMessage(error.response.data.mensagem)
        }
    }

    return (
        <div className='container-sign-in'>
            <div className='sign-in-left'>
                <h1>Controle suas <span>finanças</span>, sem planilha chata.</h1>
                <p>Organizar as suas finanças nunca foi tão fácil, com o DINDIN, você tem tudo num único lugar e em um clique de distância.</p>

                <Link to='/signup'>
                    <button
                        type='button'
                        className='btn-purple'
                    >
                        Cadastre-se
                    </button>
                </Link>
            </div>

            <div className='sign-in-right'>
                <form onSubmit={handleSubmit}>
                    <h3>Login</h3>
                    <label>E-mail
                        <input
                            name='email'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>

                    <label>Senha
                        <input
                            name='password'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>

                    {error && <span className='span-error'>{errorMessage}</span>}

                    <button type='submit' className='btn-purple'>Entrar</button>
                </form>
            </div>
        </div>
    )
}