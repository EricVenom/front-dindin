import './style.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault()
        console.log('Clicou no submit')
    }

    return (
        <div className='container-sign-up'>
            <form onSubmit={handleSubmit}>
                <h4>Cadastre-se</h4>
                <label>Nome
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>

                <label>E-mail
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label>Senha
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>

                <label>Confirmação de senha <input type='password' /></label>

                <button type='submit'>Cadastrar</button>

                <Link to='/login'>Já tem cadastro? Clique aqui!</Link>
            </form>
        </div>
    )
}