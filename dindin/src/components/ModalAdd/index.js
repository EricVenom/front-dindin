import './style.css';
import Close from '../../assets/close.svg';

export default function ModalAdd({ active }) {

    return (
        <div className='backdrop'>
            <form className='modal'>
                <h5>Adicionar Registro</h5>
                <img
                    src={Close}
                    alt='closing button'
                    onClick={() => active(false)}
                />

                <label>Valor <input type='number' /></label>

                <label>Categoria
                    <select>
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </label>

                <label>Data <input type='date' /></label>

                <label>Descrição <input type='text' /></label>

                <button type='button'>Confirmar</button>
            </form>
        </div>
    )
}