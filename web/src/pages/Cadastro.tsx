import { useState, type FormEvent } from "react";
import Store from "../Store";
import "../styles/style.css";
import "../styles/sign.css";
import { Link } from "react-router-dom";

export default function Cadastro() {
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    function cadastrar(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const sucesso = Store.cadastro({
            login,
            senha,
            nome,
            email
        });

        if (sucesso) {
            setLogin("");
            setSenha("");
            setNome("");
            setEmail("");
        }
    }

    return (
        <main>
            <div className="container">
                <div className="form-container">
                    <h2>Cadastro</h2>

                    <form onSubmit={cadastrar}>
                        <input
                            type="text"
                            className="caixa"
                            placeholder="Crie seu login..."
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            required
                        />
                        <br />

                        <input
                            type="password"
                            className="caixa"
                            placeholder="Crie sua senha..."
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                        <br />

                        <input
                            type="text"
                            className="caixa"
                            placeholder="Insira seu nome..."
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                        <br />

                        <input
                            type="email"
                            className="caixa"
                            placeholder="Insira seu e-mail..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <br />
                        <br />

                        <button type="submit" className="primary-button">
                            Cadastrar
                        </button>
                    </form>

                    <br />
                    <Link to="/Login">Login</Link>
                </div>
            </div>
        </main>
    );
}