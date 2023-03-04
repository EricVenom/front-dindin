import './style.css';
import Close from '../../assets/close.svg';

export default function ModalAdd({ active, title, add }) {

    function handleSubmit(e) {
        e.preventDefault()
        if (add) {
            console.log('adding registry')
        }

        if (!add) {
            console.log('editing registry')
        }
    }

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
                        <input type='radio' value='input' checked='checked' className='input' />
                        <div>Entrada</div>
                    </label>

                    <label>
                        <input type='radio' value='output' className='output' />
                        <div>Saida</div>
                    </label>
                </section>

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

                <button type='submit'>Confirmar</button>
            </form>
        </div>
    )
}