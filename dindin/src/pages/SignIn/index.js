import './style.css';
import { useState } from 'react';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    function handleSubmit(e) {
        e.preventDefault()
        console.log('Clicou no enviar')
        if (!email || !password) {
            setError(true)
        }

        if (email && password) {
            setError(false)
            setEmail('')
            setPassword('')
        }
    }

    return (
        <div className='container-sign-in'>
            <div className='sign-in-left'>
                <h1>Controle suas <span>finanças</span>, sem planilha chata.</h1>
                <p>Organizar as suas finanças nunca foi tão fácil, com o DINDIN, você tem tudo num único lugar e em um clique de distância.</p>
                <button type='button' className='btn-purple'>Cadastre-se</button>
            </div>

            <div className='sign-in-right'>
                <form onSubmit={handleSubmit}>
                    <h3>Login</h3>
                    <label>E-mail
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>

                    <label>Password
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>

                    {error && <span className='span-error'>Forneça informações válidas.</span>}

                    <button type='submit' className='btn-purple'>Entrar</button>
                </form>
            </div>
        </div>
    )
}