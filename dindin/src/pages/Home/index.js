import { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import './style.css';
import Filter from '../../assets/filter.svg';
import RowItem from '../../components/RowItem';
import ModalForm from '../../components/ModalForm';
import api from '../../services/api';

export default function Home({ loggedUser }) {

    const [itemList, setItemList] = useState([
        {
            id: 1,
            date: '01/09/21',
            weekday: 'Quarta',
            description: 'Venda dos brigadeiros',
            category: 'Pix',
            value: 10000,
            input: true
        },
        {
            id: 2,
            date: '02/09/21',
            weekday: 'Quinta',
            description: 'Saiu de casa',
            category: 'Lazer',
            value: 5850,
            input: false
        },
        {
            id: 3,
            date: '03/09/21',
            weekday: 'Sexta',
            description: 'Compras',
            category: 'Supermercado',
            value: 10040,
            input: false
        }
    ]);

    const [inputSum, setInputSum] = useState(0);

    const [outputSum, setOutputSum] = useState(0);

    const [activeModal, setActiveModal] = useState(false);

    const [editModal, setEditModal] = useState(false);

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
    }, [])

    useEffect(() => {
        const { inputList, outputList } = itemList.reduce((accumulator, item) => {
            if (item.input) {
                accumulator.inputList.push(item);
            } else {
                accumulator.outputList.push(item);
            }
            return accumulator;
        }, { inputList: [], outputList: [] });

        const sumInput = inputList.reduce((acc, item) => acc + item.value, 0);
        setInputSum(sumInput);

        const sumOutput = outputList.reduce((acc, item) => acc + item.value, 0);
        setOutputSum(sumOutput);

    }, [itemList]);

    function handleDeleteRow(id) {
        const newList = [...itemList]
        const itemIndex = newList.findIndex((item) => item.id === id);
        newList.splice(itemIndex, 1)
        setItemList(newList);
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
                            value={`R$ ${(item.valor / 100).toFixed(2)}`}
                            input={item.tipo}
                            del={handleDeleteRow}
                            active={setEditModal}
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
                                <span className='input'>{`R$ ${(inputSum / 100).toFixed(2)}`}</span>
                                <span className='output'>{`R$ ${(outputSum / 100).toFixed(2)}`}</span>
                                <span>0</span>
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
                    {editModal && <ModalForm active={setEditModal} title='Editar Registro' add={false} />}
                </div>
            </div>
        </div>
    )
}