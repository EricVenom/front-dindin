import './style.css';
import Filter from '../../assets/filter.svg';
import RowItem from '../../components/RowItem';
import { useEffect, useState } from 'react';
import ModalAdd from '../../components/ModalAdd';

export default function Home() {

    const [itemList, setItemList] = useState([
        {
            date: '01/09/21',
            weekday: 'Quarta',
            description: 'Venda dos brigadeiros',
            category: 'Pix',
            value: 10000,
            input: true
        },
        {
            date: '02/09/21',
            weekday: 'Quinta',
            description: 'Saiu de casa',
            category: 'Lazer',
            value: 5850,
            input: false
        },
        {
            date: '03/09/21',
            weekday: 'Sexta',
            description: 'Compras',
            category: 'Supermercado',
            value: 10040,
            input: false
        }
    ]);

    const [inputs, setInputs] = useState([]);
    const [inputSum, setInputSum] = useState(0);

    const [outputs, setOutputs] = useState([]);
    const [outputSum, setOutputSum] = useState(0);

    const [activeModal, setActiveModal] = useState(false);

    useEffect(() => {
        const { inputList, outputList } = itemList.reduce((accumulator, item) => {
            if (item.input) {
                accumulator.inputList.push(item);
            } else {
                accumulator.outputList.push(item);
            }
            return accumulator;
        }, { inputList: [], outputList: [] });

        setInputs(inputList);
        setOutputs(outputList);

        const sumInput = inputList.reduce((acc, item) => acc + item.value, 0);
        setInputSum(sumInput);

        const sumOutput = outputList.reduce((acc, item) => acc + item.value, 0);
        setOutputSum(sumOutput);

    }, [itemList]);

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

                        {itemList.map((item) => <RowItem
                            date={item.date}
                            weekday={item.weekday}
                            description={item.description}
                            category={item.category}
                            value={`R$ ${(item.value / 100).toFixed(2)}`}
                            input={item.input}
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
                                <span>{`R$ ${(inputSum / 100).toFixed(2)}`}</span>
                                <span>{`R$ ${(outputSum / 100).toFixed(2)}`}</span>
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

                    {activeModal && <ModalAdd active={setActiveModal} />}
                </div>
            </div>
        </div>
    )
}