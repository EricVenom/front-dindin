import './style.css';

export default function SignUp() {
    return (
        <div className='container-sign-up'>
            <form>
                <h2>Cadastre-se</h2>
                <label>Nome <input type='text' /></label>
                <label>E-mail <input type='email' /></label>
                <label>Senha <input type='password' /></label>
                <label>Confirmação de senha <input type='password' /></label>
                <button type='submit'>Cadastrar</button>
            </form>
        </div>
    )
}