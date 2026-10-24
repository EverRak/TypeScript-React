
import { useState, useCallback } from "react";
import Store from "../classes/Store";
import Toast from "../components/Toast";
import { produtos } from "../data/produtos";
import "../styles/store.css";

export default function Loja() {
    const [toastVisivel, setToastVisivel] = useState(false);
    const [mensagemToast, setMensagemToast] = useState("");
    const [produtoAdicionado, setProdutoAdicionado] =
        useState<number | null>(null);

    const fecharToast = useCallback(() => {
        setToastVisivel(false);
    }, []);

    function adicionarProduto(produto: typeof produtos[number]) {
        Store.adicionarAoCarrinho({
            id: produto.id,
            produto: produto.nome,
            valor: produto.preco
        });

        setMensagemToast(produto.nome);
        setToastVisivel(true);
        setProdutoAdicionado(produto.id);
    }

    return (
        <main className="shop-page">
            <section className="shop-hero">
                <div className="shop-hero-content">
                    <span className="shop-eyebrow">
                        SUA PRÓXIMA DESCOBERTA
                    </span>

                    <h1>
                        Menos do mesmo.
                        <br />
                        <span>Mais do que você gosta.</span>
                    </h1>

                    <p>
                        Produtos escolhidos para quem procura algo diferente.
                        Explore a coleção e encontre seu próximo favorito.
                    </p>

                    <button
                        className="shop-hero-button"
                        onClick={() =>
                            document.getElementById("catalogo")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        Explorar produtos
                        <span aria-hidden="true">↘</span>
                    </button>
                </div>

                <div className="shop-hero-art" aria-hidden="true">
                    <div className="shop-art-circle" />
                    <div className="shop-art-label">SELEÇÃO<br />DA LOJA</div>
                    <span className="shop-art-star">✳</span>
                    <span className="shop-art-number">01</span>
                </div>

                <div className="shop-hero-bottom">
                    <span>DESCOBRIR / ESCOLHER / APROVEITAR</span>
                    <span>FEITO PARA VOCÊ <span className="shop-dot">●</span></span>
                </div>
            </section>

            <section className="shop-catalog" id="catalogo">
                <div className="shop-section-heading">
                    <div>
                        <span className="shop-eyebrow">
                            NOSSA COLEÇÃO
                        </span>
                        <h2>Explore a loja<span>.</span></h2>
                        <p>Encontre algo que combine com você.</p>
                    </div>

                    <div className="shop-product-count">
                        <strong>{String(produtos.length).padStart(2, "0")}</strong>
                        <span>PRODUTOS<br />DISPONÍVEIS</span>
                    </div>
                </div>

                <div className="shop-divider" />

                <div className="shop-grid">
                    {produtos.map((produto, index) => (
                        <article
                            className="shop-card"
                            key={produto.id}
                            style={{ animationDelay: `${Math.min(index, 8) * 45}ms` }}
                        >
                            <div className="shop-image">
                                <img
                                    src={produto.imagem}
                                    alt={produto.nome}
                                    loading={index > 3 ? "lazy" : "eager"}
                                />

                                <span className="shop-index">
                                    #{String(index + 1).padStart(2, "0")}
                                </span>

                                {produto.promocao && (
                                    <span className="shop-badge">
                                        {produto.promocao}
                                    </span>
                                )}

                                <button
                                    className={`cart-btn ${
                                        produtoAdicionado === produto.id
                                            ? "cart-btn-added"
                                            : ""
                                    }`}
                                    aria-label={`Adicionar ${produto.nome} ao carrinho`}
                                    onClick={() => adicionarProduto(produto)}
                                >
                                    <span className="cart-icon" aria-hidden="true">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 2-2h3a2 2 0 1 0 4 0 2 2 0 0 0-2-2H4.5l-.2-1h8.7a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1z" />
                                        </svg>
                                    </span>
                                    <span className="check-icon" aria-hidden="true">
                                        ✓
                                    </span>
                                </button>
                            </div>

                            <div className="shop-card-info">
                                <p className="shop-brand">{produto.marca}</p>
                                <h3>{produto.nome}</h3>

                                <div className="shop-card-footer">
                                    <span className="shop-price">
                                        {produto.preco.toLocaleString("pt-BR", {
                                            style: "currency",
                                            currency: "BRL"
                                        })}
                                    </span>

                                    <span className="shop-card-arrow" aria-hidden="true">
                                        ↗
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="shop-end-note">
                    <span>FIM DA COLEÇÃO</span>
                    <span>VOCÊ VIU TUDO</span>
                </div>
            </section>

            <Toast
                mensagem={mensagemToast}
                visivel={toastVisivel}
                aoFechar={fecharToast}
            />
        </main>
    );
}
