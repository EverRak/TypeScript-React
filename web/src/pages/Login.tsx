import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Store from "../classes/Store";
import "../styles/style.css";
import "../styles/sign.css";
import { Link } from "react-router-dom";

export default function Login() {
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    function entrar(event: FormEvent<HTMLFormElement>) 
    {
        event.preventDefault();

        const sucesso = Store.logar(login, senha);

        if (sucesso) 
        {
            // setSenha("");
            navigate("/perfil", { replace: true });
        }
    }

    return (
        <main>
            <div className="container">
                <div className="form-container">
                    <h2>Login</h2>

                    <form onSubmit={entrar}>
                        <input
                            type="text"
                            className="caixa"
                            placeholder="Insira seu login..."
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            required
                        />

                        <input
                            type="password"
                            className="caixa"
                            placeholder="Insira sua senha..."
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />

                        <button type="submit" className="primary-button">
                            Login
                        </button>
                    </form>

                    <Link to="/cadastro">Cadastro</Link>
                </div>
            </div>
        </main>
    );
}