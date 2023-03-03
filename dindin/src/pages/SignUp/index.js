import './style.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

export default function SignUp() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [error, setError] = useState(false);
    const [message, setMessage] = useState('As senhas não correspondem.');

    function handleSubmit(e) {
        e.preventDefault()
        console.log('Clicou no submit')
        handleAddUser()
    }

    async function handleAddUser() {
        if (form.password !== form.confirmPassword) {
            setError(true);
            return
        }

        try {
            const { data } = await api.post('/usuario', {
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

            //adicionar redirecionamento para login!!!

        } catch (error) {
            setMessage(error.response.data.mensagem)
        }
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

                <Link to='/login'>Já tem cadastro? Clique aqui!</Link>
            </form>
        </div>
    )
}