// import "../styles/style.css";
// import "../styles/sign.css";
// import { useState, type FormEvent } from "react";
// import Store from "../Store";

// export default function Login() {
//     const [login, setLogin] = useState("");
//     const [senha, setSenha] = useState("");

//     function entrar(event: FormEvent<HTMLFormElement>) {
//         event.preventDefault();

//         const sucesso = Store.logar(login, senha);

//         if (sucesso) {
//             setLogin("");
//             setSenha("");
//         }
//     }

//     return (
//         <main>
//             <div className="container">
//                 <div className="form-container">
//                     <h2>Login</h2>

//                     <form onSubmit={entrar}>
//                         <input
//                             type="text"
//                             className="caixa"
//                             id="login"
//                             placeholder="Insira seu login..."
//                             value={login}
//                             onChange={(e) => setLogin(e.target.value)}
//                             required
//                         />
//                         <br />

//                         <input
//                             type="password"
//                             className="caixa"
//                             id="senha"
//                             placeholder="Insira sua senha..."
//                             value={senha}
//                             onChange={(e) => setSenha(e.target.value)}
//                             required
//                         />

//                         <br />
//                         <br />

//                         <button type="submit" className="primary-button">
//                             Login
//                         </button>
//                     </form>

//                     <br />
//                     <a href="/cadastro">Cadastro</a>
//                 </div>
//             </div>
//         </main>
//     );
// }