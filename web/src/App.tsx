
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Loja from "./pages/Loja";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import VisitanteRoute from "./components/VisitanteRoute";

export default function App() 
{
    return (
        <BrowserRouter>
            <Navbar />

            <main className="page-content">
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Loja />} />
                        <Route path="/perfil" element={<Perfil />} />
                        {/* Outras páginas que exibem a navbar */}
                    </Route>

                    <Route element={<VisitanteRoute />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/cadastro" element={<Cadastro />} />
                    </Route>
                </Routes>
            </main>
        </BrowserRouter>
    );
}
