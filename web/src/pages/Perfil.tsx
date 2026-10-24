
import { Link, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { generateAvatar } from "../utils/generateAvatar";
import Store, { type IProdutoCarrinho } from "../classes/Store";
import "../styles/perfil.css";

export default function Perfil() {
    const navigate = useNavigate();
    const usuario = Store.usuarioAtual();

    const avatar = useMemo(
        () => usuario ? generateAvatar(usuario.id, 160) : undefined,
        [usuario?.id]
    );

    const [carrinho, setCarrinho] = useState<IProdutoCarrinho[]>(() => {
        try {
            const dados = localStorage.getItem("carrinho");
            return dados
                ? JSON.parse(dados) as IProdutoCarrinho[]
                : [];
        } catch {
            return [];
        }
    });

    const produtosCarrinho = carrinho.filter(
        item => item.id !== 0 && item.qtd > 0
    );

    const totalCarrinho = produtosCarrinho.reduce(
        (total, item) => total + item.total,
        0
    );

    const quantidadeCarrinho = produtosCarrinho.reduce(
        (total, item) => total + item.qtd,
        0
    );

    function removerProduto(id: number) {
        const atualizado = carrinho.filter(item => item.id !== id);

        setCarrinho(atualizado);
        localStorage.setItem("carrinho", JSON.stringify(atualizado));
    }

    function sair() {
        Store.logout();
        navigate("/login");
    }

    const formatarPreco = (valor: number) =>
        valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

    if (!usuario) {
        return (
            <main className="profile-page">
                <section className="profile-empty">
                    <h2>Você não está conectado</h2>
                    <p>Entre na sua conta para acessar seu perfil.</p>
                    <Link to="/login" className="profile-button">
                        Fazer login
                    </Link>
                </section>
            </main>
        );
    }

    return (
        <main className="profile-page">
            <header className="profile-heading">
                <div>
                    <span className="profile-eyebrow">SUA CONTA</span>
                    <h1>Meu perfil</h1>
                    <p>Gerencie suas informações e acompanhe suas compras.</p>
                </div>

                <Link to="/" className="profile-back">
                    ← Voltar à loja
                </Link>
            </header>

            <section className="profile-card">
                <div className="profile-cover">
                    <span>CLIENTE</span>
                </div>

                <div className="profile-main">
                    <img
                        src={avatar}
                        alt="Avatar do perfil"
                        className="profile-avatar"
                    />

                    <div className="profile-identity">
                        <h2>{usuario.nome}</h2>
                        <p>@{usuario.login}</p>
                    </div>

                    {/* <span className="profile-status">
                        <span className="status-dot" />
                        Conta ativa
                    </span> */}
                </div>

                <div className="profile-details">
                    <div className="profile-detail">
                        <span className="detail-label">IDENTIFICADOR</span>
                        <strong>#{usuario.id}</strong>
                    </div>

                    <div className="profile-detail">
                        <span className="detail-label">E-MAIL</span>
                        <strong>{usuario.email}</strong>
                    </div>

                    <div className="profile-detail">
                        <span className="detail-label">TIPO DE CONTA</span>
                        <strong>Cliente</strong>
                    </div>
                </div>
            </section>

            <section className="profile-section">
                <div className="section-heading">
                    <div>
                        <span className="profile-eyebrow">SUAS COMPRAS</span>
                        <h2>Meu carrinho</h2>
                    </div>

                    <span className="cart-count">
                        {quantidadeCarrinho} {quantidadeCarrinho === 1 ? "item" : "itens"}
                    </span>
                </div>

                {produtosCarrinho.length === 0 ? (
                    <div className="cart-empty">
                        <span className="cart-empty-icon">🛒</span>
                        <h3>Seu carrinho está vazio</h3>
                        <p>Explore a loja e adicione produtos para vê-los aqui.</p>

                        <Link to="/" className="profile-button">
                            Explorar produtos
                        </Link>
                    </div>
                ) : (
                    <div className="cart-container">
                        <div className="cart-products">
                            {produtosCarrinho.map(item => (
                                <div className="cart-product" key={item.id}>
                                    <div className="cart-product-info">
                                        <strong>{item.produto}</strong>
                                        <span>
                                            {item.qtd} × {formatarPreco(item.valor)}
                                        </span>
                                    </div>

                                    <strong className="cart-product-subtotal">
                                        {formatarPreco(item.total)}
                                    </strong>

                                    <button
                                        type="button"
                                        className="cart-remove"
                                        onClick={() => removerProduto(item.id)}
                                        aria-label={`Remover ${item.produto}`}
                                    >
                                        Remover
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="cart-footer">
                            <div>
                                <span>Total estimado</span>
                                <strong>{formatarPreco(totalCarrinho)}</strong>
                            </div>

                            <Link to="/" className="primary-button">
                                Continuar comprando
                            </Link>
                        </div>
                    </div>
                )}
            </section>

            <section className="profile-section">
                <div className="section-heading">
                    <div>
                        <span className="profile-eyebrow">VISÃO GERAL</span>
                        <h2>Minha conta</h2>
                    </div>
                </div>

                <div className="profile-actions">
                    <Link to="/" className="profile-action">
                        <span className="action-icon">⌕</span>
                        <div>
                            <strong>Explorar produtos</strong>
                            <p>Encontre algo que você goste.</p>
                        </div>
                        <span className="action-arrow">↗</span>
                    </Link>

                    {/* melhor deixar fora pra não dar palco pra maluco */}
                    {/* <div className="profile-action profile-action-disabled">
                        <span className="action-icon">▤</span>
                        <div>
                            <strong>Meus pedidos</strong>
                            <p>O histórico de pedidos poderá aparecer aqui.</p>
                        </div>
                        <span className="action-tag">EM BREVE</span>
                    </div> */}
                </div>
            </section>

            <section className="profile-logout">
                <div>
                    <h3>Quer sair da sua conta?</h3>
                    <p>Você poderá entrar novamente quando quiser.</p>
                </div>

                <button
                    type="button"
                    onClick={sair}
                    className="logout-button"
                >
                    Sair da conta
                </button>
            </section>
        </main>
    );
}
