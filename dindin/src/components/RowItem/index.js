import './style.css';
import Delete from '../../assets/delete.svg';
import Edit from '../../assets/edit.svg';
import { useState } from 'react';

export default function RowItem({ id, date, weekday, description, category, value, input, del, active }) {

    const [deleteRow, setDeleteRow] = useState(false);

    return (
        <div className='table-row'>
            <span className='row-item date'>{date}</span>
            <span className='row-item'>{weekday}</span>
            <span className='row-item'>{description}</span>
            <span className='row-item'>{category}</span>
            <span className={`row-item ${input ? 'input' : 'output'}`}>{value}</span>

            <div className='row-item icons'>
                <img
                    src={Edit}
                    alt='edit input icon'
                    onClick={() => active(true)}
                />

                <img
                    src={Delete}
                    alt='delete icon'
                    onClick={() => setDeleteRow(true)}
                />

                {deleteRow && <div className='modal-confirm'>
                    <span>Apagar item?</span>
                    <div>
                        <button
                            type='button'
                            style={{ backgroundColor: '#3A9FF1' }}
                            onClick={(e) => del(id, setDeleteRow(false))}
                        >
                            Sim
                        </button>

                        <button
                            type='button'
                            style={{ backgroundColor: '#FF576B' }}
                            onClick={() => setDeleteRow(false)}
                        >
                            Não
                        </button>
                    </div>
                </div>}
            </div>
        </div>
    )
}