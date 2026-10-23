
import { Link } from "react-router-dom";

export default function Navbar()
{
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/loja">Loja</Link>
            <Link to="/cadastro">Cadastro</Link>
            <Link to="/login">Login</Link>
            <hr />
        </nav>
    );
}
