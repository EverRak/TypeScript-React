export interface IForm {
    id: number;
    login: string;
    senha: string;
    nome: string;
    email: string;
}

export interface IProdutoCarrinho {
    id: number;
    produto: string;
    qtd: number;
    valor: number;
    total: number;
    pg: string;
}

export default class Store {
    private static readonly CHAVE_BANCO = "banco";
    private static readonly CHAVE_CARRINHO = "carrinho";

    constructor() {
        Store.dados();
    }

    // Inicializa o banco somente se ele ainda não existir.
    static dados(): void {
        if (localStorage.getItem(Store.CHAVE_BANCO) !== null) {
            return;
        }

        const usuarios: IForm[] = [
            {
                id: 1,
                login: "john",
                senha: "1234",
                nome: "John",
                email: "john@gmail.com"
            },
            {
                id: 2,
                login: "ringo",
                senha: "12345",
                nome: "Ringo",
                email: "ringo@gmail.com"
            },
            {
                id: 3,
                login: "paul",
                senha: "1234@",
                nome: "Paul",
                email: "paul@gmail.com"
            }
        ];

        localStorage.setItem(
            Store.CHAVE_BANCO,
            JSON.stringify(usuarios)
        );
    }

    // Retorna os usuários salvos.
    static listarUsuarios(): IForm[] {
        Store.dados();

        const dados = localStorage.getItem(Store.CHAVE_BANCO);
        return JSON.parse(dados!) as IForm[];
    }

    // Cadastra um novo usuário.
    static cadastro(usuario: Omit<IForm, "id">): boolean {
        const usuarios = Store.listarUsuarios();

        if (
            !usuario.login.trim() ||
            !usuario.senha ||
            !usuario.nome.trim() ||
            !usuario.email.trim()
        ) {
            alert("Preencha todos os campos.");
            return false;
        }

        const loginExiste = usuarios.some(
            (u) => u.login.toLowerCase() === usuario.login.trim().toLowerCase()
        );

        if (loginExiste) {
            alert("Esse login já está cadastrado.");
            return false;
        }

        const novoUsuario: IForm = {
            id: Date.now(),
            login: usuario.login.trim(),
            senha: usuario.senha,
            nome: usuario.nome.trim(),
            email: usuario.email.trim()
        };

        usuarios.push(novoUsuario);

        localStorage.setItem(
            Store.CHAVE_BANCO,
            JSON.stringify(usuarios)
        );

        alert("Cadastro realizado com sucesso!");
        return true;
    }

    // Verifica as credenciais e inicia a sessão.
    static logar(login: string, senha: string): boolean {
        const usuarios = Store.listarUsuarios();

        const usuario = usuarios.find(
            (u) => u.login === login.trim() && u.senha === senha
        );

        if (!usuario) {
            alert("Login ou senha incorretos.");
            return false;
        }

        localStorage.setItem("usuarioLogado", JSON.stringify({
            id: usuario.id,
            login: usuario.login,
            nome: usuario.nome,
            email: usuario.email
        }));

        Store.carrinho();

        alert("Você está logado! " + usuario.nome);
        return true;
    }

    // Cria um carrinho vazio para a sessão atual.
    static carrinho(): void {
        const carrinho: IProdutoCarrinho[] = [
            {
                id: 0,
                produto: "",
                qtd: 0,
                valor: 0,
                total: 0,
                pg: ""
            }
        ];

        localStorage.setItem(
            Store.CHAVE_CARRINHO,
            JSON.stringify(carrinho)
        );
    }

    // Encerra a sessão.
    static logout(): void {
        localStorage.removeItem("usuarioLogado");
    }

    // Consulta o usuário atualmente logado.
    static usuarioAtual(): Omit<IForm, "senha"> | null {
        const dados = localStorage.getItem("usuarioLogado");

        if (!dados) {
            return null;
        }

        return JSON.parse(dados) as Omit<IForm, "senha">;
    }
}