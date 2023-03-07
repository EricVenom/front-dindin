import './style.css';
import Close from '../../assets/close.svg';
import { useEffect, useState } from 'react';
import api from '../../services/api';

export default function ModalAdd({ active, title, add, id }) {

    async function handleSubmit(e) {
        e.preventDefault()
        if (add) {
            try {
                await api.post('/transacao', {
                    tipo: form.tipo,
                    descricao: form.descricao,
                    valor: form.valor,
                    data: form.data,
                    categoria_id: form.categoria_id
                }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })

                setTimeout(() => {
                    active(false)
                }, 500);
            } catch (error) {
                console.log(error)
            }
        }

        if (!add) {
            try {
                await api.put(`/transacao/${id}`, {
                    tipo: form.tipo,
                    descricao: form.descricao,
                    valor: form.valor,
                    data: form.data,
                    categoria_id: form.categoria_id
                }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })

                setTimeout(() => {
                    active(false)
                }, 500);
            } catch (error) {
                console.log(error)
            }
        }
    }

    const [categories, setCategories] = useState([])

    const [form, setForm] = useState({
        tipo: 'saida',
        descricao: '',
        valor: '',
        data: '',
        categoria_id: '1'
    })

    useEffect(() => {
        async function getCategories() {
            try {
                const { data } = await api.get('/categoria', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });

                setCategories(data);

            } catch (error) {
                console.log(error.message);
            }
        }

        getCategories()
    }, [])

    return (
        <div className='backdrop'>
            <form
                className='modal'
                onSubmit={handleSubmit}
            >
                <h5>{title}</h5>
                <img
                    src={Close}
                    alt='closing button'
                    onClick={() => active(false)}
                />

                <section>
                    <label>
                        <input
                            type='radio'
                            name='transaction'
                            value='entrada'
                            className='input'
                            onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                        />
                        <div>Entrada</div>
                    </label>

                    <label>
                        <input
                            type='radio'
                            name='transaction'
                            value='saida'
                            className='output'
                            onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                            defaultChecked
                        />
                        <div>Saida</div>
                    </label>
                </section>

                <label>Valor
                    <input
                        type='number'
                        value={form.valor}
                        onChange={(e) => setForm({ ...form, valor: e.target.value })}
                    />
                </label>

                <label>Categoria
                    <select
                        onChange={(e) => setForm({ ...form, categoria_id: e.target.value })}
                    >

                        {categories.map((category) => <option
                            value={category.id}
                            key={category.id}
                        >
                            {category.descricao}
                        </option>)}
                    </select>
                </label>

                <label>Data
                    <input
                        type='date'
                        value={form.data}
                        onChange={(e) => setForm({ ...form, data: e.target.value })}
                    />
                </label>

                <label>Descrição
                    <input
                        type='text'
                        value={form.descricao}
                        onChange={(e) => setForm({ ...form, descricao: e.target.value })}
                    />
                </label>

                <button type='submit'>Confirmar</button>
            </form>
        </div>
    )
}