import './style.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';

export default function SignUp() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    async function handleAddUser() {
        if (form.password !== form.confirmPassword) {
            setMessage('Senhas não correspondem.')
            setError(true);
            return
        }

        try {
            await api.post('/usuario', {
                nome: form.name,
                email: form.email,
                senha: form.password
            });

            setError(false);
            setForm({
                name: "",
                email: "",
                password: "",
                confirmPassword: ""
            })

            setTimeout(() => {
                navigate("/");
            }, 1500)

        } catch (error) {
            setMessage(error.response.data.mensagem)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        handleAddUser()
    }

    return (
        <div className='container-sign-up'>
            <form onSubmit={handleSubmit}>
                <h4>Cadastre-se</h4>
                <label>Nome
                    <input
                        name='name'
                        type='text'
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                </label>

                <label>E-mail
                    <input
                        name='email'
                        type='email'
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                </label>

                <label>Senha
                    <input
                        name='password'
                        type='password'
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />
                </label>

                <label>Confirmação de senha
                    <input
                        name='password2'
                        type='password'
                        value={form.confirmPassword}
                        onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                    />
                </label>

                {error && <span style={{ color: 'red' }}>{`${message}`}</span>}

                <button type='submit'>Cadastrar</button>

                <Link to='/'>Já tem cadastro? Clique aqui!</Link>
            </form>
        </div>
    )
}