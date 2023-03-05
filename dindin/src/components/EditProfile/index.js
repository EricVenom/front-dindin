import Close from '../../assets/close.svg';

export default function EditProfile({ active }) {
    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <div className='backdrop'>
            <form
                className='modal'
                onSubmit={handleSubmit}
            >
                <h5>Editar Perfil</h5>
                <img
                    src={Close}
                    alt='closing button'
                    onClick={() => active(false)}
                />

                <label>Nome <input type='text' /></label>
                <label>Email <input type='email' /></label>
                <label>Senha <input type='password' /></label>
                <label>Confirmação de senha <input type='password' /></label>

                <button type='submit'>Confirmar</button>
            </form>
        </div>
    )
}