import { Navigate, Outlet } from "react-router-dom";
import Store from "../classes/Store";

export default function VisitanteRoute() 
{
    const usuario = Store.usuarioAtual();

    if (usuario) {
        return <Navigate to="/perfil" replace />;
    }

    return <Outlet />;
}
