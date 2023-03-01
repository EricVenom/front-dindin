import './style.css';
import Delete from '../../assets/delete.svg';
import Edit from '../../assets/edit.svg';

export default function RowItem({ date, weekday, description, category, value, input }) {
    return (
        <div className='table-row'>
            <span className='row-item date'>{date}</span>
            <span className='row-item'>{weekday}</span>
            <span className='row-item'>{description}</span>
            <span className='row-item'>{category}</span>
            <span className={`row-item ${input ? 'input' : 'output'}`}>{value}</span>
            <div className='row-item icons'>
                <img src={Edit} alt='edit input icon' />
                <img src={Delete} alt='delete icon' />
            </div>
        </div>
    )
}