// import "../styles/style.css";
// import "../styles/sign.css";
// import { useState } from "react";
// import Store from "../Store";

// export default function Cadastro() {
//     const [login, setLogin] = useState("");
//     const [senha, setSenha] = useState("");
//     const [nome, setNome] = useState("");
//     const [email, setEmail] = useState("");
//     return (
//         <main>
//             <div className="container">
//                 <div className="form-container">
//                     <h2>Cadastro</h2>

//                     <form
//                         onSubmit={(event) => {
//                         event.preventDefault();

//                         const sucesso = Store.cadastro({
//                             login,
//                             senha,
//                             nome,
//                             email
//                         });

//                         if (sucesso) {
//                             setLogin("");
//                             setSenha("");
//                             setNome("");
//                             setEmail("");
//                         }
//                     }}
//                     >
//                         <input
//                             type="text"
//                             className="caixa"
//                             id="login"
//                             placeholder="Crie seu login..."
//                             value={login}
//                             onChange={(e) => setLogin(e.target.value)}
//                             required
//                         />
//                         <br />

//                         <input
//                             type="password"
//                             className="caixa"
//                             id="senha"
//                             placeholder="Crie sua senha..."
//                             value={senha}
//                             onChange={(e) => setSenha(e.target.value)}
//                             required
//                         />
//                         <br />

//                         <input
//                             type="text"
//                             className="caixa"
//                             id="nome"
//                             placeholder="Insira seu nome..."
//                             value={nome}
//                             onChange={(e) => setNome(e.target.value)}
//                             required
//                         />
//                         <br />

//                         <input
//                             type="text"
//                             className="caixa"
//                             id="email"
//                             placeholder="Insira seu email..."
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />

//                         <br />
//                         <br />

//                         <button type="submit" className="primary-button">
//                             Cadastrar
//                         </button>
//                     </form>

//                     <br />
//                 </div>
//             </div>
//         </main>
//     );
// }