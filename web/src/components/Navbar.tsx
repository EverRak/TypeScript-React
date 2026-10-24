
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { generateAvatar } from "../utils/generateAvatar";
import Store, { type IProdutoCarrinho } from "../classes/Store";

export default function Navbar() 
{
    const usuarioLogado = localStorage.getItem("usuarioLogado")!;

    const usuario = Store.usuarioAtual()!;

    const avatar = useMemo(
        () => usuario ? generateAvatar(usuario.id, 160) : undefined,
        [usuario?.id]
    );
    // const avatar = usuarioLogado
    // ? generateAvatar(usuarioLogado)
    // : undefined;

    return (
        <nav>
            <div className="nav-left">
                <Link to="/" className="nav-brand">
                    Loja
                </Link>
            </div>

            <div className="nav-right">
                {usuarioLogado ? (
                    <Link to="/perfil">
                        <div className="profile-part">
                            <p>{usuario.nome}</p>
                            <img
                                src={avatar}
                                alt="Perfil"
                                className="profile-picture"
                            />
                        </div>
                    </Link>
                ) : (
                    <>
                        <Link to="/cadastro" className="secondary-button">
                            Cadastro
                        </Link>

                        <Link to="/login" className="primary-button">
                            Login
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
}
