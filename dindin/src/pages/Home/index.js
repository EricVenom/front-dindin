import { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import './style.css';
import Filter from '../../assets/filter.svg';
import RowItem from '../../components/RowItem';
import ModalForm from '../../components/ModalForm';
import api from '../../services/api';

export default function Home({ loggedUser }) {
    const [inputSum, setInputSum] = useState(0);
    const [outputSum, setOutputSum] = useState(0);
    const [activeModal, setActiveModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [editId, setId] = useState('');
    const [user, setUser] = useState({ id: '', nome: '', email: '', transacoes: [] })

    useEffect(() => {
        async function getLoggedUser() {
            try {
                const { data: user } = await api.get('/usuario', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });

                const { data: transactions } = await api.get('/transacao', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })

                setUser({
                    id: user.id,
                    nome: user.nome,
                    email: user.email,
                    transacoes: transactions
                })
                loggedUser(user.nome)
            } catch (error) {
                return error.message
            }
        }
        getLoggedUser();
    }, [activeModal, editModal])

    useEffect(() => {
        const { inputList, outputList } = user.transacoes.reduce((accumulator, item) => {
            if (item.tipo === 'entrada') {
                accumulator.inputList.push(item);
            } else {
                accumulator.outputList.push(item);
            }
            return accumulator;
        }, { inputList: [], outputList: [] });

        const sumInput = inputList.reduce((acc, item) => acc + item.valor, 0);
        setInputSum(sumInput);

        const sumOutput = outputList.reduce((acc, item) => acc + item.valor, 0);
        setOutputSum(sumOutput);

    }, [user.transacoes]);

    async function handleDeleteRow(id) {
        const newList = [...user.transacoes]
        const itemIndex = newList.findIndex((item) => item.id === id);
        newList.splice(itemIndex, 1)
        setUser({ ...user, transacoes: newList });

        try {
            await api.delete(`transacao/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className='container-home'>
            <div className='filter-container'>
                <button type='button' className='filter'><img src={Filter} alt='filter button' /> Filtrar</button>
            </div>

            <div className='container-divider'>
                <div className='home-left'>

                    <div className='table-container'>

                        <div className='table-row table-header'>
                            <span className='row-item'>Data</span>
                            <span className='row-item'>Dia da semana</span>
                            <span className='row-item'>Descrição</span>
                            <span className='row-item'>Categoria</span>
                            <span className='row-item'>Valor</span>
                            <div className='row-item'></div>
                        </div>

                        {user.transacoes.map((item) => <RowItem
                            id={item.id}
                            key={item.id}
                            date={format(parseISO(item.data), 'dd/MM/yyyy')}
                            weekday={format(parseISO(item.data), 'eeee')}
                            description={item.descricao}
                            category={item.categoria_nome}
                            value={`R$ ${(item.valor).toFixed(2)}`}
                            input={item.tipo}
                            del={handleDeleteRow}
                            active={setEditModal}
                            setId={setId}
                        />)}

                    </div>
                </div>

                <div className='home-right'>

                    <div className='description'>
                        <h4>Resumo</h4>

                        <div className='description-balance'>

                            <div>
                                <span>Entradas</span>
                                <span>Saídas</span>
                                <span>Saldo</span>
                            </div>

                            <div>
                                <span className='input'>{`R$ ${(inputSum).toFixed(2)}`}</span>
                                <span className='output'>{`R$ ${(outputSum).toFixed(2)}`}</span>
                                <span>{`R$ ${((inputSum) - (outputSum)).toFixed(2)}`}</span>
                            </div>

                        </div>

                    </div>

                    <button
                        type='button'
                        onClick={() => setActiveModal(true)}
                    >
                        Adicionar Registro
                    </button>

                    {activeModal && <ModalForm active={setActiveModal} title='Adicionar Registro' add={true} />}
                    {editModal && <ModalForm active={setEditModal} title='Editar Registro' add={false} id={editId} />}
                </div>
            </div>
        </div>
    )
}