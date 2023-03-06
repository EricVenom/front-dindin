import './style.css';
import Close from '../../assets/close.svg';
import { useEffect, useState } from 'react';
import api from '../../services/api';

export default function ModalAdd({ active, title, add }) {

    function handleSubmit(e) {
        e.preventDefault()
        if (add) {
            console.log('adding registry')
            //calls add endpoint
        }

        if (!add) {
            console.log('editing registry')
            //calls edit endpoint
        }
    }

    const [categories, setCategories] = useState([])

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
                        <input type='radio' name='transaction' value='entrada' className='input' />
                        <div>Entrada</div>
                    </label>

                    <label>
                        <input type='radio' name='transaction' value='saida' className='output' checked='checked' />
                        <div>Saida</div>
                    </label>
                </section>

                <label>Valor <input type='number' /></label>

                <label>Categoria
                    <select>
                        {categories.map((category) => <option
                            value={category.id}
                            key={category.id}
                        >
                            {category.descricao}
                        </option>)}
                    </select>
                </label>

                <label>Data <input type='date' /></label>

                <label>Descrição <input type='text' /></label>

                <button type='submit'>Confirmar</button>
            </form>
        </div>
    )
}