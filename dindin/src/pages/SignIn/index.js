import './style.css';

export default function SignIn() {
    return (
        <div className='container-sign-in'>
            <div className='sign-in-left'>
                <h1>Controle suas <span>finanças</span>, sem planilha chata.</h1>
                <p>Organizar as suas finanças nunca foi tão fácil, com o DINDIN, você tem tudo num único lugar e em um clique de distância.</p>
                <button type='button' className='btn-purple'>Cadastre-se</button>
            </div>

            <div className='sign-in-right'>
                <form>
                    <h3>Login</h3>
                    <label>E-mail <input type='email' /></label>
                    <label>Password <input type='password' /></label>
                    <button type='submit' className='btn-purple'>Entrar</button>
                </form>
            </div>
        </div>
    )
}