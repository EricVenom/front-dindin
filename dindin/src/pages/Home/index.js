import './style.css';
import Filter from '../../assets/filter.svg';
import Delete from '../../assets/delete.svg';
import Edit from '../../assets/edit.svg';

export default function Home() {
    return (
        <div className='container-home'>
            <div className='filter-container'>
                <button type='button' className='filter'><img src={Filter} alt='filter button' /> Filtrar</button>
            </div>

            <div className='container-divider'>
                <div className='home-left'>

                    <div className='table-container'>

                        <div className='table-row header'>
                            <span className='row-item'>Data</span>
                            <span className='row-item'>Dia da semana</span>
                            <span className='row-item'>Descrição</span>
                            <span className='row-item'>Categoria</span>
                            <span className='row-item'>Valor</span>
                            <div className='row-item'></div>
                        </div>

                        <div className='table-row'>
                            <span className='row-item'>Data</span>
                            <span className='row-item'>Dia da semana</span>
                            <span className='row-item'>Descrição</span>
                            <span className='row-item'>Categoria</span>
                            <span className='row-item'>Valor</span>
                            <div className='row-item icons'>
                                <img src={Edit} alt='edit entry icon' />
                                <img src={Delete} alt='delete icon' />
                            </div>
                        </div>

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