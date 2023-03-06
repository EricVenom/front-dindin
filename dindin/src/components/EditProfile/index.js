import Close from '../../assets/close.svg';
import { useState } from 'react';
import api from '../../services/api';

export default function EditProfile({ active, setUser }) {

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            if (confirmPassword !== password) {
                return;
            }

            await api.put('/usuario', {
                nome: name,
                email: email,
                senha: password
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })

            setTimeout(() => {
                setUser(name)
                active(false)
            }, 500)
        } catch (error) {
            setError(true)
            setMessage(error.message)
        }
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');

    return (
        <div className='backdrop'>
            <form
                className='modal'
                onSubmit={handleSubmit}
            >
                <h5>Editar Perfil</h5>
                <img
                    src={Close}
                    alt='closing button'
                    onClick={() => active(false)}
                />

                <label>Nome
                    <input
                        name='name'
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>

                <label>Email
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

                <label>Confirmação de senha
                    <input
                        name='password2'
                        type='password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </label>

                {error && <span>{message}</span>}

                <button type='submit'>Confirmar</button>
            </form>
        </div>
    )
}