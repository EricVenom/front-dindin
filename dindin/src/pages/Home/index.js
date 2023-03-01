import './style.css';
import Filter from '../../assets/filter.svg';
import RowItem from '../../components/RowItem';
import { useState } from 'react';

export default function Home() {

    const [itemList, setItemList] = useState([
        {
            date: '01/09/21',
            weekday: 'Quarta',
            description: 'Venda dos brigadeiros',
            category: 'Pix',
            value: 10000,
            entry: true
        },
        {
            date: '02/09/21',
            weekday: 'Quinta',
            description: 'Saiu de casa',
            category: 'Lazer',
            value: 5850,
            entry: false
        },
        {
            date: '02/09/21',
            weekday: 'Quinta',
            description: 'Saiu de casa',
            category: 'Lazer',
            value: 5850,
            entry: false
        }
    ]);

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
                            entry={item.entry}
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
                                <span>0</span>
                                <span>0</span>
                                <span>0</span>
                            </div>

                        </div>

                    </div>

                    <button type='button'>Adicionar Registro</button>

                </div>
            </div>
        </div>
    )
}